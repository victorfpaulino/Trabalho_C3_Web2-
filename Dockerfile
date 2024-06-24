# Use a imagem oficial do Node.js como base
FROM node:18

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copie o package.json e o package-lock.json (se disponível)
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o restante do código da aplicação
COPY . .

# Compile o TypeScript para JavaScript
RUN npm cache clean --force
RUN npm install

# Exponha a porta que a aplicação irá rodar
EXPOSE 3000

# Defina o comando para iniciar o servidor
CMD ["npm", "start", "dev"]
