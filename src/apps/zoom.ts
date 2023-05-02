import { ifApp, map, rule } from 'karabiner.ts'

export const ifZoom = ifApp('^us.zoom.xos$')

export const zoom = rule('Zoom', ifZoom).manipulators([
  // Toggle audio
  map('left_control')
    .to('left_control')
    .toIfAlone('a', ['left_shift', 'left_command']),
  // Toggle video
  map('left_command')
    .to('left_command')
    .toIfAlone('v', ['left_control', 'left_option']),
])
