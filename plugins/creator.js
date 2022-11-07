import fs from 'fs';
import crypto from 'crypto'
let handler = async (m, { conn, text, usedPrefix }) => {

    let sewa = `
  〔 llı OWNER ${namebot} ıll 〕
    
Nama: ${nameowner}
Umur: ${umurowner}
Asal: ${asalowner}
Pacar: ${pacarowner}

Nomor: ${nomorowner}

${botdate}
`

    let img1 = fs.readFileSync('./img/atas.png');
    let img2 = fs.readFileSync('./img/bawah.png');
    return conn.sendButton(m.chat, hiasan, sewa, img1, [["menu", usedPrefix + "menu"], ["profile", usedPrefix + "profile"]], m, {
        contextInfo: {
            externalAdReply: {
                mediaUrl: "https://instagram.com/aguzfamilia",
                mediaType: "VIDEO",
                title: hiasan,
                body: bottime,
                previewType: 0,
                thumbnail: img1
            }
        }
    })
}
handler.help = ['owner']
handler.tags = ['Bot']

handler.command = /^(owner|creator)$/i

export default handler
