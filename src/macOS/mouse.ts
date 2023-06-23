import { toMouseCursorPosition, toMouseKey } from 'karabiner.ts'

const scrollUp = (v = 1) =>
  toMouseKey({ vertical_wheel: -32, speed_multiplier: v })
const scrollLeft = (v = 1) =>
  toMouseKey({ horizontal_wheel: -32, speed_multiplier: v })
const scrollDown = (v = 1) =>
  toMouseKey({ vertical_wheel: 32, speed_multiplier: v })
const scrollRight = (v = 1) =>
  toMouseKey({ horizontal_wheel: 32, speed_multiplier: v })

export const mouseCursor = {
  i: scrollUp(),
  k: scrollDown(),
  j: scrollLeft(),
  l: scrollRight(),
  p: toMouseCursorPosition({ x: '88%', y: '3%' }),
}
