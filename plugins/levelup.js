import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'

let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        let { min, xp, max } = xpRange(user.level, global.multiplier)
        let level = `
➟ Level ${user.level} 📊

➟ POINT : *${user.exp - min} / ${xp}*
Anda membutuhkan *${max - user.exp}* Lagi ❗
`.trim()
conn.sendButton(m.chat, hiasan, level, Levelup, [['️INVENTORY', '.inv'],['PUSH EXP', '.listexp']],m)
    }
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
        let teks = `.             ${user.role}`
        let str = `
      〔 llı LEVEL UP ıll 〕

➥BEFORE : *${before}* 

  
➥AFTER : *${user.level}* [ *${user.role}* ]`.trim()


        try {
            const src = await levelup(teks, user.level)
            conn.sendButton(m.chat, hiasan, str, thumbLevelup, [['️INVENTORY', '.inv'],['MENU', '.menu'],['REFERAL', '.ref']],m)
        } catch (e) {
            conn.sendButton(m.chat, hiasan, str, thumbLevelup, [['️INVENTORY', '.inv'],['MENU', '.menu'],['REFERAL', '.ref']],m)
        }
    }
}

handler.help = ['levelup']
handler.tags = ['xp']

handler.command = /^level(|up)$/i

export default handler