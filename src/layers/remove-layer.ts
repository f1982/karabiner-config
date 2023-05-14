import { layer, map } from 'karabiner.ts'

export const removeLayer = layer('r', 'remove')
  .modifiers('Hyper')
  .manipulators([
    map('u').to('delete_or_backspace'),
    map('i').to('delete_forward'),
    map('h').to('delete_or_backspace', 'command'),
    map('j').to('delete_or_backspace', 'option'),
    map('k').to('delete_forward', 'option'),
    map('l').to('delete_forward', 'command'),

    // Paste
    map('spacebar').to('v', 'command'),
  ])
