let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let text = `*[โINFOโ] LAS FUNCIONES PARA SER BOT (#SERBOT, #JADIBOT, #BOTS, #GETCODE, #SUBBOTS, #SERSUBBOT) NO ESTAN ACTUALMENTE FUNCIONALES PARA ESTE BOT (๐ANI MX SCANS๐)*

*โโ PUEDE PROBAR INSTALAR DESDE CERO EL BOT SIGUIENDO UNO DE LOS TUTORIALES QUE HAY DE MI MAESTRO ๐ฉ๐๐๐๐ ๐บ๐๐๐๐๐๐ EN EL CANAL DE THE SHADOW BROKERS*
*โ https://www.youtube.com/channel/UCSTDMKjbm-EmEovkygX-lCA*`
let buttonMessage= {
'document': { url: `https://github.com/ReyEndymion/ANI_MX_SCANS-MD` },
'mimetype': `application/${document}`,
'fileName': `ใTraducciones de Manga ใ`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 0,
'isForwarded': false,
'externalAdReply': {
'mediaUrl': 'https://github.com/ReyEndymion/ANI_MX_SCANS-MD',
'mediaType': 2,
'previewType': 'pdf',
'title': 'Bot promocional del proyecto ๐ANI MX SCANS๐ โฉ',
'body': '๐ANI MX SCANS๐',
'thumbnail': imagen1,
'sourceUrl': 'https://www.facebook.com/ANIMxSCANS'}},
'caption': text,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}instalarbot`, buttonText: {displayText: 'INSTALARBOT'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })}
handler.command = /^(jadibot|serbot|bots|subbots|getcode)/i
export default handler

