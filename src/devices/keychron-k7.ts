import { ifDevice, rule } from 'karabiner.ts'

export const ifKeychronK7 = ifDevice({ vendor_id: 1452, product_id: 591 })

export const keychronK1Keyboard = rule(
  'Keychron K7 Keyboard',
  ifKeychronK7,
).manipulators([])
