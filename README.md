This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Tests

### Test 1
```
Language: pt
Funcionalidade: Login de usuário

  Cenário: Login com sucesso
    Dado que estou na página de login
    Quando eu insiro usuário senha válidos
    E clico no botão "Login"
    Então eu devo ser redirecionado para a página inicial com a lista de estudos
```

### Test 2
```
Language: pt
Funcionalidade: Abrir caso

  Cenário: Abrir caso selecionado com sucesso
    Dado que estou na página com a lista de casos
    Quando eu clico em um dos casos
    Então eu devo ser redirecionado para a página de visualização do caso
```

### Test 3
```
Language: pt
Funcionalidade: Caso aberto com sucesso

  Cenário: Após seleção, carregar as informações do caso
    Dado que estou na página de visualização do caso
    Verificar se todas as informações foram carregadas
    Incluindo o navio 2D e 3D
```

### Test 4
```
Language: pt
Funcionalidade: Nova simulação

  Cenário: Gerar uma nova simulação
    Abrir o modal "+ Simulate"
    Setar as informações necessárias
    Quando eu clico no botão "Simulate", uma nova simulação será iniciada
```

### Test 5
```
Language: pt
Funcionalidade: Novo Job

  Cenário: Salvar um novo job
    Abrir o modal "Jobs"
    Para acompanhar a execução da simulação
    Ao ser finalizada, clicar no card
    Para carregar as informações do job no cenário
    Quando eu clico no botão "Simulate", uma nova simulação será iniciada
```

