global.language = "id"
global.nomerOwner ="6285159088173"
global.nomerOwner2 ="6285173335908"
global.runWith = "Replit"
global.ownerName = "Alvaro"
global.botName = "Alvaro Botz" 
global.sessionName ="session"
global.setmenu ="document"
global.docType = "docx"
global.Qoted = "ftoko"
global.waktu = 60000
global.baileysMd = true
global.antiSpam = false
global.multi = true
global.prefa = "."
global.fake = botName
global.Console = false
global.autorespon =false
global.copyright = "© Extream" 
global.On = "On"
global.Off ="Off"
global.autoblockcmd = false
global.fake1 ="Extream"
global.packName = "© Create with Alvaro Botz"
global.authorName = "+6285159088173"
global.replyType = "mess"
global.setwelcome = "type1"
global.autoblockcmd = false
global.autoReport = true
global.autoLevel = true
global.autoSticker = true
global.gamewaktu = 60
global.limitCount = 25
global.monayawal = 1000,
global.rpg = { darahawal: 100, besiawal: 15, goldawal: 10, emeraldawal: 5, umpanawal: 5, potionawal: 1 }
global.gcounti = { prem : 60, user : 20 }
global.lolkey = "AZZAM"
global.Mainlagi = "ᴍᴀɪɴ ʟᴀɢɪ"
global.openAI = "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"




const fs = require("fs");
const { color } = require("./lib/color");
const chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})






