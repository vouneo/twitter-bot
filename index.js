require("dotenv").config({ path: __dirname + "/.env" });
const { twitterClient } = require("./twitterClient.js");
const cron = require("node-cron");

const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

const tweet = async () => {
    try {
        await twitterClient.v2.tweet("***1TEST***");
    } catch (e) {
        console.log(e);
    }
}

// Programa la ejecución de la función tweet() para que se ejecute a las 7:30 am todos los días
cron.schedule("30 7 * * *", () => {
    tweet();
}, {
    timezone: "America/Santiago" // Establece la zona horaria, ajusta según sea necesario
});
