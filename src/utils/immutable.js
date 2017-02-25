import Immutable from 'seamless-immutable'

const immutable = function(obj) {
  return Immutable(obj, {
    prototype: Object.getPrototypeOf(obj)
  })
}

export default immutable
