# Usa uma imagem oficial do Node.js leve
FROM node:18-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copia os arquivos de dependência
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código da API
COPY . .

# Expõe a porta que a nossa API usa
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["node", "app.js"]
