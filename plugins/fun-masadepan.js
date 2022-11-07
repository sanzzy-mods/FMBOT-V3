import fetch from 'node-fetch'
const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = (await import('@adiwajshing/baileys')).default
let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
let anu =`
${pickRandom(global.masadepan)}
`
     const message = {
            document: { url: thumb },
            jpegThumbnail: await (await fetch(thumb)).buffer(), fileName: '─────〔 𝗠𝗔𝗦𝗔 𝗗𝗘𝗣𝗔𝗡 〕─────', mimetype: dpdf, fileLength: fsizedoc, pageCount: fpagedoc,
            caption: wm,
            footer: anu,
            templateButtons: [
                {
                    urlButton: {
                        displayText: 'Support Me',
                        url: swb
                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'Aminn',
                        id: 'Fangz'
                    }
                },
            ]
        }
        conn.sendMessage(m.chat, message)
}
handler.help = ['masadepan']
handler.tags = ['fun']
handler.command = /^(masadepan)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.masadepan = [ 
'Anda akan menjadi orang yang Kaya, keluarga yang harmonis, memiliki 2 memiliki anak, memiliki 4 memiliki kendaraan, memiliki 2 rumah','Anda akan menjadi orang yang Sederhana, keluarga yang harmonis, memiliki 3 memiliki anak, memiliki 1 memiliki kendaraan, memiliki 1 rumah','Anda akan menjadi orang yang Miskin, keluarga yang Sederhana, memiliki 1 anak, tidak memiliki kendaraan, rumah ngontrak','Anda akan menjadi orang yang Sederhana, keluarga yang dicerai, memiliki 5 anak, memiliki 2 kendaraan, memiliki 2 rumah','Anda akan menjadi orang yang Sederhana, keluarga yang Sederhana, memiliki 2 anak, memiliki 2 kendaraan, memiliki 1 rumah','Anda akan menjadi orang yang Miskin, keluarga yang dicerai memiliki 2 anak, memiliki 1 kendaraan, memiliki 1 rumah','Anda akan menjadi orang yang Kaya, keluarga yang Sederhana, memiliki 1 anak, memiliki 1 kendaraan, memiliki 2 rumah','Anda akan menjadi orang yang Sederhana, keluarga yang Harmonis, memiliki 1 anak, memiliki 3 kendaraan, memiliki 1 rumah','Anda akan menjadi orang yang Miskin, tidak memiliki keluarga (jomblo), tidak memiliki anak, tidak memiliki kendaraan, tidak memiliki rumah','Anda akan menjadi orang yang Sederhana, keluarga yang Sederhana, memiliki 4 anak, memiliki 1 kendaraan, memiliki 2 rumah','Anda akan menjadi orang yang Sederhana, keluarga yang kacau, tidak memiliki anak (Gugur), memiliki 2 kendaraan, memiliki 1 rumah','Anda akan menjadi orang yang Sangat Kaya, keluarga yang Sangat Harmonis, memiliki 5 anak, memiliki 7 kendaraan, memiliki 9 rumah','Anda akan menjadi orang yang Sangat Miskin, keluarga yang Sederhana, memiliki 9 anak, tidak memiliki kendaraan, rumah ngontrak','Anda akan menjadi orang yang Kaya, keluarga yang Pelit, memiliki 2 anak, memiliki 2 kendaraan, memiliki 2 rumah','Anda akan menjadi orang yang Sederhana, keluarga yang Pelit, memiliki 1 anak, memiliki 1 kendaraan, memiliki 1 rumah','Anda akan menjadi orang yang Sederhana, keluarga yang dicerai, memiliki 2 anak, memiliki 1 kendaraan, rumah ngontrak','Anda akan menjadi orang yang Sangat Sederhana, keluarga yang Sakinah, memiliki 1 anak, memiliki 1 kendaraan, memiliki 1 rumah','Anda akan menjadi orang yang Sederhana, keluarga yang Sangat Sederhana, memiliki 11 anak, memiliki 1 kendaraan, memiliki 1 rumah','Anda akan menjadi orang yang Sederhana, keluarga yang Sangat Sederhana, memiliki 2 anak kembar, memiliki 3 kendaraan, memiliki 2 rumah','Anda akan menjadi orang yang Sederhana keluarga yang Sederhana, memiliki 2 anak kembar dan 1 anak lagi, memiliki 1 kendaraan, memiliki 1 rumah'
]