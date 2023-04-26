import { ifApp, map, rule } from 'karabiner.ts'

export const ifNotion = ifApp('^notion.id$')

export const notion = rule('Arc', ifNotion).manipulators([
  map('left_shift').to('left_shift').toIfAlone('backslash', 'command'),

  map('up_arrow', 'option').to('up_arrow', ['shift', 'command']),
  map('down_arrow', 'option').to('down_arrow', ['shift', 'command']),

  map('c', ['command', 'shift']).to('l', 'command'),
])
