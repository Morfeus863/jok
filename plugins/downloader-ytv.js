import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'
import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
if (!args[0]) throw '*[βππππβ] INSERTE EL COMANDO MAS EL ENLACE / LINK DE UN VIDEO DE YOUTUBE*'
await m.reply(`*_β³SE ESTA PROCESANDO SU VIDEO...β³_*\n\n*β SI SU VIDEO NO ES ENVIADO, PRUEBE CON EL COMANDO #playdoc O #play.2 α΄ #ytmp4doc β*`)
try {
let qu = args[1] || '360'
let q = qu + 'p'
let v = args[0]
const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v)).catch(async _ => await youtubedlv3(v))
const dl_url = await yt.video[q].download()
const ttl = await yt.title
const size = await yt.video[q].fileSizeH
await await conn.sendMessage(m.chat, { video: { url: dl_url }, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `β’ TITULO: ${ttl}\nβ’ PESO DEL VIDEO: ${size}`, thumbnail: await fetch(yt.thumbnail) }, { quoted: m })
} catch {
await conn.reply(m.chat, '*[β] NO FUE POSIBLE DESCARGAR EL VIDEO*', m)}
}
handler.command = /^getvid|yt(v|mp4)?$/i
export default handler

/*let limit = 50
import fs from 'fs'
import fetch from 'node-fetch'
import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper';
let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => {
if (!args || !args[0]) throw `*[βINFOβ] INSERTE EL COMANDO MAS EL ENLACE / LINK DE UN VIDEO DE YOUTUBE*`
conn.reply(m.chat, `*_β³SE ESTA PROCESANDO SU VIDEO...β³_*\n\n*β SI SU VIDEO NO ES ENVIADO, PRUEBE CON EL COMANDO #playdoc O #play.2 O #ytmp4doc β*`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'REPRODUCTOR DE VIDEO',
body: 'πANI MX SCANSπ',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://www.facebook.com/ANIMxSCANS`}}})
let chat = global.db.data.chats[m.chat]
const isY = /y(es)/gi.test(args[1])
const { thumbnail, video: _video, title } = await youtubedl(args[0]).catch(async _ => await youtubedlv2(args[0])).catch(async _ => await youtubedlv3(args[0]))
const limitedSize = (isPrems || isOwner ? 350 : limit) * 3074
let video, source, res, link, lastError, isLimit
for (let i in _video) {
try {
video = _video[i]
isLimit = limitedSize < video.fileSizeH
if (isLimit) continue
link = await video.download()
if (link) res = await fetch(link)
isLimit = res?.headers.get('content-length') && parseInt(res.headers.get('content-length')) < limitedSize
if (isLimit) continue
if (res) source = await res.arrayBuffer()
if (source instanceof ArrayBuffer) break
} catch (e) {
video = source = link = null
lastError = e
}}
if ((!(source instanceof ArrayBuffer) || !link || !res.ok) && !isLimit) throw '*[β] ERROR: ' + (lastError || 'NO FUE POSIBLE DESCARGAR EL VIDEO*')
let _thumb = {}
try { _thumb = { thumbnail: await (await fetch(thumbnail)).buffer() } }
catch (e) { }
conn.sendFile(m.chat, link, title + '.mp4', `
*π₯ TITULO:* ${title}
*π PESO DEL VIDEO:* ${video.fileSizeH}
`.trim(), m, false, {
..._thumb,
asDocument: chat.useDocument
})}
handler.help = ['mp4', 'v'].map(v => 'yt' + v + ` <url>`)
handler.tags = ['downloader']
handler.command = /^yt(v|mp4)?$/i
export default handler*/
