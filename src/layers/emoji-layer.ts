import { duoLayer, map, withMapper } from 'karabiner.ts'

// export const emoji = layer('z', 'z-mode')
export const emoji = duoLayer('z', 'x','z-mode')
  .manipulators([
    withMapper({
      j: '😂', // _joy
      k: '👍', // _plus_one +1
      l: '😅', // _sweat_smile
    })((k, v) => map(k).toPaste(v)),
  ])