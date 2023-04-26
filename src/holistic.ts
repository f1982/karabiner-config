import { map, rule } from 'karabiner.ts'

export const holistic = rule('Modifiers').manipulators([
  // Remap caps_lock to esc
  map('caps_lock').to('escape'),

  // Single click left_option to read selected text
  map('left_option')
    .to('left_option')
    .toIfAlone('p', ['left_control', 'left_option']),
])
