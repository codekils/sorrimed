# Regras de negócio do SorriMed

Este documento registra as regras de negócio oficiais do SorriMed. O projeto atual é um site institucional de teste para uma clínica odontológica. Dados fictícios podem ser utilizados para desenvolvimento, demonstração e validação, mas não devem ser apresentados como reais fora desse contexto, nem usados para mascarar falhas de execução.

## 1. Acesso e navegação

**RN001** O site é público; não é necessário cadastro ou login para acessar páginas e informações institucionais.

**RN002** A navegação principal deve conter Início, Sobre, Serviços, Profissionais, Convênios e Contato.

**RN003** A navegação deve se adaptar adequadamente a dispositivos móveis, tablets e desktops.

**RN004** Contato, WhatsApp, localização e possibilidade de solicitar atendimento devem ser facilmente encontrados nas áreas relevantes.

**RN005** O WhatsApp deve ter destaque visual adequado e permitir iniciar uma conversa com a clínica.

**RN006** Links e botões internos devem funcionar corretamente e não apontar para páginas inexistentes.

**RN007** O logo ou nome SorriMed deve permitir retornar à página inicial.

**RN008** Em uma página única com seções, os itens de navegação devem levar às respectivas seções, com navegação suave quando apropriado.

**RN009** Links externos, como WhatsApp, e-mail e mapas, devem utilizar mecanismos apropriados para seus destinos.

**RN010** O chat está fora do escopo atual, mas a navegação não deve impedir sua futura inclusão.

## 2. Conteúdo institucional

**RN011** O site deve apresentar a SorriMed de maneira clara e profissional, permitindo compreender quem é a clínica e qual é sua proposta.

**RN012** A seção institucional pode apresentar história, apresentação, objetivo, missão, valores e diferenciais.

**RN013** A Home deve resumir as principais informações da clínica, evitando navegação desnecessária para informações básicas.

**RN014** Informações apresentadas em diferentes partes do site devem ser consistentes entre si.

**RN015** Neste projeto de teste, informações fictícias podem representar profissionais e seus dados; em contexto real, devem ser definidas e autorizadas.

**RN016** O site pode apresentar serviços, atendimento, contato, convênios e localização quando esses dados fizerem parte do conteúdo definido.

**RN017** Imagens e vídeos devem possuir qualidade e proporções adequadas aos diferentes tamanhos de tela.

**RN018** O conteúdo deve usar linguagem profissional, clara e acessível, evitando jargões técnicos desnecessários.

**RN019** Dados fictícios podem preencher informações ainda não fornecidas dentro do contexto de teste, mas não devem criar comportamentos fictícios para esconder ausência ou falha de dados em runtime.

**RN020** Informações sensíveis ou que influenciem decisões clínicas, incluindo resultados e promessas, devem ser apresentadas com cautela e sem garantias indevidas.

## 3. Profissionais

**RN021** O site deve apresentar os profissionais associados à SorriMed de maneira clara e organizada.

**RN022** Cada profissional pode apresentar nome, foto, especialidade e breve descrição profissional.

**RN023** Profissionais fictícios podem ser usados para demonstração; em contexto real, as informações devem ser definidas e autorizadas.

**RN024** A especialidade ou função deve ser identificada claramente quando fizer parte do conteúdo.

**RN025** Profissionais que não façam mais parte da clínica não devem permanecer apresentados como integrantes atuais em uma versão real.

**RN026** A interface deve funcionar adequadamente independentemente da quantidade de profissionais, sem prejudicar organização ou responsividade.

**RN027** A apresentação deve permanecer responsiva e legível em mobile, tablet e desktop.

**RN028** Não devem ser expostas informações pessoais de profissionais que não sejam apropriadas ou autorizadas.

**RN029** A apresentação pode direcionar para contato ou solicitação de atendimento, mas não deve criar agendamento individual próprio.

**RN030** Em contexto real, os dados profissionais devem ser oficiais; neste projeto de teste, dados fictícios podem ser usados para demonstração.

## 4. Serviços

**RN031** O site deve apresentar os principais serviços e tratamentos oferecidos pela SorriMed.

**RN032** Cada serviço pode apresentar nome, descrição, imagem ou elemento visual e informação complementar relevante.

**RN033** Serviços fictícios podem ser usados para demonstração; em contexto real, devem representar serviços efetivamente oferecidos.

**RN034** O conteúdo não deve criar informações clínicas enganosas, preços ou características não definidas.

**RN035** Os serviços devem ser organizados para que o visitante identifique facilmente seu interesse.

**RN036** Um serviço pode ter apresentação mais detalhada quando necessário, sem navegação excessiva.

**RN037** Cada serviço deve oferecer maneira clara de entrar em contato para obter informações ou atendimento.

**RN038** Preços não devem ser apresentados como regra geral, salvo definição explícita para a implementação.

**RN039** O site não deve garantir resultados de tratamentos nem usar alegações enganosas.

## 5. Contato e agendamento

**RN041** O site deve apresentar claramente os principais canais de contato da SorriMed.

**RN042** Deve existir acesso direto ao WhatsApp quando esse canal estiver disponível.

**RN043** O e-mail oficial deve permitir contato direto pelo cliente de e-mail quando aplicável.

**RN044** O telefone oficial, quando disponível, deve permitir chamada direta em dispositivos compatíveis.

**RN045** O visitante deve poder solicitar ou realizar o processo de atendimento/agendamento pelos canais da clínica. A primeira versão não possui sistema próprio de agendamento.

**RN046** O site não deve afirmar disponibilidade de profissionais ou horários não definidos.

**RN047** Somente canais definidos para o projeto devem ser apresentados como oficiais.

**RN048** As informações de contato devem ser acessíveis na Home e na área de Contato.

**RN049** Botões de contato e agendamento devem funcionar em mobile, tablet e desktop.

**RN050** O chat não faz parte do sistema atual e poderá ser desenvolvido futuramente como recurso independente.

## 6. WhatsApp

**RN060** O WhatsApp deve utilizar somente o número oficial definido para a SorriMed; neste projeto de teste, pode ser fictício e exclusivo para demonstração.

**RN061** O link deve iniciar a conversa sem exigir cópia e digitação manual do número.

**RN062** O WhatsApp pode aparecer na Home, Serviços, Contato, menu, navegação e outras áreas relevantes.

**RN063** O WhatsApp pode abrir com mensagem inicial predefinida quando adequado.

**RN064** O WhatsApp pode ser usado para solicitações de informação ou atendimento, cabendo à clínica confirmar atendimento ou agendamento.

**RN065** O site não deve afirmar atendimento 24 horas ou horários fixos não definidos.

**RN066** Se o WhatsApp estiver indisponível, os demais canais devem continuar disponíveis.

**RN067** O botão deve funcionar em diferentes dispositivos e não bloquear ou sobrepor indevidamente outros elementos.

**RN068** O WhatsApp não é chat interno; direciona o visitante ao aplicativo ou serviço web correspondente.

**RN069** Em implementação real, número ainda não definido deve ser tratado como pendente; neste projeto de teste, pode ser fictício para validação.

## 7. Depoimentos, fotos e vídeos

**RN070** O site pode apresentar depoimentos de pacientes.

**RN071** Em contexto real, fotos, vídeos e depoimentos devem possuir autorização adequada; neste projeto, podem ser fictícios.

**RN072** A identificação de pacientes deve respeitar as informações autorizadas para publicação.

**RN073** Fotos de antes e depois podem ser usadas quando fornecidas e autorizadas, sem sugerir garantia de resultado.

**RN074** O conteúdo visual pode estar relacionado à clínica, profissionais, serviços, pacientes ou experiência de atendimento.

**RN075** A Home pode usar carrossel ou slider para múltiplos depoimentos, fotos, vídeos ou conteúdos relacionados.

**RN076** A interface deve funcionar adequadamente independentemente da quantidade de conteúdo.

**RN077** Conteúdos fictícios podem validar a interface; em publicação real, conteúdos de pacientes precisam de autorização.

**RN078** Imagens e vídeos devem ser otimizados para evitar impacto desnecessário no carregamento e desempenho.

**RN079** Conteúdo visual deve ser responsivo em mobile, tablet e desktop, preservando proporções e evitando cortes ou distorções indesejados.

**RN080** Depoimentos, resultados e imagens de tratamentos não devem ser apresentados como garantia.

## 8. Localização

**RN081** O site deve apresentar claramente o endereço da SorriMed.

**RN082** A área de contato deve disponibilizar mapa para facilitar a localização.

**RN083** Endereço ou mapa deve permitir, quando possível, abrir aplicativo de mapas para orientações.

**RN084** Em contexto real, o endereço deve ser exclusivamente o oficial; neste projeto de teste, pode ser fictício.

**RN085** A localização deve ter destaque suficiente na Home para descoberta rápida.

**RN086** Dados fictícios de localização podem ser usados exclusivamente para demonstração neste projeto.

**RN087** O endereço deve ser consistente em todos os locais onde for apresentado.

**RN088** Mapa, endereço e botões devem funcionar em mobile, tablet e desktop.

## 9. Responsividade e comportamento da interface

**RN089** O site deve ser responsivo em smartphones, tablets, notebooks e desktops.

**RN090** A interface deve seguir abordagem mobile-first sem prejudicar telas maiores.

**RN091** A interface deve ser fluida, evitando layouts rígidos que quebrem ou produzam espaços inadequados.

**RN092** Imagens devem ser responsivas e preservar proporção e qualidade adequadas.

**RN093** Botões, links, menus, cards, carrosséis e elementos interativos devem ter dimensões e espaçamentos adequados para toque.

**RN094** A navegação deve ser simples e intuitiva em todos os dispositivos.

**RN095** Textos e conteúdos devem permanecer na área visível, sem rolagem horizontal desnecessária.

**RN096** Animações e transições são permitidas quando contribuírem para experiência elegante e dinâmica, desde que não prejudiquem desempenho, acessibilidade ou usabilidade.

**RN097** Componentes podem reorganizar o layout conforme a tela; elementos lado a lado no desktop podem empilhar no mobile.

**RN098** A interface deve funcionar em orientação retrato e paisagem quando suportadas pelo dispositivo.

**RN099** O projeto deve buscar compatibilidade com os principais navegadores modernos.

**RN100** Identidade visual, espaçamentos, tipografia, botões e componentes devem manter consistência entre tamanhos de tela.

**RN101** A interface deve considerar acessibilidade básica, incluindo contraste, tamanho de texto, áreas clicáveis, foco, teclado e estrutura semântica.

**RN102** Recursos visuais não devem justificar soluções excessivamente pesadas que prejudiquem carregamento ou utilização.

## 10. Chat: futuro e fora do escopo

**RN103** O chat não será implementado na primeira versão.

**RN104** O chat está fora do escopo atual; não deve existir backend, banco de mensagens, interface, integração ou armazenamento de mensagens.

**RN105** A estrutura atual não deve criar impedimentos desnecessários para futura implementação de chat.

**RN106** Não deve ser criado chat fictício ou simulado para aparentar que a funcionalidade existe.

**RN107** Enquanto o chat não existir, WhatsApp e demais canais oficiais permanecem como meios de comunicação.

**RN108** Quando desenvolvido, regras, permissões, armazenamento e comportamento do chat deverão ser definidos em etapa específica.

## 11. Tratamento de erros e situações excepcionais

**RN109** Informação necessária indisponível ou indefinida não deve ser substituída por informação arbitrária ou estimada. Dados fictícios de demonstração previamente definidos são permitidos neste projeto.

**RN110** Se uma seção não possuir conteúdo, deve ser tratada adequadamente sem inventar conteúdo durante a execução para esconder falha.

**RN111** Links inválidos ou quebrados não devem ser apresentados como funcionais.

**RN112** Se um canal estiver indisponível, os demais canais disponíveis devem continuar sendo oferecidos.

**RN113** Falhas em serviços externos, como mapas ou WhatsApp, não devem bloquear desnecessariamente o restante do site.

**RN114** Falhas no carregamento de imagens ou vídeos devem ser tratadas visualmente para evitar espaços quebrados ou layouts desestruturados.

**RN115** Um erro em uma seção não deve bloquear desnecessariamente a navegação nas demais áreas.

**RN116** Mensagens de erro ao usuário devem ser claras e não excessivamente técnicas.

**RN117** Mensagens de erro não devem expor informações técnicas internas ou sensíveis.

**RN118** Dados fictícios previamente definidos podem ser usados no desenvolvimento, mas não gerados dinamicamente em runtime para esconder falhas de dados.

**RN119** Situações não previstas devem ser tratadas de maneira segura e conservadora, sem criar comportamentos de negócio não autorizados.

## 12. Princípios gerais de interpretação

As regras devem ser interpretadas em conjunto. Em conflitos entre estética e usabilidade, riqueza visual e desempenho, ou funcionalidade e acessibilidade, deve-se priorizar uma solução equilibrada, simples e coerente com o objetivo institucional do SorriMed.

Nenhuma regra autoriza automaticamente a criação de funcionalidades fora do escopo.

## 13. Projeto de teste

O SorriMed atual é um projeto de teste. Dados fictícios são permitidos para testar interface, SSR, componentes, responsividade, navegação, estados, integração entre camadas e demonstração do sistema.

Essa permissão não autoriza a geração dinâmica de dados fictícios para ocultar erros de execução.

## 14. Separação entre regra de negócio e implementação

Este documento descreve o que o sistema deve respeitar. Não define nomes de arquivos, bibliotecas, frameworks, estrutura de pastas, implementação de controllers, services, componentes, mecanismo de armazenamento ou implementação interna da API. Esses assuntos pertencem aos documentos técnicos apropriados.
