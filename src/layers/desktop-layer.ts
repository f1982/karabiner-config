import { FromKeyParam, ToKeyParam, layer, map } from 'karabiner.ts'

export const desktopLayer = layer('d', 'desktop')
  .modifiers('Hyper')
  .manipulators(
    [
      'y',
      'u',
      'i',
      'h',
      'j',
      'k',
      'l',
      'semicolon',
      'quote',
      'n',
      'm',
      'comma',
      'spacebar',
    ].map((key) =>
      map(key as FromKeyParam).to(key as ToKeyParam, ['option', 'control']),
    ),
  )
