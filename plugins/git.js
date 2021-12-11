const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const config = require('../config');
const fs = require("fs")
const Language = require('../language');
const Lang = Language.getString('gitlink');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.GL}, (async (message, match) => {

    var respoimage = await axios.get(config.LIZA, { responseType: 'arraybuffer' })


    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {quoted: message.data , thumbnail: fs.readFileSync('20210811_082543.jpg'), mimetype: Mimetype.png, caption: `*≈≈≈≈≈≈≈Links ☟︎︎︎≈≈≈≈≈≈≈≈*
 
*owner number wa.me/916282137207*
   
*owner number wa.me/916282137207*


*whatsapp group : https://chat.whatsapp.com/FVOdpPLaMvP24rIfTzCGof*


*githublink       https://github.com/cgluttappi/LIZA*


*audio commads    _https://github.com/cgluttappi/LIZA_*

*Bot Make Video ytube https://github.com/cgluttappi/LIZA-_*

*sticker commads  _https://github.com/cgluttappi/LIZA_*     
`}) 

})); 
