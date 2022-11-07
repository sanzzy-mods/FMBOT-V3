let handler = async(m, { conn }) => {
let pc = Object.entries(await conn.chats)
let niorg = pc.filter(([jid]) => jid.endsWith('@s.whatsapp.net'))
let imgr = flaaa.getRandom()
let txt = ''
    for (let [jid] of niorg)
txt += `${htjava} ${await conn.getName(jid)}\n${dmenub} ${'@' + jid.replace(/@.+/, '')}\n${cmenua}\n\n`
return conn.sendButton(m.chat, htki + ' *CHAT PRIVATE* ' + htka + '\n' + bottime, '*Total:* ' + niorg.length + '\n\n' + txt.trim(), `${imgr + 'List Chat'}`, [['SEWA BOT', '/sewabot'],['LIST GROUP', '.groups']], m, { mentions: conn.parseMention(txt) })
}
handler.help = ['listpc']
handler.tags = ['owner']
handler.command = /^listpc|pclist|daftarpc|pc$/i
handler.owner = true

export default handler