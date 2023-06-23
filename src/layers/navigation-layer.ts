import { map } from 'karabiner.ts'

export const navigationLayer = [
  // Playback
  map('m').to('rewind'),
  map(',').to('fastforward'),

  // History navigation
  map('h').to('tab', '<⌃'),
  map('u').to('open_bracket', 'left_command'),
  map('i').to('close_bracket', 'left_command'),

  // Windows of an app navigation
  map('o').to('`', ['left_command', 'left_shift']),
  map('p').to('`', 'left_command'),

  // Switch tab
  map('k').to('tab', 'left_control'),
  map('j').to('tab', ['left_control', 'left_shift']),

  // Code navigation
  map('l').to('open_bracket', 'left_control'),
  map(';').to('close_bracket', ['left_control']),
]
