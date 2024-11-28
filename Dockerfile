# Use uma imagem base do Node.js
FROM node:16-alpine

# Define o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código para o contêiner
COPY . .

# Define a porta que será exposta
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
