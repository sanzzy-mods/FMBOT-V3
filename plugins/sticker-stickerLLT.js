import fetch from 'node-fetch'
import axios from 'axios'
import { stickerLine } from '@bochilteam/scraper'

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
try {
if (!text) throw '*Masukkan link*\n Example: https://store.line.me/stickershop/product/2821/en'
let res = await axios('https://violetics.pw/api/downloader/linesticker?apikey=beta&url=' + text)
let json = res.data
let dapet = json.result.sticker
	let row = Object.keys(dapet).map((v, index) => ({
		title: `📌 Line Sticker: ${1 + index}`,
		description: '\n⏲️ Title: ' + json.result.title,
		rowId: usedPrefix + 'get ' + dapet[v]
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
	} catch {
	const json = await stickerLine(args[0])
	let row = Object.values(json).map((v, index) => ({
		title: index + v.title,
		description: '\n• Link: ' + v.sticker,
		rowId: usedPrefix + 'fetchsticker ' + v.sticker + ' lib'
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
	}
}
handler.help = ['linestick'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(s((ti(cker|k)lines|linedl)|ti(cker|k)line)|linesti(ck(dl|er)|k))$/i

handler.exp = 0
handler.register = false
handler.limit = true


export default handler