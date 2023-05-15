import { duoLayer, map, mapDoubleTap, mapSimultaneous, rule } from 'karabiner.ts'

export const holistic = rule('Global shortcut keys').manipulators([
  // Remap caps_lock to esc
  map('⇪').toHyper().toIfAlone('⎋'),

  mapSimultaneous(['f','d']).to('left_command'),
  mapSimultaneous(['d','s']).to('left_option'),
  mapSimultaneous(['s','a']).to('left_control'),
  mapSimultaneous(['a','f']).to('left_shift'),
  mapSimultaneous(['s','f']).to('left_shift','left_option'),
  
  mapSimultaneous(['j','k']).to('right_command'),
  

  mapDoubleTap('escape').to('r', [
    'left_control',
    'left_option',
    'left_command',
  ]),

  // Double click tab to take a screenshot
  mapDoubleTap('tab').to('4', ['left_shift', 'left_command']),
])
