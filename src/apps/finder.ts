import { ifApp, map, rule } from 'karabiner.ts'

export const isFinder = ifApp('^com.apple.finder$')

export const finder = rule('Chrome', isFinder).manipulators([
  map('left_control')
    .to('left_control')
    .toIfAlone('slash', ['left_command']),

  //Hide left sidebar
  map('left_shift')
    .to('left_shift')
    .toIfAlone('s', ['left_command', 'left_option']),

  map('right_shift')
    .to('right_shift')
    .toIfAlone('p', ['left_command', 'left_shift']),
])
