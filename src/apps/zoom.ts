import { ifApp, map, rule } from 'karabiner.ts'

export const ifZoom = ifApp('^us.zoom.xos$')

export const zoom = rule('Zoom', ifZoom).manipulators([
  // Toggle audio
  map('left_control').to('left_control').toIfAlone('a', '⌘⇧'),
  // Toggle video
  map('left_command')
    .to('left_command')
    .toIfAlone('v', ['left_control', 'left_option']),
  // Toggle chat panel
  map('left_shift').to('left_shift').toIfAlone('h', '⌘⇧'),
  // Start screen sharing
  map('right_shift').to('right_shift').toIfAlone('s', '⌘⇧'),
])
