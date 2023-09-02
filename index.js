const mineflayer = require('mineflayer');

const prefix = "!";

const bot = mineflayer.createBot({
  host: 'padesemillarnos.ploudos.me', // minecraft server ip
  username: 'felixjuniorr123@outlook.es', // username or email, switch if you want to change accounts
  auth: 'microsoft', // for offline mode servers, you can set this to 'offline'
  //port: 25565,                // only set if you need a port that isn't 25565
  //version: "1.20.1",             // only set if you need a specific version or snapshot (ie: "1.8.9" or "1.16.5"), otherwise it's set automatically
  password: 'F8097253894GB'        // set if you want to use password-based auth (may be unreliable). If specified, the `username` must be an email
});

bot.on('chat', (username, message) => {
  if (username === bot.username) return;

  if(!message.startsWith(prefix)) {
    return;
  }
  const args = message.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if(bot.chat) {
    console.log('el bot ha dicho', args.join(' '))
  }

  if(command == 'di') {
    bot.chat(args.join(' '));
  }
});

// Log errors and kick reasons:
bot.on('kicked', console.log);
bot.on('error', console.log);