const express = require("express");
const app = express();
const PORT = 8000;

app.get('/:word', (req, res) => {
    res.send(req.params.word);
});

app.listen(PORT, () => {
    console.log(`Server started at ${PORT} port`);
});