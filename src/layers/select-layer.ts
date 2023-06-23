import { map } from 'karabiner.ts'

export const selectLayer = [
  map('u').to('left_arrow', 'shift'),
  map('i').to('right_arrow', 'shift'),
  map('h').to('left_arrow', ['shift', 'command']),
  map('j').to('left_arrow', ['shift', 'option']),
  map('k').to('right_arrow', ['shift', 'option']),
  map('l').to('right_arrow', ['shift', 'command']),

  // Select above and below
  map('m').to('up_arrow', 'shift'),
  map('comma').to('down_arrow', 'shift'),

  // Copy and cut
  map('p').to('c', 'command'),
  map('o').to('x', 'command'),
]
