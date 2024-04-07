using Test

using CompositeTypes
using CompositeTypes.Indexing
using CompositeTypes.Display

using Aqua
Aqua.test_all(CompositeTypes)

include("test_types.jl")
include("test_components.jl")
include("test_display.jl")
