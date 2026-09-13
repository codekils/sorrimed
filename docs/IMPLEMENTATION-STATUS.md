# Status de implementação

**Projeto:** SorriMed  
**Estado geral:** Em desenvolvimento  
**Primeira versão:** Não concluída

Este documento representa o estado real do código neste momento. Documentação arquitetural não é considerada implementação.

## Legenda de status

- **Concluído:** implementado e validado.
- **Parcialmente implementado:** existe implementação, mas o módulo não atende todo o escopo previsto.
- **Planejado/documentado:** definido na documentação, ainda não implementado.
- **Em andamento:** implementação atualmente em execução.
- **Bloqueado:** dependência ou problema impede a continuação.
- **Fora de escopo:** não pertence à versão atual.

## Resumo atual

- Foundation: **Concluída**.
- Home: **Implementada, com validação inicial concluída**.
- Documentação arquitetural principal: **Concluída como documentação**.
- Frontend institucional: **Implementado e validado**.
- API v1: **Planejada/documentada, implementação pendente**.
- Data access: **Implementado para os oito recursos oficiais**.
- Testes: **Implementados para SSR, dados, navegação e estados principais**.
- Projeto SorriMed: **Em desenvolvimento**.

## Documentação

### `VISION.md`

**Status: Concluído.** Define objetivo, contexto, público, proposta institucional, escopo geral e características principais do projeto.

### `BUSINESS-RULES.md`

**Status: Concluído.** Regras de negócio documentadas e preservadas como referência oficial. As lacunas de numeração existentes foram mantidas e não preenchidas artificialmente.

### `API-STRUCTURE.md`

**Status: Concluído como documentação.** A API v1 está planejada e documentada, mas ainda não foi implementada integralmente. Os oito recursos e endpoints GET estão definidos para uma etapa própria.

### `DATA-STRUCTURE.md`

**Status: Concluído como documentação e implementado para SSR.** A estrutura dos dados está documentada, os oito JSONs oficiais existem e a camada correspondente de `src/data/` está implementada.

### `FRONTEND-STRUCTURE.md`

**Status: Concluído como documentação.** As seis partes documentais foram concluídas: páginas e rotas; navegação; views, layouts e componentes; responsividade/CSS; JavaScript/API/estados/acessibilidade; SEO/performance/testes/manutenção/evolução.

Isso representa especificação arquitetural e funcional, não a implementação de todos os requisitos.

### `PROJECT-STRUCTURE.md`

**Status: Concluído como documentação.** A estrutura física e arquitetural foi consolidada, distinguindo a referência planejada do estado físico atual.

## Foundation

**Status: Concluída.** Implementada e validada com Node.js, Express, EJS, dotenv, separação entre `src/app.js` e `src/server.js`, `PORT`, `NODE_ENV`, Express Static, engine de views, `/`, `/health`, 404, middleware de erros, manifests, `.env.example`, testes iniciais e documentação.

Validações históricas:

- `npm test`: 5 testes aprovados na validação inicial;
- `npm start`: servidor iniciado corretamente;
- `/health`: HTTP 200;
- `git diff --check`: aprovado.

## Home

**Status: Implementada, com validação inicial concluída.**

A Home SSR possui página inicial, layout EJS, cabeçalho, navegação, menu mobile, hero, apresentação institucional, serviços, profissionais, depoimentos, mídia, localização, contato, footer, WhatsApp, carrossel manual, SEO básico inicial, foco visual, `alt`, lazy loading quando utilizado e reduced motion inicial.

A Home utiliza dados locais. Os oito recursos oficiais possuem JSON válido e são consumidos pela camada `src/data/`, incluindo `insurance-plans.json` e a página de Convênios.

Validações realizadas:

- `npm test`: 7 testes aprovados na suíte atual;
- `npm start` funcionando;
- `/health`: HTTP 200;
- validação visual desktop e mobile;
- viewport de aproximadamente 390px sem overflow horizontal;
- menu mobile funcionando;
- `aria-expanded` atualizado;
- mídia local carregada;
- `git diff --check` aprovado.

O item Convênios possui rota própria e a Home utiliza a navegação institucional correspondente.

## API

**Status: Planejada/documentada — ainda não implementada integralmente.**

Recursos previstos: `clinic`, `professionals`, `services`, `insurance-plans`, `testimonials`, `media`, `contact` e `location`.

Endpoints planejados:

- `GET /api/v1/clinic`;
- `GET /api/v1/professionals`;
- `GET /api/v1/services`;
- `GET /api/v1/insurance-plans`;
- `GET /api/v1/testimonials`;
- `GET /api/v1/media`;
- `GET /api/v1/contact`;
- `GET /api/v1/location`.

Não declarar esses endpoints como funcionais sem implementação e validação reais.

## Data access

**Status: Implementado para os oito recursos oficiais.** A camada central em `src/data/index.js` é utilizada por SSR e pelos módulos de dados por recurso.

`src/data/site.data.js` permanece como legado da Foundation e não participa do fluxo institucional atual.

## Dados JSON

Os oito recursos oficiais definidos existem fisicamente e são válidos: `clinic.json`, `professionals.json`, `services.json`, `insurance-plans.json`, `testimonials.json`, `media.json`, `contact.json` e `location.json`.

Também existe `site.json`, legado da Foundation. Ele não é recurso oficial adicional e não deve ser removido, migrado ou promovido sem tarefa de implementação autorizada.

## Frontend

**Status geral: Implementado para as páginas institucionais previstas.**

Implementado: Foundation, Home, páginas institucionais, layout compartilhado, Header/Footer, navegação, responsividade, estados principais, acessibilidade básica, SEO básico e testes de integração.

Permanece fora desta versão a comunicação com API v1, que continua planejada/documentada e não é necessária para o SSR atual.

## Páginas

| Rota             | Status                                       |
| ---------------- | -------------------------------------------- |
| `/`              | Implementada e validada inicialmente         |
| `/sobre`         | Implementada e validada                      |
| `/servicos`      | Implementada e validada                      |
| `/profissionais` | Implementada e validada                      |
| `/convenios`     | Implementada e validada                      |
| `/contato`       | Implementada e validada                      |
| `/localizacao`   | Implementada e validada como página auxiliar |

## Navegação

**Status: Implementada.** A navegação principal e o Footer são compartilhados pelo layout e apontam para os destinos institucionais válidos.

Localização permanece acessível por links contextuais e não é item do menu principal.

## Componentes

**Status: Implementados de forma proporcional ao projeto.** `Header` e `Footer` são componentes EJS compartilhados; cards e seções específicas permanecem nas views quando não há benefício real em extrair componentes independentes.

## Responsividade, acessibilidade, SEO e performance

- **Responsividade:** validada nas páginas institucionais em mobile, tablet e desktop, sem overflow horizontal conhecido.
- **Acessibilidade:** implementada em nível básico com HTML semântico, `alt`, foco visível, `aria-expanded`, `aria-current` e reduced motion.
- **SEO:** título e descrição são fornecidos pelo layout para as páginas SSR.
- **Performance:** mídia utiliza assets locais e lazy loading quando aplicável; não há auditoria avançada de performance nesta versão.

## Testes

**Status: Implementados para o escopo SSR atual.** `tests/integration/app.test.js` cobre 43 cenários de rotas, dados, páginas, navegação, estados vazios e propagação de erros. Os scripts disponíveis são `npm start` e `npm test`.

Permanecem fora desta versão testes de endpoints da API v1, pois a API ainda é somente documentação.

## Fora de escopo da primeira versão

### Chat

**Fora de escopo.** Não implementar chat falso, interface simulada, backend, armazenamento de mensagens ou integração de chat.

### Agendamento próprio

**Fora de escopo.** O site pode direcionar para contato/WhatsApp, mas não haverá calendário, disponibilidade, reserva automática ou confirmação automática.

### Autenticação e administração

**Fora de escopo.** Não implementar login, cadastro, usuários, painel administrativo, CMS ou permissões administrativas.

### Pagamentos

**Fora de escopo.** Não implementar pagamentos ou funcionalidades financeiras.

## Pendências técnicas conhecidas

1. API v1 ainda não implementada integralmente.
2. `site.json` é legado da Foundation.
3. Não há auditoria avançada de performance ou cobertura de API nesta versão.

Essas pendências são registradas, mas não foram transformadas em tarefas de implementação nesta atualização.

## Próximo módulo

O próximo módulo autorizado deverá ser definido explicitamente em prompt de implementação separado. Este documento não autoriza o início automático de qualquer implementação.

## Regra de atualização

Este arquivo deve ser atualizado após mudanças relevantes e sempre refletir o estado real, distinguindo `Documentado`, `Implementado` e `Validado`.

Uma funcionalidade só deve ser marcada como concluída quando estiver implementada, integrada, testada, sem problema crítico conhecido dentro do escopo e validada conforme necessário.

## Regras para cada módulo

Em implementações futuras:

1. Ler os documentos relevantes e este status.
2. Identificar o estado atual e os problemas existentes.
3. Implementar somente o módulo autorizado.
4. Preservar funcionalidades não relacionadas.
5. Não adicionar dependências ou refatorações fora da necessidade.
6. Executar testes e validações relevantes.
7. Revisar o diff completo.
8. Atualizar este documento somente após mudança real de estado.
9. Registrar pendências restantes.
10. Não fazer commit ou push sem autorização.

## Critério de módulo concluído

Um módulo pode ser marcado como **Concluído** somente quando possuir as camadas necessárias ao seu funcionamento, que podem incluir dados, data access, service, controller, route, view, components, CSS, JavaScript, integração, testes e validações aplicáveis.

Nem todo módulo precisa utilizar todas as camadas; somente as necessárias devem existir.

## Critério de projeto concluído

O SorriMed somente poderá ser considerado concluído na primeira versão quando os requisitos definidos estiverem implementados, as páginas previstas funcionarem, a API aplicável estiver implementada, os dados estiverem organizados, a navegação estiver completa, responsividade e acessibilidade estiverem validadas, SEO aplicável estiver implementado, performance tiver sido avaliada, testes relevantes estiverem passando e a documentação representar corretamente o estado final.

## Histórico de implementação

### Foundation

**Concluída.** Estrutura inicial, Express, EJS, separação app/server, `/health`, 404, middleware de erro, testes, ambiente e documentação inicial. Validação histórica: 5 testes aprovados, aplicação iniciando, `/health` 200 e `git diff --check` aprovado.

### Home

**Implementada, com validação inicial concluída.** Home SSR, dados locais, layout, navegação, conteúdo institucional, serviços, profissionais, depoimentos, mídia, localização, contato, WhatsApp, footer, responsividade inicial, acessibilidade inicial e SEO inicial. Validação histórica: 7 testes aprovados, aplicação iniciando, `/health` 200, validação visual desktop/mobile, viewport aproximada de 390px sem overflow, menu mobile validado e `git diff --check` aprovado.

### Documentação

**Estrutura documental principal concluída.** `VISION.md`, `BUSINESS-RULES.md`, `API-STRUCTURE.md`, `DATA-STRUCTURE.md`, `FRONTEND-STRUCTURE.md`, `PROJECT-STRUCTURE.md` e este documento estão criados como referências versionadas.

## Estado final deste documento

**Projeto:** SorriMed  
**Estado:** Em desenvolvimento  
**Foundation:** Concluída  
**Home:** Implementada e validada inicialmente  
**Documentação arquitetural:** Concluída  
**API:** Planejada/documentada, implementação pendente  
**Frontend:** Implementado para as páginas institucionais SSR
**Páginas internas:** Implementadas e validadas
**Testes:** Parciais  
**Responsividade:** Validada nas páginas institucionais
**Acessibilidade:** Básica implementada e validada
**SEO:** Básico implementado nas páginas SSR
**Performance:** Sem auditoria avançada nesta versão
**Chat:** Fora de escopo  
**Agendamento próprio:** Fora de escopo  
**Administração:** Fora de escopo  
**Pagamentos:** Fora de escopo  
**Próxima implementação:** A definir explicitamente antes da execução

O projeto não está concluído.
