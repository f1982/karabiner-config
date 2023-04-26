import { map, rule } from 'karabiner.ts'

export const holistic = rule('Modifiers').manipulators([
  map('caps_lock').to('escape'),
  // Single click option to read selected text
  map('left_option')
    .to('left_option')
    .toIfAlone('p', ['left_control', 'left_option']),
])
