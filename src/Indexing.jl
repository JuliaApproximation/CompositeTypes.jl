module Indexing

export Component

using ..CompositeTypes


"Supertype of indices that select components of an object rather than its entries."
abstract type ComponentIndex{I} end

import Base.(:)

# This line enables Component(1):Component(4) -> Component(1:4)
(::Colon)(idx1::ComponentIndex{I}, idx2::ComponentIndex{I}) where {I} =
    similarindex(idx1, to_index(idx1):to_index(idx2))

# Iteration: we store the iterator of components(x) and translate to Component's
function Base.iterate(idx::ComponentIndex)
    el, state = iterate(to_index(idx))
    Component(el), state
end

Base.iterate(idx::ComponentIndex, state) = _iterate(idx, iterate(to_index(idx), state))

_iterate(idx::ComponentIndex, it::Nothing) = nothing
function _iterate(idx::ComponentIndex, it)
    el, state = it
    Component(el), state
end

"""
Component index of a composite type.

Internally, this index simply stores an index or a range of indices to
`components`.
"""
struct Component{I} <: ComponentIndex{I}
    i   ::  I
end

"Create a new component index of the same type but with a different value."
similarindex(idx::Component, I) = Component(I)

"Convert the component index to an index of `components`."
to_index(idx::Component) = idx.i


## These two lines can be used to enable indexing of components for a custom
## composite types. In that case, the type of x should be specified in order to
## avoid ambiguities:
# Base.getindex(x::MyCompositeType, I::ComponentIndex...) = component(x, map(to_index, I)...)
# Base.setindex!(x::MyCompositeType, val, I::ComponentIndex...) = setcomponent!(x, val, map(to_index, I)...)

end
