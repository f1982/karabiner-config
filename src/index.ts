import { writeToProfile } from 'karabiner.ts'

import { arc } from './apps/arc'
import { vscode } from './apps/vscode'

import { desktopLayer } from './layers/desktop-layer'
import { editLayer } from './layers/edit-layer'
import { removeLayer } from './layers/remove-layer'
import { selectLayer } from './layers/select-layer'
import { systemLayer } from './layers/system-layer'
import { numberLayer } from './layers/number-layer'
import { leftSymbol, rightSymbol } from './layers/symbol-layer'
// system
import { quickLaunch } from './quick-launch'
import { notion } from './apps/notion'
import { holistic } from './holistic'
import { slack } from './apps/slack'
import { chrome } from './apps/chrome'
import { zoom } from './apps/zoom'
import { mail } from './apps/mail'
import { spotify } from './apps/spotify'
import { emoji } from './layers/emoji-layer'
import { xcode } from './apps/xcode'

writeToProfile('Andy', [
  holistic,
  quickLaunch,

  // Layers
  systemLayer,
  editLayer,
  removeLayer,
  selectLayer,
  desktopLayer,
  numberLayer,
  leftSymbol,
  rightSymbol,
  emoji,

  // Apps
  vscode,
  arc,
  zoom,
  chrome,
  mail,
  spotify,
  xcode,
  notion,
  slack,
])
