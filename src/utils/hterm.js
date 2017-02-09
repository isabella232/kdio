import { isObject, assign } from 'lodash'
import { hterm, lib, Terminal as BaseTerminal } from 'hterm-umdjs'
import { patchHterm } from 'hterm-command'

hterm.defaultStorage = new lib.Storage.Memory()

export default patchHterm(hterm)

export { lib }
