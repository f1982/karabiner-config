import { ifDevice, rule } from 'karabiner.ts'

export const ifAppleKeyboard = ifDevice({ vendor_id: 1452, product_id: 835 })

export const appleKeyboard = rule(
  'Apple Keyboard',
  ifAppleKeyboard,
).manipulators([])