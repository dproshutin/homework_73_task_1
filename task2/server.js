const express = require("express");
const app = express();
const PORT = 8001;
const Vigenere = require('caesar-salad').Vigenere;
const KEY = "password";

app.get("/encode/:plainText", (req, res) => {
    const cypherText = Vigenere.Cipher(KEY).crypt(req.params.plainText);
    res.send(cypherText);
});

app.get("/decode/:cypherText", (req, res) => {
    const plainText = Vigenere.Decipher(KEY).crypt(req.params.cypherText);
    res.send(plainText);
});

app.listen(PORT, () => {
    console.log(`Server started at ${PORT} port`);
});