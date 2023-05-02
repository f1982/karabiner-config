import { ifApp, map, rule } from 'karabiner.ts'

export const ifChrome = ifApp('^com.google.Chrome$')

export const chrome = rule('Chrome', ifChrome).manipulators([
  map('left_control')
    .to('left_control')
    .toIfAlone('i', ['left_command', 'left_option']),

  map('right_shift')
    .to('right_shift')
    .toIfAlone('t', ['left_command', 'left_shift']),

  map('right_option').to('right_option').toIfAlone('y', 'left_command'),
])
