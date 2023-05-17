import { map, mapDoubleTap, mapSimultaneous, rule } from 'karabiner.ts'

export const holistic = rule('Global shortcut keys').manipulators([
  // Remap to esc
  map('⇪').toHyper().toIfAlone('⎋'),

  // Double tap modifiers
  // Left hand
  mapSimultaneous(['f', 'd']).to('left_command'),
  mapSimultaneous(['d', 's']).to('left_option'),
  mapSimultaneous(['s', 'a']).to('left_control'),
  mapSimultaneous(['d', 'g']).to('left_shift'),

  mapSimultaneous(['a', 'd']).to('left_shift', 'left_control'),
  mapSimultaneous(['s', 'f']).to('left_shift', 'left_option'),
  mapSimultaneous(['a', 'f']).to('left_shift', 'left_command'),
  mapSimultaneous(['f', 'c']).to('left_command', 'left_option'),
  // Right hand
  mapSimultaneous(['j', 'k']).to('right_command'),
  mapSimultaneous(['k', 'l']).to('right_option'),
  mapSimultaneous(['l', 'semicolon']).to('right_control'),
  mapSimultaneous(['k', 'h']).to('right_shift'),
  
  mapSimultaneous(['k', 'semicolon']).to('right_shift', 'right_control'),
  mapSimultaneous(['j', 'l']).to('right_shift', 'right_option'),
  mapSimultaneous(['j', 'semicolon']).to('right_shift', 'right_command'),


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
