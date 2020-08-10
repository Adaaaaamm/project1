const http = require('http');
const express = require('express');
const app = express();
// كل البكجات الي ممكن تحتجها في اي بوت
const { Client, RichEmbed } = require("discord.js");
var { Util } = require('discord.js');
const { TOKEN, YT_API_KEY, prefix, devs } = require('./config')
const client = new Client({ disableEveryone: true })
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const botversion = require('./package.json').version;
const simpleytapi = require('simple-youtube-api')
const moment = require("moment");
const fs = require('fs');
const util = require("util")
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require('snekfetch');
const guild = require('guild');
const dateFormat = require('dateformat'); //npm i dateformat
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const pretty = require("pretty-ms");
client.login(TOKEN);
const queue = new Map();
var table = require('table').table
const Discord = require('discord.js');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
//ستريم
client.on('ready', function() {
    var ms = 1000;
    var setGame = [`Server : ${client.guilds.size} | Members :${client.users.size}`, 'by Adam..'];
    var i = -1;
    var j = 0;
    setInterval(function() {
        if (i == -1) {
            j = 1;
        }
        if (i == (setGame.length) - 1) {
            j = -1;
        }
        i = i + j;
        client.user.setGame(setGame[i], `http://www.twitch.tv/barontube`);
    }, ms);
});

client.on('message', async(message) => {

    if (message.author.bot) return;

    let args = message.content.split(' ');

    if (args[0] == `${prefix}invite`) {

        message.channel.send("💥تم الارسال في الخاص ✅");

        let inv = await client.generateInvite(['ADMINISTRATOR']);

        var embed1 = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setAuthor("**Because invite bot**")
            .addField(`[ClickHere to invite bot](${inv})`, true)
            .setFooter(`Requested By ${message.author.tag}`, message.author.displayAvatarURL)
            .setTimestamp()

        await message.author.send({ embed: embed1 });

    }

});

client.on('message', message => {
    var prefix = "bg"
    if (message.author.bot) return;
    if (message.content.startsWith(prefix + "contact")) {
        if (!message.channel.guild) return;
        let args = message.content.split(" ").slice(1).join(" ");
        let embed = new Discord.RichEmbed()
            .setTitle("New Message")
            .addField("Message", `${args}`)
            .addField("Server sent from", `${message.guild.name}`)
            .addField("Sent By", `${message.author.tag}`)
            .setTimestamp()

        client.users.get("393478482379800578").send(embed)


    }

});

client.on('message', message => {
    if (message.content === "+ping") {
        const embed = new Discord.RichEmbed()

        .setColor("RANDOM")
            .addField('``سرعة أتصال الــبوت`` ', `${Date.now() - message.createdTimestamp}` + ' ms`')


        message.channel.sendEmbed(embed);
    }
});