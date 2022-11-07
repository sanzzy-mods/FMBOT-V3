import { truth } from '@bochilteam/scraper'

let thumbTruth = 'https://telegra.ph/file/739a201e72a1f20883202.jpg'
let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, hiasan, await truth(), thumbTruth, [
    ['TRUTH', `${usedPrefix}truth`],
    ['DARE', `${usedPrefix}dare`]
], m)

handler.help = ['truth']
handler.tags = ['quotes', 'fun']
handler.command = /^(truth)$/i

export default handler