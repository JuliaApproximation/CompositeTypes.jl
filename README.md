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
