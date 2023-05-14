import { layer, map } from 'karabiner.ts'

export const rightSymbol = layer('f', 'symbol-right')
  .modifiers('Hyper')
  .manipulators([
    map('y').to('grave_accent_and_tilde', 'shift'),
    map('u').to('open_bracket', 'shift'),
    map('i').to('close_bracket', 'shift'),
    map('o').to('2', 'shift'),
    map('p').to('5', 'shift'),
    map('h').to('3', 'shift'),
    map('j').to('9', 'shift'),
    map('k').to('0', 'shift'),
    map('l').to('backslash', 'shift'),
    map('semicolon').to('semicolon', 'shift'),
    map('quote').to('quote', 'shift'),
    map('n').to('7', 'shift'),
    map('m').to('open_bracket'),
    map('comma').to('close_bracket'),
    map('period').to('period', 'shift'),
    map('slash').to('slash', 'shift'),
  ])

export const leftSymbol = layer('j', 'symbol-left')
  .modifiers('Hyper')
  .manipulators([
    map('q').to('`'),
    map('w').to('`', 'shift'),
    map('e').to('comma', 'shift'),
    map('r').to('period', 'shift'),
    map('t').to('hyphen', 'shift'),
    map('a').to('1', 'shift'),
    map('s').to('4', 'shift'),
    map('d').to('equal_sign', 'shift'),
    map('f').to('hyphen'),
    map('g').to('equal_sign'),
    map('x').to('8', 'shift'),
    map('c').to('slash'),
    map('v').to('backslash'),
    map('b').to('6', 'shift'),
  ])
