import TicTacToe from '../lib/tictactoe.js'
let handler = async (m, { conn, usedPrefix, command, text }) => {
conn.game = conn.game ? conn.game : {}
if (Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw '*[â] ð°ðð½ ð´ððð°ð ð´ð½ ðð½ ð¹ðð´ð¶ð¾ ð²ð¾ð½ ð°ð»ð¶ðð¸ð´ð½*'
if (!text) throw `*[â] SE REQUIERE PONER UN NOMBRE A LA SALA DEL JUEGO*\n\n*ââ ð´ð¹ð´ð¼ð¿ð»ð¾*\n*â ${usedPrefix + command} nueva sala*`
let room = Object.values(conn.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
if (room) {
await m.reply('*[ð¹ï¸] INICIA EL JUEGO, UN JUGADOR SE UNIÃ A LA PARTIDA*')
room.o = m.chat
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: 'â',
O: 'â­',
1: '1ï¸â£',
2: '2ï¸â£',
3: '3ï¸â£',
4: '4ï¸â£',
5: '5ï¸â£',
6: '6ï¸â£',
7: '7ï¸â£',
8: '8ï¸â£',
9: '9ï¸â£',
}[v]})
let str = `
ð® *TRES EN RAYA* ð®

â = @${room.game.playerX.split('@')[0]}
â­ = @${room.game.playerO.split('@')[0]}

        ${arr.slice(0, 3).join('')}
        ${arr.slice(3, 6).join('')}
        ${arr.slice(6).join('')}

ðððð½ð¾ ð³ð´ @${room.game.currentTurn.split('@')[0]}
`.trim()
if (room.x !== room.o) await conn.sendMessage(room.x, { text: str, mentions: this.parseMention(str)}, { quoted: m })
await conn.sendMessage(room.o, { text: str, mentions: conn.parseMention(str)}, { quoted: m })
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING' }
if (text) room.name = text     
let imgplay = `https://cope-cdnmed.agilecontent.com/resources/jpg/8/9/1590140413198.jpg`
conn.sendButton(m.chat, `*ð¹ *TRES EN RAYA* ð®*\n\n*â ESPERANDO AL SEGUNDO JUGADOR*\n*â PARA BORRAR O SALIRSE DE LA PARTIDA USEN EL COMANDO ${usedPrefix}delttt*`, wm, imgplay, [['ðð½ð¸ððð´ ð° ð»ð° ð¿ð°ððð¸ð³ð°', `${usedPrefix + command} ${text}`]], m, { mentions: conn.parseMention(text) })
conn.game[room.id] = room
}}
handler.command = /^(tictactoe|ttc|ttt|xo)$/i
export default handler
