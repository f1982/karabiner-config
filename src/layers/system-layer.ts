import { map, toKey } from 'karabiner.ts'

const config = {
  quiteApp: toKey('q', 'left_command'),
  showOnlyCurrentApp: toKey('h', ['left_command', 'left_option']),
  hideCurrentApp: toKey('h', 'left_command'),
  increaseBrightness: toKey('display_brightness_increment'),
  decreaseBrightness: toKey('display_brightness_decrement'),
  minimiseWindow: toKey('m', 'left_command'),

  switchApps: toKey('tab', 'left_command'),
  switchAppsOpposite: toKey('tab', ['left_command', 'shift']),
  zoomIn: toKey('equal_sign', 'left_command'),
  zoomOut: toKey('hyphen', 'left_command'),
}
export const systemLayer = [
  //Quite current app
  map('return_or_enter').to(config.quiteApp),
  // map('y').to('up_arrow', 'left_control'),
  map('s').to(config.showOnlyCurrentApp),
  map('h').to(config.hideCurrentApp),
  map('period').to(config.decreaseBrightness),
  map('slash').to(config.increaseBrightness),
  map('n').to(config.minimiseWindow),
  map('j').to(config.switchAppsOpposite),
  map('k').to(config.switchApps),

  // Volume
  map('l').to('volume_decrement'),
  map('semicolon').to('volume_increment'),
  // Zoom in and zoom out
  map('o').to(config.zoomOut),
  map('p').to(config.zoomIn),

  // Next & prev
  map('m').to('rewind'),
  map(',').to('fastforward'),
  map('spacebar').to('play_or_pause'),

  // Show desktop
  map('y').to('f10'),
  map('d').to('f10'),
  map('quote').to('f10'),
  map('g').to('f10'),
]
