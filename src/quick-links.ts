import { duoLayer, map, withMapper } from 'karabiner.ts'

// https://github.com/raycast/extensions/pull/4240/files
const toArcLink = (link: string) => {
  return `osascript -e '
tell application "Arc"
	activate

	set foundTab to false
	set windowIndex to 1
	
	repeat with win in windows
		set tabIndex to 1
		repeat with t in tabs of win
			
			if URL of t contains "${link}" then
				set foundTab to true
				tell window windowIndex
					tell tab tabIndex to select
				end tell
				exit repeat
			end if
			set tabIndex to tabIndex + 1
		end repeat
		if foundTab then exit repeat
		set windowIndex to windowIndex + 1
	end repeat
	if not foundTab then
		open location "${link}"
	end if
end tell'`
}

//Add a dev quick launch, only switch few apps during the dev env, to accelerate the switching speed
export const quickLinks = duoLayer('m', ',', 'quick links').manipulators([
  withMapper({
    q: 'http://localhost:3000',
    w: 'http://localhost:4200',
    e: 'http://localhost:8000',
    r: 'http://localhost:8080',
    t: 'https://twitter.com',
    //
    a: 'https://chat.openai.com',
    s: 'http://andycao.me/',
    d: 'https://github.com/f1982',
    f: 'https://www.google.com/',
    // g: '',

    // for work?
    // z: '',
    // x: '',
    // c: '',
    // v: '',
    // b: '',
  })((k, v) => map(k).to$(toArcLink(v))),
])
