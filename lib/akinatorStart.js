module.exports = async (Araa, m, prefix, command, from, fake, fetchJson, setReply) => {
try{
await fetchJson(`https://api.lolhuman.xyz/api/akinator/start?apikey=${global.lolkey}`).then(res => {
let server = res.result.server
let frontaddr = res.result.frontaddr
let session = res.result.session
let signature = res.result.signature
let step = res.result.step
let progression = res.result.progression
let question = res.result.question
const sections = [ {
title: `SILAHKAN PILIH`,
rows: [
{title: 'Ya', rowId: `${prefix + command} ${server}|${frontaddr}|${session}|${signature}|${step}|0`},
{title: 'Tidak', rowId: `${prefix + command} ${server}|${frontaddr}|${session}|${signature}|${step}|1`},
{title: 'Saya Tidak Tau', rowId: `${prefix + command} ${server}|${frontaddr}|${session}|${signature}|${step}|2`},
{title: 'Mungkin', rowId: `${prefix + command} ${server}|${frontaddr}|${session}|${signature}|${step}|3`},
{title: 'Mungkin Tidak', rowId: `${prefix + command} ${server}|${frontaddr}|${session}|${signature}|${step}|4`},
]}]
const listMessage = { text: `${progression} %\n\n${question}`, footer: fake, title: ``, buttonText: "Click Here", sections }
Araa.sendMessage(from, listMessage, { quoted: m })
})
} catch (err) {
console.log(err)
setReply('Fitur sedang error kak coba lain waktu ya')
}
}