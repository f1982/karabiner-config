import { defaultComplexModificationsParameters, defaultDuoLayerParameters, defaultSimlayerParameters, writeToProfile } from 'karabiner.ts'

import { arc } from './apps/arc'
import { vscode } from './apps/vscode'

import { desktopLayer } from './layers/desktop-layer'
import { editLayer } from './layers/edit-layer'
import { removeLayer } from './layers/remove-layer'
import { selectLayer } from './layers/select-layer'
import { systemLayer } from './layers/system-layer'
import { numberLayer } from './layers/number-layer'
import { leftSymbol, rightSymbol } from './layers/symbol-layer'

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
import { navigationLayer } from './layers/navigation-layer'
import { figma } from './apps/figma'

defaultComplexModificationsParameters['basic.simultaneous_threshold_milliseconds'] = 41
defaultComplexModificationsParameters['basic.to_if_alone_timeout_milliseconds'] = 1001
defaultComplexModificationsParameters['basic.to_if_held_down_threshold_milliseconds'] = 501
defaultComplexModificationsParameters['basic.to_delayed_action_delay_milliseconds'] = 501

writeToProfile('Andy', [
  holistic,
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
