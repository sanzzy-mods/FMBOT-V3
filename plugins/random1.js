import fetch from 'node-fetch'

let toM = a => '@' + a.split('@')[0]
let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

if (command == 'jadian2') {
let ps = groupMetadata.participants.map(v => v.id)
    let a = ps.getRandom()
    let b
    do b = ps.getRandom()
    while (b === a)
    m.reply(`${toM(a)} ❤️ ${toM(b)}`, null, {
        mentions: [a, b]
    })
    }
    if (command == 'menikah') {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`*${toM(a)}, KAU HARUS MENIKAH ${toM(b)}, kamu MENJADI PASANGAN YANG BAIK 💓*`, null, {
mentions: [a, b]
})
}

if (command == 'metercinta') {
if (!text) throw `Contoh penggunaan ${usedPrefix}${command} terserah`
conn.reply(m.chat, `
*❤️❤️ METER CINTA ❤️❤️*
*cinta dari ${text} itu untuk kamu* *${Math.floor(Math.random() * 100)}%* *dari 100%*
*kamu harus memintanya untuk menjadi pacar kamu ?*
`.trim(), m, m.mentionedJid ? {
contextInfo: {
mentionedJid: m.mentionedJid
}} : {})
}

if (command == 'bertanya') {
if (!text) throw `Contoh penggunaan ${usedPrefix}${command} terserah`
m.reply(`
*⁉️ PERTANYAAN ⁉️*
 
*PERTANYAAN:* ${text}
*TANGGAPAN:* ${['Ya','Mungkin ya','Mungkin','Mungkin tidak','Tidak','Tidak mungkin'].getRandom()}
`.trim(), null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})
}

if (command == 'bokep') {
if (!text) throw `Contoh penggunaan ${usedPrefix}${command} 1`
let pe = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
let pw = pe.getRandom()
if (text == pw) {
conn.sendFile(m.chat, 'https://yog-apikey.herokuapp.com/api/bokep?apikey=YogGanz', 'asupan.mp4', wm, m)
} else {
return m.reply('Mampus Salah Nomor')
}
}

if (command == 'kusonime') {
if (!text) throw `Contoh penggunaan ${usedPrefix}${command} terserah`
let res = await fetch(`https://yog-apikey.herokuapp.com/api/anime/kusonime?search=${text}&apikey=YogGanz`)
  let sul = await res.json()
  let has = sul.result
  await conn.sendButton(m.chat, `*Judul:*\n${has.title}
  *Judul:*\n${has.title_jp}
  *Judul:*\n${has.title}
*Genre:* ${has.genre}
  *Season:* ${has.season}
  *Produser:* ${has.producer}
  *Type:* ${has.type}
  *Status:* ${has.status}
  *Episode:* ${has.total_episode}
  *Score:* ${has.score}
  *Durasi:* ${has.duration}
  *Rilis:* ${has.released_on}
  *Deskripsi:* ${has.description}`, author, has.thumb, [
                ['menu', `${usedPrefix}menu`]
            ], m, { quoted: m })
}

if (command == 'membucin') {
let res = await fetch(`https://yog-apikey.herokuapp.com/api/bucin?apikey=YogGanz`)
  let sul = await res.json()
  let has = sul.result
  await conn.sendButton(m.chat, `*Bucin:*\n${has.result}`, author, null, [
                ['Next', `${usedPrefix + command}`]
            ], m, { quoted: m })
}

if (command == 'mencerpen') {
let res = await fetch(`https://yog-apikey.herokuapp.com/api/cerpen?apikey=YogGanz`)
  let sul = await res.json()
  let has = sul.result.result
  await conn.sendButton(m.chat, `*Judul:* ${has.title}
  *Pengarang:* ${has.pengarang}
  *Kategori:* ${has.kategori}
  *Type:* ${has.cerpen}`, author, null, [
                ['Next', `${usedPrefix + command}`]
            ], m, { quoted: m })
}

if (command == 'mencersex') {
let res = await fetch(`https://yog-apikey.herokuapp.com/api/cersex?apikey=YogGanz`)
  let sul = await res.json()
  let has = sul.result.result
  await conn.sendButton(m.chat, `*Judul:* ${has.judul}
  *Cerita:* ${has.cersex}`, author, has.img, [
                ['Next', `${usedPrefix + command}`]
            ], m, { quoted: m })
}

if (command == 'asmaulhusna') {
let f = await fetch(`https://yog-apikey.herokuapp.com/api/muslim/asmaulhusna?apikey=YogGanz`)
let xx = await f.json()
let v = xx.result
let teks = v.map(v => {
return `
*Nomor:* ${v.number}
  *Latin:* ${v.latin}
  *Arb:* ${v.arab}
  *Indonesia:* ${v.translate_id}
  *Inggris:* ${v.translate_en}
      `.trim()
  }).filter(v => v).join('\n\n▣═━–〈 *SEARCH* 〉–━═▣\n\n')
  //m.reply(teks)
  await conn.sendButton(m.chat, teks, wm, null, [
                ['Search!', `${usedPrefix + command}`]
            ], m, { quoted: m })
            
}

if (command == 'hadistku') {
if (!args[0]) throw `Contoh penggunaan ${usedPrefix}${command} bukhari 52`
let text1 = args[0]
let text2 = args.slice(1).join(' ')
let res = await fetch(`https://yog-apikey.herokuapp.com/api/muslim/hadits?kitab=${text1}&nomor=${text2}&apikey=YogGanz`)
  let sul = await res.json()
  let has = sul.data
  let ha = has.contents
  await conn.sendButton(m.chat, `*Hadist:* ${has.name}
  *Tersedia:* ${has.available} nomor
  
  *Nomor:* ${ha.number}
  *Arab:* ${ha.arab}
  *Indonesia:* ${ha.id}
  `, author, null, [
                ['Next', `${usedPrefix + command}`]
            ], m, { quoted: m })
}

if (command == 'quranku') {
if (!args[0]) throw `Contoh penggunaan ${usedPrefix}${command} 5 2`
let text1 = args[0]
let text2 = args.slice(1).join(' ')
let res = await fetch(`https://yog-apikey.herokuapp.com/api/muslim/quran?surah=${text1}&ayat=${text2}&apikey=YogGanz`)
  let qt = await res.json()
  let x = qt.result.data
  await conn.sendButton(m.chat, `*Surah:* ${x.surah.name.transliteration.id}
  ${x.surah.name.long}
  ${x.surah.name.translation.id}
  ${x.surah.revelation.id}
  
  *Arab:* ${x.text.arab}
  *Indonesia:* ${x.translation.id}
  *Tafsir:* ${x.tafsir.id.long}
  *Surah:* ${x.surah.tafsir.id}`, author, null, [
                ['Audio', `${usedPrefix}alquransound ${x.audio.primary}`]
            ], m, { quoted: m })
}

if (command == 'memeindo') {
let caption = `Nihh banh ${command} nya`
let url = `https://api.lolhuman.xyz/api/meme/memeindo?apikey=${global.lolkey}`
await conn.sendHydrated(m.chat, caption, wm, url, null, null, null, null, [
      ['Meme EN', usedPrefix + 'meme'],
      ['Meme ID', usedPrefix + 'memeindo'],
      ['Meme Joke', usedPrefix + 'memedarkjoke']
    ], m, { quoted: m })
}

if (command == 'randommeme') {
let caption = `Nihh banh ${command} nya`
let url = `https://api.lolhuman.xyz/api/random/meme?apikey=${global.lolkey}`
await conn.sendHydrated(m.chat, caption, wm, url, null, null, null, null, [
      ['Meme EN', usedPrefix + 'meme'],
      ['Meme ID', usedPrefix + 'memeindo'],
      ['Darkjoke', usedPrefix + 'memedarkjoke']
    ], m, { quoted: m })
}

if (command == 'memedarkjoke') {
let caption = `Nihh banh ${command} nya`
let url = `https://api.lolhuman.xyz/api/meme/darkjoke?apikey=${global.lolkey}`
await conn.sendHydrated(m.chat, caption, wm, url, null, null, null, null, [
      ['Meme', usedPrefix + 'randommeme'],
      ['Meme ID', usedPrefix + 'memeindo'],
      ['Darkjoke', usedPrefix + 'darkjoke']
    ], m, { quoted: m })
}

if (command == 'doujindesusearch') {
if (!text) throw `Contoh penggunaan ${usedPrefix}${command} samsung`
let f = await fetch(`https://bx-hunter.herokuapp.com/api/anime/doujindesusearch?query=${text}&apikey=W46QBtQGOhiqfiClaxHqyAaIR`)
let xx = await f.json()
let pii = xx.result
	let row = Object.values(pii).map((v, index) => ({
		title: index + ' ' + v.title,
		description: '\nscore ' + v.score + '\ntype ' + v.type + '\nstatus ' + v.status + '\nlink ' + v.link + '\nthumb ' + v.thumb,
		rowId: usedPrefix + 'get ' + v.thumb
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
            
}

if (command == 'doujindesudl') {
if (!text) throw `Contoh penggunaan ${usedPrefix}${command} https://212.32.226.234/manga/kyuukyoku-no-dinner-shokusareru-hitozuma`
let f = await fetch(`https://bx-hunter.herokuapp.com/api/anime/doujindesudl?url=${text}&apikey=W46QBtQGOhiqfiClaxHqyAaIR`)
let xx = await f.json()
let v = xx.result
let teks = `*link:* ${v.link_dl}`
  await conn.sendButton(m.chat, teks, wm, null, [
                ['Download!', `${usedPrefix}get ${v.link_dl}`]
            ], m, { quoted: m })
            
}

if (command == 'beasiswa') {
            let gas = await fetch(`https://api.lolhuman.xyz/api/indbeasiswa?apikey=${global.lolkey}`)
    let json = await gas.json()
    let hasil = json.results
	let row = Object.values(hasil).map((v, index) => ({
		title: '📌 ' + v.title,
		description: '\n*Judul:* ' + v.title + '\n*Link:* ' + v.link,
		rowId: usedPrefix + 'ss ' + v.link
	}))
	let button = {
		buttonText: `☂️ ${command} Disini ☂️`,
		description: `⚡ ${name} Silakan pilih ${command} di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}

if (command == 'stimker') {
            let apilol = "https://api.lolhuman.xyz/api/sticker/"
            let lis = [apilol + "anjing?apikey=" + global.lolkey,
            apilol + "patrick?apikey=" + global.lolkey,
            apilol + "amongus?apikey=" + global.lolkey,
            apilol + "gawrgura?apikey=" + global.lolkey,
            apilol + "bucinstick?apikey=" + global.lolkey
            ]
            let lisn = ["🐕‍🦺 anjing",
            "⭐ patrick",
            "💩 amongus",
            "😎 gawrgura",
            "😘 bucinstick"
            ]
            let row = Object.keys(lis, lisn).map((v, index) => ({
		title: htjava + ' ' + lisn[v] + ' Sticker',
		description: 'By ' + wm,
		rowId: usedPrefix + 'get ' + lis[v]
	}))
	let button = {
		buttonText: `☂️ Tema Disini ☂️`,
		description: `⚡ Silakan pilih tema di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}

if (command == 'apkdown') {
if (!text) throw `Contoh penggunaan ${usedPrefix}${command} com.whatsapp`

let f = await fetch(`https://api.lolhuman.xyz/api/apkdownloader?apikey=${global.lolkey}&package=${text}`)
let x = await f.json()
let caption = `*Apk Name:* ${x.result.apk_name}
*Version:* ${x.result.apk_version}
*Author:* ${x.result.apk_author}
`
await conn.sendHydrated(m.chat, caption, wm, x.result.apk_icon, x.result.apk_link, 'Link', null, null, [
      ['Download', `${usedPrefix + command}`],
      ['HostApk', usedPrefix + 'hostapk'],
      ['Menu', usedPrefix + 'menu']
    ], m, { quoted: m })
    await m.reply('File dikirim..')
    await conn.sendFile(m.chat, x.result.apk_link, x.result.apk_link, '', m)
}

if (command == 'proxysite') {
if (!args[0]) throw `Contoh penggunaan ${usedPrefix}${command} https://google.com`

let f = await fetch(`https://api.lolhuman.xyz/api/proxysite?apikey=${global.lolkey}&url=${text}`)
let x = await f.json()
let caption = `🤠 *Country:* ${x.result}`
await conn.sendButton(m.chat, caption, author, null, [
                ['Next', `${usedPrefix}${command} ${text}`]
            ], m, { quoted: m })
}

if (command == 'mirrorcreator') {
if (!args[0]) throw `Contoh penggunaan ${usedPrefix}${command} https://www.mirrored.to/files/EB7BOJU3/[NekoPoi]_Isekai_Harem_Monogatari_-_04_[720P][nekopoi.care].mp4_links`

        let f = await fetch(`https://api.lolhuman.xyz/api/mirrorcreator?apikey=${global.lolkey}&url=${text}`)
let jsons = await f.json()
let x = jsons.result
let caption = `*zippyshare:* ${x.zippyshare}

*gofileio:* ${x.gofileio}

*userscloud:* ${x.userscloud}

*racaty:* ${x.racaty}

*googledrive:* ${x.googledrive}

*dropapk:* ${x.dropapk}

*videobinco:* ${x.videobinco}
`
        await conn.sendButton(m.chat, caption, author, null, [
                ['Next', `${usedPrefix}${command} ${text}`]
            ], m, { quoted: m })
}

if (command == 'ouo') {
if (!args[0]) throw `Contoh penggunaan ${usedPrefix}${command} https://ouo.io/8BgQ1w`

        let f = await fetch(`https://api.lolhuman.xyz/api/ouo?apikey=${global.lolkey}&url=${text}`)
let jsons = await f.json()
let x = jsons.result
let caption = `*Result:* ${x}`
        await conn.sendButton(m.chat, caption, author, null, [
                ['Next', `${usedPrefix}${command} ${text}`]
            ], m, { quoted: m })
}

if (command == 'ouoshort') {
if (!args[0]) throw `Contoh penggunaan ${usedPrefix}${command} https://google.com`

        let f = await fetch(`https://api.lolhuman.xyz/api/ouoshortlink?apikey=${global.lolkey}&url=${text}`)
let jsons = await f.json()
let x = jsons.result
let caption = `*Result:* ${x}`
        await conn.sendButton(m.chat, caption, author, null, [
                ['Next', `${usedPrefix}${command} ${text}`]
            ], m, { quoted: m })
}

if (command == 'shortlink') {
if (!args[0]) throw `Contoh penggunaan ${usedPrefix}${command} https://google.com`

        let f = await fetch(`https://api.lolhuman.xyz/api/shortlink?apikey=${global.lolkey}&url=${text}`)
let jsons = await f.json()
let x = jsons.result
let caption = `*Result:* ${x}`
        await conn.sendButton(m.chat, caption, author, null, [
                ['Next', `${usedPrefix}${command} ${text}`]
            ], m, { quoted: m })
}

if (command == 'shortlink2') {
if (!args[0]) throw `Contoh penggunaan ${usedPrefix}${command} https://google.com`

        let f = await fetch(`https://api.lolhuman.xyz/api/shortlink2?apikey=${global.lolkey}&url=${text}`)
let jsons = await f.json()
let x = jsons.result
let caption = `*Result:* ${x}`
        await conn.sendButton(m.chat, caption, author, null, [
                ['Next', `${usedPrefix}${command} ${text}`]
            ], m, { quoted: m })
}

if (command == 'shortlink3') {
if (!args[0]) throw `Contoh penggunaan ${usedPrefix}${command} https://google.com`

        let f = await fetch(`https://api.lolhuman.xyz/api/shortlink3?apikey=${global.lolkey}&url=${text}`)
let jsons = await f.json()
let x = jsons.result
let caption = `*Result:* ${x}`
        await conn.sendButton(m.chat, caption, author, null, [
                ['Next', `${usedPrefix}${command} ${text}`]
            ], m, { quoted: m })
}

if (command == 'shortlink4') {
if (!args[0]) throw `Contoh penggunaan ${usedPrefix}${command} https://google.com`

        let f = await fetch(`https://api.lolhuman.xyz/api/shortlink4?apikey=${global.lolkey}&url=${text}`)
let jsons = await f.json()
let x = jsons.result
let caption = `*Result:* ${x}`
        await conn.sendButton(m.chat, caption, author, null, [
                ['Next', `${usedPrefix}${command} ${text}`]
            ], m, { quoted: m })
}

if (command == 'tenor') {
if (!text) throw `Gunakan contoh ${usedPrefix + command} hello`

let lis = ["1","2","3","4","5","6","7","8","9"]
let row = Object.keys(lis).map((v, index) => ({
		title: htjava + ' ' + lis[v] + ' Sticker',
		description: 'By ' + wm,
		rowId: usedPrefix + 'gettenor ' + text + '|' + lis[v]
	}))
	let button = {
		buttonText: `☂️ Tema Disini ☂️`,
		description: `⚡ Silakan pilih tema di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}
if (command == 'sl') {
  let res = await fetch('https://api.lolhuman.xyz/api/' + args[0] + '?apikey=' + global.lolkey + '&url=' + args[1])
  let json = await res.json()
  m.reply(json.result)
	}
}
handler.command = handler.help = ['jadian2', 'menikah', 'metercinta', 'bertanya', 'bokep', 'kusonime', 'membucin', 'mencerpen', 'mencersex', 'asmaulhusna', 'hadistku', 'quranku', 'memeindo', 'doujindesusearch', 'doujindesudl', 'stimker', 'randommeme', 'memedarkjoke', 'beasiswa', 'apkdown', 'proxysite', 'mirrorcreator', 'ouo', 'ouoshort', 'shortlink', 'shortlink2', 'shortlink3', 'shortlink4', 'tenor', 'sl']
handler.tags = ['random']

export default handler