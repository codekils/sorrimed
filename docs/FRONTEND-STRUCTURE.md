# Estrutura do frontend do SorriMed

> Esta Parte 1/6 define exclusivamente as páginas institucionais principais e suas rotas. Não descreve implementação visual, componentes ou comportamento detalhado da interface.

## 1. Áreas principais

O frontend da SorriMed possui seis páginas institucionais principais previstas para a primeira versão:

1. Início;
2. Sobre;
3. Serviços;
4. Profissionais;
5. Convênios;
6. Contato.

As seis páginas institucionais formam a navegação principal. `/localizacao` existe como página auxiliar acessível por links contextuais e não é item do menu principal.

## 2. Mapa de páginas e rotas

| Página        | Rota             |
| ------------- | ---------------- |
| Início        | `/`              |
| Sobre         | `/sobre`         |
| Serviços      | `/servicos`      |
| Profissionais | `/profissionais` |
| Convênios     | `/convenios`     |
| Contato       | `/contato`       |

As rotas devem ser mantidas exatamente conforme esta definição.

## 3. Finalidade das páginas

### Início

**Rota:** `/`

É a página principal e o ponto de entrada do site. Sua finalidade é apresentar uma visão geral da SorriMed e permitir acesso às informações institucionais principais da clínica.

### Sobre

**Rota:** `/sobre`

Sua finalidade é apresentar informações institucionais sobre a SorriMed.

### Serviços

**Rota:** `/servicos`

Sua finalidade é apresentar os serviços e tratamentos oferecidos pela SorriMed.

### Profissionais

**Rota:** `/profissionais`

Sua finalidade é apresentar os profissionais da SorriMed.

### Convênios

**Rota:** `/convenios`

Sua finalidade é apresentar os convênios ou planos aceitos pela SorriMed.

### Contato

**Rota:** `/contato`

Sua finalidade é apresentar as informações necessárias para que o visitante entre em contato com a SorriMed e encontre sua localização.

## 4. Home como ponto de entrada

`/` é a entrada principal do frontend. A Home deve apresentar uma visão geral da clínica e poderá direcionar o visitante para as demais páginas institucionais.

Esta parte não define quais componentes, seções ou elementos visuais serão utilizados para isso.

## 5. Escopo inicial de rotas

As seis rotas acima constituem o conjunto inicial de páginas institucionais do frontend.

Não fazem parte desta etapa rotas para:

- login;
- cadastro;
- administração;
- chat;
- agendamento próprio;
- pagamento;
- usuários;
- outras funcionalidades não definidas.

Novas páginas ou rotas somente devem ser adicionadas quando houver requisito específico.

## 6. Limites desta parte

Esta Parte 1 trata exclusivamente de páginas, rotas, finalidade das páginas e mapa inicial do frontend.

Não são definidos nesta etapa:

- menu;
- navegação detalhada;
- links internos;
- layout;
- views;
- EJS;
- componentes;
- controllers;
- CSS;
- responsividade;
- JavaScript;
- API;
- estados da interface;
- acessibilidade;
- SEO;
- performance;
- testes;
- manutenção.

## 7. Estado da implementação

Este documento define a estrutura planejada do frontend. A documentação não implementa páginas ou rotas.

No estado atual, as seis páginas institucionais e a página auxiliar `/localizacao` estão implementadas em SSR.

## 8. Navegação principal

O frontend possui uma navegação principal para acesso às áreas institucionais. Ela deve disponibilizar:

- Início;
- Sobre;
- Serviços;
- Profissionais;
- Convênios;
- Contato.

Cada item deve conduzir à respectiva página definida na Parte 1.

## 9. Destino dos itens de navegação

Os destinos da navegação principal são:

- Início → `/`;
- Sobre → `/sobre`;
- Serviços → `/servicos`;
- Profissionais → `/profissionais`;
- Convênios → `/convenios`;
- Contato → `/contato`.

Esses destinos devem permanecer consistentes com o mapa de páginas definido anteriormente.

## 10. Navegação a partir da Home

A Home deve permitir ao visitante acessar as demais áreas do site. Ela pode apresentar links ou chamadas para páginas internas quando isso for adequado ao conteúdo.

O visitante deve conseguir sair da Home e alcançar diretamente as áreas institucionais relevantes.

Esta parte não define quais componentes ou elementos visuais serão utilizados para esses links.

## 11. Navegação entre páginas

As páginas fazem parte de uma mesma estrutura de navegação integrada. O visitante deve poder acessar as principais áreas do site sem depender de um fluxo obrigatório ou sequencial.

Por exemplo, quem estiver em `/servicos` não deve precisar retornar à Home para acessar `/profissionais`.

## 12. Retorno para a Home

O nome ou logo da SorriMed, quando utilizado como elemento de navegação, deve permitir o retorno para `/`.

Isso estabelece um ponto de retorno consistente para a página inicial.

## 13. WhatsApp na navegação

Dentro da navegação, o WhatsApp é um canal de contato que:

- pode estar disponível em diferentes áreas do site;
- pode possuir destaque na interface;
- tem como objetivo facilitar o contato com a clínica;
- não pertence ao conjunto de páginas internas.

Esta parte não define implementação do link, número, mensagem automática, API ou integração técnica com o WhatsApp.

## 14. Navegação em dispositivos diferentes

A navegação deve permanecer utilizável em:

- celular;
- tablet;
- notebook;
- desktop.

A forma visual e técnica de adaptação da navegação será documentada em outra parte do documento. Não são definidos aqui breakpoints, menu hambúrguer, animações, CSS, dimensões ou comportamento de componentes.

## 15. Links internos

Links internos devem utilizar somente destinos existentes e definidos para o frontend.

Não devem ser apresentados ao visitante links que apontem para:

- páginas inexistentes;
- rotas não definidas;
- funcionalidades ainda fora do escopo.

Caso uma nova página seja criada futuramente, sua rota deverá ser definida antes de ser incorporada à navegação.

## 16. Rotas fora do escopo da navegação

Não fazem parte da navegação principal da primeira versão:

- login;
- cadastro;
- área administrativa;
- chat;
- sistema próprio de agendamento;
- pagamentos;
- outras funcionalidades não definidas.

## 17. Princípio de navegação

A navegação deve ser:

- clara;
- previsível;
- consistente;
- direta;
- coerente com as páginas existentes.

O visitante deve identificar facilmente onde está e para onde cada item da navegação o levará. Este princípio não constitui uma especificação visual detalhada.

## 18. Limites da Parte 2

Esta parte trata exclusivamente de navegação principal, destinos dos itens, fluxo entre páginas, retorno para a Home, presença funcional do WhatsApp, disponibilidade em diferentes dispositivos e regras para links internos.

Não são definidos nesta etapa:

- estrutura de `views/`;
- layouts;
- componentes;
- EJS;
- controllers;
- CSS;
- design system;
- breakpoints;
- JavaScript;
- consumo da API;
- estados da interface;
- acessibilidade detalhada;
- SEO;
- performance;
- testes.

## 19. Organização das views

A organização arquitetural planejada para as views é:

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

Responsabilidades dos diretórios:

- `layouts/`: estruturas compartilhadas entre páginas;
- `pages/`: views correspondentes às páginas principais do frontend;
- `components/`: partes reutilizáveis da apresentação.

O diretório `views/components/` concentra os componentes reutilizáveis quando eles forem necessários.

Essa estrutura é arquitetural e não obriga a criação imediata de todos os arquivos.

## 20. Layout compartilhado

`views/layouts/main.ejs` é o layout compartilhado do frontend.

O layout deve concentrar a estrutura comum das páginas e reduzir duplicação. A estrutura específica de cada página deve permanecer em sua respectiva view.

Esta parte não define a implementação interna do layout.

## 21. Relação entre rotas e páginas EJS

A correspondência planejada entre rotas e páginas é:

```text
/                 → views/pages/home.ejs
/sobre            → views/pages/about.ejs
/servicos         → views/pages/services.ejs
/profissionais    → views/pages/professionals.ejs
/convenios        → views/pages/insurance-plans.ejs
/contato          → views/pages/contact.ejs
```

Essa correspondência deve permanecer consistente com as rotas definidas nas Partes 1 e 2.

## 22. Componentes

Componentes representam partes reutilizáveis da apresentação.

Componentes conceitualmente previstos podem incluir:

- `Header`;
- `Navigation`;
- `Footer`;
- `WhatsAppButton`;
- `ServiceCard`;
- `ProfessionalCard`;
- `InsurancePlanCard`;
- `TestimonialCard`;
- `MediaCard`.

Esses nomes representam componentes possíveis dentro da arquitetura. A existência da lista não significa que todos devam ser criados obrigatoriamente.

## 23. Seções reutilizáveis

Determinadas seções também podem ser organizadas como componentes reutilizáveis quando houver benefício real de organização ou reutilização.

Exemplos:

- `HeroSection`;
- `ServicesSection`;
- `ProfessionalsSection`;
- `TestimonialsSection`;
- `LocationSection`.

A criação deve ser baseada em necessidade real. Cada pequeno elemento HTML não deve ser transformado automaticamente em componente.

## 24. Relação entre páginas e componentes

Uma página pode compor vários componentes. Exemplo arquitetural:

```text
Home
├── HeroSection
├── ServicesSection
│   └── ServiceCard
├── ProfessionalsSection
│   └── ProfessionalCard
├── TestimonialsSection
│   └── TestimonialCard
└── LocationSection
```

Essa árvore é apenas um exemplo. A composição final de cada página deve ser definida durante a implementação conforme os requisitos e dados disponíveis.

## 25. Responsabilidade do Controller

O Controller coordena a requisição e prepara os dados necessários para a View.

O Controller pode:

- receber a requisição;
- obter os dados necessários;
- coordenar services ou a camada de dados quando necessário;
- preparar os dados para apresentação;
- selecionar a View;
- fornecer os dados para o EJS.

O Controller não é responsável pela estrutura visual da página.

## 26. Responsabilidade da View

A View é responsável pela composição da apresentação da página.

A View deve:

- estruturar o HTML;
- utilizar os dados fornecidos pelo Controller;
- compor componentes;
- apresentar o conteúdo ao visitante.

A View não deve:

- acessar diretamente arquivos JSON;
- acessar o filesystem;
- acessar banco de dados;
- implementar regras de negócio;
- assumir responsabilidades da camada de dados;
- conter lógica complexa de servidor.

## 27. Responsabilidade dos componentes

Componentes são partes reutilizáveis da apresentação. Um componente deve:

- receber os dados necessários;
- apresentar esses dados;
- manter sua responsabilidade visual bem definida;
- ser reutilizado quando houver necessidade real.

Componentes não devem:

- acessar diretamente JSON;
- acessar banco;
- acessar filesystem;
- implementar regras de negócio;
- assumir responsabilidades dos Controllers.

## 28. Fluxo de apresentação

O fluxo conceitual de apresentação é:

```text
Route
	↓
Controller
	↓
View
	↓
Componentes
```

Quando houver uma camada intermediária realmente necessária:

```text
Route
	↓
Controller
	↓
Service / Data Access
	↓
Controller
	↓
View
	↓
Componentes
```

A camada intermediária somente deve existir quando houver necessidade real.

## 29. Reutilização

A reutilização deve seguir estes princípios:

- reutilizar quando houver repetição real;
- evitar duplicação de estruturas equivalentes;
- evitar componentes excessivamente genéricos;
- evitar abstrações artificiais;
- manter componentes simples;
- não criar uma arquitetura de componentes mais complexa que a necessidade do projeto.

A reutilização deve melhorar manutenção e consistência, não aumentar desnecessariamente a complexidade.

## 30. Separação de responsabilidades

A separação conceitual é:

```text
Controller
→ coordenação e preparação dos dados

View
→ composição da página

Component
→ apresentação reutilizável
```

Nenhuma dessas camadas deve assumir indevidamente a responsabilidade de outra.

## 31. Limites da Parte 3

Esta parte trata exclusivamente de:

- views;
- layouts;
- páginas EJS;
- componentes;
- seções reutilizáveis;
- relação Controller → View → Component;
- responsabilidades dessas camadas;
- princípios de reutilização.

Não são definidos nesta etapa:

- responsividade;
- mobile-first;
- breakpoints;
- CSS;
- design system;
- JavaScript do navegador;
- consumo da API;
- loading;
- estados de erro da interface;
- acessibilidade;
- SEO;
- performance;
- testes;
- manutenção ou evolução;
- critérios finais de conclusão.

## 32. Registro histórico de escopo da Parte 5/6

Este registro descrevia o escopo documental daquela execução e não representa o estado atual do código. Desde então, responsividade, CSS, JavaScript do navegador, estados de interface, acessibilidade básica, SEO básico e validações do frontend foram implementados nos arquivos correspondentes.

A API continua documentada e não implementada, conforme o escopo atual do projeto.

## 33. Responsividade

O frontend deverá ser responsivo para celulares, tablets, notebooks e desktops, seguindo uma estratégia mobile-first sem prejudicar telas maiores.

O layout deverá se adaptar de maneira fluida às diferentes larguras e alturas de viewport. Não deverá depender de dimensões rígidas que provoquem quebra de layout, sobreposição, conteúdo cortado, espaços excessivos, elementos fora da viewport ou scroll horizontal desnecessário.

O conteúdo deverá permanecer dentro da área visível da página, com textos legíveis em telas pequenas. Elementos lado a lado em telas maiores poderão ser reorganizados ou empilhados em telas menores quando isso proporcionar melhor utilização do espaço.

A interface deverá funcionar adequadamente em orientação retrato e paisagem.

## 34. Breakpoints

Breakpoints deverão ser utilizados de acordo com mudanças reais de comportamento da interface.

Não deve ser criada grande quantidade de breakpoints sem necessidade. A prioridade é:

1. comportamento fluido;
2. adaptação natural do conteúdo;
3. breakpoints somente quando necessários.

Os breakpoints deverão ser definidos de maneira consistente em todo o frontend.

## 35. Imagens

As imagens deverão ser responsivas e preservar sua proporção sempre que possível, sem distorção. O enquadramento deverá ser adequado ao componente em que forem utilizadas.

Imagens de profissionais, serviços, depoimentos, clínica e demais conteúdos deverão se adaptar ao espaço disponível. Quando uma imagem possuir dimensões específicas dentro de um componente, o layout deverá prever esse espaço para evitar deslocamentos visuais durante o carregamento.

Imagens que não sejam essenciais para o carregamento inicial poderão utilizar carregamento lazy quando apropriado.

## 36. Vídeos

Vídeos deverão se adaptar ao espaço disponível e não provocar overflow horizontal.

Não deverão utilizar autoplay desnecessário. Quando apropriado, poderão utilizar imagem de poster, e seu carregamento deverá ser controlado para evitar impacto desnecessário no carregamento inicial.

## 37. Botões e elementos interativos

Botões, links, menus, cards interativos e demais elementos acionáveis deverão possuir tamanho adequado para interação por toque, com espaçamento suficiente para evitar acionamentos acidentais.

Os elementos deverão permanecer utilizáveis em telas pequenas. O comportamento visual de hover não deverá ser a única forma de comunicar interação, pois dispositivos touch podem não possuir hover.

Estados visuais de interação deverão ser consistentes.

## 38. Navegação visual

A navegação deverá manter comportamento coerente entre diferentes tamanhos de tela.

Em telas menores, o menu poderá utilizar uma apresentação específica para dispositivos móveis. A mudança entre os modos de navegação deverá ser previsível, sem bloquear desnecessariamente o conteúdo.

O cabeçalho deverá permanecer visualmente organizado em diferentes larguras.

## 39. CSS

A estrutura CSS deverá permanecer simples, organizada e previsível, facilitando a manutenção.

Deverá existir consistência entre cores, tipografia, espaçamentos, bordas, sombras, botões, cards, estados e componentes.

Variáveis CSS poderão ser utilizadas para centralizar valores visuais reutilizados. Deve-se evitar duplicação desnecessária de estilos, regras excessivamente específicas e dependência desnecessária de estilos inline.

As classes CSS deverão seguir o padrão de nomenclatura definido na documentação de estrutura do projeto.

## 40. Sistema visual

O frontend deverá possuir identidade visual consistente. Os componentes deverão parecer parte do mesmo sistema visual, e a página inicial deverá manter coerência visual com as páginas internas.

A identidade visual deverá ser elegante, moderna e adequada ao contexto institucional de uma clínica odontológica. A interface deverá priorizar clareza e facilidade de utilização em vez de excesso de elementos decorativos.

## 41. Espaçamento e composição

Os espaçamentos deverão ser consistentes e as seções deverão possuir hierarquia visual clara.

Cards deverão ter dimensões e espaçamentos adequados ao conteúdo. O conteúdo não deverá ficar excessivamente comprimido em telas pequenas nem ocupar largura excessiva em telas grandes sem necessidade.

Containers e áreas de conteúdo deverão possuir limites coerentes.

## 42. Animações e transições

Animações e transições poderão ser utilizadas quando contribuírem para uma experiência mais fluida. Deverão ser discretas e adequadas ao contexto institucional.

Não deverão prejudicar desempenho, leitura, navegação, acessibilidade ou interação. Devem ser evitadas animações excessivas ou decorativas sem finalidade.

O frontend deverá considerar usuários que utilizam configurações de redução de movimento.

## 43. Carrosséis e elementos dinâmicos visuais

Quando houver carrossel ou slider para depoimentos, fotos ou vídeos, o componente deverá se adaptar ao tamanho da tela.

A quantidade de elementos apresentados simultaneamente poderá mudar conforme o viewport. O componente não deverá criar overflow horizontal, e sua interação deverá permanecer utilizável em dispositivos touch.

A navegação deverá permanecer compreensível, e a quantidade de conteúdo não deverá quebrar o layout.

## 44. Princípios visuais gerais

O frontend deverá priorizar:

- responsividade;
- fluidez;
- consistência;
- legibilidade;
- clareza;
- simplicidade;
- boa utilização do espaço;
- interação adequada;
- adaptação a diferentes dispositivos.

A riqueza visual não deverá justificar layouts pesados ou desnecessariamente complexos.

## 45. Limites da Parte 4

Esta parte trata exclusivamente de responsividade, breakpoints, imagens, vídeos, elementos interativos, navegação visual, CSS, sistema visual, espaçamento, composição, animações, transições e carrosséis.

Não são definidos nesta etapa:

- JavaScript do navegador;
- consumo da API;
- estados de loading;
- estados de erro;
- estados vazios;
- acessibilidade detalhada;
- SEO;
- performance detalhada;
- testes;
- manutenção;
- evolução;
- critérios finais de conclusão.

As Partes 1/6, 2/6 e 3/6 permanecem preservadas. Nenhuma implementação visual ou alteração de código é realizada por esta documentação.

## 46. JavaScript no navegador

O JavaScript executado no navegador deverá ser utilizado somente quando houver necessidade real de comportamento interativo.

Não deverá substituir desnecessariamente recursos que funcionem nativamente com HTML e CSS. A navegação e o conteúdo institucional essencial não deverão depender exclusivamente de JavaScript.

O código do navegador deverá permanecer organizado e separado dos arquivos destinados ao backend. Os arquivos destinados ao navegador deverão permanecer em `public/js/`.

Deve-se evitar código JavaScript excessivamente complexo para comportamentos simples e dependências externas quando uma solução nativa for suficiente. O JavaScript deverá preservar o comportamento esperado quando recursos externos falharem.

## 47. Interações

O JavaScript poderá controlar comportamentos como:

- menu mobile;
- carrosséis;
- controles de conteúdo dinâmico;
- interações visuais;
- estados de componentes;
- outras interações necessárias à experiência.

As interações deverão possuir comportamento previsível e atualizar corretamente os estados dos elementos. Quando houver estado visual, ele deverá ser refletido adequadamente para tecnologias assistivas quando aplicável.

O JavaScript não deverá criar elementos que impeçam a navegação ou o acesso ao conteúdo essencial.

## 48. Comunicação com a API

Quando o frontend precisar obter dados através da API, deverá utilizar os endpoints definidos em `/api/v1/`.

A comunicação deverá ficar organizada em uma camada própria do frontend. Views e componentes não deverão realizar diretamente chamadas HTTP para a API, e o código de apresentação não deverá conhecer detalhes desnecessários da infraestrutura.

A comunicação deverá utilizar HTTP/HTTPS conforme o ambiente. A URL base da API poderá ser configurada conforme o ambiente, sem inserir URLs específicas em diversos arquivos JavaScript.

## 49. Recursos e contratos da API no frontend

O frontend poderá consumir:

- `/api/v1/clinic`;
- `/api/v1/professionals`;
- `/api/v1/services`;
- `/api/v1/insurance-plans`;
- `/api/v1/testimonials`;
- `/api/v1/media`;
- `/api/v1/contact`;
- `/api/v1/location`.

O frontend deverá respeitar `API-STRUCTURE.md` e considerar os contratos:

```text
{"success": true, "data": {}}
```

ou:

```text
{"success": true, "data": []}
```

Em caso de erro:

```text
{"success": false, "error": {"code": "ERROR_CODE", "message": "Mensagem compreensível sobre o erro."}}
```

Uma resposta de sucesso pode conter dados vazios. Coleção vazia é estado válido; erros de comunicação ou respostas inválidas devem ser tratados de forma controlada.

## 50. SSR e API

Quando uma página for renderizada pelo servidor com dados já disponíveis no backend, não deverá realizar chamada HTTP desnecessária para a própria API.

SSR e API deverão compartilhar a mesma origem de dados e a mesma camada de acesso definida pela arquitetura. A API continuará existindo como camada pública e reutilizável, enquanto o frontend do navegador poderá consumi-la quando realmente necessário.

Essa separação não deverá criar duplicação desnecessária da origem dos dados.

## 51. Estados de carregamento

Quando uma operação assíncrona for necessária, o componente deverá possuir comportamento apropriado durante o carregamento.

O usuário deverá compreender que o conteúdo está sendo carregado quando houver espera perceptível. Estados de carregamento não deverão provocar deslocamentos exagerados e deverão ser compatíveis com o componente apresentado.

Não devem ser utilizados carregamentos artificiais apenas para criar animações.

## 52. Estados vazios

Uma coleção sem conteúdo é um estado válido. Quando não houver profissionais, serviços, convênios, depoimentos ou mídia, a interface deverá apresentar comportamento apropriado e claro.

Não se deve apresentar conteúdo fictício automaticamente para esconder uma coleção vazia, nem transformar uma coleção vazia em erro.

## 53. Estados de erro

Falhas de API, dados ou serviços externos deverão possuir tratamento apropriado no frontend. A mensagem ao usuário deverá ser compreensível e não apresentar stack trace, detalhes internos, caminhos de arquivos, tokens ou outras informações técnicas desnecessárias.

Quando for possível recuperar a operação, poderá ser disponibilizada uma ação de tentativa novamente. Uma falha em uma seção não deverá bloquear desnecessariamente outras partes da página.

## 54. Falha de recursos externos

Falhas em WhatsApp, mapas, vídeos, imagens ou outros serviços externos não deverão impedir o restante do site de funcionar.

Quando uma imagem não puder ser carregada, o componente deverá evitar espaço visual quebrado ou composição inadequada. Quando um vídeo não estiver disponível, deverá apresentar comportamento visual adequado. Se o mapa externo falhar, endereço e demais canais de contato deverão continuar disponíveis.

## 55. Acessibilidade

A estrutura do frontend deverá considerar acessibilidade desde a implementação:

- utilizar HTML semântico quando apropriado;
- manter hierarquia lógica de títulos;
- utilizar elementos nativos de interação quando possível;
- usar links para links e botões para botões;
- fornecer identificação compreensível aos elementos interativos;
- fornecer `alt` adequado para imagens informativas;
- tratar imagens decorativas apropriadamente para tecnologias assistivas;
- fazer o texto alternativo representar a finalidade da imagem.

## 56. Teclado e foco

A navegação essencial deverá ser possível por teclado. Elementos interativos deverão possuir foco acessível, ordem de foco coerente e não deverão prender o foco indevidamente.

Menus, carrosséis e demais componentes deverão considerar teclado quando aplicável. Elementos focáveis deverão possuir indicação visual adequada; o indicador de foco não deve ser removido sem alternativa equivalente.

## 57. Contraste e legibilidade

O contraste entre texto e fundo deverá permitir leitura adequada. Informações importantes não deverão depender somente de cor.

Tamanhos de texto deverão permanecer legíveis em diferentes dispositivos, considerando também usuários que utilizam ampliação de conteúdo.

## 58. Menus e componentes acessíveis

O menu mobile deverá comunicar corretamente seu estado aberto ou fechado. Quando aplicável, atributos ARIA deverão representar corretamente o estado do componente, sem uso desnecessário quando HTML nativo resolver a necessidade.

Carrosséis deverão possuir controles compreensíveis, e controles interativos deverão possuir nomes acessíveis.

## 59. Redução de movimento

O frontend deverá considerar a preferência do usuário por redução de movimento. Animações e transições deverão poder ser reduzidas quando essa preferência estiver configurada, sem impedir o acesso ao conteúdo ou às funcionalidades.

## 60. Formulários

Caso seja utilizado formulário de contato, os campos deverão possuir identificação clara, campos obrigatórios deverão ser identificados e mensagens de validação deverão ser compreensíveis.

Erros de preenchimento deverão ser apresentados próximos ou associados aos campos correspondentes quando apropriado. O formulário não deverá depender exclusivamente de cor, e dados enviados pelo usuário deverão ser tratados como não confiáveis.

## 61. WhatsApp, telefone e e-mail

Links de WhatsApp deverão utilizar mecanismo apropriado para abertura do serviço. Links de telefone deverão utilizar `tel:` quando apropriado, e links de e-mail deverão utilizar `mailto:` quando apropriado.

Esses elementos deverão possuir textos ou rótulos compreensíveis. A indisponibilidade de um canal não deverá eliminar os demais canais de contato.

## 62. Princípios gerais da Parte 5

O JavaScript deverá complementar HTML e CSS, não substituí-los sem necessidade. A comunicação com a API deverá permanecer separada da apresentação.

Loading, vazio e erro deverão ser considerados parte do comportamento da interface quando houver conteúdo dinâmico. Acessibilidade deverá ser considerada desde a definição dos componentes.

O frontend deverá permanecer simples e sem gerenciamento de estado global complexo quando não houver necessidade real. Não devem ser adicionadas bibliotecas de gerenciamento de estado, acessibilidade ou clientes de API apenas por padrão.

## 63. Limites da Parte 5

Esta parte trata exclusivamente de JavaScript no navegador, interações, comunicação com a API, contratos consumidos pelo frontend, SSR e API, estados de carregamento, vazio e erro, falhas externas e acessibilidade.

Não são definidos nesta etapa:

- SEO;
- performance detalhada;
- estratégia de testes;
- manutenção;
- evolução;
- critérios de conclusão;
- publicação ou deploy.

Não foi implementado código, alterado contrato da API ou modificada qualquer camada da aplicação por esta documentação.

## 64. SEO

O frontend deverá considerar SEO básico adequado a um site institucional.

- Cada página deverá possuir `title` coerente com seu conteúdo.
- As páginas deverão possuir `meta description` adequada quando aplicável.
- Títulos e headings deverão representar claramente o conteúdo apresentado.
- A estrutura de headings deverá permanecer hierárquica e coerente.
- As URLs deverão permanecer legíveis e descritivas.
- As páginas deverão utilizar conteúdo textual relevante e compreensível.
- Imagens relevantes deverão possuir `alt` adequado.
- Links internos deverão utilizar textos compreensíveis.

Quando o site estiver preparado para publicação pública, poderá possuir `robots.txt` e, quando apropriado, `sitemap.xml`. Open Graph poderá ser utilizado para melhorar o compartilhamento das páginas.

Dados estruturados somente deverão ser utilizados quando houver informações corretas e suficientes. Não devem ser criados dados estruturados inventados ou incorretos.

SEO não deverá comprometer acessibilidade, desempenho ou clareza do conteúdo.

## 65. Performance

A performance deverá ser tratada de forma proporcional ao objetivo institucional do projeto.

O frontend deverá priorizar o carregamento do conteúdo essencial, permitindo que recursos não essenciais sejam carregados posteriormente quando apropriado.

- Imagens deverão possuir dimensões e formatos adequados ao uso.
- Formatos modernos de imagem poderão ser utilizados quando viáveis.
- Imagens fora da área inicial poderão utilizar lazy loading quando apropriado.
- Deve ser evitado o carregamento desnecessário de imagens de grande resolução.
- Vídeos deverão ser carregados de maneira controlada e não automaticamente sem necessidade.
- Vídeos poderão utilizar poster e carregamento sob demanda quando apropriado.
- JavaScript deverá permanecer reduzido ao necessário.
- CSS deverá permanecer organizado e sem duplicações desnecessárias.
- Dependências externas deverão ser utilizadas somente quando justificadas.
- Fontes externas deverão ser limitadas quando não forem essenciais.
- Devem ser evitados recursos que provoquem deslocamento visual durante o carregamento.
- Dimensões ou áreas reservadas deverão ser consideradas para imagens e mídias quando necessário para reduzir CLS.

A performance deverá ser avaliada também em dispositivos móveis. Melhorias não deverão comprometer acessibilidade, qualidade visual, legibilidade, funcionamento ou experiência do usuário.

## 66. Comunicação e quantidade de requisições

O frontend não deverá realizar chamadas duplicadas desnecessárias. Quando os dados já estiverem disponíveis através do SSR, não deverá realizar chamada HTTP adicional para obter exatamente os mesmos dados sem necessidade.

Chamadas à API deverão ocorrer somente quando necessárias. Recursos externos deverão ser utilizados com moderação, e bibliotecas ou serviços externos não devem ser adicionados apenas por conveniência quando uma solução interna simples for suficiente.

## 67. Validação de performance

A performance poderá ser analisada com Lighthouse, DevTools do navegador, ferramentas de análise de carregamento ou métricas disponíveis no navegador.

A análise deverá considerar principalmente dispositivos móveis e conexões menos favoráveis. Não devem ser estabelecidas metas numéricas artificiais sem necessidade; a avaliação deve buscar problemas reais de carregamento, renderização e interação.

## 68. Testes

O frontend deverá possuir testes compatíveis com a complexidade do projeto. Testes específicos do frontend deverão ser organizados em `tests/frontend/` quando aplicável, e testes de integração poderão permanecer em `tests/integration/`.

Os testes devem validar comportamentos relevantes, não apenas aumentar cobertura artificialmente.

## 69. Testes de páginas

As páginas principais deverão ser verificadas:

- `/`;
- `/sobre`;
- `/servicos`;
- `/profissionais`;
- `/convenios`;
- `/contato`.

Deve ser verificado se as páginas respondem corretamente, se as views esperadas são renderizadas e se o conteúdo essencial é apresentado.

## 70. Testes de navegação

Devem ser verificadas as principais navegações do site:

- logo ou nome SorriMed;
- menu principal;
- links internos;
- botão de WhatsApp;
- telefone;
- e-mail;
- localização;
- mapa;
- demais links relevantes.

Links inexistentes não devem ser apresentados como funcionais.

## 71. Testes de estados

Quando houver conteúdo dinâmico, devem ser verificados carregamento, sucesso, coleção vazia, erro e tentativa novamente quando aplicável.

Deve ser verificado que uma falha em uma seção não bloqueia desnecessariamente as demais.

## 72. Testes responsivos

A interface deverá ser verificada em celular, tablet, notebook e desktop, considerando orientações retrato e paisagem quando aplicável.

Devem ser verificados:

- ausência de scroll horizontal indevido;
- conteúdo dentro da viewport;
- legibilidade;
- tamanho dos elementos interativos;
- funcionamento do menu;
- funcionamento dos cards;
- funcionamento dos carrosséis;
- comportamento de imagens e vídeos.

## 73. Testes de acessibilidade

Devem ser realizadas verificações básicas de acessibilidade, considerando:

- navegação por teclado;
- foco;
- contraste;
- textos alternativos;
- hierarquia de headings;
- elementos semânticos;
- nomes acessíveis dos controles;
- comportamento de componentes interativos.

Ferramentas automatizadas poderão ser utilizadas como apoio, mas não substituem a verificação manual dos principais fluxos.

## 74. Testes em navegadores

O frontend deverá buscar compatibilidade com navegadores modernos e atuais, priorizando os principais navegadores utilizados pelos visitantes.

Não devem ser criadas soluções específicas para navegadores antigos sem necessidade real.

## 75. Testes manuais

Além dos testes automatizados, deverá existir validação manual da interface, considerando navegação, aparência, responsividade, interações, conteúdo, links, estados e acessibilidade básica.

O objetivo é verificar o comportamento real da interface, e não somente a execução técnica dos testes.

## 76. Manutenção

A estrutura do frontend deverá facilitar a manutenção futura.

- Alterações deverão ser realizadas por módulo funcional sempre que possível.
- Uma alteração em uma página não deverá exigir mudanças desnecessárias em páginas não relacionadas.
- Componentes realmente compartilhados deverão permanecer reutilizáveis.
- Não devem ser criadas abstrações apenas para reduzir algumas linhas de código.
- Alterações deverão preservar o comportamento existente quando ele não estiver sendo alterado explicitamente.
- Novas funcionalidades somente deverão ser adicionadas quando houver requisito correspondente.
- Refatorações não relacionadas à tarefa atual não deverão ser realizadas durante implementações futuras.

## 77. Evolução

O frontend deverá permitir evolução gradual. Novas páginas poderão seguir a organização existente, e novos componentes poderão ser adicionados quando houver necessidade real de reutilização.

Novas integrações deverão respeitar a arquitetura definida. Mudanças incompatíveis deverão considerar o impacto sobre as demais camadas.

A evolução deverá preservar:

- organização das views;
- separação de responsabilidades;
- comunicação com a API;
- responsividade;
- acessibilidade;
- consistência visual;
- desempenho.

O chat, o sistema próprio de agendamento, login, usuários, painel administrativo, pagamentos e funcionalidades semelhantes permanecem fora da primeira versão até que requisitos específicos sejam definidos.

## 78. Documentação e implementação

`FRONTEND-STRUCTURE.md` representa a estrutura e as decisões arquiteturais previstas para o frontend. A existência de uma regra na documentação não significa que ela já esteja implementada.

A implementação deverá ser realizada posteriormente por módulos funcionais. Quando uma implementação alterar uma decisão documentada, a documentação correspondente deverá ser atualizada quando essa alteração for autorizada.

`IMPLEMENTATION-STATUS.md` deverá representar o estado real da implementação. A documentação não deve declarar uma funcionalidade como implementada quando ela ainda não estiver implementada.

## 79. Critérios de conclusão do frontend

O frontend será considerado concluído somente quando os requisitos aplicáveis estiverem implementados e integrados.

A conclusão deverá considerar:

- páginas principais implementadas;
- rotas funcionando;
- navegação funcionando;
- views e componentes integrados;
- conteúdo apresentado corretamente;
- comunicação com dados ou API funcionando quando aplicável;
- estados necessários tratados;
- responsividade validada;
- acessibilidade básica validada;
- SEO básico implementado quando aplicável;
- performance avaliada;
- testes relevantes executados;
- problemas críticos corrigidos;
- comportamento validado manualmente;
- documentação coerente com a implementação.

O frontend não deve ser considerado concluído somente porque as páginas renderizam.

## 80. Definition of Done do frontend

Uma entrega de frontend estará pronta quando:

1. A funcionalidade solicitada estiver implementada.
2. Estiver integrada às demais camadas necessárias.
3. Os testes relevantes forem executados.
4. Não existirem regressões conhecidas dentro do escopo.
5. A interface tiver sido validada em diferentes tamanhos de tela.
6. A navegação principal estiver funcional.
7. A acessibilidade básica tiver sido considerada.
8. Os estados necessários estiverem tratados.
9. Problemas críticos conhecidos estiverem corrigidos.
10. A documentação e o estado da implementação estiverem coerentes.

Problemas fora do escopo não deverão ser escondidos; quando relevantes, deverão ser registrados separadamente. Não devem ser implementadas melhorias fora do requisito apenas para declarar a tarefa concluída.

## 81. Critério final da primeira versão

O frontend da primeira versão estará concluído quando as funcionalidades previstas para o site institucional SorriMed estiverem implementadas, integradas, responsivas, testadas e documentadas.

O frontend não deverá incluir funcionalidades pertencentes a versões futuras. O objetivo é entregar uma experiência institucional funcional, clara, responsiva, acessível e adequada aos objetivos definidos para o projeto.

## 82. Limites da Parte 6

Esta Parte 6 documenta SEO, performance, comunicação e quantidade de requisições, validação de performance, testes, manutenção, evolução, relação entre documentação e implementação e critérios de conclusão.

Não foram implementados código, EJS, CSS, JavaScript, API, rotas, controllers, JSON, dependências ou testes nesta etapa. As Partes 1/6 a 5/6 permanecem preservadas.
