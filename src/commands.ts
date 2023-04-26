import { map, rule } from "karabiner.ts";

// In Karabiner-Elements a 'rule' is a group of manipulators.
// layer() and simlayer() are extended rule().
export default () => rule('Shell command').manipulators([
  // Use to$() to run a shell command
  // map('⎋', ['left_option', 'left_command']).to$('rm -rf ~/wip'),
  // toApp() is shortcut for to$('open -a {app}.app')
  map('f', ['left_option', 'left_command']).toApp('Finder'),
])