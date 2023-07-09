import { ifApp, map, rule } from 'karabiner.ts'

export const isJianying = ifApp('^com.lemon.lvpro$')

export const jianying = rule('Jianying', isJianying).manipulators([
  // Toggle sidebar
  map('left_command').to('left_command').toIfAlone('b', 'left_command'),
])
