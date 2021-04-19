# CompositeTypes.jl

[![Build Status](https://github.com/JuliaApproximation/CompositeTypes.jl/workflows/CI/badge.svg)](https://github.com/JuliaApproximation/CompositeTypes.jl/actions)
[![Coverage Status](https://codecov.io/gh/JuliaApproximation/CompositeTypes.jl/branch/master/graph/badge.svg)](https://codecov.io/gh/JuliaApproximation/CompositeTypes.jl)


CompositeTypes.jl defines an interface for types that consist of multiple components. The package defines:
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
julia> using CompositeTypes.Indexing

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

Both the `ProductDomain` and `UnionDomain` types are composite types. They
combine their components using a `combinationsymbol`, in this case `∪` and `×`.
The output above is achieved with the definitions:
```julia
Display.combinationsymbol(d::ProductDomain) = Display.Times()

Display.displaystencil(d::ProductDomain) = composite_displaystencil(d)

show(io::IO, mime::MIME"text/plain", d::ProductDomain) = composite_show(io, mime, d)

show(io::IO, d::ProductDomain) = composite_show_compact(io, d)
```
The invocation of `show` with the `mime` argument indicates that a multi-line
representation can be shown. The shorter `show(io, x)` function typically expects
a one-line representation.
