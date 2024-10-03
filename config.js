//base by DGXeon (Xeon Bot Inc.)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

global.prefa = ['','!','.',',','🐤','🗿']
global.owner = ['6285601800364']
global.ownMain = '6285601800364'
global.NamaOwner = 'ᴹᴿメ 𝐇𝐞𝐧𝐝𝐫𝐚 [𝗝𝗕]'
global.sessionName = 'session'
global.connect = true // Change To False If You Want To Use Qr Code
global.namabot = 'ᴹᴿメ 𝐇𝐞𝐧𝐝𝐫𝐚 [𝗝𝗕]ᵇᵘᵍ ᵇᵒᵗ'
global.wm = "™©ᴹᴿメ 𝐇𝐞𝐧𝐝𝐫𝐚 [𝗝𝗕]"
global.themeemoji = '🪀'
global.author = '🦄드림 가이 Xeon' 
global.packname = 'Sticker By\n\n' 
global.domain = ''
global.apikey = 'ptla_F9N0OMtFjU0fbiO04EJiPUcw3XaPgMUmJZA6cAk3zt8' 
global.capikey = 'ptlc_4SNLfuJidXDSWPx1LeIdY3TrFrcTaUcWqcJ92uORpTV'
global.eggsnya = '15'
global.location = '1'
global.url1 = 'https://whatsapp.com/channel/0029VanqCbu3QxS2PhMIw332'
global.url2 = 'https://whatsapp.com/channel/0029VanqCbu3QxS2PhMIw332'
global.linkgc = 'https://whatsapp.com/channel/0029VanqCbu3QxS2PhMIw332'
global.delayjpm = 3500

//menu type 
//v1 is image menu, 
//v2 is link + image menu,
//v3 is video menu,
//v4 is call end menu
global.typemenu = 'v1'

global.mess = {
ingroup: 'This feature can only be used in groups.',
admin: 'This feature is specifically for group admins.',
notadmin: "The bot must be an admin first",
owner: 'This command can be used by owner only',
premium: 'This command can be used by premium user only',
seller: 'This feature can only be used by resellers and owners only',
usingsetpp: `This command can be used by owner only`,
wait: 'In process...',
success: 'Done✓',
bugrespon: `In process...`
}

global.nick = {
aaa: "🦄드림 가이 Xeon",
bbb: "🦄드림 가이 Xeon",
ccc: "🦄드림 가이 Xeon ‌‌‌‌‌‌‌‌‌‌‌",
ddd: "🦄드림 가이 Xeon",
eee: "🦄드림 가이 Xeon",
xxx: "🦄드림 가이 Xeon",
sss: "🦄드림 가이 Xeon",
ttt: "🦄드림 가이 Xeon"
}

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
	delete require.cache[file]
	require(file)
})