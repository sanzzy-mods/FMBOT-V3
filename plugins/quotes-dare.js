import { dare } from '@bochilteam/scraper'

let thumbDare = 'https://telegra.ph/file/739a201e72a1f20883202.jpg'
let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, hiasan, await dare(), thumbDare, [
    ['DARE', `${usedPrefix}dare`], 
    ['TRUTH', `${usedPrefix}truth`]
], m)

handler.help = ['dare']
handler.tags = ['quotes', 'fun']
handler.command = /^(dare)$/i

export default handler
