require("dotenv").config();
const { Client, GatewayIntentBits, EmbedBuilder } = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

// 🧡 IDs dos canais (troque pelos reais)
const CANAL_3H = "1407081682409881616";
const CANAL_5H = "1407081682409881616";
const CANAL_7H = "1407081682409881616";
const CANAL_8H = "1407081682409881616";

client.once("ready", () => {
  console.log(`✅ Bot logado como ${client.user.tag}`);

  // 🎮 Status / Bio
  client.user.setActivity("Enviando mensagens automáticas no HorizonMC 💬", {
    type: "PLAYING",
  });

  // 🔸 Função para criar embeds
  const criarEmbed = (titulo, descricao, emoji) =>
    new EmbedBuilder()
      .setColor("#ff7b00") // Laranja Horizon
      .setTitle(`${emoji} ${titulo}`)
      .setDescription(descricao)
      .setFooter({ text: "Sistema Automático • HorizonMC" })
      .setTimestamp();

  // 🔹 Enviar mensagens automáticas
  const enviar3h = () => {
    const canal = client.channels.cache.get(CANAL_3H);
    if (!canal) return;
    const embed = criarEmbed(
      "Mensagem automática - 3 horas",
      "> ⚠️ **Atenção!**\nAntes de interagir, leia as regras no canal <#1407081682183393331> para evitar punições e manter um bom ambiente! 💬",
      "🕒"
    );
    canal.send({ embeds: [embed] });
  };

  const enviar5h = () => {
    const canal = client.channels.cache.get(CANAL_5H);
    if (!canal) return;
    const embed = criarEmbed(
      "Mensagem automática - 5 horas",
      "**🎮 Procurando o IP do servidor? Aqui está!**\n\n💻 **Java Edition:** `horizonmc.srvmc.com`\n📱 **Bedrock Edition:** `horizonmc.srvmc.com`\n🌐 *(Caso não funcione)* use: `sp-06.magnohost.com.br`\n🔒 **Porta:** `25503`",
      "⏰"
    );
    canal.send({ embeds: [embed] });
  };

  const enviar7h = () => {
    const canal = client.channels.cache.get(CANAL_7H);
    if (!canal) return;
    const embed = criarEmbed(
      "Mensagem automática - 7 horas",
      "> 💎 **Confira nossos Kits e VIPs!**\nVeja todos os detalhes nos canais abaixo:\n🔗 <#1407081682707943590>\n🔗 <#1407803905722810519>",
      "⌛"
    );
    canal.send({ embeds: [embed] });
  };

  const enviar8h = () => {
    const canal = client.channels.cache.get(CANAL_8H);
    if (!canal) return;
    const embed = criarEmbed(
      "Mensagem automática - 8 horas",
      "**🎫 Quer abrir um ticket?**\nAbra no canal 👉 <#1407081682548428997>",
      "🕗"
    );
    canal.send({ embeds: [embed] });
  };

  // ⏱️ Enviar imediatamente e depois em intervalos
  enviar3h();
  setInterval(enviar3h, 3 * 60 * 60 * 1000);

  enviar5h();
  setInterval(enviar5h, 5 * 60 * 60 * 1000);

  enviar7h();
  setInterval(enviar7h, 7 * 60 * 60 * 1000);

  enviar8h();
  setInterval(enviar8h, 8 * 60 * 60 * 1000);
});

client.login(process.env.TOKEN);
