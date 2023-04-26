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

// ! Change 'Examples' to your Karabiner-Elements Profile name.
// + Create a new profile if needed.
writeToProfile('Examples', [
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

  // Apps
  vscode,
  arc,
  notion,
  slack,
])
