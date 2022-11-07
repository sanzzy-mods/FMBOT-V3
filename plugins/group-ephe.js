import { promises, readFileSync } from 'fs'
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
let res = JSON.parse(readFileSync('./json/emoji.json'))
let em = res.emoji
	const sections = [
   {
	title: `${htki} List Options ${htka}`,
	rows: [
	{title: `${htjava} ON ${em.getRandom()}`, rowId: `${usedPrefix + command} on`},
	{title: `${htjava} OFF ${em.getRandom()}`, rowId: `${usedPrefix + command} off`},
	{title: `${htjava} 24 HOUR ${em.getRandom()}`, rowId: `${usedPrefix + command} 24h`},
	{title: `${htjava} 7 DAY${em.getRandom()}`, rowId: `${usedPrefix + command} 7d`},
	{title: `${htjava} 90 DAY${em.getRandom()}`, rowId: `${usedPrefix + command} 90d`}
	]
    },
]

const listMessage = {
  text: ' ',
  footer: botdate,
  title: `*${htki} OPTIONS ${htka}*`,
  buttonText: "Click Here!",
  sections
}

  let isEnable = /true|enable|(turn)?on|1/i.test(command)
  let chat = global.db.data.chats[m.chat]
  let user = global.db.data.users[m.sender]
  let bot = global.db.data.settings[conn.user.jid] || {}
  let type = (args[0] || '').toLowerCase()
  let isAll = false, isUser = false
  switch (type) {
      case 'on':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('admin', m, conn)
           throw false
         }
       }
       if (chat.onephe) return
       await conn.sendMessage(m.chat, { disappearingMessagesInChat: true })
       chat.onephe = !isEnable
       break
       case 'off':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('admin', m, conn)
           throw false
         }
       }
       	if (chat.offephe) return
       await conn.sendMessage(m.chat, { disappearingMessagesInChat: false })
       chat.offephe = !isEnable
       break
       case '24h':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('admin', m, conn)
           throw false
         }
       }
       	if (chat.e24h) return
       await conn.sendMessage(m.chat, { disappearingMessagesInChat: 1*24*3600 })
       chat.e24h = !isEnable
       break
       case '7d':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('admin', m, conn)
           throw false
         }
       }
       	if (chat.e7d) return
       await conn.sendMessage(m.chat, { disappearingMessagesInChat: 7*24*3600 })
       chat.e7d = !isEnable
       break
       case '90d':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('admin', m, conn)
           throw false
         }
       }
       	if (chat.e90d) return
       await conn.sendMessage(m.chat, { disappearingMessagesInChat: 90*24*3600 })
       chat.e90d = !isEnable
       break
    default:
      if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, listMessage, { quoted: fpayment })
      throw false
  }
  
  conn.send2ButtonDoc(m.chat, `*${htki} OPTIONS ${htka}*
🗂️ *Type:* ${type} 
📊 *Status:* Succes ✅
🎚️ *Options:* ${isEnable ? 'Enable' : 'Disable'}
📣 *For:* ${isAll ? 'This Bot' : isUser ? '' : 'This Chats'}
`, author, `${isEnable ? '✖️ Disable' : '✔️ Enable'}`, `${isEnable ? `.off ${type}` : `.on ${type}`}`, '🎀 Menu', '.menu', fpayment, adReply)
}
handler.help = ['ephe'].map(v => v + ' <option>')
handler.tags = ['group', 'owner']
handler.command = /^((ephe)|[01])$/i

export default handler