import fetch from "node-fetch"
let handler = async(m, { conn, usedPrefix, command, text }) => {

    if (!text) return conn.reply(m.chat, 'Masukan Nama apk nya!', m)

let f = await fetch(`https://nzcha-apii.herokuapp.com/apk-search?q=${text}`)
let xx = await f.json()
let v = xx.result
let teks = v.map(v => {
return `
🏷️Nama Aplikasi : ${v.name}
🔗Link : ${v.url}
📂Download : ${v.dl_url}
📝Tentang Game : ${v.desc}
      `.trim()
  }).filter(v => v).join('\n\n【 *APK SEARCH* 】\n\n')
  //m.reply(teks)
  await conn.sendButton(m.chat, hiasan, teks, thumbDl, [
                ['CARI', `${usedPrefix + command}`]
            ], m)

}
handler.help = ['rexdl'].map(v => v + ' <apk>')
handler.tags = ['tools']
handler.command = /^(apkdl)$/i

export default handler
