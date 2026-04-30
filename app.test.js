const request = require('supertest');
const app = require('./app'); 

describe('Testes Unitários da API', () => {
  
  it('1. Deve responder na raiz (/) com status 200', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });

  it('2. A rota de listagem de contatos (/contatos) deve retornar status 200', async () => {
    const response = await request(app).get('/contatos');
    expect(response.statusCode).toBe(200);
  });

  it('3. A rota de contatos deve retornar no formato JSON', async () => {
    const response = await request(app).get('/contatos');
    expect(response.headers['content-type']).toMatch(/json/);
  });

  it('4. Deve retornar erro 404 para rotas que não existem', async () => {
    const response = await request(app).get('/rota-que-nao-existe');
    expect(response.statusCode).toBe(404);
  });

  it('5. O tempo de resposta da rota de contatos deve ser menor que 500ms', async () => {
    const start = Date.now();
    await request(app).get('/contatos');
    const duration = Date.now() - start;
    expect(duration).toBeLessThan(500);
  });

});