
const textmime = MIME"text/plain"()

@testset "display" begin
    o1 = SetUnion([2,3])
    @test Display.hasstencil(o1)
    @test Display.displaystencil(o1) == Any[2, " ∪ ", 3]
    @test repr(o1) == "SetUnion([2, 3])"
    io = IOBuffer()
    show(io, textmime, o1)
    @test String(take!(io)) == "2 ∪ 3"

    A1 = 1:4
    A2 = 5:10
    A3 = 11:20
    c1 = CompositeObject(A1)
    c2 = CompositeObject(A2)
    c3 = CompositeObject(A3)
    o2 = SetUnion((c1, c2, c3))
    @test Display.hasstencil(o2)
    @test Display.displaystencil(o2) == Any[c1, " ∪ ", c2, " ∪ ", c3]
    @test repr(o2) == "SetUnion((CompositeObject(1:4), CompositeObject(5:10), CompositeObject(11:20)))"

    show(io, textmime, o2)
    @test String(take!(io))[1:25] == "CompositeObject(1:4) ∪ "
    # "CompositeObject(1:4) ∪ C₂ ∪ C₁\n\nC₁ = CompositeObject(11:20)\nC₂ = CompositeObject(5:10)"

    o3 = SetUnion( (SetUnion((c1,c2)),c3) )
    @test repr(o3) == "SetUnion((SetUnion((CompositeObject(1:4), CompositeObject(5:10))), CompositeObject(11:20)))"
    show(io, textmime, o3)
    @test String(take!(io))[1:6] == "S ∪ "
    # "S ∪ C₁\n\nC₁ = CompositeObject(11:20)\nC₂ = CompositeObject(5:10)\nS = (CompositeObject(1:4)) ∪ C₂"

    m = StencilObject(cos, c1)
    @test Display.hasstencil(m)
    @test Display.displaystencil(m) == [Display.SymbolObject(cos), '(', c1, ')']
    @test repr(m) == "StencilObject(cos, CompositeObject(1:4))"
    show(io, textmime, m)
    @test String(take!(io)) == "F(CompositeObject(1:4))\n\nF = cos"

    m1 = StencilObject(cos, c1)
    m2 = StencilObject(cos, c2)
    m3 = StencilObject(sin, c3)
    C = SetUnion((m1,m2,m3))
    @test repr(C) == "SetUnion((StencilObject(cos, CompositeObject(1:4)), StencilObject(cos, CompositeObject(5:10)), StencilObject(sin, CompositeObject(11:20))))"
    show(io, textmime, C)
    @test String(take!(io))[1:6] == "S ∪ "
    # "S ∪ F₁(C₂) ∪ F₂(C₁)\n\nC₁ = CompositeObject(11:20)\nC₂ = CompositeObject(5:10)\nS = F₁(CompositeObject(1:4))\nF₁ = cos\nF₂ = sin"
end
