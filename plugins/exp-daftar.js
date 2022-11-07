import { createHash } from 'crypto'
import fetch from 'node-fetch'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i

let handler = async function (m, { text, usedPrefix, command }) {
	function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
	let namae = conn.getName(m.sender)
	const sections = [
	{
	title: htjava + "Select Your Age Here !" + htjava,
	rows: [
	    {title: "Random Tahun", rowId: '.daftar ' + namae + '.' + pickRandom(['30','29','28','27','26','25','24','23','22','21','20','19','18','17','16','15','14','13','12','11','10','9'])}
	]
    },
    {
	title: htki + " O L D " + htka,
	rows: [
	    {title: "30 Tahun", rowId: '.daftar ' + namae + '.30 '},
	    {title: "29 Tahun", rowId: '.daftar ' + namae + '.29 '},
	    {title: "28 Tahun", rowId: '.daftar ' + namae + '.28 '},
	{title: "27 Tahun", rowId: '.daftar ' + namae + '.27 '},
	{title: "26 Tahun", rowId: '.daftar ' + namae + '.26 '},
	{title: "25 Tahun", rowId: '.daftar ' + namae + '.25 '},
	{title: "24 Tahun", rowId: '.daftar ' + namae + '.24 '},
	{title: "23 Tahun", rowId: '.daftar ' + namae + '.23 '},
	{title: "22 Tahun", rowId: '.daftar ' + namae + '.22 '},
	{title: "21 Tahun", rowId: '.daftar ' + namae + '.21 '}
	]
    },
    {
	title: htki + " Y O U N G " + htka,
	rows: [
	    {title: "20 Tahun", rowId: '.daftar ' + namae + '.20 '},
	    {title: "19 Tahun", rowId: '.daftar ' + namae + '.19 '},
	    {title: "18 Tahun", rowId: '.daftar ' + namae + '.18 '},
	{title: "17 Tahun", rowId: '.daftar ' + namae + '.17 '},
	{title: "16 Tahun", rowId: '.daftar ' + namae + '.16 '},
	{title: "15 Tahun", rowId: '.daftar ' + namae + '.15 '},
	{title: "14 Tahun", rowId: '.daftar ' + namae + '.14 '},
	{title: "13 Tahun", rowId: '.daftar ' + namae + '.13 '},
	{title: "12 Tahun", rowId: '.daftar ' + namae + '.12 '},
	{title: "11 Tahun", rowId: '.daftar ' + namae + '.11 '},
	{title: "10 Tahun", rowId: '.daftar ' + namae + '.10 '},
	{title: "9 Tahun", rowId: '.daftar ' + namae + '.9 '}
	]
    },
]
  
 const listMessage = { 
   text: `┏━━━〔 ıll 𝐑𝐄𝐆𝐈𝐒𝐓𝐄𝐑 llı 〕━━㉿
⬡ Hallo ${conn.getName(m.sender)} 👋
⬡ Sebelum melihat fitur bot, lebih baik Verify dulu
⬡ Kalau tidak kelihatan button nya, contohnya dibawah!
┗━━━━━━━━━━━━━━━━━━㉿
┏━━〔 ıll CONTOH llı 〕━㉿
⬡ #daftar namamu.umurmu
⬡ #daftar ${conn.getName(m.sender)}.17
┗━━━━━━━━━━㉿ 
⫹⫺ 
⫹⫺`, 
   footer: `┗ © FangzXD*`, 
   title: "", 
   buttonText: "CLICK HERE", 
   sections 
 } 
  
   let user = global.db.data.users[m.sender] 
   if (user.registered === true) throw `Kamu sudah ter daftar di Database, Apakah mau unreg? ketik *#unreg*` 
   if (!Reg.test(text)) return conn.sendMessage(m.chat, listMessage, { quoted: m }) 
   let [_, name, splitter, age] = text.match(Reg) 
   if (!name) throw 'Nama tidak boleh kosong (Alphanumeric)' 
   if (!age) throw 'Umur tidak boleh kosong (Angka)' 
   age = parseInt(age) 
   if (age > 30) throw 'WOI TUA (。-`ω´-)' 
   if (age < 0) throw 'Halah dasar bocil' 
   user.name = name.trim() 
   user.age = age 
   user.regTime = + new Date 
   user.registered = true 
   let sn = createHash('md5').update(m.sender).digest('hex') 
    let mim_ = ["application/json"] 
      let lin_ = ["https://www.instagram.com"] 
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender 
   let cap = ` 
 ╭━━━━「 *BERHASIL* 」
 ❖ Terima kasih ${name} Sudah mendaftar
Di Database kami
 ❖ © FANGZ BOT || ALL RESERVED

 ╭━━━━「 *DATA* 」
 ┊⫹ *Sucsess ☑️* 】Status
 ┊⫹ *${name}* 】Nama
 ┊⫹ *${age}* 】Umur/Age                                          
 ╰═┅═━––––––๑

*SYARAT*
➥ Gunakan Bot ini dengan bijak
➥ Dilarang menelepon Bot ini
➥ Dilarang spam Button/Chat
➥ Dilarang Toxic

Jika owner mengetahui Hal di atas, Maka tidak segan²
Nomor akan di banned!.
` 
   let buttonMessage= { 
 'document':{'url':sig}, 
 'mimetype':mim_.getRandom(), 
 'fileName':hiasan, 
 'fileLength':fsizedoc, 
 'pageCount':fpagedoc, 
 'contextInfo':{ 
 'forwardingScore':555, 
 'isForwarded':true, 
 'externalAdReply':{ 
 'mediaUrl': lin_.getRandom(),
 'mediaType':2, 
 'previewType':'pdf', 
 'title':global.bottime, 
 'body':global.titlebot, 
 'thumbnail':await(await fetch('https://telegra.ph/file/67ea0570777ef4f08009f.jpg')).buffer(),
 'sourceUrl':sig}}, 
 'caption':cap, 
 'footer':botdate, 
 'buttons':[ 
 {'buttonId':'.ref','buttonText':{'displayText':'❍REFERAL'},'type':1}, 
 {'buttonId':'.menu','buttonText':{'displayText':'❍LIST MENU'},'type':1} 
 ], 
 'headerType':6} 
     await conn.sendMessage(m.chat,buttonMessage, { quoted:m}) 
 } 
 handler.help = ['daftar', 'register'].map(v => v + ' <nama>.<umur>') 
 handler.tags = ['xp'] 
  
 handler.command = /^(daftar|verify|reg(ister)?)$/i 
  
 export default handler