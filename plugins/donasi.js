let handler = async m => m.reply(`
            .✵.GRUP AZZBOT.✵.

            https://chat.whatsapp.com/JUJCquZdFHT2n1MFBPFKfT
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler