import { map, simlayer } from 'karabiner.ts'

export const selectLayer = simlayer('w', 'word-select').manipulators([ 
  map('u').to('left_arrow', 'shift'),
  map('i').to('right_arrow', 'shift'),
  map('h').to('left_arrow', ['shift', 'command']),
  map('j').to('left_arrow', ['shift', 'option']),
  map('k').to('right_arrow', ['shift', 'option']),
  map('l').to('right_arrow', ['shift', 'command']),
  // 3 ways of copy
  map('p').to('c', 'command'),
  // map('q').to('c', 'command'),
  // map('spacebar').to('c', 'command'),

  map('o').to('x', 'command'),
])