import { map, simlayer } from 'karabiner.ts'

export const selectLayer = simlayer('w', 'word-select').manipulators([
  map('y').to('c', 'command'),

  map('u').to('left_arrow', 'shift'),
  map('i').to('right_arrow', 'shift'),

  map('h').to('left_arrow', ['shift', 'command']),
  map('j').to('left_arrow', ['shift', 'option']),
  map('k').to('right_arrow', ['shift', 'option']),
  map('l').to('right_arrow', ['shift', 'command']),

  map('m').to('c', 'command'),
  map('n').to('x', 'command'),
])