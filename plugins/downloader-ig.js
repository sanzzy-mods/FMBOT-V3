import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import { instagramdl, instagramdlv2, instagramdlv3 } from '@bochilteam/scraper'
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
 if (!args[0]) throw `uhm.. url nya mana?\n\ncontoh:\n${usedPrefix + command} https://www.instagram.com/p/CH1A1c9J5pY/?utm_medium=copy_link`
 if (args[0].startsWith('https://instagram.com/stories')) throw `sepertinya kamu menggunakan link story, untuk mendownload Instagram Story silahkan gunakan command di bawah\n\n*${usedPrefix}instagramstory <username>*`
 if (!args[0].match(/(https|http):\/\/www.instagram.com\/(p|reel|tv)/gi)) throw `url salah, perintah ini untuk mengunduh post/reel/tv`
   try {
   var a = await instagramdl(args[0])
   let urla = a[0].url
   let urlshort = await(await axios.get(`https://tinyurl.com/api-create.php?url=${urla}`)).data
   for ( let { thumbnail, url } of a)
   conn.sendMedia(m.chat, url, null, {mentions: [m.sender], jpegThumbnail: await(await fetch(thumbnail)).buffer(), caption: `🚀 *Link:* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${url}`)).data}`})
  } catch {
   try {
   var b = await instagramdlv2(args[0])
   let urlb = b[0].url
   let urlshort = await(await axios.get(`https://tinyurl.com/api-create.php?url=${urlb}`)).data
   for ( let { thumbnail, url } of b)
   conn.sendMedia(m.chat, url, null, {mentions: [m.sender], jpegThumbnail: await(await fetch(thumbnail)).buffer(), caption: `🚀 *Link:* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${url}`)).data}`})
  } catch {
   try {
   var c = await instagramdlv3(args[0])
   let urlc = c[0].url
   let urlshort = await(await axios.get(`https://tinyurl.com/api-create.php?url=${urlc}`)).data
   for ( let { thumbnail, url } of c)
   conn.sendMedia(m.chat, url, null, {mentions: [m.sender], jpegThumbnail: await(await fetch(thumbnail)).buffer(), caption: `🚀 *Link:* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${url}`)).data}`})
  } catch {
   try {
   var d = await instagramdlv4(args[0])
   let urld = d[0].url
   let urlshort = await(await axios.get(`https://tinyurl.com/api-create.php?url=${urld}`)).data
   for ( let { thumbnail, url } of d)
   conn.sendMedia(m.chat, url, null, {mentions: [m.sender], jpegThumbnail: await(await fetch(thumbnail)).buffer(), caption: `🚀 *Link:* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${url}`)).data}`})
  } catch {
   try {
   var e = await igdl(args[0])
   let urle = e[0].url
   let urlshort = await(await axios.get(`https://tinyurl.com/api-create.php?url=${urle}`)).data
   for ( let { type, fileType, url, downloadUrl, preview } of e) 
   conn.sendMedia(m.chat, url, null, {mentions: [m.sender], jpegThumbnail: await(await fetch(preview)).buffer(), caption: `🚀 *Link:* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${url}`)).data}`})
  } catch {
  try {
  if (!text) throw '*Masukkan link*\n Example: https://www.instagram.com/p/CIk47s2FMl4/'
let res = await axios('https://violetics.pw/api/downloader/instagram?apikey=beta&url=' + text)
let json = res.data
let dapet = json.result.url
	let row = Object.values(dapet).map((v, index) => ({
		title: htjava + '📌 Quality: ' + v.name,
		description: '\n⌚ Host: ' + json.result.hosting + '\n⏲️ Title: ' + json.result.meta.title + '\n📎 URL: ' + v.url + '\n📌 Source: ' + json.result.meta.source,
		rowId: usedPrefix + 'get ' + v.url
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
	} catch {
   throw eror 
     }
    }
   }
  }
 }
 }
}
handler.help = ['instagram'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^i(nsta(gramd(own(load(er)?)?|l)|d(own(load(er)?)?|l))|g(d(own(load(er)?)?|l))?)$/i
handler.limit = true

export default handler

async function igdl(url) {
    return new Promise(async (resolve, reject) => {
        axios.request({
            url: 'https://www.instagramsave.com/download-instagram-videos.php',
            method: 'GET',
            headers: {
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                "cookie": "PHPSESSID=ugpgvu6fgc4592jh7ht9d18v49; _ga=GA1.2.1126798330.1625045680; _gid=GA1.2.1475525047.1625045680; __gads=ID=92b58ed9ed58d147-221917af11ca0021:T=1625045679:RT=1625045679:S=ALNI_MYnQToDW3kOUClBGEzULNjeyAqOtg"
            }
        })
            .then(({ data }) => {
                const $ = cheerio.load(data)
                const token = $('#token').attr('value')
                let config = {
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                        "sec-ch-ua": '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
                        "cookie": "PHPSESSID=ugpgvu6fgc4592jh7ht9d18v49; _ga=GA1.2.1126798330.1625045680; _gid=GA1.2.1475525047.1625045680; __gads=ID=92b58ed9ed58d147-221917af11ca0021:T=1625045679:RT=1625045679:S=ALNI_MYnQToDW3kOUClBGEzULNjeyAqOtg",
                        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                    },
                    data: {
                        'url': url,
                        'action': 'post',
                        'token': token
                    }
                }
                axios.post('https://www.instagramsave.com/system/action.php', qs.stringify(config.data), { headers: config.headers })
                    .then(({ data }) => {
                        resolve(data.medias)
                    })
            })
            .catch(reject)
    })
}