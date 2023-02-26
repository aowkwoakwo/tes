module.exports = async (Araa, m, q, prefix, command, from, fake, fetchJson, setReply) => {
try{
let server = q.split('|')[0]
let frontaddr = q.split('|')[1]
let session = q.split('|')[2]
let signature = q.split('|')[3]
let step1 = q.split('|')[4]
let teks = q.split('|')[5]
let data = await fetchJson(`https://api.lolhuman.xyz/api/akinator/answer?apikey=${global.lolkey}&server=${server}&frontaddr=${frontaddr}&session=${session}&signature=${signature}&step=${step1}&answer=${teks}`)
let question = data.result.question
let progression = data.result.progression
let step2 = data.result.step
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
if (data.result.question) {
Araa.sendMessage(from, listMessage, { quoted: m })
} else {
let buttons = [{ buttonId: `${prefix + command}`, buttonText: { displayText: `${global.Mainlagi}` }, type: 1 }]
let name = data.result.name
let description = data.result.description
let image = data.result.image
Araa.sendMessage(from, { image: { url: image }, caption: `Saya tebak pasti itu ${name}`, footer: description, buttons })
}
} catch (err) {
console.log(err)
setReply('Fitur sedang error kak coba lain waktu ya')
}
}