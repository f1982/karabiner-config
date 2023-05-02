import { ifApp, map, rule } from 'karabiner.ts'

export const ifSpotify = ifApp('^com.spotify.client$')

export const spotify = rule('Spotify', ifSpotify).manipulators([
  // Previous track
  map('left_control')
    .to('left_control')
    .toIfAlone('left_arrow', 'left_command'),
  // Next track
  map('left_option')
    .to('left_option')
    .toIfAlone('right_arrow', 'left_command'),
])
