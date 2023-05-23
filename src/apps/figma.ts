import { ifApp, map, rule } from 'karabiner.ts'

export const ifFigma = ifApp('^com.figma.Desktop$')

export const figma = rule('Zoom', ifFigma).manipulators([
  // Toggle sidebar
  map('left_shift')
    .to('left_shift')
    .toIfAlone('backslash', 'left_command'),
])
