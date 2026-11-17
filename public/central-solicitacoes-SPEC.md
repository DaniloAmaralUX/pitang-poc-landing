# Central de Solicitações Internas

- **ID:** `central-solicitacoes`
- **Fluxos:** 4

## 01. Minhas solicitações (`pedidos`)

Busca por título/ID, filtro por status e acompanhamento em tempo real.

- **Experiência atual:**
  - Pedidos enviados por mensagem direta no Teams ou Slack sem padrão.
  - Colaborador não sabe se alguém leu ou se falta alguma informação.

### Versão 1: Acompanhamento e busca
- **Proposta:** Lista ordenada do mais recente ao mais antigo, busca por título/ID, filtro por status e alerta imediato de esclarecimentos pendentes.
- **Personas:** Marina Costa, Rafael Mendes
- **Problemas que resolve:**
  - RF01: Alterna entre Colaborador (vê seus próprios pedidos) e Responsável (vê a fila completa).
  - RF03: Busca por título ou código SOL-xxx, filtra pelos 5 status e permite limpar busca e filtro com 1 clique.
  - Destaca automaticamente quando há pedido aguardando resposta do colaborador.
- **Experimente:**
  - Alterne entre Marina, Lucas e Responsável no topo para ver o recorte de pedidos mudar
  - Busque por 'SOL-108' ou filtre por 'Aguardando informações' e depois clique em Limpar filtros
  - Clique em qualquer pedido para abrir o detalhe completo
- **Animação:** Entrada escalonada (.sk-in) nos cards e feedback tátil em todos os controles, respeitando preferência de movimento reduzido.
- **Pontos de atenção:** Persistência local em localStorage; inclui botão no rodapé para restaurar os 8 pedidos originais a qualquer momento.

## 02. Novo pedido (`novo`)

Formulário validado (tipo, título 5–80, item 3–80, justificativa 20–500) e falha recuperável.

- **Experiência atual:**
  - Pedidos chegam sem justificativa ou sem especificar o equipamento/ferramenta.
  - Quando a rede oscila, a pessoa perde o texto ou envia duplicado.

### Versão 1: Abertura com validação
- **Proposta:** Validação em tempo real dos limites obrigatórios, prevenção de envio duplicado e simulação de erro recuperável sem perda de preenchimento.
- **Personas:** Marina Costa
- **Problemas que resolve:**
  - RF02: Valida Tipo obrigatório, Título (5 a 80 caracteres), Item desejado (3 a 80 caracteres) e Justificativa (20 a 500 caracteres).
  - Gera código único (SOL-xxx), data/hora e status inicial Novo, redirecionando direto ao detalhe.
  - Inclui modo identificado de simular falha de envio para comprovar recuperação sem perder dados nem duplicar.
- **Experimente:**
  - Tente enviar com título curto ou justificativa menor que 20 caracteres para ver a orientação de correção
  - Ative 'Simular falha no próximo envio', envie e depois tente novamente para comprovar que os dados são preservados
  - Conclua o envio e confira o novo pedido criado com status Novo
- **Animação:** Feedback visual imediato durante o envio (botão desabilitado para evitar clique duplo).
- **Pontos de atenção:** Qualquer perfil pode testar o formulário; quando enviado no perfil Responsável, o pedido é registrado em nome de Marina Costa.

## 03. Detalhe do pedido (`detalhe`)

Dados completos, histórico auditável e ações por perfil e status.

- **Experiência atual:**
  - Perguntas de esclarecimento ficam perdidas em conversas paralelas.
  - Decisões de aprovação ou recusa não ficam registradas junto ao pedido.

### Versão 1: Histórico e decisão
- **Proposta:** Exibe dados completos, linha do tempo auditável e somente as ações permitidas para a combinação entre perfil ativo e status atual.
- **Personas:** Marina Costa, Rafael Mendes
- **Problemas que resolve:**
  - RF04: Mostra solicitante, item, justificativa, status e histórico completo com autor e data.
  - RF05: Máquina de estados estrita: Novo → Em análise → Aguardando informações ↔ Em análise → Aprovado/Recusado.
  - Bloqueia pergunta, resposta ou justificativa de decisão em branco.
- **Experimente:**
  - No pedido SOL-108 (Aguardando informações), responda como Marina e veja o status voltar para Em análise
  - Troque o perfil para Responsável e aprove ou recuse o pedido informando a justificativa da decisão
  - Verifique que pedidos Aprovados ou Recusados encerram o fluxo e não exibem novas ações
- **Animação:** Atualização imediata da linha do tempo (.sk-tl) e transições suaves ao registrar ação.
- **Pontos de atenção:** Ações exclusivas do responsável ficam ocultas para o colaborador e vice-versa, conforme regra RF05.

## 04. Fila de atendimento (`atendimento`)

Visão completa para o responsável priorizar, analisar e decidir.

- **Experiência atual:**
  - Quem atende precisa caçar mensagens em vários canais e cobrar contexto.
  - Falta visibilidade de quais pedidos estão parados aguardando decisão.

### Versão 1: Triagem e fila
- **Proposta:** Painel operacional para quem atende identificar imediatamente quais pedidos exigem ação (Novos e Em análise) versus aguardando colaborador ou concluídos.
- **Personas:** Rafael Mendes
- **Problemas que resolve:**
  - Responde direto à pergunta de produto: 'Para quem atende: quais pedidos precisam da minha ação?'
  - Permite iniciar análise com 1 clique nos pedidos Novos ou abrir direto o detalhe para decidir.
- **Experimente:**
  - Veja os indicadores de Novos, Em análise e Aguardando informações
  - Clique em 'Assumir e analisar' em um pedido Novo para iniciar o atendimento imediatamente
- **Animação:** Transição suave de contadores e lista priorizada.
- **Pontos de atenção:** Se acessada no perfil Colaborador, oferece atalho de 1 clique para alternar para o perfil Responsável.

## Personas

- **Marina Costa** (`colaborador` · Colaboradora): Abrir pedido rápido, ver status atualizado e responder esclarecimentos no próprio pedido.
- **Rafael Mendes** (`atendente` · Responsável pelo atendimento): Visualizar a fila completa, pedir esclarecimento estruturado e registrar aprovação ou recusa.
