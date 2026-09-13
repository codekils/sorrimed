# Estrutura da API do SorriMed

> Esta é a documentação planejada da API institucional v1. A API ainda não está implementada nesta etapa.

## 1. Objetivo

A API do SorriMed será uma API REST pública, baseada em HTTP e versionada, destinada a disponibilizar dados institucionais públicos para o frontend e para possíveis consumidores futuros.

Na primeira versão, a API será somente leitura e não funcionará como sistema administrativo.

## 2. Versionamento

A primeira versão utilizará o prefixo:

```text
/api/v1/
```

Exemplos:

```text
GET /api/v1/clinic
GET /api/v1/professionals
GET /api/v1/services
```

Mudanças incompatíveis futuras deverão utilizar uma nova versão, como `/api/v2/`. Alterações incompatíveis não devem ser introduzidas silenciosamente dentro da mesma versão.

## 3. Recursos da API v1

Os recursos definidos para a primeira versão são exatamente:

1. `clinic`
2. `professionals`
3. `services`
4. `insurance-plans`
5. `testimonials`
6. `media`
7. `contact`
8. `location`

Não há outros recursos definidos para esta versão.

## 4. Endpoints iniciais

Todos os endpoints da API institucional v1 são de leitura:

| Método | Endpoint | Recurso |
| --- | --- | --- |
| GET | `/api/v1/clinic` | `clinic` |
| GET | `/api/v1/professionals` | `professionals` |
| GET | `/api/v1/services` | `services` |
| GET | `/api/v1/insurance-plans` | `insurance-plans` |
| GET | `/api/v1/testimonials` | `testimonials` |
| GET | `/api/v1/media` | `media` |
| GET | `/api/v1/contact` | `contact` |
| GET | `/api/v1/location` | `location` |

## 5. Métodos HTTP

Na primeira versão, somente o método `GET` será utilizado.

Não fazem parte da API v1:

- `POST`;
- `PUT`;
- `PATCH`;
- `DELETE`.

Não haverá endpoints de escrita nem CRUD administrativo nesta versão.

## 6. Autenticação e autorização

Os endpoints institucionais da API v1 serão públicos.

Esta versão não possui:

- login;
- cadastro de usuários;
- autenticação;
- autorização administrativa;
- painel administrativo.

Por isso, `401 Unauthorized` e `403 Forbidden` não fazem parte do contrato normal dos endpoints institucionais desta versão.

## 7. Recurso `clinic`

### Endpoint

```http
GET /api/v1/clinic
```

Representa as informações institucionais principais da clínica.

### Campos conceituais

- `name`
- `description`
- `about`
- `mission`
- `values`
- `differentials`

### Estrutura conceitual

```json
{
  "name": "...",
  "description": "...",
  "about": "...",
  "mission": "...",
  "values": [],
  "differentials": []
}
```

O exemplo é conceitual e não define conteúdo real.

## 8. Recurso `professionals`

### Endpoint

```http
GET /api/v1/professionals
```

Retorna uma coleção de profissionais.

### Campos possíveis por item

- `id`
- `name`
- `photo`
- `specialty`
- `description`

### Exemplo conceitual

```json
{
  "id": "1",
  "name": "Nome do profissional",
  "photo": "/images/professionals/profissional.jpg",
  "specialty": "Especialidade",
  "description": "Descrição profissional"
}
```

## 9. Recurso `services`

### Endpoint

```http
GET /api/v1/services
```

Retorna uma coleção de serviços.

### Campos possíveis por item

- `id`
- `name`
- `description`
- `image`

### Exemplo conceitual

```json
{
  "id": "1",
  "name": "Nome do serviço",
  "description": "Descrição do serviço",
  "image": "/images/services/servico.jpg"
}
```

## 10. Recurso `insurance-plans`

### Endpoint

```http
GET /api/v1/insurance-plans
```

Retorna uma coleção de convênios ou planos.

### Campos possíveis por item

- `id`
- `name`
- `logo`
- `description`

### Exemplo conceitual

```json
{
  "id": "1",
  "name": "Nome do convênio",
  "logo": "/images/insurance-plans/convenio.png",
  "description": "Informação complementar"
}
```

A existência de um plano na API não significa automaticamente que todos os procedimentos da clínica sejam cobertos. Informações de cobertura devem respeitar as regras de negócio.

## 11. Recurso `testimonials`

### Endpoint

```http
GET /api/v1/testimonials
```

Retorna uma coleção de depoimentos.

### Campos possíveis por item

- `id`
- `name`
- `photo`
- `text`

### Exemplo conceitual

```json
{
  "id": "1",
  "name": "Nome autorizado",
  "photo": "/images/testimonials/paciente.jpg",
  "text": "Depoimento do paciente"
}
```

## 12. Recurso `media`

### Endpoint

```http
GET /api/v1/media
```

Retorna uma coleção de mídias.

### Campos possíveis por item

- `id`
- `type`
- `url`
- `title`
- `description`

O campo `type` inicialmente aceita:

- `image`;
- `video`.

### Exemplo conceitual

```json
{
  "id": "1",
  "type": "image",
  "url": "/images/clinic/clinic.jpg",
  "title": "Clínica SorriMed",
  "description": "Ambiente da clínica"
}
```

## 13. Recurso `contact`

### Endpoint

```http
GET /api/v1/contact
```

Representa os canais institucionais de contato.

### Campos

- `whatsapp`
- `phone`
- `email`

### Exemplo conceitual

```json
{
  "whatsapp": "+55XXXXXXXXXXX",
  "phone": "+55XXXXXXXXXXX",
  "email": "contato@exemplo.com"
}
```

Este recurso não deve conter:

- senhas;
- tokens;
- chaves privadas;
- credenciais;
- informações administrativas;
- dados internos que não sejam destinados à publicação.

## 14. Recurso `location`

### Endpoint

```http
GET /api/v1/location
```

Representa a localização pública da clínica.

### Campos

- `address`
- `mapUrl`

### Exemplo conceitual

```json
{
  "address": "Endereço da SorriMed",
  "mapUrl": "https://..."
}
```

## 15. Dados fictícios

O SorriMed é um projeto de teste. Durante o desenvolvimento, os dados retornados pela API podem ser fictícios, incluindo dados da clínica, profissionais, serviços, convênios, depoimentos, mídia, contato e localização.

Os dados fictícios destinam-se exclusivamente a:

- desenvolvimento;
- demonstração;
- testes;
- validação funcional;
- validação visual.

Eles não devem ser apresentados como dados reais fora do contexto de teste.

## 16. Escopo desta parte

Esta Parte 1/3 documenta a estrutura planejada da API v1. A API não foi implementada nesta etapa.

Não foram criados endpoints na aplicação, nem alterados código, rotas, controllers, services, dados ou dependências.

## 17. Contrato de resposta

As respostas de sucesso da API v1 devem seguir um formato consistente.

### Recurso único

```json
{
  "success": true,
  "data": {}
}
```

### Coleção

```json
{
  "success": true,
  "data": []
}
```

Nesse contrato:

- `success` identifica o sucesso da operação;
- `data` contém o recurso ou a coleção retornada;
- o formato deve ser consistente entre os endpoints da v1;
- campos adicionais não devem ser criados sem necessidade ou decisão documentada.

## 18. Contrato de erro

As respostas de erro devem seguir o formato:

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Mensagem compreensível sobre o erro."
  }
}
```

Regras do contrato:

- `success` deve ser `false`;
- `error.code` representa uma identificação técnica controlada do erro;
- `error.message` deve ser compreensível para o consumidor da API;
- mensagens não devem expor stack trace, caminhos internos, segredos ou detalhes sensíveis;
- o contrato de erro deve ser consistente entre os endpoints.

Não há, nesta etapa, uma lista extensa de códigos de erro definida.

## 19. Códigos HTTP

Os códigos previstos para a API v1 são:

- `200` — requisição processada com sucesso;
- `400` — requisição inválida, quando aplicável;
- `404` — recurso ou rota não encontrado, quando aplicável;
- `500` — erro interno do servidor.

Os códigos `401 Unauthorized` e `403 Forbidden` não fazem parte da API pública v1 atual, pois não há autenticação ou autorização nesta versão.

Outros códigos HTTP não devem ser introduzidos como regra sem necessidade real ou decisão posterior.

## 20. Fonte dos dados

A API v1 utilizará dados institucionais e de teste armazenados localmente em arquivos JSON dentro de `data/`.

| Recurso | Fonte planejada |
| --- | --- |
| `clinic` | `data/clinic.json` |
| `professionals` | `data/professionals.json` |
| `services` | `data/services.json` |
| `insurance-plans` | `data/insurance-plans.json` |
| `testimonials` | `data/testimonials.json` |
| `media` | `data/media.json` |
| `contact` | `data/contact.json` |
| `location` | `data/location.json` |

Nesta v1:

- não haverá banco de dados;
- não haverá CMS;
- não haverá painel administrativo;
- não haverá edição dos dados através da API;
- os dados serão somente leitura;
- dados fictícios serão permitidos porque o SorriMed é um projeto de teste.

Esta seção documenta a estrutura planejada. Nenhum arquivo JSON é criado, movido ou alterado nesta etapa.

## 21. Organização interna da API

A organização conceitual da API é:

```text
routes
  ↓
controllers
  ↓
services (quando realmente necessários)
  ↓
data access
  ↓
data/*.json
```

Responsabilidades:

- `routes` definem os caminhos HTTP;
- `controllers` coordenam a requisição e a resposta;
- `services` são opcionais e só devem existir quando houver lógica, reutilização ou transformação que justifique sua existência;
- `data access` realiza o acesso controlado aos arquivos JSON;
- os arquivos JSON são a fonte dos dados.

Não deve haver lógica complexa dentro das rotas nem camadas desnecessárias.

## 22. Relação entre SSR e API

A aplicação possui dois fluxos de consumo planejados.

### SSR

```text
Navegador
  ↓
Express
  ↓
route
  ↓
controller
  ↓
data access
  ↓
JSON
  ↓
controller
  ↓
EJS
  ↓
HTML
```

### API

```text
Cliente HTTP
  ↓
API route
  ↓
controller
  ↓
service, quando necessário
  ↓
data access
  ↓
JSON
  ↓
resposta JSON
```

Decisões arquiteturais:

- SSR não deve fazer chamadas HTTP para a própria API sem necessidade;
- SSR e API devem compartilhar a mesma fonte de dados e a mesma camada de acesso aos dados;
- a API existe como interface HTTP reutilizável, não como intermediária obrigatória do SSR;
- rotas de páginas e rotas da API devem permanecer claramente diferenciadas.

## 23. Comunicação com o frontend

O frontend/browser pode consumir a API por HTTP/HTTPS quando houver necessidade.

- O código do navegador não deve acessar diretamente os arquivos JSON.
- Chamadas client-side devem ficar organizadas em uma camada própria de comunicação quando existirem.
- Respostas da API devem ser validadas antes de serem utilizadas pela interface.
- O frontend deve tratar sucesso, erro, ausência de dados e indisponibilidade do servidor.
- Timeouts e falhas de comunicação não devem quebrar desnecessariamente o restante da interface.

Nenhuma biblioteca específica de consumo HTTP é definida nesta etapa.

## 24. CORS

CORS deve ser configurado somente quando necessário.

- Em desenvolvimento, pode ser necessário permitir a origem local utilizada pelo projeto.
- Em produção, devem ser permitidas somente as origens oficiais necessárias.
- `Access-Control-Allow-Origin: *` não deve ser adotado permanentemente sem avaliação.
- Como o SSR é executado pelo próprio servidor, não é necessário criar CORS apenas para permitir que o SSR consuma a própria API.

Nenhuma dependência ou configuração de CORS é adicionada nesta etapa.

## 25. Configuração e ambientes

A API deve respeitar a configuração de ambiente já definida pelo projeto:

- `NODE_ENV`;
- `PORT`.

Regras de configuração:

- `.env` permanece privado;
- `.env.example` permanece versionado;
- segredos não devem ser armazenados no código;
- a API não deve depender de caminhos absolutos específicos da máquina;
- a configuração deve funcionar em desenvolvimento e produção sem alterações estruturais no código.

Não são adicionadas novas variáveis de ambiente nesta etapa sem necessidade.

## 26. Tratamento de erros

- Erros de leitura dos JSON devem ser tratados pela aplicação e encaminhados ao mecanismo central de tratamento de erros.
- A API deve retornar o contrato de erro definido neste documento.
- Erros internos não devem expor informações técnicas sensíveis ao cliente.
- Erros em um recurso ou parte da aplicação não devem bloquear desnecessariamente os demais recursos.
- Rotas inexistentes devem ser tratadas de forma consistente.
- Falhas de serviços externos, como mapas ou WhatsApp, não devem impedir a disponibilidade das demais informações institucionais.
- Não devem ser utilizados dados fictícios em runtime para esconder falhas de leitura ou indisponibilidade.

## 27. Logs e observabilidade

A API deve possuir observabilidade básica suficiente para manutenção, incluindo:

- inicialização do servidor;
- encerramento do servidor;
- erros internos;
- falhas de acesso aos dados;
- requisições problemáticas quando necessário.

Logs não devem conter segredos nem expor informações privadas ou sensíveis. Detalhes técnicos podem ser mais completos em desenvolvimento; em produção, deve-se evitar exposição desnecessária de detalhes internos.

Nenhuma biblioteca específica de logging é definida nesta etapa.

## 28. Segurança básica da API

- A API v1 é pública e somente leitura.
- Não existe autenticação ou autorização na v1.
- Não existem usuários, pagamentos, administração ou chat.
- Não existem operações de escrita.
- Dados privados ou sensíveis não devem ser expostos.
- `data/`, `src/` e `tests/` não devem ser disponibilizados como arquivos estáticos pelo Express.
- Segredos nunca devem chegar ao código executado no navegador.
- Entrada recebida pelo servidor deve ser tratada como não confiável quando houver entrada aplicável.
- URLs externas devem ser tratadas de maneira segura.
- Produção deve utilizar HTTPS.

Nenhuma medida de segurança é implementada nesta etapa.

## 29. Performance

As decisões relevantes para a API são:

- evitar chamadas duplicadas e desnecessárias aos dados;
- SSR deve acessar os dados diretamente, sem HTTP interno desnecessário;
- respostas devem conter somente os dados necessários ao recurso;
- não criar mecanismos complexos de cache nesta v1 sem necessidade;
- o acesso aos JSON deve ser simples e previsível;
- performance não deve ser obtida sacrificando consistência, segurança ou tratamento correto de erros.

## 30. Limites da Parte 2

Esta parte apenas complementa a documentação. Não foram implementados endpoints, routers, controllers ou services da API, nem criados arquivos JSON, dependências, banco de dados, autenticação, administração, chat, agendamento ou operações de escrita.

Também não foram alterados `package.json`, `package-lock.json`, `app.js`, `server.js`, views, CSS, JavaScript público ou qualquer outro arquivo fora deste documento.

## 31. Estratégia de testes

A API v1 deverá possuir testes suficientes para verificar seu contrato e comportamento.

### Inicialização

Deve ser verificado que a aplicação consegue iniciar corretamente no ambiente esperado.

### Endpoints

Cada endpoint GET previsto deve possuir teste correspondente:

- `GET /api/v1/clinic`;
- `GET /api/v1/professionals`;
- `GET /api/v1/services`;
- `GET /api/v1/insurance-plans`;
- `GET /api/v1/testimonials`;
- `GET /api/v1/media`;
- `GET /api/v1/contact`;
- `GET /api/v1/location`.

### Contrato de sucesso

Os testes devem verificar que:

- a resposta possui `success: true`;
- a resposta possui `data`;
- recursos únicos retornam um objeto;
- coleções retornam um array;
- a estrutura corresponde ao recurso documentado.

### Erros

Devem ser testadas situações relevantes de:

- rota inexistente;
- erro de leitura dos dados;
- JSON inválido, quando aplicável;
- erro interno controlado.

Também deve ser verificado o contrato:

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Mensagem compreensível sobre o erro."
  }
}
```

### Dados

Os testes devem verificar que:

- os arquivos JSON são encontrados;
- os dados podem ser carregados;
- nenhuma informação privada é exposta;
- os recursos retornados correspondem aos dados definidos.

### Métodos não permitidos

A API v1 não deve possuir operações de escrita. A estratégia de testes deve impedir ou detectar regressões que introduzam, sem autorização, `POST`, `PUT`, `PATCH` ou `DELETE`.

Não é necessário criar um teste específico para cada método se o mecanismo adotado garantir adequadamente esse comportamento.

## 32. Testes e integração

A API deve ser testada isoladamente e também integrada ao restante da aplicação quando aplicável.

Devem ser considerados:

- testes de API;
- testes de integração;
- validação do tratamento de erros;
- validação da integração com a camada de dados;
- regressão após alterações.

Os testes devem utilizar o mecanismo adotado pelo projeto. Esta documentação não define uma biblioteca específica; a escolha técnica será feita durante a implementação conforme a necessidade real.

## 33. Validação manual

Além dos testes automatizados, a API deve ser validada manualmente quando necessário, verificando:

- servidor iniciado corretamente;
- endpoints respondendo;
- códigos HTTP corretos;
- JSON válido;
- contrato de resposta consistente;
- mensagens de erro compreensíveis;
- ausência de exposição de detalhes internos.

Podem ser utilizados `curl`, navegador, cliente HTTP ou ferramentas equivalentes. Nenhuma ferramenta específica é obrigatória.

## 34. Critério de conclusão da API v1

A API v1 será considerada concluída quando:

1. Os oito endpoints previstos estiverem implementados.
2. Todos estiverem versionados em `/api/v1/`.
3. Todos forem somente `GET`.
4. Os oito recursos utilizarem a fonte de dados definida.
5. O contrato de sucesso estiver consistente.
6. O contrato de erro estiver consistente.
7. Os códigos HTTP definidos forem respeitados.
8. O tratamento de erros estiver centralizado conforme a arquitetura do projeto.
9. Os testes relevantes estiverem implementados e passando.
10. A integração com a aplicação estiver funcionando.
11. Não houver exposição indevida de dados privados ou informações internas.
12. A documentação estiver coerente com o comportamento real.
13. Não existirem funcionalidades fora do escopo implementadas.
14. A revisão do diff não identificar alterações acidentais.

Concluir a API v1 não significa implementar funcionalidades futuras.

## 35. Limites explícitos da API v1

A API v1 não possui:

- autenticação;
- autorização;
- usuários;
- cadastro;
- login;
- administração;
- CMS;
- banco de dados;
- operações de escrita;
- agendamento próprio;
- pagamentos;
- chat;
- mensagens internas;
- upload;
- gerenciamento de arquivos;
- painel administrativo.

Também não devem ser implementados `POST`, `PUT`, `PATCH` ou `DELETE` sem alteração explícita de requisitos.

O WhatsApp continua sendo comunicação externa. O agendamento ocorre através dos canais de contato definidos. O chat permanece fora do escopo atual, e a API não deve assumir responsabilidades de funcionalidades futuras.

## 36. Evolução e versionamento

- A API utiliza versionamento explícito em `/api/v1/`.
- Alterações compatíveis podem ocorrer dentro da mesma versão quando não quebrarem o contrato.
- Alterações incompatíveis devem utilizar uma nova versão, como `/api/v2/`.
- O contrato existente não deve ser alterado silenciosamente.
- Campos não devem ser removidos nem estruturas modificadas de maneira incompatível sem decisão explícita.
- Novos recursos ou endpoints devem ser documentados antes ou juntamente com sua implementação.
- Alterações de requisitos devem ser refletidas nos documentos correspondentes.

`API-STRUCTURE.md` descreve o contrato e a arquitetura planejados da API, enquanto o código representa a implementação atual.

## 37. Relação com outros documentos

Cada documento possui uma responsabilidade específica:

### `VISION.md`

Define visão, objetivo, público, experiência e escopo geral do projeto.

### `BUSINESS-RULES.md`

Define regras de negócio e comportamento esperado.

### `API-STRUCTURE.md`

Define recursos, endpoints, contratos, arquitetura e limites da API.

### `DATA-STRUCTURE.md`

Define a estrutura dos dados e arquivos JSON.

### `FRONTEND-STRUCTURE.md`

Define organização e comportamento do frontend.

### `PROJECT-STRUCTURE.md`

Define a organização física e arquitetural do projeto.

### `IMPLEMENTATION-STATUS.md`

Registra o estado atual da implementação.

Nenhum desses documentos substitui os demais. Uma alteração na API pode exigir atualização de outros documentos quando houver impacto real.

## 38. Documentação não é implementação

A existência de uma decisão em `API-STRUCTURE.md` não significa que ela já esteja implementada.

Este documento descreve o comportamento e a arquitetura planejados. A implementação somente ocorre através de uma etapa autorizada de desenvolvimento.

O código existente deve ser considerado a fonte da implementação atual. `IMPLEMENTATION-STATUS.md` deve indicar o que já foi efetivamente implementado.

## 39. Regras para implementação futura

Quando a API for implementada, a IA de programação deverá:

1. Ler os documentos relevantes antes de alterar o código.
2. Ler `IMPLEMENTATION-STATUS.md`.
3. Analisar o código existente.
4. Identificar problemas existentes antes de corrigi-los.
5. Implementar somente o escopo autorizado.
6. Preservar funcionalidades existentes.
7. Não inventar novos requisitos.
8. Não criar camadas desnecessárias.
9. Não alterar dependências sem necessidade.
10. Criar os endpoints conforme este documento.
11. Utilizar a camada de acesso aos dados definida pela arquitetura.
12. Manter SSR e API separados conceitualmente.
13. Criar testes correspondentes.
14. Executar os testes após a implementação.
15. Revisar o diff completo.
16. Atualizar `IMPLEMENTATION-STATUS.md` quando autorizado e apropriado.
17. Relatar problemas encontrados, corrigidos e pendentes.
18. Não fazer commit sem autorização.
19. Não fazer push.

Se surgir uma decisão que contradiga este documento, a IA não deve escolher uma solução por conta própria. A divergência deve ser identificada e tratada como alteração de requisito ou arquitetura antes de prosseguir, quando a decisão for relevante.

## 40. Controle de escopo

A API v1 deve permanecer simples e proporcional ao projeto.

Não devem ser implementados por iniciativa própria:

- banco de dados;
- autenticação;
- cache complexo;
- filas;
- microserviços;
- GraphQL;
- WebSockets;
- arquitetura distribuída;
- CMS;
- painel administrativo;
- infraestrutura complexa;
- novas integrações externas.

Esses recursos dependem de necessidade real e decisão explícita que altere o escopo.

Simplicidade é uma decisão arquitetural do projeto, não ausência de qualidade.

## 41. Consistência com o projeto

A API deve respeitar:

- Node.js e Express;
- organização modular por responsabilidade;
- EJS/SSR para páginas;
- API REST versionada;
- dados locais em JSON na v1;
- Git;
- testes;
- tratamento centralizado de erros;
- segurança proporcional ao projeto;
- responsabilidade do frontend pela responsividade;
- documentação versionada no Git.

## 42. Status atual da API

**Status atual: API v1 planejada e documentada, ainda não implementada.**

Atualmente:

- os endpoints estão definidos;
- os contratos estão definidos;
- os recursos estão definidos;
- a implementação ocorrerá posteriormente em etapa própria;
- a API não deve ser considerada concluída somente porque este documento existe.

## 43. Consistência e qualidade documental

Este documento deve permanecer em Markdown legível, com títulos hierárquicos coerentes e linguagem técnica clara.

As Partes 1, 2 e 3 devem manter os oito recursos, os oito endpoints e os contratos já definidos, sem duplicações desnecessárias ou requisitos contraditórios. Decisões opcionais não devem ser transformadas em obrigatórias sem autorização, e detalhes técnicos não definidos não devem ser inventados.

## 44. Escopo da Parte 3

Esta Parte 3/3 finaliza a documentação da API. Nenhuma API, rota, controller, service, teste de API, dependência, arquivo JSON ou configuração foi implementado nesta etapa.
