# Projeto de Estudo

Este projeto foi criado como parte da minha jornada de aprendizado do react/next. Ele inclui um projeto para criar e manipular tasks.

## Índice

- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Executando o Servidor de Desenvolvimento](#executando-o-servidor-de-desenvolvimento)
- [Licença](#licença)

## Pré-requisitos

1. Certifique-se de ter o Node.js instalado em sua máquina. Você pode baixá-lo em [Node.js](https://nodejs.org/).
2. Certifique-se de ter a extenção Prettier instalada em seu Visual Studio Code.

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/max-all/project-tasks.git
```

2. Navegue até o diretório do projeto:

```bash
cd project-tasks
```

3. Instale as dependências:

```bash
npm install
```

ou

```bash
yarn install
```
4. Certifique-se de criar um [Github-App](https://github.com/settings/apps/) capturar as chaves para inserir no arquivo [Arquivo-env](#arquivo-env) para usar o next-auth

## Arquivo-env

1. Arquivo .env

```bash
GITHUB_ID= Gerado no Github-App
GITHUB_SECRET= Gerado no Github-App
NEXTAUTH_URL=http://localhost:3000/
NEXTAUTH_SECRET= aqui pode gerar pelo gitBash
```

2. Gerando a chave para o NEXTAUTH_SECRET no terminal gitBash

```bash
openssl rand -base64 32
```

## Executando o Servidor de Desenvolvimento

Primeiro, execute o servidor de desenvolvimento:

```bash
npm run dev
```

Abra http://localhost:3000 com seu navegador para ver o resultado.

## Licença

Este projeto está licenciado sob a Licença MIT
