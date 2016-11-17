import Immutable from 'seamless-immutable'

immutable = (obj) -> Immutable obj, { prototype: Object.getPrototypeOf obj }

export default immutable
