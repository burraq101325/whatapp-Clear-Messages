const qrcode = require('qrcode-terminal');

const whatsApp = require('whatsapp-web.js');

const client = new whatsApp.Client();

client.initialize();

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', async () => {
    console.log('Client is ready!');
    C = await client.getChats()
    for (i=0; i<C.length; i++){
        if (!C[i].name){// 
            return;
        }else{
        if(C[i].isGroup === true && C[i].pinned === false){
        await C[i].clearMessages();
        // console.log(C[i].name, i, "Cleared Messages: ✅")
        console.log(C[i])
             }
        }
        
    }    
});