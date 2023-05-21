import { duoLayer, map, withMapper } from 'karabiner.ts'

export const emoji = duoLayer('z', 'x','z-mode')
  .manipulators([
    withMapper({
      slash: '❓', // question mark
      f: '[Facepalm]', // facepalm
      j: '😂', // Joy cry
      u: '👍', // thumb Up
      l: '😀', // Laugh
      o: '👌', // Ok
      h: '🙌', // raise Hands
      k: '😭', // cry
      m: '🙈', // Monkey facepalm
      period: '🤔', // thinking, mnemonic: ...
    })((k, v) => map(k).toPaste(v)),
  ])
  