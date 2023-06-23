import { map, withMapper } from 'karabiner.ts'

export const emoji = [
    withMapper({
      slash: '❓', // question mark
      f: '[Facepalm]', // facepalm
      j: '😂', // Joy cry
      i: '✅', // Check
      u: '👍', // thumb Up
      l: '😀', // Laugh
      o: '👌', // Ok
      h: '🙌', // raise Hands
      k: '😭', // cry
      m: '🙈', // Monkey facepalm
      period: '🤔', // thinking, mnemonic: ...
    })((k, v) => map(k).toPaste(v)),
  ]
  