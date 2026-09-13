# Estrutura do projeto SorriMed

## 1. Objetivo

O projeto deve possuir uma estrutura simples, organizada e proporcional ao seu objetivo institucional. A organização separa backend, frontend, dados, arquivos públicos, testes e documentação, facilitando manutenção, validação e evolução sem criar abstrações desnecessárias.

Este documento distingue a arquitetura planejada do estado efetivamente implementado. A presença de um diretório ou arquivo nesta referência não significa que ele já exista no código.

## 2. Estrutura geral planejada

```text
sorrimed/
├── src/
├── data/
├── public/
├── views/
├── tests/
├── docs/
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## 3. Estrutura atualmente existente

Na implementação atual, estão presentes:

- `src/app.js` e `src/server.js`;
- `src/routes/index.js`;
- controllers de Home e saúde;
- `src/data/home.data.js` e `src/data/site.data.js`;
- middleware central de erros;
- os JSONs institucionais em `data/` e o legado `site.json`;
- CSS, JavaScript e imagens SVG locais em `public/`;
- layout, Home e páginas auxiliares em `views/`;
- testes de integração em `tests/integration/`;
- documentação inicial em `docs/`.

As rotas institucionais completas, API de negócio e a estrutura completa de `src/data/` permanecem planejadas.

## 4. `src/`

`src/` contém o código principal da aplicação:

```text
src/
├── routes/
├── controllers/
├── services/
├── data/
├── middlewares/
├── app.js
└── server.js
```

`src/` não deve conter dados institucionais diretamente, arquivos públicos do navegador, views, documentação ou testes.

## 5. Routes

`src/routes/` concentra as rotas e deve permanecer organizado por área funcional quando a aplicação crescer:

```text
src/routes/
├── index.js
├── home.routes.js
├── about.routes.js
├── services.routes.js
├── professionals.routes.js
├── insurance-plans.routes.js
├── testimonials.routes.js
├── media.routes.js
├── contact.routes.js
└── location.routes.js
```

Essa é uma estrutura planejada. `index.js` é o ponto central de composição, mas atualmente apenas as rotas implementadas estão nele. Rotas devem permanecer simples, encaminhar para controllers e não conter lógica de negócio complexa. A separação entre páginas SSR e API deve permanecer clara.

## 6. Controllers

`src/controllers/` coordena requisições, solicita dados, prepara respostas SSR ou API e seleciona views quando aplicável. Controllers não devem ler JSON diretamente, conhecer detalhes físicos do filesystem, concentrar regras de negócio complexas ou assumir responsabilidades das views.

Controllers planejados podem ser organizados por área: `home.controller.js`, `about.controller.js`, `services.controller.js`, `professionals.controller.js`, `insurance-plans.controller.js`, `testimonials.controller.js`, `media.controller.js`, `contact.controller.js` e `location.controller.js`.

## 7. Services

`src/services/` é opcional. Services somente devem existir quando houver transformação de dados, combinação de fontes, lógica reutilizável ou regra de aplicação que justifique uma camada intermediária.

Services devem permanecer independentes de HTTP sempre que possível e não devem receber diretamente `req`, `res` ou `next`. Não se deve criar service apenas porque existe um controller.

## 8. Data access

`src/data/` é a camada de acesso controlado aos arquivos JSON em `data/`:

```text
src/data/
├── index.js
├── clinic.data.js
├── professionals.data.js
├── services.data.js
├── insurance-plans.data.js
├── testimonials.data.js
├── media.data.js
├── contact.data.js
└── location.data.js
```

Essa estrutura está implementada para os oito recursos oficiais. A camada localiza, lê e interpreta JSONs em UTF-8, trata erros básicos e usa caminhos baseados na estrutura do projeto, sem depender do `cwd` ou de caminhos absolutos da máquina. O acesso é somente leitura na v1.

## 9. `data/`

`data/` é a fonte dos dados institucionais:

```text
data/
├── clinic.json
├── professionals.json
├── services.json
├── insurance-plans.json
├── testimonials.json
├── media.json
├── contact.json
└── location.json
```

Os oito recursos oficiais permanecem separados da camada `src/data/`. Não há banco de dados, CMS, painel administrativo ou API de escrita na v1. Dados fictícios são permitidos por se tratar de um projeto de teste, mas não devem ser gerados em runtime para esconder falhas.

`data/site.json` existe como arquivo legado da fundação e não faz parte dos oito recursos oficiais. Nenhuma migração ou remoção dele é definida nesta etapa.

## 10. `public/`

`public/` contém somente recursos destinados ao navegador:

```text
public/
├── css/
├── js/
├── images/
│   ├── clinic/
│   ├── professionals/
│   ├── services/
│   ├── insurance-plans/
│   └── testimonials/
└── videos/
```

Não devem ser colocados em `public/` dados privados, `.env`, tokens, chaves, credenciais ou informações internas. `data/`, `src/`, `tests/` e `docs/` não devem ser expostos diretamente pelo Express Static.

## 11. CSS e JavaScript do navegador

CSS destinado ao navegador permanece em `public/css/`, e JavaScript do navegador em `public/js/`. Código de servidor permanece em `src/`. O frontend não deve acessar diretamente arquivos de `data/`.

As classes CSS devem utilizar `kebab-case`; a organização deve permanecer simples, consistente e sem duplicações desnecessárias.

## 12. Views

As views permanecem em `views/`:

```text
views/
├── layouts/
│   └── main.ejs
├── pages/
│   ├── home.ejs
│   ├── about.ejs
│   ├── services.ejs
│   ├── professionals.ejs
│   ├── insurance-plans.ejs
│   └── contact.ejs
└── components/
```

Essa estrutura está implementada para as páginas institucionais atuais. Views são responsáveis pela apresentação, recebem dados preparados e não acessam JSON, filesystem, banco ou API diretamente.

## 13. Components

Componentes conceituais incluem `Header`, `Navigation`, `Footer`, `WhatsAppButton`, `ServiceCard`, `ProfessionalCard`, `InsurancePlanCard`, `TestimonialCard` e `MediaCard`. Seções podem ser componentes quando houver benefício real.

Não criar componentes excessivamente pequenos, genéricos ou sem necessidade de reutilização.

## 14. Tests

`tests/` concentra testes automatizados:

```text
tests/
├── api/
├── frontend/
└── integration/
```

`tests/api/` é destinado à API, `tests/frontend/` ao frontend e `tests/integration/` à integração entre partes relevantes. Atualmente existe cobertura de integração da fundação e da Home. Testes não devem ser disponibilizados pelo servidor nem ser dependência do código de produção.

## 15. Docs

`docs/` contém documentação versionada: `VISION.md`, `BUSINESS-RULES.md`, `API-STRUCTURE.md`, `DATA-STRUCTURE.md`, `FRONTEND-STRUCTURE.md`, `PROJECT-STRUCTURE.md` e `IMPLEMENTATION-STATUS.md`.

Documentação registra decisões e estado, mas não representa automaticamente implementação. Os documentos devem permanecer coerentes entre si.

## 16. `app.js` e `server.js`

`src/app.js` configura Express, middleware, arquivos estáticos, engine de views, routers e tratamento de erros. Não inicia o servidor HTTP e pode ser importado pelos testes sem executar `listen()`.

`src/server.js` importa a aplicação, lê `PORT` e `NODE_ENV`, inicia o servidor, registra logs básicos e trata encerramento quando necessário. A separação entre os dois arquivos deve ser preservada.

## 17. Middlewares

`src/middlewares/` contém middlewares realmente necessários:

```text
src/middlewares/
└── error.middleware.js
```

O middleware de erro centraliza o tratamento da aplicação. Outros middlewares somente devem ser adicionados quando houver necessidade real e responsabilidade clara.

## 18. Fluxos da aplicação

### SSR

```text
Navegador → Express → Route → Controller → Service, quando necessário → Data Access → data/*.json → Controller → View → Componentes → HTML
```

Nem toda requisição precisará utilizar todas as camadas.

### API

```text
Cliente → API Router → Controller → Service, quando necessário → Data Access → JSON → Controller → Resposta HTTP
```

A API não deve acessar JSON diretamente a partir das rotas e deve respeitar `API-STRUCTURE.md`.

### Arquivos estáticos

```text
Navegador → Express Static → public/ → Arquivo solicitado → Navegador
```

### Erros

```text
Request → Route → Controller/Service/Data Access → Erro → Error Middleware → Resposta apropriada
```

Detalhes internos não devem ser expostos desnecessariamente.

## 19. Dependências entre camadas

A direção principal é:

```text
routes → controllers → services → data access → data/
controllers → views → components
server.js → app.js
app.js → middlewares/routes
public/ → navegador
tests/ → aplicação e módulos
docs/ → documentação sem dependência de runtime
```

Services são opcionais. O código de produção não deve depender de `tests/` ou `docs/`, `public/` não deve ser importado como camada de backend e dependências circulares devem ser evitadas.

## 20. Nomenclatura

- Diretórios, arquivos, classes CSS, IDs HTML e URLs: `kebab-case`, salvo nomes já estabelecidos por convenção necessária.
- Variáveis e propriedades JavaScript: `camelCase`.
- Campos JSON: `camelCase`.
- Código técnico: inglês.
- Conteúdo apresentado ao usuário: português.

A nomenclatura deve permanecer consistente entre as camadas.

## 21. Configuração e ambiente

O projeto possui `.env` privado e `.env.example` versionado. As variáveis iniciais são `PORT` e `NODE_ENV`.

`.env` não deve ser versionado, e `.env.example` não deve conter segredos reais. Segredos não devem ser armazenados no código, e dados institucionais não devem ser colocados no ambiente sem necessidade.

## 22. Package e README

`package.json` e `package-lock.json` permanecem na raiz. Os scripts mínimos são equivalentes a `npm start` e `npm test`; um script `npm run dev` é opcional. Dependências só devem ser mantidas quando justificadas.

`README.md` contém objetivo, requisitos, instalação, ambiente, execução e testes. Detalhes arquiteturais permanecem principalmente em `docs/`.

## 23. Git

Devem ser versionados código, documentação, testes, dados fictícios necessários, manifests, lockfile, `.env.example` e arquivos necessários à execução. Não devem ser versionados `.env`, `node_modules/`, logs locais, temporários, segredos ou artefatos gerados desnecessários.

Commits devem representar unidades coerentes. Commit e push são operações distintas e nenhum deles deve ser executado automaticamente sem autorização explícita. Operações destrutivas também exigem autorização explícita.

## 24. Paths e portabilidade

A aplicação não deve depender do diretório atual de execução nem de caminhos absolutos como `/home/...`. Caminhos devem ser resolvidos pela estrutura do projeto e funcionar após clone e instalação em outro ambiente compatível. URLs do navegador devem ser URLs web, não caminhos do filesystem.

## 25. Segurança e exposição

Somente recursos públicos devem ser disponibilizados pelo Express Static. `data/`, `src/`, `tests/`, `docs/` e `.env` não devem ser públicos.

Credenciais e segredos nunca devem ser enviados ao navegador. Informações técnicas internas não devem ser expostas desnecessariamente em erros.

## 26. Responsividade, API e SSR

A estrutura permite implementar as regras de `FRONTEND-STRUCTURE.md` usando `views/`, `public/css/`, `public/js/`, `public/images/` e `public/videos/`. A apresentação é responsabilidade do frontend.

SSR e API devem compartilhar a mesma origem de dados. SSR não deve fazer HTTP para a própria API apenas para obter dados já disponíveis internamente. A camada de dados deve evitar duplicação entre SSR e API.

## 27. Escalabilidade proporcional e manutenção

A estrutura deve permitir crescimento gradual sem antecipar banco de dados, CMS, painel administrativo, autenticação, agendamento próprio, chat, pagamentos, filas, microserviços ou infraestrutura complexa. Esses recursos exigem requisitos específicos.

Alterações devem ser limitadas às camadas necessárias do módulo funcional. Não realizar refatorações globais ou modificar partes não relacionadas apenas por padronização.

## 28. Implementação incremental

Implementações devem ocorrer por módulos funcionais e podem envolver dados, data access, service, controller, route, view, components, CSS, JavaScript e testes conforme a necessidade.

Home, Profissionais, Serviços, Convênios e Contato devem ser tratados como módulos funcionais quando implementados. Cada módulo deve ser validado antes do próximo, sem implementação fragmentada desnecessária.

## 29. Documentação como referência

Antes de implementar, a IA deve consultar os documentos relevantes, analisar o estado atual e respeitar o escopo autorizado. A documentação orienta arquitetura, regras, dados, API, frontend e estado, mas não autoriza implementar tudo de uma vez.

Problemas fora do escopo devem ser registrados, não corrigidos automaticamente. Não inventar requisitos, apagar dados, alterar dependências ou criar funcionalidades futuras sem autorização.

## 30. Definition of Done da estrutura

A estrutura é coerente quando:

- responsabilidades das pastas estão claras;
- dependências entre camadas são coerentes;
- SSR e API compartilham a camada de dados;
- dados estão separados do código;
- arquivos públicos estão separados dos internos;
- views estão separadas do backend;
- testes estão separados da produção;
- documentação está separada do runtime;
- configuração sensível está protegida;
- nomenclatura é consistente;
- caminhos são portáveis;
- não há dependências circulares intencionais;
- não há complexidade desnecessária.

A existência física de todos os diretórios planejados não é obrigatória antes de uma necessidade real. A estrutura documentada evolui conforme o projeto avance.

## 31. Relação com os demais documentos

- `VISION.md`: visão e objetivo.
- `BUSINESS-RULES.md`: regras de negócio.
- `API-STRUCTURE.md`: estrutura da API.
- `DATA-STRUCTURE.md`: estrutura dos dados.
- `FRONTEND-STRUCTURE.md`: frontend previsto.
- `PROJECT-STRUCTURE.md`: organização física e arquitetural.
- `IMPLEMENTATION-STATUS.md`: estado efetivo da implementação.

Nenhum documento substitui os demais. Conflitos devem ser identificados e resolvidos explicitamente antes de implementar a decisão afetada.

## 32. Status do documento

A estrutura arquitetural, a estrutura física de referência, responsabilidades, dependências, nomenclatura, configuração e regras de Git estão documentadas.

A implementação real pode estar incompleta em relação à estrutura planejada. A existência desta documentação não declara que toda a arquitetura esteja implementada; o estado real permanece em `IMPLEMENTATION-STATUS.md`.
