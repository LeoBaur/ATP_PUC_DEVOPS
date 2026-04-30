const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API de Gestão de Documentos rodando!');
});

// A rota precisa vir ANTES do listen
app.get('/contatos', (req, res) => {
  res.json([
    { id: 1, nome: "Leo", cargo: "Administrador" }
  ]);
});

// Esse IF garante que a porta só será ocupada se rodarmos "node app.js".
// Se for o Jest rodando o teste, ele apenas usa as rotas sem travar a porta.
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });
}

// Exporta o app para o arquivo de testes conseguir ler
module.exports = app;