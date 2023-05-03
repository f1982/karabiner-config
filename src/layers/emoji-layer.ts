import { layer, map, withMapper } from 'karabiner.ts'

// This make input zh very slow and easy to make mistake
export const emoji = layer('z', 'z-mode').manipulators([
  withMapper({
    j: '😂', // _joy
    t: '👍', // _plus_one +1
    s: '😅', // _sweat_smile
  })((k, v) => map(k).toPaste(v)),
])