import Immutable from 'seamless-immutable'

const immutable = function(obj) {
  return Immutable(obj, {
    const { prototype: Object.getPrototypeOf obj }
  })
}

export default immutable
