# SorriMed

Site institucional de uma clínica odontológica, criado para apresentar a marca, os serviços, os profissionais e a experiência de atendimento da SorriMed.

O projeto foi construído com foco em uma aplicação simples, rápida e fácil de manter. A interface utiliza renderização no servidor, conteúdo institucional estruturado e uma organização preparada para evoluir sem introduzir complexidade desnecessária.

## Sobre o processo

Este projeto foi desenvolvido integralmente com apoio de inteligência artificial, mas a implementação seguiu um processo estruturado de produto e engenharia.

1. A visão do site, o escopo, as regras de negócio e os critérios de funcionamento foram definidos previamente.
2. A documentação de arquitetura, dados, frontend, API e organização do projeto foi criada no ChatGPT como base de planejamento.
3. Os documentos e prompts foram levados para o VS Code, onde o agente de chat realizou a implementação passo a passo, respeitando as decisões arquiteturais definidas.
4. Cada etapa foi validada com testes, verificação das rotas, conferência dos arquivos estáticos e tratamento dos estados principais da aplicação.

O uso de IA fez parte da execução, mas não substituiu o processo de análise: as regras, os limites do escopo, a arquitetura e as decisões técnicas foram definidos antes da geração do código.

## Tecnologias

- **Node.js 22+** para execução do servidor;
- **Express 5** para aplicação HTTP, rotas e arquivos estáticos;
- **EJS** para renderização das páginas no servidor;
- **HTML, CSS e JavaScript** para a experiência no navegador;
- **JSON local** como fonte dos dados institucionais;
- **Node.js Test Runner** para os testes de integração;
- **dotenv** para configuração por ambiente.

## Arquitetura

A aplicação segue uma arquitetura SSR (Server-Side Rendering): o servidor carrega os dados locais, prepara a página e entrega o HTML já renderizado ao navegador.

```text
sorrimed/
├── data/                 # Dados institucionais em JSON
├── docs/                 # Visão, regras e decisões arquiteturais
├── public/               # CSS, JavaScript, imagens e vídeos públicos
├── src/
│   ├── controllers/      # Coordenação das requisições e respostas
│   ├── data/             # Camada de leitura dos dados
│   ├── middlewares/      # Tratamento centralizado de erros
│   ├── routes/           # Rotas da aplicação
│   ├── app.js            # Configuração do Express
│   └── server.js         # Inicialização do servidor
├── tests/                # Testes de integração
└── views/                # Layout, componentes e páginas EJS
```

As views cuidam da apresentação, os controllers coordenam o fluxo HTTP e a camada `src/data/` concentra o acesso aos arquivos JSON. Essa separação mantém o código organizado e permite trocar a origem dos dados no futuro sem reescrever as páginas.

## Funcionalidades

- Home com slider de vídeos locais, apresentação institucional, serviços, profissionais, depoimentos, mídia e localização;
- Páginas de Sobre, Serviços, Profissionais, Convênios, Contato e Localização;
- Layout compartilhado com header, navegação responsiva e footer;
- Links de WhatsApp, telefone, e-mail e mapa;
- Imagens e vídeos locais servidos pelo Express;
- HTML semântico, `alt` nas imagens, estados vazios e suporte inicial a reduced motion;
- Endpoint `GET /health` para verificação básica da aplicação;
- Tratamento de erros e resposta 404 para rotas inexistentes.

## Rotas principais

| Rota | Conteúdo |
| --- | --- |
| `/` | Home institucional |
| `/sobre` | História e posicionamento da clínica |
| `/servicos` | Serviços odontológicos |
| `/profissionais` | Equipe da clínica |
| `/convenios` | Convênios e planos |
| `/contato` | Canais de contato |
| `/localizacao` | Endereço e mapa |
| `/health` | Status básico da aplicação |

## API e dados

Foi definida uma API institucional REST v1, somente leitura, com os recursos `clinic`, `professionals`, `services`, `insurance-plans`, `testimonials`, `media`, `contact` e `location`. Sua estrutura está documentada em [`docs/API-STRUCTURE.md`](docs/API-STRUCTURE.md) e utiliza o prefixo planejado `/api/v1/`.

Nesta versão, a aplicação utiliza SSR diretamente com dados locais. A API está documentada como uma etapa de evolução e não deve ser considerada funcional até que seus endpoints sejam implementados e validados.

## Por que não há banco de dados?

O SorriMed é um site institucional. Seu conteúdo é predominantemente estático, público e administrado como parte do próprio projeto. Não existem, nesta versão, login, agendamento, painel administrativo, pedidos de escrita ou dados que exijam persistência transacional.

Por isso, arquivos JSON foram suficientes para manter o projeto leve, previsível e proporcional ao objetivo. Caso o produto evolua para agendamentos, gestão de pacientes, autenticação ou edição de conteúdo em tempo real, a camada de dados poderá ser substituída por uma API e um banco de dados sem alterar a responsabilidade das views.

## Como executar

```bash
npm install
npm start
```

Acesse `http://localhost:3000/` no navegador. Para executar os testes:

```bash
npm test
```

## Documentação

As decisões do projeto estão registradas em [`docs/`](docs/), com destaque para:

- [`VISION.md`](docs/VISION.md): objetivo e proposta do produto;
- [`BUSINESS-RULES.md`](docs/BUSINESS-RULES.md): regras de negócio;
- [`PROJECT-STRUCTURE.md`](docs/PROJECT-STRUCTURE.md): organização da aplicação;
- [`DATA-STRUCTURE.md`](docs/DATA-STRUCTURE.md): estrutura dos dados;
- [`FRONTEND-STRUCTURE.md`](docs/FRONTEND-STRUCTURE.md): diretrizes da interface;
- [`API-STRUCTURE.md`](docs/API-STRUCTURE.md): contrato planejado da API.

## Status

O frontend institucional, as páginas SSR, a camada de leitura dos dados, os assets locais e os testes de integração estão implementados. A API REST v1, autenticação, agendamento e painel administrativo permanecem fora do escopo da versão atual.