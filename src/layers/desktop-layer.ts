import { FromKeyParam, ToKeyParam, map, simlayer } from 'karabiner.ts'

export const desktopLayer = simlayer('d', 'desktop').manipulators(
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
