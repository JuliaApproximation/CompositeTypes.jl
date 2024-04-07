var documenterSearchIndex = {"docs":
[{"location":"api/#Public-API-Reference","page":"Public API Reference","title":"Public API Reference","text":"","category":"section"},{"location":"api/","page":"Public API Reference","title":"Public API Reference","text":"This is an exhaustive list of all exported constants, types and functions in CompositeTypes.jl.","category":"page"},{"location":"api/#Constants","page":"Public API Reference","title":"Constants","text":"","category":"section"},{"location":"api/","page":"Public API Reference","title":"Public API Reference","text":"Modules = [CompositeTypes]\nOrder   = [:constant]\nPublic  = true\nPrivate = false","category":"page"},{"location":"api/#Functions","page":"Public API Reference","title":"Functions","text":"","category":"section"},{"location":"api/","page":"Public API Reference","title":"Public API Reference","text":"Modules = [CompositeTypes]\nOrder   = [:function]\nPublic  = true\nPrivate = false","category":"page"},{"location":"api/#CompositeTypes.component-Tuple{Any, Vararg{Any, N} where N}","page":"Public API Reference","title":"CompositeTypes.component","text":"component(x, I...)\n\nThe component of x that corresponds to the given index.\n\n\n\n\n\n","category":"method"},{"location":"api/#CompositeTypes.components-Tuple{Any}","page":"Public API Reference","title":"CompositeTypes.components","text":"components(x)\n\nThe components of the composite object x.\n\n\n\n\n\n","category":"method"},{"location":"api/#CompositeTypes.iscomposite-Tuple{Any}","page":"Public API Reference","title":"CompositeTypes.iscomposite","text":"iscomposite(x)\n\nIs x a composite object?\n\nIf an object is composite, then its components can be queried using the components function.\n\n\n\n\n\n","category":"method"},{"location":"api/#CompositeTypes.ncomponents-Tuple{Any}","page":"Public API Reference","title":"CompositeTypes.ncomponents","text":"ncomponents(x)\n\nThe number of components of composite object x.\n\n\n\n\n\n","category":"method"},{"location":"api/#CompositeTypes.setcomponent!-Tuple{Any, Any, Vararg{Any, N} where N}","page":"Public API Reference","title":"CompositeTypes.setcomponent!","text":"setcomponent!(x, v, I...)\n\nSet the component of x that corresponds to the given index to v.\n\n\n\n\n\n","category":"method"},{"location":"api/#Types","page":"Public API Reference","title":"Types","text":"","category":"section"},{"location":"api/","page":"Public API Reference","title":"Public API Reference","text":"Modules = [CompositeTypes]\nOrder   = [:type]\nPublic  = true\nPrivate = false","category":"page"},{"location":"display/#Display","page":"Display submodule","title":"Display","text":"","category":"section"},{"location":"display/#Public-API-Reference","page":"Display submodule","title":"Public API Reference","text":"","category":"section"},{"location":"display/","page":"Display submodule","title":"Display submodule","text":"This is an exhaustive list of all exported constants, types and functions in CompositeTypes.Display.","category":"page"},{"location":"display/#Constants","page":"Display submodule","title":"Constants","text":"","category":"section"},{"location":"display/","page":"Display submodule","title":"Display submodule","text":"Modules = [Display]\nOrder   = [:constant]\nPublic  = true\nPrivate = false","category":"page"},{"location":"display/#Functions","page":"Display submodule","title":"Functions","text":"","category":"section"},{"location":"display/","page":"Display submodule","title":"Display submodule","text":"Modules = [Display]\nOrder   = [:function]\nPublic  = true\nPrivate = false","category":"page"},{"location":"display/#CompositeTypes.Display.composite_displaystencil-Tuple{Any}","page":"Display submodule","title":"CompositeTypes.Display.composite_displaystencil","text":"composite_displaystencil(object; kwargs...)\n\nDefault display stencil for composite objects.\n\nThe default leads to the representation typename(component1, components2, ...), unless the combinationsymbol of the object is defined differently. In the latter case, if the combination symbol is '+' the stencil leads to component1 + component2 + ....\n\n\n\n\n\n","category":"method"},{"location":"display/#CompositeTypes.Display.composite_show-Tuple{IO, MIME{Symbol(\"text/plain\")}, Any}","page":"Display submodule","title":"CompositeTypes.Display.composite_show","text":"composite_show(io::IO, ::MIME\"text/plain\", object)\n\nDisplay multi-line structured information about a composite object, using the stencil of the object and, recursively, the stencils of any objects therein.\n\n\n\n\n\n","category":"method"},{"location":"display/#CompositeTypes.Display.composite_show_compact-Tuple{IO, Any}","page":"Display submodule","title":"CompositeTypes.Display.composite_show_compact","text":"composite_show_compact(io::IO, object)\n\nDisplay structured information about a composite object using its stencil, but not recursively.\n\n\n\n\n\n","category":"method"},{"location":"display/#Types","page":"Display submodule","title":"Types","text":"","category":"section"},{"location":"display/","page":"Display submodule","title":"Display submodule","text":"Modules = [Display]\nOrder   = [:type]\nPublic  = true\nPrivate = false","category":"page"},{"location":"display/#Internal-API-Reference","page":"Display submodule","title":"Internal API Reference","text":"","category":"section"},{"location":"display/","page":"Display submodule","title":"Display submodule","text":"This is an exhaustive list of all non-exported constants, types and functions in CompositeTypes.Display.","category":"page"},{"location":"display/","page":"Display submodule","title":"Display submodule","text":"warning: Warning\nUnexported functions and types are subject to change across different releases of the package, even if the release is said to be non-breaking.","category":"page"},{"location":"display/#Constants-2","page":"Display submodule","title":"Constants","text":"","category":"section"},{"location":"display/","page":"Display submodule","title":"Display submodule","text":"Modules = [Display]\nOrder   = [:constant]\nPublic  = false\nPrivate = true","category":"page"},{"location":"display/#Functions-2","page":"Display submodule","title":"Functions","text":"","category":"section"},{"location":"display/","page":"Display submodule","title":"Display submodule","text":"Modules = [Display]\nOrder   = [:function]\nPublic  = false\nPrivate = true","category":"page"},{"location":"display/#CompositeTypes.Display.allocate_symbols-Tuple{Any}","page":"Display submodule","title":"CompositeTypes.Display.allocate_symbols","text":"Assign symbols to all objects in the list, adding subscripts if necessary.\n\n\n\n\n\n","category":"method"},{"location":"display/#CompositeTypes.Display.combinationsymbol-Tuple{Any}","page":"Display submodule","title":"CompositeTypes.Display.combinationsymbol","text":"For composite objects, what is their combination symbol?\n\nBy default objects are comma separated, of the form F(a, b, c) where F is the constructor function. But they could also have the form a + b + c. In the former case the combination symbol is a comma, in the latter case it is +.\n\n\n\n\n\n","category":"method"},{"location":"display/#CompositeTypes.Display.compact_repr-Tuple{Any}","page":"Display submodule","title":"CompositeTypes.Display.compact_repr","text":"compact_repr(object)\n\nThe conventional compact representation of an object.\n\nThis representation is based on show(io, d). If an object has overriden that method, it can also override this one to avoid a loop.\n\n\n\n\n\n","category":"method"},{"location":"display/#CompositeTypes.Display.displaystencil-Tuple{Any}","page":"Display submodule","title":"CompositeTypes.Display.displaystencil","text":"displaystencil(object)\n\nReturn the stencil of the object as an array.\n\nThe stencil of an object determines how it is displayed. The array may contain characters or strings, and references to other objects. The concatenation of all elements, with the objects replaced by their string representation, forms the representation of the given object.\n\nExample: say an object obj consists of two parts, obj[1] and obj[2], combined by a function commonly noted as I. Then the stencil may be: displaystencil(obj) = [\"I(\", obj[1], \", \", obj[2], ')'].\n\nIn the string representation of the object, both obj[1] and obj[2] are replaced by a string, or by a symbol that has its own string representation separately.\n\n\n\n\n\n","category":"method"},{"location":"display/#CompositeTypes.Display.displaysymbol-Tuple{Any}","page":"Display submodule","title":"CompositeTypes.Display.displaysymbol","text":"What is the standard display symbol of the object?\n\n\n\n\n\n","category":"method"},{"location":"display/#CompositeTypes.Display.hasstencil-Tuple{Any}","page":"Display submodule","title":"CompositeTypes.Display.hasstencil","text":"Does the object have a stencil?\n\n\n\n\n\n","category":"method"},{"location":"display/#CompositeTypes.Display.object_parentheses-Tuple{Any}","page":"Display submodule","title":"CompositeTypes.Display.object_parentheses","text":"object_parentheses(object)\n\nIf this object appears in a more complicated expression, does it require parentheses?\n\n\n\n\n\n","category":"method"},{"location":"display/#CompositeTypes.Display.recursive_stencil_reps","page":"Display submodule","title":"CompositeTypes.Display.recursive_stencil_reps","text":"Compute representations of all stencils linked to by the object.\n\n\n\n\n\n","category":"function"},{"location":"display/#CompositeTypes.Display.recursive_stencils","page":"Display submodule","title":"CompositeTypes.Display.recursive_stencils","text":"Recursively compute all stencils of the objects linked to by the given object, up to a maximum depth of recursion. There can be self-referential objects in the stencils.\n\nThe result is returned as a dictionary that maps objects to stencils.\n\n\n\n\n\n","category":"function"},{"location":"display/#CompositeTypes.Display.stencil_objects-Tuple{Any}","page":"Display submodule","title":"CompositeTypes.Display.stencil_objects","text":"stencil_objects(object)\n\nReturn all objects appearing in the display stencil.\n\n\n\n\n\n","category":"method"},{"location":"display/#CompositeTypes.Display.stencil_parentheses-Tuple{Any}","page":"Display submodule","title":"CompositeTypes.Display.stencil_parentheses","text":"stencil_parentheses(object)\n\nIf an object in the stencil is complicated, should we put parentheses around it?\n\n\n\n\n\n","category":"method"},{"location":"display/#Types-2","page":"Display submodule","title":"Types","text":"","category":"section"},{"location":"display/","page":"Display submodule","title":"Display submodule","text":"Modules = [Display]\nOrder   = [:type]\nPublic  = false\nPrivate = true","category":"page"},{"location":"display/#CompositeTypes.Display.Symbol","page":"Display submodule","title":"CompositeTypes.Display.Symbol","text":"Representation of a symbol.\n\n\n\n\n\n","category":"type"},{"location":"display/#CompositeTypes.Display.SymbolObject","page":"Display submodule","title":"CompositeTypes.Display.SymbolObject","text":"Wrap an object along with a symbol for it.\n\nThis can be useful in displaystencils of the form F(a,b) when F itself has a stencil. It is usually best to represent F by a symbol, and to list the string representation of F separately. In such a case the stencil of the object O represented by F(a,b) would be [SymbolObject(F), '(', a, b, ')'].\n\nIn other words, SymbolObject forces an object to be represented by a symbol in a stencil.\n\n\n\n\n\n","category":"type"},{"location":"display/#CompositeTypes.Display.TextObject","page":"Display submodule","title":"CompositeTypes.Display.TextObject","text":"Display stencils treat text differently from other objects. If one of the components of an object is text, it can be wrapped in a TextObject in order to treat it as an object, rather than as text, in a stencil.\n\n\n\n\n\n","category":"type"},{"location":"display/#CompositeTypes.Display.WrappedObject","page":"Display submodule","title":"CompositeTypes.Display.WrappedObject","text":"Objects in a display stencil can be wrapped in certain circumstances.\n\n\n\n\n\n","category":"type"},{"location":"internal/#Internal-API-Reference","page":"Internal API Reference","title":"Internal API Reference","text":"","category":"section"},{"location":"internal/","page":"Internal API Reference","title":"Internal API Reference","text":"This is an exhaustive list of all non-exported constants, types and functions in CompositeTypes.jl.","category":"page"},{"location":"internal/","page":"Internal API Reference","title":"Internal API Reference","text":"warning: Warning\nUnexported functions and types are subject to change across different releases of the package, even if the release is said to be non-breaking.","category":"page"},{"location":"internal/#Constants","page":"Internal API Reference","title":"Constants","text":"","category":"section"},{"location":"internal/","page":"Internal API Reference","title":"Internal API Reference","text":"Modules = [CompositeTypes]\nOrder   = [:constant]\nPublic  = false\nPrivate = true","category":"page"},{"location":"internal/#Functions","page":"Internal API Reference","title":"Functions","text":"","category":"section"},{"location":"internal/","page":"Internal API Reference","title":"Internal API Reference","text":"Modules = [CompositeTypes]\nOrder   = [:function]\nPublic  = false\nPrivate = true","category":"page"},{"location":"internal/#Types","page":"Internal API Reference","title":"Types","text":"","category":"section"},{"location":"internal/","page":"Internal API Reference","title":"Internal API Reference","text":"Modules = [CompositeTypes]\nOrder   = [:type]\nPublic  = false\nPrivate = true","category":"page"},{"location":"indexing/#Indexing","page":"Indexing submodule","title":"Indexing","text":"","category":"section"},{"location":"indexing/#Public-API-Reference","page":"Indexing submodule","title":"Public API Reference","text":"","category":"section"},{"location":"indexing/","page":"Indexing submodule","title":"Indexing submodule","text":"This is an exhaustive list of all exported constants, types and functions in CompositeTypes.Indexing.","category":"page"},{"location":"indexing/#Constants","page":"Indexing submodule","title":"Constants","text":"","category":"section"},{"location":"indexing/","page":"Indexing submodule","title":"Indexing submodule","text":"Modules = [Indexing]\nOrder   = [:constant]\nPublic  = true\nPrivate = false","category":"page"},{"location":"indexing/#Functions","page":"Indexing submodule","title":"Functions","text":"","category":"section"},{"location":"indexing/","page":"Indexing submodule","title":"Indexing submodule","text":"Modules = [Indexing]\nOrder   = [:function]\nPublic  = true\nPrivate = false","category":"page"},{"location":"indexing/#Types","page":"Indexing submodule","title":"Types","text":"","category":"section"},{"location":"indexing/","page":"Indexing submodule","title":"Indexing submodule","text":"Modules = [Indexing]\nOrder   = [:type]\nPublic  = true\nPrivate = false","category":"page"},{"location":"indexing/#CompositeTypes.Indexing.Component","page":"Indexing submodule","title":"CompositeTypes.Indexing.Component","text":"Component{I}\n\nComponent index of a composite type.\n\nInternally, this index simply stores an index or a range of indices to components.\n\n\n\n\n\n","category":"type"},{"location":"indexing/#CompositeTypes.Indexing.ComponentIndex","page":"Indexing submodule","title":"CompositeTypes.Indexing.ComponentIndex","text":"ComponentIndex{I}\n\nSupertype of indices that select components of an object rather than its entries.\n\n\n\n\n\n","category":"type"},{"location":"indexing/#Internal-API-Reference","page":"Indexing submodule","title":"Internal API Reference","text":"","category":"section"},{"location":"indexing/","page":"Indexing submodule","title":"Indexing submodule","text":"This is an exhaustive list of all non-exported constants, types and functions in CompositeTypes.Indexing.","category":"page"},{"location":"indexing/","page":"Indexing submodule","title":"Indexing submodule","text":"warning: Warning\nUnexported functions and types are subject to change across different releases of the package, even if the release is said to be non-breaking.","category":"page"},{"location":"indexing/#Constants-2","page":"Indexing submodule","title":"Constants","text":"","category":"section"},{"location":"indexing/","page":"Indexing submodule","title":"Indexing submodule","text":"Modules = [Indexing]\nOrder   = [:constant]\nPublic  = false\nPrivate = true","category":"page"},{"location":"indexing/#Functions-2","page":"Indexing submodule","title":"Functions","text":"","category":"section"},{"location":"indexing/","page":"Indexing submodule","title":"Indexing submodule","text":"Modules = [Indexing]\nOrder   = [:function]\nPublic  = false\nPrivate = true","category":"page"},{"location":"indexing/#CompositeTypes.Indexing.similarindex-Tuple{Component, Any}","page":"Indexing submodule","title":"CompositeTypes.Indexing.similarindex","text":"similarindex(idx::Component, I)\n\nCreate a new component index of the same type but with a different value.\n\n\n\n\n\n","category":"method"},{"location":"indexing/#CompositeTypes.Indexing.to_index-Tuple{Component}","page":"Indexing submodule","title":"CompositeTypes.Indexing.to_index","text":"to_index(idx::Component)\n\nConvert the component index to an index of components.\n\n\n\n\n\n","category":"method"},{"location":"indexing/#Types-2","page":"Indexing submodule","title":"Types","text":"","category":"section"},{"location":"indexing/","page":"Indexing submodule","title":"Indexing submodule","text":"Modules = [Indexing]\nOrder   = [:type]\nPublic  = false\nPrivate = true","category":"page"},{"location":"#CompositeTypes.jl","page":"Home","title":"CompositeTypes.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"CompositeTypes.jl defines an interface for types that consist of multiple components.","category":"page"},{"location":"#Interface","page":"Home","title":"Interface","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The package defines the following functions:","category":"page"},{"location":"","page":"Home","title":"Home","text":"iscomposite(x)\ncomponents(x)\ncomponent(x, I...)\nncomponents(x)\nsetcomponent!(x, v, I...)","category":"page"},{"location":"#CompositeTypes.iscomposite-Tuple{Any}-index","page":"Home","title":"CompositeTypes.iscomposite","text":"iscomposite(x)\n\nIs x a composite object?\n\nIf an object is composite, then its components can be queried using the components function.\n\n\n\n\n\n","category":"method"},{"location":"#CompositeTypes.components-Tuple{Any}-index","page":"Home","title":"CompositeTypes.components","text":"components(x)\n\nThe components of the composite object x.\n\n\n\n\n\n","category":"method"},{"location":"#CompositeTypes.component-Tuple{Any, Vararg{Any, N} where N}-index","page":"Home","title":"CompositeTypes.component","text":"component(x, I...)\n\nThe component of x that corresponds to the given index.\n\n\n\n\n\n","category":"method"},{"location":"#CompositeTypes.ncomponents-Tuple{Any}-index","page":"Home","title":"CompositeTypes.ncomponents","text":"ncomponents(x)\n\nThe number of components of composite object x.\n\n\n\n\n\n","category":"method"},{"location":"#CompositeTypes.setcomponent!-Tuple{Any, Any, Vararg{Any, N} where N}-index","page":"Home","title":"CompositeTypes.setcomponent!","text":"setcomponent!(x, v, I...)\n\nSet the component of x that corresponds to the given index to v.\n\n\n\n\n\n","category":"method"},{"location":"","page":"Home","title":"Home","text":"A type can declare to be composite simply by implementing components(x), and returning something with non-zero length.","category":"page"},{"location":"#Indexing","page":"Home","title":"Indexing","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The submodule Indexing defines a generic way to index components of a composite object. For example, using the DomainSets.jl package:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> using DomainSets, CompositeTypes.Indexing\n\njulia> d = UnitCube(3); components(d)\n3-element Vector{UnitInterval{Float64}}:\n 0.0..1.0 (Unit)\n 0.0..1.0 (Unit)\n 0.0..1.0 (Unit)\n\njulia> d[Component(1)]\n 0.0..1.0 (Unit)\n\njulia> d[Component(1):Component(2)]\n2-element Vector{UnitInterval{Float64}}:\n 0.0..1.0 (Unit)\n 0.0..1.0 (Unit)","category":"page"},{"location":"#Display","page":"Home","title":"Display","text":"","category":"section"},{"location":"#Examples","page":"Home","title":"Examples","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Composite types can opt-in to a structured multi-line representation by defining a display stencil and specializing show. An example, again using the DomainSets.jl package:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> using DomainSets\n\njulia> boundary(UnitCube(3))\nD₄ ∪ D₁ ∪ D₃\n\nD₁ = (0.0..1.0 (Unit)) × D₂ × (0.0..1.0 (Unit))\nD₂ = Point{Float64}(0.0) ∪ Point{Float64}(1.0)\nD₃ = (0.0..1.0 (Unit)) × (0.0..1.0 (Unit)) × D₂\nD₄ = D₂ × (0.0..1.0 (Unit)) × (0.0..1.0 (Unit))","category":"page"},{"location":"","page":"Home","title":"Home","text":"The display routines recursively evaluate display stencils of all objects appearing in the stencil of an object, up to a maximum recursion depth. An attempt is made to define symbols, such that the output remains somewhat readable.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Both the ProductDomain and UnionDomain types are composite types. They combine their components using a combinationsymbol, in this case ∪ and ×. The output above is achieved with the definitions, for ProductDomain:","category":"page"},{"location":"","page":"Home","title":"Home","text":"using CompositeTypes.Display\nDisplay.combinationsymbol(d::ProductDomain) = Display.Symbol('×')\nDisplay.displaystencil(d::ProductDomain) = composite_displaystencil(d)\n\nshow(io::IO, mime::MIME\"text/plain\", d::ProductDomain) = composite_show(io, mime, d)\nshow(io::IO, d::ProductDomain) = composite_show_compact(io, d)","category":"page"},{"location":"","page":"Home","title":"Home","text":"The invocation of show with the mime argument indicates that a multi-line representation can be shown. The shorter show(io, x) function typically expects a one-line representation. Types can choose to implement either function. Typically the longer version is the most useful, while for the compact version it may be safer to rely on Julia's default.","category":"page"},{"location":"","page":"Home","title":"Home","text":"A type can define a custom display stencil, which is a vector in which each string or character ends up being displayed, and each object is replaced by its own display stencil or by a compact string representation. For example:","category":"page"},{"location":"","page":"Home","title":"Home","text":"Display.displaystencil(object::LinearMap) = [object.A, \" * x + \", object.b]","category":"page"},{"location":"#Relevant-functions","page":"Home","title":"Relevant functions","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Display.displaystencil","category":"page"},{"location":"#CompositeTypes.Display.displaystencil-index","page":"Home","title":"CompositeTypes.Display.displaystencil","text":"displaystencil(object)\n\nReturn the stencil of the object as an array.\n\nThe stencil of an object determines how it is displayed. The array may contain characters or strings, and references to other objects. The concatenation of all elements, with the objects replaced by their string representation, forms the representation of the given object.\n\nExample: say an object obj consists of two parts, obj[1] and obj[2], combined by a function commonly noted as I. Then the stencil may be: displaystencil(obj) = [\"I(\", obj[1], \", \", obj[2], ')'].\n\nIn the string representation of the object, both obj[1] and obj[2] are replaced by a string, or by a symbol that has its own string representation separately.\n\n\n\n\n\n","category":"function"}]
}
