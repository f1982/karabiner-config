import { duoLayer, map } from 'karabiner.ts'

export const systemLayer = duoLayer('f', 'z', 'system').manipulators([
  //Quite current app
  //Mnemonic: (q)uite
  map('return_or_enter').to('q', 'left_command'),
  // map('y').to('up_arrow', 'left_control'),
  //Show only front app, hide all others
  map('h').to('h', ['left_command', 'left_option']),
  map('period').to('display_brightness_decrement'),
  map('slash').to('display_brightness_increment'),

  //Hide current focusing app
  map('m').to('hyphen', 'left_command'),
  map('n').to('m', 'left_command'),

  //Mnemonic: f(f)ade out
  map('j').to('tab', ['left_command', 'shift']),
  map('k').to('tab', 'left_command'),
  map('l').to('volume_decrement'),
  map('semicolon').to('volume_increment'),
  
  // Zoom in and zoom out
  map('o').to('hyphen', 'left_command'),
  map('p').to('equal_sign', 'left_command'),

  // Next & prev
  map('m').to('rewind'),
  map(',').to('fastforward'),
  
  map('spacebar').to('play_or_pause'),
  
  // Show desktop
  map('y').to('f10'),
  map('d').to('f10'),
  map('quote').to('f10'),
  map('g').to('f10'),
])
