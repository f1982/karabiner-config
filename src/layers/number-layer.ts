import { duoLayer, layer, map, simlayer } from 'karabiner.ts'

// export const numberLayer = layer('v', 'Number layer')
//   .modifiers('Hyper')
// export const numberLayer = simlayer('v', 'Number layer')
export const numberLayer = duoLayer('v', 'c', 'Number layer').manipulators([
  map('y').to('8', 'shift'),
  map('u').to('7'),
  map('i').to('8'),
  map('o').to('9'),
  map('p').to('equal_sign', 'shift'),
  map('h').to('slash'),
  map('j').to('4'),
  map('k').to('5'),
  map('l').to('6'),
  map('semicolon').to('hyphen'),
  map('n').to('0'),
  map('m').to('1'),
  map('comma').to('2'),
  map('period').to('3'),
  map('slash').to('period'),
])
