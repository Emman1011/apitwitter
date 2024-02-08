const express = require('express');
const app = express();
const listHashtagRouter = require('./routes/list-hashtag');

app.use( listHashtagRouter);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor Express rodando na porta ${PORT}`);
});
