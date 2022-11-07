const rewards = {
  exp: 99999999,
  money: 9999999999,
  potion: 9999999999,
  joinlimit: 999999999,
  limit : 999999999,
  mythic: 99999999,
}
const cooldown = 3600000
let handler = async (m, {usedPrefix}) => {
  let user = global.db.data.users[m.sender]
  if (new Date - user.lastclaim < cooldown) return conn.sendButton(m.chat, 
'*–––––『 COOLDOWN 』–––––*',
`ʏᴏᴜ'ᴠᴇ ᴀʟʀᴇᴀᴅʏ ᴄʜᴇᴀᴛ *ᴛᴏᴅᴀʏ ʀᴇᴡᴀʀᴅs*, ᴩʟᴇᴀsᴇ ᴡᴀɪᴛ ᴛɪʟʟ ᴄᴏᴏʟᴅᴏᴡɴ ғɪɴɪsʜ.

⏱️ ${((user.lastclaim + cooldown) - new Date()).toTimeString()}`.trim(), './media/cooldown.jpg', [
[`ɪɴᴠᴇɴᴛᴏʀʏ`, `${usedPrefix}inventory`]
], m, {asLocation: true})
  let text = ''
  for (let reward of Object.keys(rewards)) {
    if (!(reward in user)) continue
    user[reward] += rewards[reward]
    text += `⮕ ${global.rpg.emoticon(reward)} ${reward}: ${rewards[reward]}\n`
  }
  conn.sendButton(m.chat,
`*––––『 CHEAT 』––––*`,
`🔖 ᴅᴀɪʟʏ ʀᴇᴡᴀʀᴅ ʀᴇᴄᴇɪᴠᴇᴅ :
${text}`.trim(), './media/cheat.jpg', [
[`ɪɴᴠᴇɴᴛᴏʀʏ`, `${usedPrefix}inventory`],
[`ᴛʜᴀɴᴋꜱ`, `Ok`]
], m, {asLocation: true})
  user.lastclaim = new Date * 1
}
handler.help = ['cheat', 'cheatall']
handler.tags = ['xp','owner','rpg']
handler.command = /^(cheat)$/i
handler.owner = true
handler.premium = true

handler.cooldown = cooldown

export default handler
