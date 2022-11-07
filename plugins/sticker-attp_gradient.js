import { sticker } from '../lib/sticker.js'
import fs from 'fs'
import fetch from 'node-fetch'

let handler = async(m, { conn, text, args, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
let urls = ['https://violetics.pw/api/canvas/quotes?apikey=beta&text=' + teks + '&author=' + name,
'https://api.lolhuman.xyz/api/attp2?apikey=' + global.lolkey + '&text=' + teks,
'https://api.lolhuman.xyz/api/attp?apikey=' + global.lolkey + '&text=' + teks,
'https://api.lolhuman.xyz/api/hartacustom?apikey=' + global.lolkey + '&text=' + teks,
'https://api.lolhuman.xyz/api/ttp2?apikey=' + global.lolkey + '&text=' + teks,
'https://api.lolhuman.xyz/api/ttp3?apikey=' + global.lolkey + '&text=' + teks,
'https://api.lolhuman.xyz/api/ttp4?apikey=' + global.lolkey + '&text=' + teks,
'https://api.lolhuman.xyz/api/ttp5?apikey=' + global.lolkey + '&text=' + teks,
'https://api.lolhuman.xyz/api/ttp6?apikey=' + global.lolkey + '&text=' + teks,
'https://api.lolhuman.xyz/api/ttp?apikey=' + global.lolkey + '&text=' + teks,
'https://leyscoders-api.herokuapp.com/api/ttp1?text=' + teks + '&apikey=MIMINGANZ',
'https://leyscoders-api.herokuapp.com/api/ttp2?text=' + teks + '&apikey=MIMINGANZ',
'https://violetics.pw/api/canvas/attp-gradient2?apikey=beta&text=' + teks,
'https://violetics.pw/api/canvas/attp-gradient?apikey=beta&text=' + teks,
'https://violetics.pw/api/canvas/ttp-gradient?apikey=beta&text=' + teks]

            let lisn = ["Quotes",
            "Attp 2",
            "Attp",
            "Harta Tahta",
            "TTP 2",
            "TTP 3",
            "TTP 4",
            "TTP 5",
            "TTP 6",
            "TTP",
            "TTP 7",
            "TTP 8",
            "Attp Gradient 2",
            "Attp Gradient",
            "TTP Gradient"
            ]
            let row = Object.keys(urls, lisn).map((v, index) => ({
		title: htjava + ' ' + lisn[v] + ' Sticker',
		description: 'By ' + wm,
		rowId: usedPrefix + 'get ' + urls[v]
	}))
	let button = {
		buttonText: `☂️ Tema Disini ☂️`,
		description: `⚡ Silakan pilih tema di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}
handler.help = ['ttpg', 'attpg', 'attpg2', 'quotex', 'tahta', 'ttp1', 'ttp2', 'ttp3', 'ttp4', 'ttp5', 'ttp6', 'ttp7', 'ttp8', 'attp1', 'attp2', 'hartacustom'].map(v => v + ' <text>')
handler.command = /^(hartacustom|attp(g2|[12])|quotex|attpg|t(ahta|tp[1-8g]))$/i
handler.tags = ['sticker']
export default handler