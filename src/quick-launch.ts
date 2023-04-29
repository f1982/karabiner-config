import { FromKeyParam, map, simlayer } from 'karabiner.ts'

const key2app: { key: FromKeyParam; app: string }[] = [
  { key: ',', app: 'System Settings' },
  { key: 'w', app: 'Wechat' },
  { key: 'e', app: 'Email' },
  { key: 'r', app: 'Notion' },
  { key: 't', app: 'Warp' },
  { key: 'a', app: 'Spotify' },
  { key: 's', app: 'Slack' },
  { key: 'd', app: 'Figma' },
  { key: 'g', app: 'Photo' },
  { key: 'z', app: 'Zoom' },
  { key: 'x', app: 'XCode' },
  { key: 'b', app: 'Arc' },
]

export const quickLaunch = simlayer('spacebar', 'quick launch').manipulators(
  key2app.map((item) => map(item.key).toApp(item.app)),
)
