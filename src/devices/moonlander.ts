import { ifDevice, rule } from 'karabiner.ts'

export const ifMoonlander = ifDevice({ vendor_id: 12951, product_id: 6505 })

export const moonlander = rule('Moonlander', ifMoonlander).manipulators([])