# SimpleSlackbot

![SimpleSlackbot](IMG_7623.jpeg)

A simple Slack bot 

It started with /fuji-timer and includes a few useful commands.

Commands

* /fuji-timer <seconds> — Set a timer
* /fuji-ping — Check bot latency
* /fuji-ask <question> — Ask the AI

## Run it yourself

1. Clone the repo and install the dependencies:

```text
$ git clone https://github.com/Foxiified/SimpleSlackbot.git
$ cd SimpleSlackbot
$ npm install
```

2. Create a `.env` file:

```env
SLACK_BOT_TOKEN=your_bot_token
SLACK_APP_TOKEN=your_app_token
OPENROUTER_API_KEY=your_openrouter_key
```

3. Start the bot:

```text
$ node index.js
```

The bot should now be running in Slack\.

Made with Node.js, Slack Bolt, and Openai (Openrouter).

Made by Foxiified.
