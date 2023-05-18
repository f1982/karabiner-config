import { duoLayer, map, withMapper } from 'karabiner.ts'

export const quickLaunch = duoLayer(
  'period',
  'slash',
  'quick launch',
).manipulators([
  withMapper({
    ',': 'System Settings',
    c: 'Calendar',
    f: 'Finder',
    w: 'WeChat',
    v: 'Visual Studio Code',
    e: 'Mail',
    t: 'Warp',
    b: 'Arc',
    r: 'Notion',
    s: 'Slack',
    a: 'Spotify',
    g: 'MacGPT',
    x: 'XCode',
    z: 'zoom.us',
  })((k, v) => map(k).toApp(v)),
])
