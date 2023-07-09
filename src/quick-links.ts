import { map, withMapper } from 'karabiner.ts'

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
export const quickLinks = [
  withMapper({
    // For fun
    1: 'https://www.printables.com',
    2: 'https://www.thingiverse.com',
    3: 'https://soundcloud.com',
    4: 'https://youtube.com',
    // Debugging
    q: 'http://localhost:3000',
    w: 'http://localhost:4200',
    e: 'http://localhost:8000',
    r: 'http://localhost:8080',
    // t: 'https://twitter.com',
    t: 'https://translate.google.com',
    // Tools
    g: 'https://chat.openai.com',
    s: 'https://www.google.com',
    // d: '',
    f: 'https://github.com/f1982',
    // g: '',

    // For work
    // z: '',
    // x: '',
    c: 'https://leaderkit.atlassian.net/browse/T2KAN-3911', //mnemonic: task Collection
    v: 'https://github.com/BoardPro/boardpro', //mnemonic: Version control
    b: 'https://leaderkit.atlassian.net/jira/software/c/projects/T2KAN/boards', //mnemonic: kanban Board
  })((k, v) => map(k).to$(toArcLink(v))),
]
