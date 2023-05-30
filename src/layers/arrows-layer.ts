import { duoLayer, map } from 'karabiner.ts'

export const arrowsLayer = duoLayer('.', '/', 'navigation').manipulators([
  // Playback
  map('s').to('left_arrow'),
  map('f').to('right_arrow'),

  // History navigation
  map('e').to('up_arrow'),
  map('d').to('down_arrow'),
])