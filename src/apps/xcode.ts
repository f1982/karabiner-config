import { ifApp, map, rule } from 'karabiner.ts'

export const ifXcode = ifApp('^com.apple.dt.Xcode$')

export const xcode = rule('XCode', ifXcode).manipulators([
  // Toggle sidebar
  map('left_shift').to('left_shift').toIfAlone('0', 'left_command'),
  // Toggle debug/console section
  map('left_control')
    .to('left_control')
    .toIfAlone('y', ['left_command', 'left_shift']),
  // Toggle inspector panel
  map('right_shift')
    .to('right_shift')
    .toIfAlone('0', ['left_command', 'right_option']),

  // History navigation
  map('open_bracket', 'left_control').to('left_arrow', [
    'left_control',
    'left_command',
  ]),
  map('close_bracket', 'left_control').to('right_arrow', [
    'left_control',
    'left_command',
  ]),

  // Backup history navigation
  map('comma', 'left_control').to('left_arrow', [
    'left_control',
    'left_command',
  ]),
  map('period', 'left_control').to('right_arrow', [
    'left_control',
    'left_command',
  ]),

  // Search file
  map('p', 'left_command').to('o', ['left_shift', 'left_command']),

  // Loop tabs
  map('tab', 'left_control').to('close_bracket', [
    'left_command',
    'left_shift',
  ]),
  map('tab', ['left_control', 'left_shift']).to('open_bracket', [
    'left_command',
    'left_shift',
  ]),
])
