const fs = require("fs")
exports._scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
exports.commandsDB = JSON.parse(fs.readFileSync('./database/commands.json'))
