module CompositeTypes

export iscomposite,
    components,
    ncomponents,
    component,
    setcomponent!


"""
    iscomposite(x)

Is `x` a composite object?

If an object is composite, then its components can be queried using the
`components` function.
"""
iscomposite(x) = length(components(x)) > 0

"Return the components of the composite object `x`."
components(x) = ()

"Return the number of components of composite object `x`."
ncomponents(x) = length(components(x))

"""
    component(x, I...)

Return the component of `x` that corresponds to the given index.
"""
component(x, I...) = getindex(components(x), I...)

"""
    setcomponent!(x, v, I...)

Set the component of `x` that corresponds to the given index to `v`.
"""
setcomponent!(x, v, I...) = setindex!(components(x), v, I...)
# the line above is a best-effort: it will not always work that way

include("Indexing.jl")
include("Display.jl")

end
