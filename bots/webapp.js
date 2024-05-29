
const { Telegraf, Markup } = require("telegraf")

const token = process.env.BOT_TOKEN
const chatId = process.env.CHAT_ID
const bot = new Telegraf(token);

const message = `
Essa é uma mensagem automatica. 😎 \n\n

Aqui, temos um link onde é possivel abrir um web app 💼\n\n

Você deve configurar um novo app no botFather.\n

1. Vá até o botFather, digite /newapp e configure todos os passos;\n
2. Configure o arquivo .env e seja feliz.

[Clique aqui e abra so webapp](https://t.me/${process.env.CHAT_BOT_NAME}/${process.env.CHAT_BOT_APP})
`;

loadBotWebAppOnTelegramScreen = () => {
    bot.start((ctx) => {

      ctx.reply('Bem-vindo! Escolha uma opção:', Markup.inlineKeyboard([
        Markup.button.callback('Enviar link exnova.', 'EXNOVA_LINK')
      ]));
    })

    bot.action('EXNOVA_LINK', (ctx) => {
      ctx.answerCbQuery();

      bot.telegram.sendMessage('-1002142868819', message, { parse_mode: 'Markdown' })
      .then(() => {
        console.log('Mensagem enviada com sucesso');
        bot.stop();
      })
      .catch(err => {
        console.error('Erro ao enviar mensagem:', err);
        bot.stop();
      });
    });

    bot.launch();
}


module.exports = loadBotWebAppOnTelegramScreen