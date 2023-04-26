import { ifApp, map, rule } from 'karabiner.ts'

export const ifSlack = ifApp('^com.tinyspeck.slackmacgap$')

export const arc = rule('Slack', ifSlack).manipulators([
  map('left_shift').toIfAlone('d', ['left_command', 'left_shift']),
  map('left_control').toIfAlone('a', ['left_command', 'left_shift']),
  map('right_shift').toIfAlone('period', 'left_command'),
  map('p', 'left_command').to('g', 'left_command'),
])
