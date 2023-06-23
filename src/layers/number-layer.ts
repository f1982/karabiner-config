import { map, withMapper } from 'karabiner.ts'

export const numberLayer = [
  map('y').to('8', 'shift'),
  map('p').to('equal_sign', 'shift'),
  map('h').to('slash'),
  map('semicolon').to('hyphen'),
  map('slash').to('period'),
  withMapper({
    u: '7',
    i: '8',
    o: '9',
    j: '4',
    k: '5',
    l: '6',
    n: '0',
    m: '1',
    comma: '2',
    period: '3',
  } as const)((k, v) => map(k).to(v)),
]
