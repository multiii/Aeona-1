const Command = require("../../structures/Command");
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
module.exports = class extends Command {
  constructor(...args) {
    super(...args, {
      name: "kill",
      aliases: ["murder"],
      description: "Murder a user",
      category: "anime",
    });
  }
  async run(message, args) {
    let client = message.client;
    const member =
      (await await message.mentions.members.first()) ||
      message.guild.members.cache.get(args[0]) ||
      message.guild.members.cache.find(
        (r) =>
          r.user.username.toLowerCase().includes() ===
          args.join(" ").toLocaleLowerCase()
      ) ||
      message.guild.members.cache.find(
        (r) =>
          r.displayName.toLowerCase().includes() ===
          args.join(" ").toLocaleLowerCase()
      );
    if (!member) {
      return message.reply(
        ` You must mention someone to kill!\n\n**Usage:** \`+ kill <user>\``
      );
    }
    if (message.author === member || message.member == member) {
      return message.reply(` You can't kill yourself...`);
    }
    const pickeddeath = deaths[Math.floor(Math.random() * deaths.length)];
    const change1 = pickeddeath.replace("[NAME1]", "<@" + message.author + ">");
    const change2 = change1.replace("[NAME2]", "<@" + member + ">");
    (async () => {
      const response = await fetch("https://nekos.life/api/v2/img/slap");
      const body = await response.json();
      const embed = await new MessageEmbed() // Prettier
        .setColor("RANDOM")
        .setAuthor({
          name: `Tombstone of ${member.displayName}!`,
          iconURL: message.author.displayAvatarURL({
            dynamic: true,
            format: "png",
            size: 2048,
          }),
        })
        .setFooter({
          text: `Requested by ${message.author.username}`,
          iconURL: message.author.displayAvatarURL({
            dynamic: true,
            format: "png",
            size: 2048,
          }),
        })
        .setImage(body.url)
        .setDescription(
          `>>> ${change2}${
            Math.floor(Math.random() * 100 + 1) < 10
              ? "\n||I want to kill myself||"
              : ""
          }`
        );
      message.reply({ embeds: [embed] });
    })();
  }
};
