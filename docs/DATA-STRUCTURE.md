# Estrutura de dados do SorriMed

> Esta é a documentação conceitual da camada de dados da versão 1. Nenhum contrato de armazenamento ou implementação adicional é criado por este documento.

## 1. Objetivo da camada de dados

Na versão 1 do SorriMed, os dados institucionais são armazenados localmente em arquivos JSON.

A camada de dados deve ser simples e fácil de manter:

- não existe banco de dados;
- não existe CMS;
- não existe painel administrativo;
- não existe API de escrita;
- os dados são consumidos em modo somente leitura;
- a mesma fonte de dados deve atender SSR e API;
- dados fictícios podem ser utilizados porque o SorriMed é um projeto de teste.

A existência desta documentação não implica a implementação da camada de acesso aos dados.

## 2. Diretório de dados

A estrutura prevista para os recursos institucionais é:

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

`data/` contém a fonte dos dados institucionais. Esses arquivos não devem ser expostos diretamente pelo Express como arquivos estáticos. O acesso deve ocorrer através da camada de acesso aos dados.

Os arquivos devem permanecer separados por recurso. A mesma informação não deve ser duplicada desnecessariamente em múltiplos arquivos.

## 3. Tipos de recurso

Os recursos possuem dois formatos conceituais.

### Recursos únicos

São representados por um único objeto JSON:

- `clinic`;
- `contact`;
- `location`.

Exemplo conceitual:

```json
{
  "campo": "valor"
}
```

### Coleções

São representadas por arrays de objetos:

- `professionals`;
- `services`;
- `insurance-plans`;
- `testimonials`;
- `media`.

Exemplo conceitual:

```json
[
  {
    "id": "1",
    "campo": "valor"
  }
]
```

Essa diferença deve permanecer consistente entre os recursos e também na API correspondente.

## 4. Recurso `clinic`

O arquivo `data/clinic.json` representa as informações institucionais principais da SorriMed.

### Campos previstos

- `name`: nome da clínica;
- `description`: apresentação resumida;
- `about`: informações institucionais mais completas;
- `mission`: missão institucional;
- `values`: valores da clínica;
- `differentials`: diferenciais institucionais.

Estrutura conceitual:

```json
{
  "name": "SorriMed",
  "description": "Apresentação resumida",
  "about": "Informações institucionais",
  "mission": "Missão institucional",
  "values": [],
  "differentials": []
}
```

A estrutura interna de `values` e `differentials` não é definida nesta etapa além do necessário para representar o conteúdo.

## 5. Recurso `professionals`

O arquivo `data/professionals.json` representa os profissionais apresentados pela SorriMed.

Cada item possui a estrutura conceitual:

```json
{
  "id": "1",
  "name": "Nome do profissional",
  "photo": "/images/professionals/profissional.jpg",
  "specialty": "Especialidade",
  "description": "Descrição profissional"
}
```

### Campos

- `id`: identifica o profissional dentro da coleção;
- `name`: nome do profissional;
- `photo`: caminho público da imagem;
- `specialty`: especialidade ou função;
- `description`: descrição profissional resumida.

Não fazem parte desta estrutura campos como CRM, telefone pessoal, endereço pessoal, redes sociais pessoais ou outros dados não definidos.

## 6. Recurso `services`

O arquivo `data/services.json` representa os serviços e tratamentos apresentados pela SorriMed.

Estrutura conceitual:

```json
{
  "id": "1",
  "name": "Nome do serviço",
  "description": "Descrição do serviço",
  "image": "/images/services/servico.jpg"
}
```

### Campos

- `id`: identifica o serviço;
- `name`: nome apresentado ao visitante;
- `description`: descrição do serviço;
- `image`: recurso visual relacionado.

Preço, duração, cobertura de convênio e promessa de resultado não fazem parte dos campos padrão desta estrutura.

## 7. Recurso `insurance-plans`

O arquivo `data/insurance-plans.json` representa os convênios e planos apresentados pela SorriMed.

Estrutura conceitual:

```json
{
  "id": "1",
  "name": "Nome do convênio",
  "logo": "/images/insurance-plans/convenio.png",
  "description": "Informação complementar"
}
```

### Campos

- `id`: identifica o plano;
- `name`: nome apresentado;
- `logo`: recurso visual;
- `description`: informação complementar autorizada.

Não são definidas nesta etapa estruturas de cobertura, procedimentos, valores ou regras de atendimento.

## 8. Recurso `testimonials`

O arquivo `data/testimonials.json` representa os depoimentos apresentados no site.

Estrutura conceitual:

```json
{
  "id": "1",
  "name": "Nome autorizado",
  "photo": "/images/testimonials/paciente.jpg",
  "text": "Depoimento do paciente"
}
```

### Campos

- `id`: identifica o depoimento;
- `name`: somente a identificação autorizada para publicação;
- `photo`: somente imagem autorizada;
- `text`: depoimento publicado.

Não devem ser adicionados dados pessoais adicionais.

## 9. Recurso `media`

O arquivo `data/media.json` representa mídias institucionais utilizadas pelo site.

Estrutura conceitual:

```json
{
  "id": "1",
  "type": "image",
  "url": "/images/clinic/clinic.jpg",
  "title": "Clínica SorriMed",
  "description": "Ambiente da clínica"
}
```

### Campos

- `id`: identifica a mídia;
- `type`: tipo da mídia;
- `url`: caminho ou URL do recurso;
- `title`: título da mídia;
- `description`: contexto da mídia.

O campo `type` deve representar pelo menos:

- `image`;
- `video`.

Imagens e vídeos devem permanecer compatíveis com a estrutura de assets definida pelo projeto.

## 10. Recurso `contact`

O arquivo `data/contact.json` representa os canais oficiais de contato da SorriMed.

Estrutura conceitual:

```json
{
  "whatsapp": "+55XXXXXXXXXXX",
  "phone": "+55XXXXXXXXXXX",
  "email": "contato@exemplo.com"
}
```

### Campos

- `whatsapp`: canal externo de WhatsApp;
- `phone`: telefone oficial, que pode permitir ligação em dispositivos compatíveis;
- `email`: e-mail oficial, que pode abrir o cliente de e-mail.

Os dados devem representar canais oficiais utilizados pelo site. Nenhum campo de chat interno faz parte deste recurso.

## 11. Recurso `location`

O arquivo `data/location.json` representa a localização da SorriMed.

Estrutura conceitual:

```json
{
  "address": "Endereço da SorriMed",
  "mapUrl": "https://..."
}
```

### Campos

- `address`: endereço apresentado ao usuário;
- `mapUrl`: endereço ou link utilizado para mapas.

O recurso deve permitir a apresentação da localização e o encaminhamento para um serviço de mapas quando aplicável.

Coordenadas, CEP, horário de atendimento e outros campos não são obrigatórios nesta etapa.

## 12. Padrão de nomenclatura

### Arquivos

Os nomes de arquivo utilizam `kebab-case`:

- `clinic.json`;
- `professionals.json`;
- `insurance-plans.json`.

### Campos JSON

Os campos utilizam `camelCase`, como:

- `name`;
- `description`;
- `mapUrl`.

### IDs

Quando utilizados, os IDs devem manter identificação simples e consistente dentro da coleção.

### Valores

Os valores devem ser apropriados ao tipo de informação representada. Padrões de nomenclatura não devem ser misturados sem necessidade.

## 13. Formato JSON

Os arquivos devem:

- utilizar JSON válido;
- utilizar UTF-8;
- possuir indentação legível;
- evitar comentários, pois comentários não fazem parte do JSON padrão;
- manter estrutura consistente;
- evitar propriedades duplicadas;
- evitar dados desnecessários;
- evitar estruturas excessivamente complexas.

## 14. Dados fictícios

O SorriMed é um projeto de teste. Os arquivos podem utilizar dados fictícios para permitir desenvolvimento e testes.

Entretanto, os dados fictícios:

- devem possuir aparência coerente com o domínio;
- não devem ser apresentados como dados reais fora do contexto de teste;
- não devem conter informações privadas reais desnecessárias;
- não devem criar regras de negócio não aprovadas;
- não devem justificar funcionalidades fora do escopo.

## 15. Limites da Parte 1

Esta etapa é exclusivamente documental. Não são implementados:

- novos arquivos JSON;
- alterações nos JSON existentes;
- camada de acesso aos dados;
- controllers;
- routes;
- API;
- banco de dados;
- CMS;
- painel administrativo;
- CRUD;
- upload;
- autenticação;
- autorização;
- agendamento;
- chat;
- novas dependências.

## 16. Separação entre `data/` e `src/data/`

### `data/`

Contém os arquivos JSON que representam a fonte de dados institucionais:

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

### `src/data/`

Contém a camada responsável pelo acesso controlado aos arquivos de `data/`.

A arquitetura prevista é:

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

Essa estrutura é uma definição arquitetural/documental. Os arquivos não são criados nesta etapa.

`src/data/` é uma camada de acesso aos dados, não uma nova fonte de dados. A fonte continua sendo `data/*.json`.

## 17. Responsabilidade de `src/data/`

A camada `src/data/` deve:

- localizar os arquivos JSON;
- ler os arquivos;
- converter JSON para estruturas JavaScript;
- disponibilizar os dados para controllers e services;
- centralizar o acesso aos arquivos;
- impedir que controllers e outras camadas conheçam os caminhos físicos dos JSONs;
- tratar erros básicos de leitura;
- manter acesso somente leitura.

## 18. Acesso somente leitura

A v1 utiliza os dados em modo somente leitura. A camada de dados não deve possuir operações de:

- criação;
- atualização;
- exclusão;
- alteração parcial;
- persistência de novos dados.

Não haverá CRUD. Funções como `create`, `update`, `patch` e `delete` não fazem parte da estrutura padrão da v1. A leitura é suficiente para o escopo atual.

## 19. Leitura dos arquivos

O acesso aos JSONs deve utilizar mecanismos nativos do Node.js quando possível. A implementação deverá:

- resolver os caminhos de forma segura;
- evitar dependência do diretório atual de execução;
- utilizar caminhos baseados na estrutura do projeto;
- ler os arquivos em UTF-8;
- fazer parsing do JSON;
- propagar erros de leitura ou parsing para o tratamento central da aplicação.

Esta documentação não define uma implementação específica de função.

## 20. Caminhos e portabilidade

Não devem existir caminhos absolutos específicos da máquina, como `/home/usuario/...`.

Os caminhos devem funcionar após o clone do projeto em outra máquina. A resolução deve ser baseada na localização real dos arquivos dentro do projeto, e `data/` não deve depender do `cwd` para funcionar corretamente.

O objetivo é que `clone → npm install → execução` continue funcionando sem alteração de caminhos no código.

## 21. Validação dos JSONs

Os dados devem ser válidos e coerentes com a estrutura definida.

Para recursos únicos, a validação deve considerar, quando aplicável:

- objeto válido;
- campos esperados presentes;
- tipos coerentes.

Para coleções, deve considerar, quando aplicável:

- array válido;
- itens em formato consistente;
- `id` presente quando definido;
- campos esperados presentes;
- tipos coerentes.

Validação excessivamente complexa não é necessária inicialmente. A estrutura deve ser validada o suficiente para evitar que dados inválidos quebrem a aplicação, sem duplicar desnecessariamente regras de negócio na camada de dados.

## 22. JSON inválido

Quando um arquivo JSON estiver inválido:

- o erro deve ser detectado;
- a aplicação não deve substituir silenciosamente o arquivo por dados inventados;
- o erro deve ser encaminhado ao tratamento central;
- a resposta da API, quando aplicável, deve seguir o contrato definido em `API-STRUCTURE.md`;
- o SSR deve apresentar tratamento apropriado conforme a arquitetura de erros;
- detalhes técnicos internos não devem ser expostos ao visitante.

Não deve existir fallback com dados fictícios gerados em runtime.

## 23. Arquivo ausente

Quando um JSON esperado não existir, a aplicação deve:

- detectar a ausência;
- não criar automaticamente um arquivo vazio para esconder o problema;
- não criar dados fictícios automaticamente;
- encaminhar o erro para tratamento apropriado;
- registrar informação técnica suficiente nos logs para manutenção;
- evitar exposição do caminho físico ao usuário.

## 24. Dados vazios

### Arquivo válido com coleção vazia

Um arquivo contendo `[]` representa um estado válido de dados. A aplicação deve conseguir representar uma coleção vazia.

### Arquivo ausente ou inválido

Arquivo ausente ou inválido representa erro de disponibilidade ou integridade dos dados e não deve ser tratado automaticamente como coleção vazia.

### Recurso único sem conteúdo válido

Deve ser tratado como situação de dados inválidos ou incompletos, conforme a necessidade da camada que o consome. Não se deve inventar conteúdo para esconder o problema.

## 25. Integridade dos dados

- Cada recurso deve manter sua estrutura consistente.
- A mesma informação não deve ser duplicada sem necessidade.
- IDs dentro das coleções devem ser consistentes.
- Referências para imagens e vídeos devem corresponder aos assets esperados.
- Os dados devem utilizar a nomenclatura definida.
- Alterações estruturais devem ser refletidas na documentação correspondente.
- Mudanças incompatíveis não devem ser feitas silenciosamente.

## 26. Relação com a API

O fluxo de dados previsto é:

```text
data/*.json
  ↓
src/data/
  ↓
API controllers
  ↓
API response
```

A API não deve acessar os JSONs diretamente a partir das rotas. O fluxo completo é:

```text
API route
  ↓
controller
  ↓
service, quando necessário
  ↓
src/data/
  ↓
data/*.json
```

A API é somente leitura, utiliza os mesmos dados institucionais e deve reutilizar a camada de dados. Controllers não devem conhecer os caminhos físicos dos JSONs.

## 27. Relação com SSR

O fluxo de dados do SSR é:

```text
data/*.json
  ↓
src/data/
  ↓
controller
  ↓
EJS
  ↓
HTML
```

SSR utiliza diretamente a camada de dados e não deve fazer HTTP para a própria API apenas para obter dados disponíveis localmente. Controllers podem combinar recursos para montar uma página quando necessário. Views e componentes EJS não acessam JSON diretamente.

## 28. Relação com `services/`

`services/` é opcional. A camada de dados não deve criar services artificialmente.

Um service poderá ser utilizado quando existir:

- combinação de múltiplos recursos;
- transformação de dados;
- lógica reutilizável;
- regra de aplicação que não pertença ao controller;
- necessidade real de abstração.

Se o controller puder consumir `src/data/` diretamente de forma simples e clara, não deve ser criado um service apenas por formalidade.

## 29. Responsabilidade dos controllers

Controllers:

- coordenam a requisição;
- solicitam dados à camada apropriada;
- preparam dados para SSR ou API;
- não abrem arquivos JSON diretamente;
- não conhecem caminhos físicos;
- não contêm lógica complexa de persistência;
- não duplicam a responsabilidade da camada de dados.

## 30. Responsabilidade das views

Views recebem dados preparados pelos controllers. Elas:

- não leem arquivos;
- não acessam o filesystem;
- não conhecem a estrutura física de `data/`;
- não implementam regras de acesso aos dados.

Componentes EJS seguem as mesmas regras.

## 31. Cache

Não haverá sistema complexo de cache na v1 e cache não deve ser implementado por padrão.

A leitura direta dos JSONs é aceitável para o tamanho e o objetivo do projeto. Qualquer estratégia futura de cache deve ser avaliada antes da implementação e não deve criar inconsistência entre dados e respostas.

## 32. Alteração manual dos dados

Na v1, os arquivos JSON podem ser atualizados manualmente durante desenvolvimento ou manutenção.

As alterações devem preservar a estrutura documentada. JSON inválido não deve ser colocado deliberadamente no projeto, e alterações importantes de estrutura devem ser acompanhadas da documentação correspondente.

Não existe painel administrativo nem ferramenta de edição para esses dados nesta etapa.

## 33. Dados fictícios e runtime

### Dados fictícios armazenados

São permitidos porque o projeto é de teste. Por exemplo, `data/services.json` pode conter serviços fictícios de demonstração.

### Fallback fictício em runtime

Não é permitido. A aplicação não deve detectar uma falha de leitura e inventar serviços ou outros dados automaticamente para esconder o erro.

## 34. Limites da Parte 2

Esta etapa é exclusivamente documental. Não são criados `src/data/*.data.js`, nem alterados `src/data/`, `data/*.json`, controllers, routes, services, views, dependências, `package.json`, `package-lock.json` ou `IMPLEMENTATION-STATUS.md`.

Também não são implementados leitura de JSON, schemas de validação, banco de dados, cache, CRUD ou API.

## 35. Consistência entre recursos

Os recursos devem seguir padrões consistentes.

### Identificação

Coleções devem utilizar `id` de forma consistente. Recursos únicos não precisam de `id` quando isso não fizer sentido.

### Campos

Campos com a mesma finalidade devem manter o mesmo nome. `name` deve representar nome quando utilizado, e `description` deve representar descrição quando utilizado. Não devem ser criados nomes alternativos sem necessidade.

### Estruturas

Não se deve misturar objeto e array para o mesmo tipo de recurso. Por exemplo, `professionals.json` representa um array, enquanto `clinic.json` representa um objeto.

### Dados opcionais

Campos opcionais devem ter comportamento previsível. Não se deve alternar arbitrariamente entre ausência do campo, `null` e string vazia sem uma decisão clara para o recurso.

Esta etapa não define uma política global de `null` versus ausência quando ela não for necessária.

## 36. Consistência de assets

Referências de mídia nos JSONs devem corresponder aos arquivos disponibilizados em `public/`.

Exemplos de referências compatíveis:

- `/images/professionals/...`;
- `/images/services/...`;
- `/images/insurance-plans/...`;
- `/images/testimonials/...`;
- `/videos/...`.

URLs e caminhos devem ser compatíveis com a estrutura pública, não utilizar caminhos absolutos da máquina e não apontar deliberadamente para referências quebradas.

Alterações de nome ou localização de um asset devem atualizar o dado correspondente. A estrutura dos assets é responsabilidade do projeto e do frontend; os JSONs armazenam somente a referência necessária.

## 37. Responsabilidade dos JSONs

Os arquivos JSON armazenam dados, não lógica. Não devem conter:

- código JavaScript;
- regras de execução;
- funções;
- consultas;
- lógica condicional complexa;
- configurações de servidor;
- segredos;
- tokens;
- credenciais.

Os JSONs devem permanecer simples e legíveis.

## 38. Dados institucionais e regras de negócio

Os JSONs armazenam os dados. As regras de negócio ficam documentadas em `docs/BUSINESS-RULES.md`.

Uma estrutura de dados não deve ser transformada automaticamente em uma nova regra de negócio. Por exemplo:

- o campo `description` não cria, por si só, uma regra adicional sobre seu conteúdo;
- `insurance-plans.json` não define automaticamente regras de cobertura;
- `testimonials.json` não define automaticamente regras de autorização além das já documentadas.

## 39. Alterações de estrutura

Alterações estruturais devem ser controladas. Isso inclui:

- adicionar, remover ou renomear campo;
- alterar tipo;
- transformar objeto em array ou array em objeto;
- alterar estrutura interna;
- alterar a convenção de identificação.

Antes de uma alteração relevante, deve-se verificar o impacto na API, no SSR, no frontend, nos testes e na documentação relacionada. Quando possível, a alteração deve ser implementada de maneira compatível.

Estruturas já consumidas não devem ser alteradas silenciosamente.

## 40. Compatibilidade com a API

Alterações nos dados podem afetar o contrato da API. Alterar `name` para `title`, por exemplo, pode quebrar consumidores.

Por isso:

- mudanças incompatíveis devem ser tratadas explicitamente;
- `API-STRUCTURE.md` deve ser atualizado quando o contrato mudar;
- quando necessário, uma nova versão da API deve ser considerada;
- o contrato da API não deve ser alterado silenciosamente.

## 41. Compatibilidade com SSR e frontend

Mudanças nos JSONs podem afetar controllers, services, views EJS, componentes, JavaScript do navegador e testes.

Toda alteração estrutural relevante deve considerar esses consumidores. A camada de dados deve continuar isolando o acesso físico aos arquivos.

## 42. Manutenção dos dados

Durante a manutenção, deve-se:

- manter JSON válido;
- preservar indentação legível;
- manter nomenclatura consistente;
- evitar duplicação;
- remover dados obsoletos somente quando autorizado;
- atualizar referências de assets quando necessário;
- revisar consumidores quando campos forem alterados;
- manter a documentação sincronizada.

Essas práticas não devem criar um processo burocrático desnecessário.

## 43. Versionamento dos dados

Não haverá versionamento independente dos arquivos JSON na v1.

- Os arquivos são versionados junto com o projeto através do Git.
- As alterações ficam registradas no histórico do projeto.
- Não existe mecanismo separado de migration para JSON.
- Não deve ser criada estrutura de migrations nesta etapa.

Uma futura migração para banco de dados ou outra fonte deverá ser uma decisão arquitetural própria.

## 44. Testes dos dados

A estrutura de dados deve possuir validação e testes suficientes para evitar regressões.

Quando aplicável, devem ser testados:

- JSON válido;
- carregamento dos arquivos;
- estrutura esperada;
- recursos únicos como objetos;
- coleções como arrays;
- IDs das coleções;
- campos essenciais;
- referências de assets quando relevante;
- tratamento de arquivo ausente;
- tratamento de JSON inválido;
- ausência de exposição de dados privados.

Não são necessários testes excessivos para campos puramente textuais quando não houver benefício real.

## 45. Critérios de qualidade dos dados

Os dados devem ser:

- válidos;
- consistentes;
- legíveis;
- coerentes com o domínio;
- compatíveis com os consumidores;
- livres de informações privadas desnecessárias;
- livres de segredos;
- fáceis de atualizar;
- simples de compreender.

No contexto do projeto de teste, dados fictícios são permitidos.

## 46. Regras para futura implementação

Quando a camada de dados for implementada, a IA de programação deverá:

1. Ler os documentos relevantes.
2. Ler `IMPLEMENTATION-STATUS.md`.
3. Analisar a estrutura existente antes de modificar.
4. Verificar os JSONs existentes.
5. Preservar dados válidos já existentes.
6. Não apagar ou substituir dados sem autorização.
7. Criar a camada `src/data/` conforme a arquitetura documentada.
8. Manter `data/` como fonte dos dados.
9. Utilizar acesso somente leitura na v1.
10. Evitar caminhos absolutos.
11. Tratar erros de leitura e parsing.
12. Não colocar acesso direto aos JSONs em controllers.
13. Não colocar acesso aos JSONs em views.
14. Não criar services desnecessários.
15. Criar testes relevantes.
16. Executar os testes.
17. Revisar o diff completo.
18. Atualizar documentação e status quando apropriado e autorizado.
19. Não criar funcionalidades fora do escopo.
20. Não fazer commit sem autorização.
21. Não fazer push.

## 47. Controle de escopo

A camada de dados v1 deve permanecer simples.

Não devem ser implementados por iniciativa própria:

- banco de dados;
- ORM;
- CMS;
- painel administrativo;
- CRUD;
- migrations;
- cache complexo;
- filas;
- sincronização externa;
- API de escrita;
- upload;
- autenticação;
- autorização;
- mecanismos de edição;
- mecanismos de versionamento próprios para os JSONs.

Essas funcionalidades somente podem surgir mediante alteração explícita de requisitos.

## 48. Relação com os documentos do projeto

### `VISION.md`

Define o propósito e o escopo geral.

### `BUSINESS-RULES.md`

Define as regras de negócio.

### `API-STRUCTURE.md`

Define os recursos e contratos da API.

### `DATA-STRUCTURE.md`

Define organização, formato, origem e acesso aos dados.

### `FRONTEND-STRUCTURE.md`

Define consumo e apresentação dos dados no frontend.

### `PROJECT-STRUCTURE.md`

Define a organização física e arquitetural do projeto.

### `IMPLEMENTATION-STATUS.md`

Indica o que está efetivamente implementado.

Nenhum documento substitui os demais.

## 49. Documentação não é implementação

`DATA-STRUCTURE.md` descreve a estrutura planejada e as regras arquiteturais dos dados.

Sua existência não significa que toda a camada de dados descrita já esteja implementada. O código atual e `IMPLEMENTATION-STATUS.md` representam o estado real da implementação.

Uma decisão documentada deve ser implementada somente em uma etapa autorizada.

## 50. Status atual

**Status atual: estrutura de dados v1 documentada e parcialmente existente no projeto; camada arquitetural `src/data/` ainda não implementada como estrutura completa.**

Atualmente:

- os oito recursos oficiais estão definidos;
- os oito JSONs estão definidos;
- a estrutura dos recursos está documentada;
- as regras de acesso estão documentadas;
- a camada planejada `src/data/` ainda é uma definição arquitetural;
- `site.json` permanece como arquivo legado da fundação e não faz parte dos oito recursos oficiais;
- nenhuma migração ou remoção de `site.json` deve ser realizada nesta etapa.

## 51. Critério de conclusão da documentação

Considera-se `DATA-STRUCTURE.md` concluído quando:

- os oito recursos estiverem documentados;
- os oito arquivos JSON estiverem documentados;
- objetos e coleções estiverem claramente diferenciados;
- campos principais estiverem definidos;
- nomenclatura estiver definida;
- origem dos dados estiver definida;
- a relação `data/` × `src/data/` estiver definida;
- leitura somente estiver definida;
- tratamento de erros estiver definido;
- integração com SSR e API estiver definida;
- regras de manutenção estiverem definidas;
- evolução estrutural estiver definida;
- estratégia de testes estiver definida;
- limites estiverem definidos;
- status atual estiver registrado;
- o documento estiver coerente com os demais documentos;
- nenhuma implementação for necessária para considerar a documentação concluída.

## 52. Limites da Parte 3

Esta etapa é exclusivamente documental. Não são criados arquivos em `src/data/`, nem criados ou alterados JSONs, removido `site.json`, migrados dados, alterados controllers, routes, services, API, views, frontend, dependências, `package.json`, `package-lock.json` ou `IMPLEMENTATION-STATUS.md`.

Também não são feitas refatorações, commits ou pushes.
