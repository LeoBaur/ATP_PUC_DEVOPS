const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API de Gestão de Documentos rodando!');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

app.get('/contatos', (req, res) => {
  res.json([
    { id: 1, nome: "Leo", cargo: "Administrador" }
  ]);
});