let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, ('https://api.zacros.my.id/asupan/indonesia'), '✿𝗖𝗥𝗘𝗔𝗧𝗢𝗥➢𝐆𝐞𝐦𝐩𝐲 𝐓𝐨𝐧\nSubscribe : https://www.youtube.com/channel/UCZoVmApPxtLYgUWwBD4nbCw', wm, 'NEXT', '.cecanindo', m)
}

handler.help = ['cecanindo']
handler.tags = ['asupan']
handler.command = /^(cecanindo)$/i
handler.limit = 3
module.exports = handler

