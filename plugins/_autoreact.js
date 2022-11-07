import { readFileSync } from "fs"

let handler = async (m, { conn, text }) => {
let res = JSON.parse(readFileSync('./json/emoji.json'))
let em = res.emoji

    conn.sendMessage(m.chat, {
          react: {
            text: em.getRandom(),
            key: m.key,
          }})
  
  }
handler.customPrefix = /(bile?k|ban?h|cum?|knt?l|y?|mmk|p|b(a|i)?c?(o|i)?(t|d)?|wibu|p(a)?nt(e)?k|pepe?k)/i 
 handler.command = new RegExp
  
handler.mods = false

export default handler

  function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }