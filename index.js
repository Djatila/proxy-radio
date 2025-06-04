const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/", async (req, res) => {
    try {
        const response = await axios.get("http://s3.free-shoutcast.com:18226/statistics?json=1");
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Erro ao acessar estatísticas: " + error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Proxy rodando na porta ${PORT}`);
});
