module Display

# The methodology of these routines is based on an initial implementation by
# @roelmatthysen for the display of complicated structures in the package
# BasisFunctions.jl

export composite_show,
    composite_show_compact,
    composite_displaystencil

using ..CompositeTypes

typename(object) = string(typeof(object))

"What is the standard display symbol of the object?"
displaysymbol(object) = typename(object)[1]
displaysymbol(object::Function) = 'F'

# some common types
Display.displaysymbol(A::AbstractArray) = 'A'
Display.displaysymbol(A::AbstractVector) = 'v'
Display.displaysymbol(x::Number) = 'c'


"Representation of a symbol."
struct Symbol{S}
    sym ::  S
end

displaysymbol(s::Symbol) = s.sym

Comma() = Symbol(',')
Times() = Symbol('×')
Plus() = Symbol('+')


"""
For composite objects, what is their combination symbol?

By default objects are comma separated, of the form `F(a, b, c)` where `F` is
the constructor function. But they could also have the form `a + b + c`. In the
former case the combination symbol is a comma, in the latter case it is `+`.
"""
combinationsymbol(object) = Comma()

is_comma_separated(object) = combinationsymbol(object) == Comma()

# For the combination of composite objects, what is the infix string?
# It is ", " for comma-separated objects, but " + " with an extra space for other symbols.
infix_string(object) = _infix_string(displaysymbol(combinationsymbol(object)))
_infix_string(s) = s == ',' ? ", " : " " * s * " "

maximum_depth(object) = 3
maximum_replength(object) = 30
maximum_textlength(object) = 60
maximum_children(object) = 5

istext(el) = false
istext(el::Char) = true
istext(el::String) = true

objectref(a) = istext(a) ? TextObject(a) : a

function concatenate_components(object; reversecomponents = false)
    list = components(object)
    if reversecomponents
        list = reverse(list)
    end
    concatenate(list, infix_string(object), maximum_children(object))
end

function concatenate(list, sep, maxchildren = 5)
    A = Any[]
    push!(A, objectref(list[1]))
    if length(list) > 1
        if length(list) <= maxchildren
            for i in 2:length(list)
                push!(A, sep)
                push!(A, objectref(list[i]))
            end
        else
            for i in 2:3
                push!(A, sep)
                push!(A, objectref(list[i]))
            end
            push!(A, sep)
            push!(A, "...")
            push!(A, sep)
            push!(A, objectref(list[end]))
        end
    end
    A
end

"Does the object have a stencil?"
hasstencil(object) = length(displaystencil(object)) > 0

"""
Return the stencil of the object as an array.

The stencil of an object determines how it is displayed. The array may
contain characters or strings, and references to other objects. The concatenation
of all elements, with the objects replaced by their string representation, forms
the representation of the given object.

Example: say an object `obj` consists of two parts, `obj[1]` and `obj[2]`,
combined by a function commonly noted as `I`. Then the stencil may be:
`displaystencil(obj) = ["I(", obj[1], ", ", obj[2], ')']`.

In the string representation of the object, both `obj[1]` and `obj[2]` are
replaced by a string, or by a symbol that has its own string representation
separately.
"""
displaystencil(object) = []

constructorname(object) = typename(object)

"""
Default display stencil for composite objects.

The default leads to the representation `typename(component1, components2, ...)`,
unless the `combinationsymbol` of the object is defined differently. In the
latter case, if the combination symbol is '+' the stencil leads to
`component1 + component2 + ...`.
"""
function composite_displaystencil(object; kwargs...)
    if is_comma_separated(object)
        A1 = [constructorname(object), '(']
        A2 = concatenate_components(object; kwargs...)
        A3 = [')']
        vcat(A1, A2, A3)
    else
        concatenate_components(object; kwargs...)
    end
end

"Objects in a display stencil can be wrapped in certain circumstances."
abstract type WrappedObject end

hasstencil(object::WrappedObject) = hasstencil(object.object)
displaystencil(object::WrappedObject) = displaystencil(object.object)
compact_repr(object::WrappedObject) = compact_repr(object.object)

"""
Display stencils treat text differently from other objects. If one of the
components of an object is text, it can be wrapped in a `TextObject` in order
to treat it as an object, rather than as text, in a stencil.
"""
struct TextObject <: WrappedObject
    object
end

"""
Wrap an object along with a symbol for it.

This can be useful in displaystencils of the form `F(a,b)` when `F` itself has
a stencil. It is usually best to represent `F` by a symbol, and to list the
string representation of `F` separately. In such a case the stencil of the object
`O` represented by `F(a,b)` would be `[SymbolObject(F), '(', a, b, ')']`.

In other words, `SymbolObject` forces an object to be represented by a symbol in
a stencil.
"""
struct SymbolObject{S} <: WrappedObject
    object
    sym     ::  S
end
SymbolObject(object) = SymbolObject(object, displaysymbol(object))
displaysymbol(object::SymbolObject) = object.sym


"Return all objects appearing in the display stencil."
stencil_objects(object) = objects(displaystencil(object))
objects(A::Vector) = unique([el for el in A if !istext(el)])

"""
The conventional compact representation of an object.

This representation is based on `show(io, d)`. If an object has overriden
that method, it can also override this one to avoid a loop.
"""
compact_repr(object) = repr(object)

"""
Recursively compute all stencils of the objects linked to by the given object,
up to a maximum depth of recursion. There can be self-referential objects
in the stencils.

The result is returned as a dictionary that maps objects to stencils.
"""
function recursive_stencils(object, depth = 1, maxdepth = maximum_depth(object),
                                stencils = Dict{Any,Any}())
    if depth > maxdepth
        if object ∉ keys(stencils)
            stencils[object] = [compact_repr(object)]
        end
        return stencils
    end
    if object ∉ keys(stencils)
        if hasstencil(object)
            A = displaystencil(object)
            stencils[object] = A
            for child in objects(A)
                recursive_stencils(child, depth+1, maxdepth, stencils)
            end
        else
            stencils[object] = [compact_repr(object)]
        end
    end
    stencils
end

"If an object in the stencil is complicated, should we put parentheses around it?"
function stencil_parentheses(object)
    if hasstencil(object)
        iscomposite(object) && !is_comma_separated(object)
    else
        true
    end
end

"If this object appears in a more complicated expression, does it require parentheses?"
function object_parentheses(object)
    if iscomposite(object)
        !is_comma_separated(object)
    else
        false
    end
end

"Compute representations of all stencils linked to by the object."
function recursive_stencil_reps(object, stencils, maxreplength, reps = Dict{Any,Any}(), subs = Dict{Any,Any}())
    if object ∈ keys(reps)
        return reps, subs
    end
    if object ∉ keys(stencils)
        # the object may have been skipped due to recursion depth
        reps[object] = compact_repr(object)
        return reps, subs
    end
    A = stencils[object]
    rep = ""
    for element in A
        if istext(element)
            rep *= element
        else
            recursive_stencil_reps(element, stencils, maxreplength, reps, subs)
            rep *= reps[element]
        end
    end
    if (length(rep) > maxreplength) || object isa SymbolObject
        sym = displaysymbol(object)
        reps[object] = string(sym)
        subs[object] = sym
    else
        reps[object] = rep
    end
    reps, subs
end

# Different operators with the same symbol get added subscripts
function subscript(i::Integer)
    @assert i >= 0
    if i < 10
        join('₀'+d for d in reverse(digits(i)))
    else
        subscript(div(i,10)) * subscript(mod(i,10))
    end
end

"Assign symbols to all objects in the list, adding subscripts if necessary."
function allocate_symbols(subs)
    invsubs = Dict{Any,Any}()
    for k in keys(subs)
        if subs[k] in keys(invsubs)
            push!(invsubs[subs[k]],k)
        else
            invsubs[subs[k]] = Any[k]
        end
    end
    syms = Dict{Any,Any}()
    for (sym,objects) in invsubs
        if length(objects) == 1
            syms[objects[1]] = sym
        else
            for i in 1:length(objects)
                syms[objects[i]] = sym * subscript(i)
            end
        end
    end
    syms
end

function substitute_symbols(object, stencils, syms, subs, reps = Dict{Any,Any}())
    if object in keys(reps)
        return reps
    end
    if object ∉ keys(stencils)
        reps[object] = compact_repr(object)
        return reps
    end
    A = stencils[object]
    rep = ""
    for element in A
        if istext(element)
            rep *= element
        elseif element in keys(subs)
            substitute_symbols(element, stencils, syms, subs, reps)
            rep *= syms[element]
        else
            substitute_symbols(element, stencils, syms, subs, reps)
            if object_parentheses(element) && stencil_parentheses(object)
                rep = rep * '(' * reps[element] * ')'
            else
                rep *= reps[element]
            end
        end
    end
    reps[object] = rep
    reps
end


"""
Display multi-line structured information about a composite object,
using the stencil of the object and, recursively, the stencils of any objects
therein.
"""
function composite_show(io::IO, ::MIME"text/plain", object)
    # get(io, :compact) -> this is true when a compact representation is requested,
    #  typically within an array or some other container object. This is not true
    #  for vectors (see https://github.com/JuliaLang/julia/pull/22981)
    # haskey(io, :typeinfo) -> this is true when type information has already
    #  been shown for an array. This is also true for vectors.
    if get(io, :compact, false) || haskey(io, :typeinfo)
        show(io, object)
    else
        composite_show(io, object)
    end
end

function composite_show(io::IO, object)
    stencils = recursive_stencils(object)
    reps, subs = recursive_stencil_reps(object, stencils, maximum_replength(object))
    if object in keys(subs)
        pop!(subs, object)
    end
    syms = allocate_symbols(subs)
    finalreps = substitute_symbols(object, stencils, syms, subs)

    print(io, finalreps[object])
    n = length(keys(syms))
    if n > 0
        print(io, '\n')
        print(io, '\n')
        i = 0
        for (object,sym) in syms
            print(io, sym, " = ", finalreps[object])
            i += 1
            if i < n
                print(io, '\n')
            end
        end
    end
    nothing
end

"""
Display structured information about a composite object using its stencil,
but not recursively.
"""
function composite_show_compact(io::IO, object)
    @assert hasstencil(object)
    A = displaystencil(object)
    for element in A
        if istext(element)
            print(io, element)
        else
            if object_parentheses(element) && stencil_parentheses(object)
                print(io, '(', compact_repr(element), ')')
            else
                print(io, compact_repr(element))
            end
        end
    end
end

end # module
