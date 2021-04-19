
import CompositeTypes: components
import CompositeTypes.Display: displaysymbol

struct CompositeObject
    components
end
components(obj::CompositeObject) = obj.components
displaysymbol(obj::CompositeObject) = 'C'
Display.object_parentheses(::CompositeObject) = false
Base.show(io::IO, mime::MIME"text/plain", obj::CompositeObject) =
    composite_show(io, mime, obj)

struct StencilObject
    map
    object
end
Base.show(io::IO, mime::MIME"text/plain", obj::StencilObject) =
    composite_show(io, mime, obj)
Display.displaystencil(obj::StencilObject) =
    [Display.SymbolObject(obj.map), '(', obj.object, ')']

struct SetUnion
    components
end
components(obj::SetUnion) = obj.components
Display.combinationsymbol(object::SetUnion) = Display.Symbol('∪')
Display.displaystencil(obj::SetUnion) = composite_displaystencil(obj)

Base.show(io::IO, mime::MIME"text/plain", obj::SetUnion) =
    composite_show(io, mime, obj)
