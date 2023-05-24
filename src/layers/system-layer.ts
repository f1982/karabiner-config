import { map, simlayer } from 'karabiner.ts'

export const systemLayer = simlayer('s', 'system').manipulators([
  //Quite current app
  //Mnemonic: (q)uite
  map('q').to('q', 'left_command'),
  map('y').to('up_arrow', 'left_control'),
  //Show only front app, hide all others
  map('u').to('h', ['left_command', 'left_option']),
  map('period').to('display_brightness_decrement'),
  map('slash').to('display_brightness_increment'),
  //Hide current focusing app
  //Mnemonic: f(f)ade out
  map('f').to('h', 'left_command'),
  map('j').to('tab', ['left_command', 'shift']),
  map('k').to('tab', 'left_command'),
  map('l').to('volume_decrement'),
  map('semicolon').to('volume_increment'),

  // Zoom in and zoom out
  map('m').to('hyphen', 'left_command'),
  map('comma').to('equal_sign', 'left_command'),

  map('return_or_enter').to('play_or_pause'),
  // Show desktop
  map('quote').to('f10'),
  map('g').to('f10'),
])
