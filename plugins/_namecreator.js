import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `*❔ Ngapain nyari Owner ku*\n\nhttp://bīt.ly/ᯤ`

let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
const message = {
            document: { url: thumbdoc },
            jpegThumbnail: await (await fetch(thumbdoc)).buffer(), fileName: global.wm2, mimetype: td, fileLength: '9999999', pageCount: '999',
            caption: titlebot,
            footer: wm,
            templateButtons: [
                {
                    urlButton: {
                        displayText: '🌹YT OWNER',
                        url: 'https://s.id/-1a7RO',
                    }
                },
                {
                    urlButton: {
                        displayText: '📞 Author',
                        url: 'https://wa.me/6288215689772',
                    }
                },
                {
                    quickReplyButton: {
                        displayText: '📜MENU',
                        id: '.m'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: '🐾PING',
                        id: '.ping'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: '📛 JANGAN DI KLIK',
                        id: 'huuu'
                    }
                },
            ]
        }
        conn.sendMessage(m.chat, message)
conn.reply(m.chat, info, m, { contextInfo: { externalAdReply: {title: global.wm, body: 'Yaw? ada apa kak?', sourceUrl: snh, thumbnail: fs.readFileSync('./thumbnail.jpg')  }}})
}
handler.command = /^(nameown)$/i

handler.register = true
handler.exp = 3

export default handler