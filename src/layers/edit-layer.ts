import { layer, map } from 'karabiner.ts'

export const editLayer = layer('e', 'edit')
  .modifiers('Hyper')
  .manipulators([
    map('u').to('left_arrow'),
    map('i').to('right_arrow'),

    map('h').to('left_arrow', 'command'),
    map('j').to('left_arrow', 'option'),
    map('k').to('right_arrow', 'option'),
    map('l').to('right_arrow', 'command'),

    map('m').to('up_arrow'),
    map('comma').to('down_arrow'),

    // Paste
    map('spacebar').to('v', 'command'),
    map('r').to('v', 'command'),
  ])
