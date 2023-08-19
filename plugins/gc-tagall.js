let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `@𝐜𝐥𝐚𝐧_𝐛𝐚𝐧𝐝𝐢𝐝𝐨𝐬𝐬_𝐨𝐟𝐜: ${pesan}`
let teks = `𝐀𝐂𝐓𝐈𝐕𝐄𝐍‼️ 𝐏𝐋𝐀𝐍𝐓𝐀𝐒 𝐇𝐀𝐘 𝐄𝐍 𝐌𝐈 𝐂𝐀𝐒𝐀. 👺 \n\n❏ ${oi}\n❏ 🫶🏻 ➢ 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂:: \n`
for (let mem of participants) {
teks += `🐥  @${mem.id.split('@')[0]}\n`}
teks += `🐾𝐊𝐚𝐥𝐢 𝐁𝐚𝐧𝐝𝐢𝐝𝐨♤`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.register = true
export default handler
