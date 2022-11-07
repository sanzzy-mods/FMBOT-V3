import fetch from 'node-fetch'

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
if (args[0] == 'all') {
let user = global.db.data.users[m.sender]
        conn.reply(m.chat, `*Succes Cheat Infinity All In Shop!*\n\n📮 *Note:* Jika menemukan bug, error atau kesulitan dalam penggunaan silahkan laporkan/tanyakan kepada Owner`, m, { contextInfo: { externalAdReply: { title: botdate, body: bottime, mediaType: 2, sourceUrl: sig, mediaUrl: sig, thumbnail: await(await fetch('https://telegra.ph/file/1836eec6c22d949829474.jpg')).buffer()}}})
        user.money = Infinity
        user.limit = Infinity
        user.level = Infinity
        user.limit = Infinity
        user.exp = Infinity
        user.potion = Infinity
        user.aqua = Infinity
        user.trash = Infinity
        user.wood = Infinity
        user.rock = Infinity
        user.string = Infinity
        user.iron = Infinity
        user.diamond = Infinity
        user.emerald = Infinity
        user.gold = Infinity
        user.coal = Infinity
        user.common = Infinity
        user.uncommon = Infinity
        user.mythic = Infinity
        user.legendary = Infinity
        user.foodpet = Infinity
        user.Fox = Infinity
        user.naga = Infinity
        user.pet = Infinity
        user.anggur = Infinity
        user.apel = Infinity
        user.batu = Infinity
        user.berlian = Infinity
        user.bibitanggur = Infinity
        user.bibitapel = Infinity
        user.bibitjeruk = Infinity
        user.bibitmangga = Infinity
        user.bibitpisang = Infinity
        user.botol = Infinity
        user.centaur = Infinity
        user.eleksirb = Infinity
        user.emasbatang = Infinity
        user.emasbiasa = Infinity
        user.exp = Infinity
        user.gardenboc = Infinity
        user.gardenboxs = Infinity
        user.griffin = Infinity
        user.healtmonster = Infinity
        user.jeruk = Infinity
        user.kaleng = Infinity
        user.kardus = Infinity
        user.kayu = Infinity
        user.ketake = Infinity
        user.koinexpg = Infinity
        user.kucing = Infinity
        user.kuda = Infinity
        user.kyubi = Infinity
        user.makanancentaur = Infinity
        user.makanangriffin = Infinity
        user.makanankyubi = Infinity
        user.makanannaga = Infinity
        user.makananpet = Infinity
        user.makananphonix = Infinity
        user.mangga = Infinity
        user.pancingan = Infinity
        user.phonix = Infinity
        user.pisang = Infinity
        user.rubah = Infinity
        user.sampah = Infinity
        user.serigala = Infinity
        user.sword = Infinity
        user.tiketcoin = Infinity
        user.umpan = Infinity
        } else {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    
    let jir = flaaa.getRandom()
    let hore = `${pickRandom(['Mancing mania mangtaf', 'Killing spriii', 'Owalahh dapet segini', 'Lain kali gwejh berusaha', 'Okwew..', 'Thanks', 'Dihh..', 'Xixixii..', 'Yaelah dapet segini', 'Hongreewww..', 'Baakaaaa', 'Ara..Ara..'])}`
    let emot = `${pickRandom(['😨','😅','😂','😳','😎', '🥵', '😱', '🐦', '🙄', '🐤','🗿','🐦','🤨','🥴','😐','👆','😔', '👀','👎'])}`
    
    let cht = global.db.data.users[who]
    cht.fullatm += 1000000
    
     // Mampuss
     let ran = Math.floor(Math.random() * 1000000)
     let niexp = cht.exp += ran
     let nilim = cht.limit += ran
     let nimon = cht.money += ran
     let niatm = cht.atm += ran
     
     // Button
    conn.sendHydrated(m.chat, `*${hore}* ${emot}
*${niexp}* EXP Total
*${nilim}* Limit Total
*${nimon}* Money Total
*${niatm}* ATM Total
    
    Ketik *.limit* untuk cek limit`, botdate, jir + 'Jir Ngechit', null, null, null, null, [
      ['Cheat', '/ngechit'],
      ['Cheat Infinity', '/ngechit all']
    ], null)
    }
}
handler.help = ['ngechit'].map(v => v + ' *hehe..*')
handler.tags = ['xp']
handler.command = /^(mod|curang)$/i
handler.private = true
handler.premium = true

export default handler

function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }