require("dotenv").config();
const OpenAI = require("openai");
const { App } = require("@slack/bolt");
const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1"
});
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});
app.command("/fuji-ping", async ({ command, ack, respond }) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond({ text: `Pong!\nLatency: ${latency}ms` });
});
app.command("/roll", async ({ command, ack, respond }) => {
  await ack();
  const max = parseInt(command.text) || 6;
  const result = Math.floor(Math.random() * max) + 1;
  await respond(`Rolling..... ${result}`);
});
app.command("/fuji-timer", async ({ command, ack, respond }) => {
  await ack();

  setTimeout(() => {
    respond({ text: `${command.text} seconds have passed! <@U0BSW0G8URL>` });
  }, Number(command.text) * 1000);
  
  await respond({ text: `Timer set for ${command.text} seconds` });
});
app.command("/fuji-ask", async ({ command, ack, respond }) => {
  await ack();
  await respond({ text: "Thinking..." });

  const response = await openai.chat.completions.create({
    model: "google/gemma-4-31b-it:free",
    messages: [
      {
        role: "system",
        content: "Please act as an helper for the user and dont use ** and dont add unenssary stuff and rage bait a bit "
      },
      {
        role: "user",
        content: command.text
      }
    ]
  });
  await respond({
    text: response.choices[0].message.content
  });
});
(async () => {
  await app.start();
  console.log("Bot is running!");
})();