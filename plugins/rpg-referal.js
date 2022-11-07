import crypto from 'crypto'

const xp_first_time = 2500
const xp_link_creator = 15000
const xp_bonus = {
    5: 'Premium 7 Hari',
   10: 100000,
   20: 250000,
   50: 1000000,
  100: 10000000,
}

let handler = async (m, { conn, usedPrefix, text }) => {
  let users = global.db.data.users
  if (text) {
    if ('ref_count' in users[m.sender]) throw 'Tidak bisa menggunakan kode referal!'
    let link_creator = (Object.entries(users).find(([, { ref_code }]) => ref_code === text.trim()) || [])[0]
    if (!link_creator) throw 'Kode referal tidak valid'
    let count = users[link_creator].ref_count++
    let extra = xp_bonus[count] || 0
    users[link_creator].exp += xp_link_creator + extra
    users[m.sender].exp += xp_first_time
    users[m.sender].ref_count = 0
    m.reply(`
Selamat!
+${xp_first_time} XP
`.trim())
    m.reply(`
Seseorang telah menggunakan kode referal kamu
+${xp_link_creator + extra} XP
`.trim(), link_creator)
  } else {
    let code = users[m.sender].ref_code = users[m.sender].ref_code || new Array(11).fill().map(() => [...'0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'][crypto.randomInt(62)]).join('')
    users[m.sender].ref_count = users[m.sender].ref_count ? users[m.sender].ref_count : 0
    let command_text = `${usedPrefix}ref ${code}`
    let command_link = `${conn.user.jid.split('@')[0]}?text=${encodeURIComponent(command_text)}`
    let share_text = `
Dapatkan ${xp_first_time} XP untuk yang menggunakan link/kode referal dibawah ini

Referal Code: ${code}


Salin Link di bawah & Share ke teman kamu

${botdate}
`.trim()
    m.reply(`
*SYARAT & KETENTUAN*
    

Dapatkan ${xp_link_creator} XP untuk setiap pengguna baru yang menggunakan kode referal kamu
${users[m.sender].ref_count} orang telah menggunakan kode referal kamu

Bagikan link kepada teman mu yang belum pernah menggunakan
Bot ini.
Jika anda mengirimkan Code ke orang yg sudah pernah menggunakan Bot ini
maka referal tidak akan bisa di gunakan.
`.trim())
conn.sendHydrated(m.chat, bottime, share_text, null, 'https://www.whatsapp.com/otp/copy/'+'https://wa.me/' + command_link, "Salin Code", null,null, [['INVENTORY','.inv'],['PUSH EXP','.listexp']], m)
}
}
handler.help = ['ref']
handler.tags = ['main', 'xp']

handler.command = ['ref']

handler.register = true

export default handler