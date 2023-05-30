import { writeToProfile } from 'karabiner.ts'

import { arc } from './apps/arc'
import { vscode } from './apps/vscode'

import { desktopLayer } from './layers/desktop-layer'
import { editLayer } from './layers/edit-layer'
import { numberLayer } from './layers/number-layer'
import { removeLayer } from './layers/remove-layer'
import { selectLayer } from './layers/select-layer'
import { leftSymbol, rightSymbol } from './layers/symbol-layer'
import { systemLayer } from './layers/system-layer'

// macOS
import { dueModifiers } from './macOS/duo-modifiers'
import { holistic } from './macOS/holistic'

import { chrome } from './apps/chrome'
import { figma } from './apps/figma'
import { mail } from './apps/mail'
import { notion } from './apps/notion'
import { slack } from './apps/slack'
import { spotify } from './apps/spotify'
import { xcode } from './apps/xcode'
import { zoom } from './apps/zoom'
import { arrowsLayer } from './layers/arrows-layer'
import { emoji } from './layers/emoji-layer'
import { navigationLayer } from './layers/navigation-layer'
import { initializeParams } from './parameters'
import { quickLaunch } from './quick-launch'


initializeParams()

writeToProfile('Andy', [
  holistic,
  dueModifiers,
  quickLaunch,

  // Layers
  systemLayer,
  navigationLayer,
  editLayer,
  removeLayer,
  selectLayer,
  desktopLayer,
  numberLayer,
  leftSymbol,
  rightSymbol,
  emoji,
  arrowsLayer,

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
  figma
])
