import fetch from 'node-fetch'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {
let imgr = flaaa.getRandom()

if (command == 'kataquotes') {
let pe = await fetch(`https://programming-quotes-api.herokuapp.com/Quotes/random`)
let xc = await pe.json()
  await conn.sendButton(m.chat, hiasan, `*Quote:*
${xc.en}

*By:*
${xc.author}`, `${imgr + 'Kata Quotes'}`, [
                ['NEXT', `${usedPrefix + command}`],
                ['TERJEMAH', `${usedPrefix}tr id ${xc.en}`]
            ], m)
            }
            
}
handler.command = handler.help = ['kataquotes']
handler.tags = ['fun']

export default handler