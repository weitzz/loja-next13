## 💻 Loja de produtos eletronicos com Nextjs 13 - Prisma -Mongodb

### :zap: Para rodar a aplicação

> OBS: pode-se utilizar o gerenciador de pacotes npm ou o yarn para rodar os comandos abaixo

Execute na pasta raiz para instalar as dependências
```bash
  npm install
```


Rode  na pasta raiz. Acesse via **localhost:3000**.
```bash
  npm run dev
```


Crie um `.env` adicione as URL's

para criar o NEXTAUTH_SECRET rode em seu terminal openssl rand -base64 32

```bash
  openssl rand -base64 32
```

- DATABASE_URL
- NODE_ENV
- NEXTAUTH_URL
- HOST_URL
- NEXTAUTH_SECRET
- GOOGLE_CLIENT_ID
- GOOGLE_CLIENT_SECRET

Gerar schemas do prisma

```bash
  npx prisma generate
```

## 💻 Tecnologias utilizadas

- NexJS 13
- Typescript
- Shadcn/ui
- React-hook-form
- Zod
- Tailwind
- Toastfy

 <p align="center">Feito com ❤️ por <strong>Tatiane Weitzel<p>
