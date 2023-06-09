import { ifApp, map, rule } from 'karabiner.ts'

export const ifArc = ifApp('^company.thebrowser.Browser$')

export const arc = rule('Arc', ifArc).manipulators([
  map('left_shift').to('left_shift').toIfAlone('s', 'left_command'),
  map('left_control')
    .to('left_control')
    .toIfAlone('i', ['left_option', 'left_command']),
  map('p', 'command').to('t', 'command'),

  map('right_shift')
    .to('right_shift')
    .toIfAlone('t', ['left_command', 'left_shift']),

  map('right_option').to('right_option').toIfAlone('y', 'left_command'),
])
