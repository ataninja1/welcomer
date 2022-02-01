const botconfig = require(`./botconfig.json`);
const colors = require(`./colors.json`);
const discord = require('discord.js');
const client = new discord.Client();

client.on('ready', () => {
    console.log(`${client.user.tag} is ready`);
});

client.on('guildMemberAdd', member => {
    let welcomeChannel = client.channels.cache.get("868154382506676255") //inja vared kon
    let targetchannel = '937949733345968128' //inja vared kon
    if(welcomeChannel){

        let welcomeEmbed = new discord.MessageEmbed()

        if(member.user.bot){

            welcomeEmbed.setColor(colors.yellow)
            welcomeEmbed.setAuthor(`${member.guild.name}`)
            welcomeEmbed.setDescription(`Slm <@${member.user.id}> Be Gang Çukur Khosh Omdi Jahat Moshahede Ghavanin Be Chanel ${member.guild.channels.cache.get(targetchannel).toString()} Moraje Konid`)
            welcomeEmbed.setThumbnail(member.user.displayAvatarURL())
            welcomeEmbed.setFooter(`${client.user.username} (=`)
            welcomeChannel.send(welcomeEmbed)
        }else{
            welcomeEmbed.setColor(colors.aqua)
            welcomeEmbed.setAuthor(`${member.guild.name}`)
            welcomeEmbed.setDescription(`Slm <@${member.user.id}> Be Gang Çukur Khosh Omdi Jahat Moshahede Ghavanin Be Chanel ${member.guild.channels.cache.get(targetchannel).toString()} Moraje Konid`)
            welcomeEmbed.setThumbnail(member.user.displayAvatarURL())
            welcomeEmbed.setFooter(`${client.user.username}  (=`)
            welcomeChannel.send(welcomeEmbed)
        }
    }else{
        console.log("Welcome Channel Yaft Nashod")
    }
})

client.on("ready", () => {
    function YousamPower() {
      let hungry = ["Çukur Gang" ]
      let Power = Math.floor(Math.random() * hungry.length);
      client.user.setActivity(hungry[Power], {type: "STREAMING", url: "https://www.twitch.tv/drninja212"});
    }; setInterval(YousamPower, 2000)
});

client.login(botconfig.token);

