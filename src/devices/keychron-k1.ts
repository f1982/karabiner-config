import { ifDevice, rule } from 'karabiner.ts'

export const ifKeychronK1 = ifDevice({ vendor_id: 1452, product_id: 591 })

export const keychronK1Keyboard = rule(
  'Keychron K1 Keyboard',
  ifKeychronK1,
).manipulators([])
