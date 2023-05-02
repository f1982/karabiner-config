import { map, mapDoubleTap, rule } from 'karabiner.ts'

export const holistic = rule('Global shortcut keys').manipulators([
  // Remap caps_lock to esc
  map('caps_lock').to('escape'),
  
  // Single click left_option to read selected text
  // map('left_option')
  //   .to('left_option')
  //   .toIfAlone('p', ['left_control', 'left_option']),
  mapDoubleTap('`').to('p', ['left_control', 'left_option']),

  mapDoubleTap('escape').to('r', [
    'left_control',
    'left_option',
    'left_command',
  ]),

  // Double click tab to take a screenshot
  mapDoubleTap('tab').to('4', ['left_shift', 'left_command']),
])
