let handler = async (m, { conn, args, usedPrefix, command }) => {
    let isClose = { // Switch Case Like :v
        'unlock': 'unlocked',
        'lock': 'locked',
    }[(args[0] || '')]
    if (isClose === undefined)
        throw `
*Format salah! Contoh :*
  *○ ${usedPrefix + command} close*
  *○ ${usedPrefix + command} open*
  *○ ${usedPrefix + command} unlock*
  *○ ${usedPrefix + command} lock*
`.trim()
    await conn.groupSettingUpdate(m.chat, isClose)
}
handler.help = ['groupsetting']
handler.tags = ['group']
handler.command = /^(groupsetting)$/i

handler.admin = true
handler.botAdmin = true

export default handler
