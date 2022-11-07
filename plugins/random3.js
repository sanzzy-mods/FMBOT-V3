import fetch from 'node-fetch'
import fs from 'fs'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
let imgr = flaaa.getRandom()

if (command == 'odesuhon') {
let f = await fetch(`https://otakudesu-api.herokuapp.com/api/home`)
let x = await f.json()
let dapet = x.home.on_going
	let row = Object.values(dapet).map((v, index) => ({
		title: v.title,
		description: '\n⌚ id: ' + v.id + '\n⏲️ thumb: ' + v.thumb + '\n👁️ episode: ' + v.episode + '\n📎 uploaded_on: ' + v.uploaded_on + '\n📎 day_updated: ' + v.day_updated + '\n⏲️ link: ' + v.link, 
		rowId: usedPrefix + 'ss ' + v.link
	}))
	let button = {
		buttonText: `☂️ Otaku Search Disini ☂️`,
		description: `⚡ Silakan pilih Otaku Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}

if (command == 'odesuhcom') {
let f = await fetch(`https://otakudesu-api.herokuapp.com/api/home`)
let x = await f.json()
let dapet = x.home.complete
	let row = Object.values(dapet).map((v, index) => ({
		title: v.title,
		description: '\n⌚ id: ' + v.id + '\n⏲️ thumb: ' + v.thumb + '\n👁️ episode: ' + v.episode + '\n📎 uploaded_on: ' + v.uploaded_on + '\n📎 score: ' + v.score + '\n⏲️ link: ' + v.link, 
		rowId: usedPrefix + 'ss ' + v.link
	}))
	let button = {
		buttonText: `☂️ Otaku Search Disini ☂️`,
		description: `⚡ Silakan pilih Otaku Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}

if (command == 'odesucom') {
let f = await fetch(`https://otakudesu-api.herokuapp.com/api/complete`)
let x = await f.json()
let dapet = x.animeList
	let row = Object.values(dapet).map((v, index) => ({
		title: v.title,
		description: '\n⌚ id: ' + v.id + '\n⏲️ thumb: ' + v.thumb + '\n👁️ episode: ' + v.episode + '\n📎 uploaded_on: ' + v.uploaded_on + '\n📎 score: ' + v.score + '\n⏲️ link: ' + v.link, 
		rowId: usedPrefix + 'ss ' + v.link
	}))
	let button = {
		buttonText: `☂️ Otaku Search Disini ☂️`,
		description: `⚡ Silakan pilih Otaku Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}

if (command == 'odesupage') {
let f = await fetch(`https://otakudesu-api.herokuapp.com/api/complete/page/${text}`)
let x = await f.json()
let dapet = x.animeList
	let row = Object.values(dapet).map((v, index) => ({
		title: v.title,
		description: '\n⌚ id: ' + v.id + '\n⏲️ thumb: ' + v.thumb + '\n👁️ episode: ' + v.episode + '\n📎 uploaded_on: ' + v.uploaded_on + '\n📎 score: ' + v.score + '\n⏲️ link: ' + v.link, 
		rowId: usedPrefix + 'ss ' + v.link
	}))
	let button = {
		buttonText: `☂️ Otaku Search Disini ☂️`,
		description: `⚡ Silakan pilih Otaku Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}

if (command == 'odesusche') {
let f = await fetch(`https://otakudesu-api.herokuapp.com/api/schedule`)
let x = await f.json()
let dapet = x.scheduleList
let dapets = Object.values(x.scheduleList.animeList).map(v => ({
		description: '\n⌚ id: ' + v.id + '\n⏲️ link: ' + v.link }))
	let row = Object.values(dapet).map((v, index) => ({
		title: 'Hari ' + v.day,
		dapets,
		rowId: usedPrefix + 'ss ' + dapet[0].animeList[0].link
	}))
	let button = {
		buttonText: `☂️ Otaku Search Disini ☂️`,
		description: `⚡ Silakan pilih Otaku Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}

if (command == 'odesugen') {
let f = await fetch(`https://otakudesu-api.herokuapp.com/api/genres`)
let x = await f.json()
let dapet = x.genreList
	let row = Object.values(dapet).map((v, index) => ({
		title: v.genre_name,
		description: '\n⌚ image_link: ' + v.image_link + '\n⏲️ link: ' + v.link,
		rowId: usedPrefix + 'get ' + v.image_link
	}))
	let button = {
		buttonText: `☂️ Otaku Search Disini ☂️`,
		description: `⚡ Silakan pilih Otaku Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}

if (command == 'odesusea') {
let f = await fetch(`https://otakudesu-api.herokuapp.com/api/search/${text}`)
let x = await f.json()
let dapet = x.search_results.genre_list
	let row = Object.values(dapet).map((v, index) => ({
		title: x.search_results.title,
		description: '\n⌚ link: ' + x.search_results.link + '\n⌚ thumb: ' + x.search_results.thumb + '\n⌚ id: ' + x.search_results.id + '\n⌚ status: ' + x.search_results.status + '\n⌚ score: ' + x.search_results.score + '\n⌚ genre_title: ' + v.genre_title +  '\n⌚ genre_link: ' + v.genre_link +  '\n⌚ genre_id: ' + v.genre_id,
		rowId: usedPrefix + 'get ' + v.image_link
	}))
	let button = {
		buttonText: `☂️ Otaku Search Disini ☂️`,
		description: `⚡ Silakan pilih Otaku Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}


if (command == 'stikwa') {
if (!text) throw `Contoh penggunaan ${usedPrefix}${command} anjing`
let f = await fetch(`https://betabotz-api.herokuapp.com/api/search/sticker?q=${text}&apikey=BetaBotz`)
let x = await f.json()
let url = x.result
await conn.sendFile(m.chat, url.getRandom(), 'sticker.webp', '', m, { asSticker: true })

await conn.sendButton(m.chat, `*Mau Lagi Gak?*
Pencet di bawah bang ☺️`, author, null, [
                ['Next', `${usedPrefix}${command} ${text}`]
            ], m)
}

if (command == 'gcwa') {
if (!text) throw `Contoh penggunaan ${usedPrefix}${command} Fangz`
let f = await fetch(`https://betabotz-api.herokuapp.com/api/search/grupwa?grup=${text}&apikey=BetaBotz`)
let jsons = await f.json()
let dapet = jsons.result
	let row = Object.values(dapet).map((v, index) => ({
		title: v.nama,
		description: '\n⌚ Link: ' + v.link,
		rowId: usedPrefix + 'inspect ' + v.link
	}))
	let button = {
		buttonText: `☂️ Otaku Search Disini ☂️`,
		description: `⚡ Silakan pilih Otaku Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}

if (command == 'stiktele') {
if (!text) throw `Contoh penggunaan ${usedPrefix}${command} https://t.me/addstickers/geestickerpack`
let f = await fetch(`https://betabotz-api.herokuapp.com/api/download/telesticker?url=${text}&apikey=BetaBotz`)
let x = await f.json()
let url = x.result
await conn.sendFile(m.chat, url.getRandom(), 'sticker.webp', '', m)

await conn.sendButton(m.chat, hiasan, `Click Button di bawah jika ingin mengulang`, thumb, [
                ['NEXT', `${usedPrefix}${command} ${text}`]
            ], m)
}

if (command == 'ytmp4dl') {
if (!text) throw `Contoh:\n${usedPrefix + command} https://youtu.be/6l5V3BWDcMw`
let f = await fetch(`https://betabotz-api.herokuapp.com/api/download/ytmp4?url=${text}&apikey=BetaBotz`)
let x = await f.json()
await conn.sendButton(m.chat, `*Result:*
*Title:* ${x.result.title}
*channel:* ${x.result.channel}
*published:* ${x.result.published}
*views:* ${x.result.views}
`, wm, `${x.result.thumb}`, [
                ['Next', `${usedPrefix}get ${x.result.url}`]
            ], m, { quoted: fakes })
}

if (command == 'ytmp3dl') {
if (!text) throw `Contoh:\n${usedPrefix + command} https://youtu.be/6l5V3BWDcMw`
let f = await fetch(`https://betabotz-api.herokuapp.com/api/download/ytmp3?url=${text}&apikey=BetaBotz`)
let x = await f.json()
await conn.sendButton(m.chat, `*Result:*
*Title:* ${x.result.title}
*channel:* ${x.result.channel}
*published:* ${x.result.published}
*views:* ${x.result.views}
`, wm, `${x.result.thumb}`, [
                ['Next', `${usedPrefix}get ${x.result.url}`]
            ], m, { quoted: fakes })
}

if (command == 'playmp4') {
if (!text) throw `Contoh:\n${usedPrefix + command} Hello`
let f = await fetch(`https://betabotz-api.herokuapp.com/api/yt/playmp4?query=${text}&apikey=BetaBotz`)
let x = await f.json()
await conn.sendButton(m.chat, `*Result:*
*Title:* ${x.title}
*channel:* ${x.channel}
*published:* ${x.published}
*views:* ${x.views}
`, wm, `${x.thumb}`, [
                ['Next', `${usedPrefix}get ${x.url}`]
            ], m, { quoted: fakes })
}

if (command == 'tiktok3') {
if (!text) throw `Contoh:\n${usedPrefix + command} https://vt.tiktok.com/ZSeJ7P56G`
let f = await fetch(`https://betabotz-api.herokuapp.com/api/download/tiktok?url=${text}&apikey=BetaBotz`)
let x = await f.json()
await conn.sendButton(m.chat, `*Result:*
`, wm, `${imgr + command}`, [
                ['Get Wm', `${usedPrefix}get ${x.result.watermark}`],
                ['Get NoWm', `${usedPrefix}get ${x.result.nowatermark}`],
                ['Get Audio', `${usedPrefix}get ${x.result.audio}`]
            ], m, { quoted: fakes })
}

if (command == 'mediafire3') {
if (!text) throw `Contoh:\n${usedPrefix + command} https://www.mediafire.com/file/v035jsup2d2wp1n/textprome.js/file`
let f = await fetch(`https://betabotz-api.herokuapp.com/api/download/mediafire?url=${text}&apikey=BetaBotz`)
let x = await f.json()
await conn.sendButton(m.chat, `*Result:*
*Title:* ${x.result.nama}
*Mime:* ${x.result.mime}
*Size:* ${x.result.size}
*Link:* ${x.result.link}
`, wm, `${imgr + command}`, [
                ['Get', `${usedPrefix}get ${x.result.link}`]
            ], m, { quoted: fakes })
}

if (command == 'twitterimg') {
if (!text) throw `Contoh:\n${usedPrefix + command} https://twitter.com/renaldypjs/status/1343516524934438912`
let f = await fetch(`https://betabotz-api.herokuapp.com/api/downloader/twitterimg?url=${text}&apikey=BetaBotz`)
let x = await f.json()
await conn.sendButton(m.chat, `*Result:*
*Link:* ${x.result}
`, wm, `${x.result}`, [
                ['Get', `${usedPrefix}get ${x.result}`]
            ], m, { quoted: fakes })
}

if (command == 'twittervid') {
if (!text) throw `Contoh:\n${usedPrefix + command} https://twitter.com/weareoneEXO/status/1344811074864914433`
let f = await fetch(`https://betabotz-api.herokuapp.com/api/downloader/twittervid?url=${text}&apikey=BetaBotz`)
let x = await f.json()
await conn.sendButton(m.chat, `*Result:*
*Link:* ${x.result}
`, wm, `${imgr + command}`, [
                ['Get', `${usedPrefix}get ${x.result}`]
            ], m, { quoted: fakes })
}

if (command == 'asupan2') {
if (!args[0]) {
	const sections = [
    {
	title: "Theme",
	rows: [
	{title: "asupan", rowId: usedPrefix + 'asupan asupan'},
	{title: "bocil", rowId: usedPrefix + 'asupan bocil'},
	{title: "cecan", rowId: usedPrefix + 'asupan cecan'},
	{title: "euni", rowId: usedPrefix + 'asupan euni'},
	{title: "gheayubi", rowId: usedPrefix + 'asupan gheayubi'},
	{title: "hijaber", rowId: usedPrefix + 'asupan hijaber'},
	{title: "rikagusriani", rowId: usedPrefix + 'asupan rikagusriani'},
	{title: "santuy", rowId: usedPrefix + 'asupan santuy'},
	{title: "ukhty", rowId: usedPrefix + 'asupan ukhty'}
	]
    }
]

const listMessage = {
  text: `⚡ Silakan pilih tema di tombol di bawah...\n*Ketik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
  footer: global.wm,
  title: `⎔───「 ${command} 」───⎔`,
  buttonText: `☂️ Tema Disini ☂️`,
  sections
}
conn.sendMessage(m.chat, listMessage, m)
}

if (args[0] == 'asupan') {
let res = `https://betabotz-api.herokuapp.com/api/asupan/asupan?apikey=BetaBotz`
await conn.sendButton(m.chat, `*Result:* ${command}
`, wm, res, [
                ['Next', `${usedPrefix + command}`]
            ], m, { quoted: fakes })
            }
if (args[0] == 'bocil') {
let res = `https://betabotz-api.herokuapp.com/api/asupan/bocil?apikey=BetaBotz`
await conn.sendButton(m.chat, `*Result:* ${command}
`, wm, res, [
                ['Next', `${usedPrefix + command}`]
            ], m, { quoted: fakes })
            }
if (args[0] == 'cecan') {
let res = `https://betabotz-api.herokuapp.com/api/asupan/cecan?apikey=BetaBotz`
await conn.sendButton(m.chat, `*Result:* ${command}
`, wm, res, [
                ['Next', `${usedPrefix + command}`]
            ], m, { quoted: fakes })
            }
if (args[0] == 'euni') {
let res = `https://betabotz-api.herokuapp.com/api/asupan/euni?apikey=BetaBotz`
await conn.sendButton(m.chat, `*Result:* ${command}
`, wm, res, [
                ['Next', `${usedPrefix + command}`]
            ], m, { quoted: fakes })
            }
if (args[0] == 'gheayubi') {
let res = `https://betabotz-api.herokuapp.com/api/asupan/gheayubi?apikey=BetaBotz`
await conn.sendButton(m.chat, `*Result:* ${command}
`, wm, res, [
                ['Next', `${usedPrefix + command}`]
            ], m, { quoted: fakes })
            }
if (args[0] == 'hijaber') {
let res = `https://betabotz-api.herokuapp.com/api/asupan/hijaber?apikey=BetaBotz`
await conn.sendButton(m.chat, `*Result:* ${command}
`, wm, res, [
                ['Next', `${usedPrefix + command}`]
            ], m, { quoted: fakes })
            }
if (args[0] == 'rikagusriani') {
let res = `https://betabotz-api.herokuapp.com/api/asupan/rikagusriani?apikey=BetaBotz`
await conn.sendButton(m.chat, `*Result:* ${command}
`, wm, res, [
                ['Next', `${usedPrefix + command}`]
            ], m, { quoted: fakes })
            }
if (args[0] == 'santuy') {
let res = `https://betabotz-api.herokuapp.com/api/asupan/santuy?apikey=BetaBotz`
await conn.sendButton(m.chat, `*Result:* ${command}
`, wm, res, [
                ['Next', `${usedPrefix + command}`]
            ], m, { quoted: fakes })
            }
if (args[0] == 'ukhty') {
let res = `https://betabotz-api.herokuapp.com/api/asupan/ukhty?apikey=BetaBotz`
await conn.sendButton(m.chat, `*Result:* ${command}
`, wm, res, [
                ['Next', `${usedPrefix + command}`]
            ], m, { quoted: fakes })
            }
}

}
handler.command = handler.help = [
'asupan2',
'gcwa',
'mediafire3',
'odesucom',
'odesugen',
'odesuhcom',
'odesuhon',
'odesupage',
'odesusche',
'odesusea',
'playmp4',
'stiktele',
'stikwa',
'tiktok3',
'twitterimg',
'twittervid',
'ytmp3dl',
'ytmp4dl']
handler.tags = ['random']

export default handler