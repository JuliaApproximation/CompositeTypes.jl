# CompositeTypes.jl

[![Build Status](https://github.com/JuliaApproximation/CompositeTypes.jl/workflows/CI/badge.svg)](https://github.com/JuliaApproximation/CompositeTypes.jl/actions)
[![Coverage Status](https://codecov.io/gh/JuliaApproximation/CompositeTypes.jl/branch/master/graph/badge.svg)](https://codecov.io/gh/JuliaApproximation/CompositeTypes.jl)



CompositeTypes.jl defines an interface for types that consist of multiple components.

## Interface

The package defines:
- `iscomposite(x)`: true if `x` is a composite object
- `components(x)`: returns the components of `x`
- `component(x, I...)`: returns `components(x)[I...]`
- `ncomponents(x)`: the number of components of `x`
- `setcomponent!(x, v, I...)`: (if applicable) set a component to a given value

A type can declare to be composite simply by implementing `components(x)`, and
returning something with non-zero `length`.

## Indexing

The submodule `Indexing` defines a generic way to index components of a
composite object. For example, using the `DomainSets.jl` package:
```julia
julia> using DomainSets, CompositeTypes.Indexing

julia> d = UnitCube(3); components(d)
3-element Vector{UnitInterval{Float64}}:
 0.0..1.0 (Unit)
 0.0..1.0 (Unit)
 0.0..1.0 (Unit)

julia> d[Component(1)]
 0.0..1.0 (Unit)

julia> d[Component(1):Component(2)]
2-element Vector{UnitInterval{Float64}}:
 0.0..1.0 (Unit)
 0.0..1.0 (Unit)
```

## Display

Composite types can opt-in to a structured multi-line representation by
defining a display stencil and specializing `show`. An example, again using
the `DomainSets.jl` package:
```julia
julia> using DomainSets

julia> boundary(UnitCube(3))
D₄ ∪ D₁ ∪ D₃

D₁ = (0.0..1.0 (Unit)) × D₂ × (0.0..1.0 (Unit))
D₂ = Point{Float64}(0.0) ∪ Point{Float64}(1.0)
D₃ = (0.0..1.0 (Unit)) × (0.0..1.0 (Unit)) × D₂
D₄ = D₂ × (0.0..1.0 (Unit)) × (0.0..1.0 (Unit))
```
The display routines recursively evaluate display stencils of all objects
appearing in the stencil of an object, up to a maximum recursion depth. An
attempt is made to define symbols, such that the output remains somewhat
readable.

Both the `ProductDomain` and `UnionDomain` types are composite types. They
combine their components using a `combinationsymbol`, in this case `∪` and `×`.
The output above is achieved with the definitions, for `ProductDomain`:
```julia
Display.combinationsymbol(d::ProductDomain) = Display.Symbol('×')
Display.displaystencil(d::ProductDomain) = composite_displaystencil(d)

show(io::IO, mime::MIME"text/plain", d::ProductDomain) = composite_show(io, mime, d)
show(io::IO, d::ProductDomain) = composite_show_compact(io, d)
```
The invocation of `show` with the `mime` argument indicates that a multi-line
representation can be shown. The shorter `show(io, x)` function typically expects
a one-line representation. Types can choose to implement either function. Typically
the longer version is the most useful, while for the compact version it may be
safer to rely on Julia's default.

A type can define a custom display stencil, which is a vector in which each string
or character ends up being displayed, and each object is replaced by its own
display stencil or by a compact string representation. For example:
```julia
Display.displaystencil(object::LinearMap) = [object.A, " * x + ", object.b]
```
