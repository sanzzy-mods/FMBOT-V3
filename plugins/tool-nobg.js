import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'
import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'No media found'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile : webp2png)(media)
  let url = global.API('violetics', '/api/media/removebg', { link }, 'APIKEY')
  let caption = `📮 *L I N K :*
${link}
📊 *S I Z E :* ${media.length} Byte
📛 *E x p i r e d :* ${isTele ? 'No Expiry Date' : 'Unknown'}

*S H O R T :* ${await shortUrl(link)}`
await conn.sendButton(m.chat, caption, wm, await(await fetch(url)).buffer(), [['🎀 Menu', '/menu']], m, { fileLength: fsizedoc, seconds: fsizedoc, contextInfo: {
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' + ucapan,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: link
     }}
  })
}
handler.help = ['removebg']
handler.tags = ['tools']
handler.command = /^(nob(ackground|g)|bgremove|removebg|hapusbg)$/i

export default handler

async function shortUrl(url) {
	let res = await fetch(`https://tinyurl.com/api-create.php?url=${url}`)
	return await res.text()
}