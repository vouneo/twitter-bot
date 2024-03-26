require("dotenv").config({ path: __dirname + "/.env" });
const CronJob = require("cron").CronJob;

const { twitterClient } = require("./twitterClient.js");

const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

const tweet = async () => {
    try {
        await twitterClient.v2.tweet("hola a todo");
    } catch (e) {
        console.log(e)
    }
}

const cronTweet = new CronJob("30 7 * * *", async() => {
    tweet();
})

cronTweet.start();