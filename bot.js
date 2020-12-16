const Discord = require('discord.js');
const client = new Discord.Client();
const generator = require('generate-password');

client.on('ready', () => {
 client.user.setActivity("Generating Nitro!");
 console.log("Bot ("+client.user.tag+") Ready!");
 });
 
client.on("message", async message => {
  const prefix = "a!";
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if(command === "generate"){
	var i = 0;
    while (i<1000) { //Number of messages
    var password = generator.generate({
    length: 16,
    numbers: true
});
	message.channel.send("https://discord.gift/" + password)
    i++;
	}
  }
})

client.login('Nzg4NjgyMTU5OTg4NjcwNDg0.X9nDfw.A-Xrfp5BRKko2_JDUvcXXHN7Lqk');
