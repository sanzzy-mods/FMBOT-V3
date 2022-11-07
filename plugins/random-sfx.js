import fetch from 'node-fetch'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

let urut = text.split`|`
  let one = urut[0]
  let two = urut[1]
  
/*MyInstans*/
if (command == 'sfx') {
if (!args[0]) throw `Contoh penggunaan ${usedPrefix}${command} 2`
try {
  let gas = await fetch(`http://www.myinstants.com/api/v1/instants/?format=json&page=${args[0]}`)
    let json = await gas.json()
    let hasil = json.results
	let row = Object.values(hasil).map((v, index) => ({
		title: '📌 ' + v.name,
		description: '\n*Color:* ' + v.color + '\n*Slug:* ' + v.slug + '\n*Description:* ' + v.description + '\n*Image:* ' + v.image,
		rowId: usedPrefix + 'get ' + v.sound
	}))
	let button = {
		buttonText: `☂️ SFX Disini ☂️`,
		description: `⚡ Silakan pilih SFX di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
} catch (e) {
return m.reply('Error kan')
}
}

/*FreeSound*/
if (command == 'sfx2') {
if (!text) throw `Contoh penggunaan ${usedPrefix}${command} drum
*ket:*
drum : nama sound
`
    let gas = await fetch(`https://freesound.org/apiv2/search/text/?format=json&query=${text}&token=TJEbxX84wKTySiEtUPxhm8b2WCi5Izak0h9nNDbO`)
    let json = await gas.json()
    let hasil = json.results
	let row = Object.values(hasil).map((v, index) => ({
		title: '📌 ' + v.name,
		description: '\n*ID:* ' + v.id + '\n*LICENSE:* ' + v.license + '\n*USERNAME:* ' + v.username + '\n*TAGS:* ' + Array.from(v.tags),
		rowId: usedPrefix + 'sfx3 ' + v.id
	}))
	let button = {
		buttonText: `☂️ SFX Disini ☂️`,
		description: `⚡ Silakan pilih SFX di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
}

if (command == 'sfx3') {
if (!text) throw `Contoh:
${usedPrefix + command} 1234`
let f = await fetch(`https://freesound.org/apiv2/sounds/${text}/?format=json&token=TJEbxX84wKTySiEtUPxhm8b2WCi5Izak0h9nNDbO`)
let xx = await f.json()

let teks = `*Name :* ${xx.name}
*ID :* ${xx.id}
*filesize :* ${xx.filesize} byte
*username :* ${xx.username}`
  await conn.sendButton(m.chat, teks, wm, xx.images['spectral_bw_l'], [
                ['Audio', usedPrefix + 'get ' + xx.previews['preview-hq-mp3']]
            ], m)
}

/*MAP*/
if (command == 'smap') {
let rndm = ['AF','AX','AL','DZ','AS','AD','AO','AI','AQ','AG','AR','AM','AW','AU','AT','AZ','BS','BH','BD','BB','BY','BE','BZ','BJ','BM','BT','BO','BQ','BA','BW','BV','BR','IO','BN','BG','BF','BI','KH','CM','CA','CV','KY','CF','TD','CL','CN','CX','CC','CO','KM','CG','CD','CK','CR','CI','HR','CU','CW','CY','CZ','DK','DJ','DM','DO','EC','EG','SV','GQ','ER','EE','ET','FK','FO','FJ','FI','FR','GF','PF','TF','GA','GM','GE','DE','GH','GI','GR','GL','GD','GP','GU','GT','GG','GN','GW','GY','HT','HM','VA','HN','HK','HU','IS','IN','ID','IR','IQ','IE','IM','IL','IT','JM','JP','JE','JO','KZ','KE','KI','KP','KR','XK','KW','KG','LA','LV','LB','LS','LR','LY','LI','LT','LU','MO','MK','MG','MW','MY','MV','ML','MT','MH','MQ','MR','MU','YT','MX','FM','MD','MC','MN','ME','MS','MA','MZ','MM','NA','NR','NP','NL','AN','NC','NZ','NI','NE','NG','NU','NF','MP','NO','OM','PK','PW','PS','PA','PG','PY','PE','PH','PN','PL','PT','PR','QA','RS','RE','RO','RU','RW','BL','SH','KN','LC','MF','PM','VC','WS','SM','ST','SA','SN','CS','SC','SL','SG','SX','SK','SI','SB','SO','ZA','GS','SS','ES','LK','SD','SR','SJ','SZ','SE','CH','SY','TW','TJ','TZ','TH','TL','TG','TK','TO','TT','TN','TR','XT','TM','TC','TV','UG','UA','AE','GB','US','UM','UY','UZ','VU','VE','VN','VG','VI','WF','EH','YE','ZM','ZW']

if (!text) throw `Contoh:
${usedPrefix + command} ID`
let f = await fetch(`https://api.worldbank.org/v2/country/${text}?format=json`)
let xx = await f.json()

let teks = `*Name :* ${xx[1][0].name}
*ID :* ${xx[1][0].id}
*City :* ${xx[1][0].capitalCity}
*longitude :* ${xx[1][0].longitude}
*latitude :* ${xx[1][0].latitude}`
  await conn.sendButton(m.chat, teks, wm, `https://static-maps.yandex.ru/1.x/?lang=id-ID&ll=${xx[1][0].longitude},${xx[1][0].latitude}&z=12&l=map&size=600,300`, [
                ['Menu', `${usedPrefix}menu`]
            ], m)
}

if (command == 'sfx4') {
let hasil = ['Donasiku',
'MenuYuki',
'aku-ngakak',
'anjay',
'ara-ara-cowok',
'ara-ara',
'ara-ara2',
'arigatou',
'assalamualaikum',
'asu',
'ayank',
'bacot',
'bahagia-aku',
'baka',
'bansos',
'beat-box',
'beat-box2',
'biasalah',
'bidadari',
'bot',
'buka-pintu',
'canda-anjing',
'cepetan',
'china',
'cuekin-terus',
'daisuki-dayo',
'daisuki',
'dengan-mu',
'gaboleh-gitu',
'gak-lucu',
'gamau',
'gay',
'gelay',
'gitar',
'gomenasai',
'hai-bot',
'hampa',
'hayo',
'hp-iphone',
'i-like-you',
'ih-wibu',
'india',
'karna-lo-wibu',
'kiss',
'kontol',
'ku-coba',
'maju-wibu',
'makasih',
'mastah',
'menu',
'menuasli',
'menuku',
'nande-nande',
'nani',
'ngadi-ngadi',
'nikah',
'nuina',
'onichan',
'owner-sange',
'ownerku',
'pak-sapardi',
'pale',
'pantek',
'pasi-pasi',
'punten',
'sayang',
'siapa-sih',
'sudah-biasa',
'summertime',
'tanya-bapak-lu',
'to-the-bone',
'wajib',
'waku',
'woi',
'yamete',
'yowaimo',
'yoyowaimo']
try {
	let row = Object.keys(hasil).map((v, index) => ({
		title: index + ' ' + hasil[v],
		description: '\n*By:* ' + author,
		rowId: usedPrefix + 'get https://raw.githubusercontent.com/AyGemuy/HAORI-API/main/audio/' + hasil[v] + '.mp3'
	}))
	let button = {
		buttonText: `☂️ SFX Disini ☂️`,
		description: `⚡ Silakan pilih SFX di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
} catch (e) {
return m.reply('Error kan')
}
}

if (command == 'sfx5') {
let hasil = Array(74).fill(1).map((n, i) => n + i)
try {
	let row = Object.keys(hasil).map((v, index) => ({
		title: 'Sound ke- ' + hasil[v],
		description: '\n*By:* ' + author,
		rowId: usedPrefix + 'get https://raw.githubusercontent.com/AyGemuy/HAORI-API/main/sound/sound' + hasil[v] + '.mp3'
	}))
	let button = {
		buttonText: `☂️ SFX Disini ☂️`,
		description: `⚡ Silakan pilih SFX di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return await conn.sendListM(m.chat, button, row, m)
} catch (e) {
return m.reply('Error kan')
}
}

}
handler.command = handler.help = ['sfx', 'sfx2', 'sfx3', 'sfx4', 'sfx5', 'smap']
handler.tags = ['audio']

export default handler