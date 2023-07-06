import { duoLayer, simlayer, writeToProfile } from 'karabiner.ts'

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
import { finder } from './apps/finder'
import { mail } from './apps/mail'
import { notion } from './apps/notion'
import { slack } from './apps/slack'
import { spotify } from './apps/spotify'
import { xcode } from './apps/xcode'
import { zoom } from './apps/zoom'
import { arrowsLayer } from './layers/arrows-layer'
import { emoji } from './layers/emoji-layer'
import { navigationLayer } from './layers/navigation-layer'
import { mouseCursor } from './macOS/mouse'
import { quickLaunch } from './quick-launch'
import { quickLinks } from './quick-links'

const rules = [
  holistic,
  dueModifiers,
  duoLayer('j', '/', 'quick launch').manipulators(quickLaunch),
  duoLayer('m', ',', 'quick links').manipulators(quickLinks),
  duoLayer('f', 'z', 'system').manipulators(systemLayer),
  duoLayer('f', 'q', 'navigation').manipulators(navigationLayer),
  duoLayer('f', 'w', 'mouse').manipulators(mouseCursor),

  simlayer('e', 'edit').manipulators(editLayer),
  // duoLayer('e', 'j', 'edit').manipulators(editLayer),
  simlayer('r', 'remove').manipulators(removeLayer),
  // duoLayer('r', 'j', 'remove').manipulators(removeLayer),
  simlayer('w', 'word-select').manipulators(selectLayer),
  simlayer('d', 'windows management').manipulators(desktopLayer),
  simlayer('v', 'Number layer').manipulators(numberLayer),
  duoLayer('v', 'z', 'Number layer').manipulators(numberLayer),
  simlayer('f', 'symbol-right').manipulators(rightSymbol),
  simlayer('j', 'symbol-left').manipulators(leftSymbol),
  duoLayer('z', 'x', 'z-mode').manipulators(emoji),
  duoLayer('j', 'p', 'arrow-keys').manipulators(arrowsLayer),
  
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
  figma,
  finder,
]

writeToProfile('Andy', rules, {
  'basic.simultaneous_threshold_milliseconds': 49,
  'basic.to_if_alone_timeout_milliseconds': 1000,
  'basic.to_if_held_down_threshold_milliseconds': 500,
  'basic.to_delayed_action_delay_milliseconds': 500,
})
