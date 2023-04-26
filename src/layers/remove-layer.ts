import { map, simlayer } from 'karabiner.ts'

export const removeLayer = simlayer('r', 'remove').manipulators([
  map('u').to('delete_or_backspace'),
  map('i').to('delete_forward'),

  map('h').to('delete_or_backspace', 'command'),
  map('j').to('delete_or_backspace', 'option'),
  map('k').to('delete_forward', 'option'),
  map('l').to('delete_forward', 'command'),
])
