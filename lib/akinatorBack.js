module.exports = async (Araa, m, q, prefix, command, from, fake, fetchJson, setReply) => {
try{
let server = q.split('|')[0]
let frontaddr = q.split('|')[1]
let session = q.split('|')[2]
let signature = q.split('|')[3]
let step1 = q.split('|')[4]
await fetchJson(`https://api.lolhuman.xyz/api/akinator/back?apikey=${global.lolkey}&server=${server}&session=${session}&signature=${signature}&step=${step1}`).then(res => {
let question = res.result.question
let step2 = res.result.step
let progression = res.result.progression
const sections = [ {
title: `SILAHKAN PILIH`,
rows: [
{title: 'Ya', rowId: `${prefix + command} ${server}|${frontaddr}|${session}|${signature}|${step2}|0`},
{title: 'Tidak', rowId: `${prefix + command} ${server}|${frontaddr}|${session}|${signature}|${step2}|1`},
{title: 'Saya Tidak Tau', rowId: `${prefix + command} ${server}|${frontaddr}|${session}|${signature}|${step2}|2`},
{title: 'Mungkin', rowId: `${prefix + command} ${server}|${frontaddr}|${session}|${signature}|${step2}|3`},
{title: 'Mungkin Tidak', rowId: `${prefix + command} ${server}|${frontaddr}|${session}|${signature}|${step2}|4`},
{title: 'Kembali ke Pertanyaan Sebelumnya', rowId: `${prefix + command} ${server}|${frontaddr}|${session}|${signature}|${step2}|5`},
]}]
const listMessage = { text: `${progression} %\n\n${question}`, footer: fake, title: ``, buttonText: "Click Here", sections }
Araa.sendMessage(from, listMessage, { quoted: m })
})
} catch (err) {
console.log(err)
setReply('Fitur sedang error kak coba lain waktu ya')
}
}










