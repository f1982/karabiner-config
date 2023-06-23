import { duoLayer, map, withMapper } from 'karabiner.ts'

const toArcLink = (link: string) => {
  return `osascript -e '
tell application "Arc"
	activate

	set foundTab to false
	set windowIndex to 1
	
	repeat with win in windows
		set tabIndex to 1
		repeat with t in tabs of win
			
			if URL of t is "${link}" then
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
		open location theURL
	end if
end tell'`
}

//Add a dev quick launch, only switch few apps during the dev env, to accelerate the switching speed
export const quickLinks = duoLayer('m', ',', 'quick links').manipulators([
  withMapper({
    c: 'https://github.com/f1982',
    f: 'https://chat.openai.com/c/4ff6085f-caeb-4519-9c50-1a63f4ea3990',
    a: 'http://andycao.me/',
    g: 'https://www.google.com/',
  })((k, v) => map(k).to$(toArcLink(v))),
])
