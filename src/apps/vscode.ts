import { ifApp, map, rule } from 'karabiner.ts'

export const ifVScode = ifApp('^company.thebrowser.Browser$')

export const vscode = rule('VSCode', ifVScode).manipulators([
  map('left_shift').to('left_shift').toIfAlone('b', 'left_command'),
  map('left_control').to('left_control').toIfAlone('j', 'left_command'),
])
