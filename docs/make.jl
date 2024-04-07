using Documenter
using CompositeTypes
using CompositeTypes.Indexing
using CompositeTypes.Display

DocMeta.setdocmeta!(CompositeTypes, :DocTestSetup, :(using CompositeTypes); recursive=true)

makedocs(;
    modules=[CompositeTypes,CompositeTypes.Indexing,CompositeTypes.Display],
    authors="Daan Huybrechs <daan.huybrechs@kuleuven.be> and contributors",
    sitename="CompositeTypes.jl",
    format=Documenter.HTML(;
        edit_link="main",
        assets=String[],
    ),
    pages=[
        "Home" => "index.md",
        "API" => Any[
            "Public API Reference" => "api.md",
            "Internal API Reference" => "internal.md"
        ],
        "Indexing submodule" => "indexing.md",
        "Display submodule" => "display.md"
    ],
)

deploydocs(
    repo   = "github.com/JuliaApproximation/CompositeTypes.jl.git",
    devbranch = "master"
)
