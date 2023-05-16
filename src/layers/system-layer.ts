import { map, simlayer } from 'karabiner.ts'

export const systemLayer = simlayer('s', 'system').manipulators([
  map('q').to('q', 'left_command'),
  map('y').to('up_arrow', 'left_control'),
  map('period').to('display_brightness_decrement'),
  map('slash').to('display_brightness_increment'),
  map('b').to('h', 'left_command'),
  map('j').to('tab', ['left_command', 'shift']),
  map('k').to('tab', 'left_command'),
  map('l').to('volume_decrement'),
  map('semicolon').to('volume_increment'),
  map('m').to('rewind'),
  map('comma').to('fastforward'),
  map('return_or_enter').to('play_or_pause'),
])
