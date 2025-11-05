// 🌍 Carrega as variáveis de ambiente
require("dotenv").config();

// 🧠 Dependências principais
const express = require("express");
const { Client, GatewayIntentBits, EmbedBuilder } = require("discord.js");

// ⚙️ Inicia o servidor web (Render + UptimeRobot)
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("✅ Bot HorizonMC online e funcionando!");
});

app.listen(port, () => console.log(`🌐 Servidor ativo na porta ${port}`));

// 💬 Inicia o bot
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

// 🧡 ID do canal geral (mesmo canal para todas as mensagens)
const CANAL = "1407081682409881616";

client.once("ready", () => {
  console.log(`✅ Bot logado como ${client.user.tag}`);

  client.user.setActivity("HorizonMC 💬 Mensagens automáticas", {
    type: 0, // 0 = PLAYING
  });

  // 🔸 Cria embeds personalizados
  const criarEmbed = (titulo, descricao, emoji) =>
    new EmbedBuilder()
      .setColor("#ff7b00")
      .setTitle(`${emoji} ${titulo}`)
      .setDescription(descricao)
      .setFooter({ text: "Sistema Automático • HorizonMC" })
      .setTimestamp();

  // 🔹 Funções de envio
  const enviarMsg = (titulo, descricao, emoji) => {
    const canal = client.channels.cache.get(CANAL);
    if (!canal) return console.log("⚠️ Canal não encontrado!");
    const embed = criarEmbed(titulo, descricao, emoji);
    canal.send({ embeds: [embed] }).catch(console.error);
  };

  // ⏱️ Enviar mensagens em intervalos diferentes
  const startMensagens = () => {
    // 2h
    enviarMsg(
      "Mensagem automática - 2 horas",
      "> 💡 **Dica:** Use o comando `/help` ou veja nossos tutoriais para aprender mais sobre o HorizonMC!",
      "🕑"
    );
    setInterval(() => {
      enviarMsg(
        "Mensagem automática - 2 horas",
        ">  ⚠️ Atenção!
Antes de interagir, leia as regras no canal https://discord.com/channels/1407081681386475551/1407081682183393331 para evitar punições e manter um bom ambiente! 💬",
        "🕑"
      );
    }, 2 * 60 * 60 * 1000);

    // 3h
    setInterval(() => {
      enviarMsg(
        "Mensagem automática - 3 horas",
        "Convide amigos e ganhe recompensas incríveis!",
        "🕒"
      );
    }, 3 * 60 * 60 * 1000);

    // 5h
    setInterval(() => {
      enviarMsg(
        "Mensagem automática - 5 horas",
        "**🎮 IP do servidor:**\n💻 Java: `horizonmc.srvmc.com`\n📱 Bedrock: `horizonmc.srvmc.com`\n🔒 Porta: `25503`",
        "⏰"
      );
    }, 5 * 60 * 60 * 1000);

    // 7h
    setInterval(() => {
      enviarMsg(
        "Mensagem automática - 7 horas",
        "> 💎 **Confira nossos Kits e VIPs!**\nVeja em <#1407081682707943590> e <#1407803905722810519>",
        "⌛"
      );
    }, 7 * 60 * 60 * 1000);
  };

  // Inicia o sistema de mensagens
  startMensagens();
});

// 🚀 Login do bot
client.login(process.env.TOKEN);
