import { ifApp, map, rule } from 'karabiner.ts'

export const ifMail = ifApp('^com.apple.mail$')

export const mail = rule('Zoom', ifMail).manipulators([
  // Toggle sidebar
  map('left_shift')
    .to('left_shift')
    .toIfAlone('s', ['left_control', 'left_command']),
])
