import { map, mapDoubleTap, rule } from 'karabiner.ts'

export const holistic = rule('Global shortcut keys').manipulators([
  // Remap to esc
  map('⇪').toHyper().toIfAlone('⎋'),

  // Read selected text
  // left_command key will be accidentally tapped
  // left_control key has been used for open below side bar
  map('left_option')
    .to('left_option')
    .toIfAlone('p', ['left_option', 'left_control']),

  // Double click esc to look up in dictionary
  mapDoubleTap('escape').to('r', [
    'left_control',
    'left_option',
    'left_command',
  ]),

  // Double click tab to take a screenshot
  mapDoubleTap('tab').to('4', ['left_shift', 'left_command']),
])
