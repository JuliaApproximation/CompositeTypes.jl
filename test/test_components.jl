
@testset "Composite types" begin
    c = CompositeObject((1,2,3,4))
    @test iscomposite(c)
    @test components(c) == (1,2,3,4)
    @test ncomponents(c) == length(components(c))
    @test component(c, 2) == 2
    @test component(c, 4) == 4
    @test_throws BoundsError component(c, 5)

    @test !iscomposite(5)
    @test components(5) == ()
    @test ncomponents(5) == 0
    @test_throws BoundsError component(5, 1)

    c2 = CompositeObject([1,2,3,4])
    @test setcomponent!(c2, 4, 2) == [1,4,3,4]
    @test component(c2, 2) == 4
end

Base.getindex(x::CompositeObject, I::ComponentIndex...) =
    component(x, map(Indexing.to_index, I)...)
Base.setindex!(x::CompositeObject, val, I::ComponentIndex...) =
    setcomponent!(x, val, map(Indexing.to_index, I)...)

@testset "Indexing" begin
    c1 = CompositeObject([1, 2, 3, 4])
    @test c1[Component(1)] == 1
    @test c1[Component(3)] == 3
    @test c1[Component(1):Component(3)] == 1:3
    @test_throws BoundsError c1[Component(5)]

    A = rand(10,10)
    c2 = CompositeObject(A)
    @test c2[Component(1),Component(2)] == A[1,2]
    @test c2[Component(1):Component(4),Component(2)] == A[1:4,2]
    @test c2[Component(:),Component(2)] == A[:,2]
    @test c2[Component(:)] == A[:]
    @test c2[Component(CartesianIndex(2,3))] == A[2,3]
    @test c2[Component(CartesianIndices((2,2)))] == A[CartesianIndices((2,2))]
    c2[Component(1),Component(2)] = 2
    @test component(c2, 1, 2) == 2
end
