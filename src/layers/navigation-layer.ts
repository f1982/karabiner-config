import { duoLayer, map } from 'karabiner.ts'

export const navigationLayer = duoLayer('c', 'x', 'universal').manipulators([
  // Zoom in and zoom out
  // map('o').to('equal_sign', 'left_command'),
  // map('p').to('hyphen', 'left_command'),

  map('m').to('rewind'),
  map(',').to('fastforward'),

  // History navigation
  map('u').to('open_bracket', 'left_command'),
  map('i').to('close_bracket', 'left_command'),

  // Switch tab
  map('j').to('tab', 'left_control'),
  map('k').to('tab', ['left_control', 'left_shift']),

  // Code navigation
  map('l').to('open_bracket', 'left_control'),
  map(';').to('close_bracket', ['left_control']),
])