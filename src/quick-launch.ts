import { duoLayer, map, withMapper } from 'karabiner.ts'

//Add a dev quick launch, only switch few apps during the dev env, to accelerate the switching speed
export const quickLaunch = duoLayer(
  // 'j',
  // '/',
  '.',
  '/',
  'quick launch',
).manipulators([
  withMapper({
    q: 'System Settings',
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