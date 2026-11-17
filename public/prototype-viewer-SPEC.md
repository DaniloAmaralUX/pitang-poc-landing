# Exemplo de bicicletas

- **ID:** `pitang-bikes-demo`
- **Fluxos:** 6

## 01. Início (`home`)

O primeiro contato com o produto.

- **Experiência atual:**
  - Página inicial atual, no topo
  - Página inicial atual, após rolar

### Versão 1: Vitrine
- **Proposta:** Apresente o produto primeiro: um vídeo em destaque, seguido de um carrossel de bicicletas. A imagem apresenta a proposta antes do texto.
- **Personas:** Atleta, Ciclista de fim de semana
- **Problemas que resolve:**
  - A página atual começa com uma promoção, sem destacar a bicicleta
  - É preciso passar por três etapas para ver os modelos
- **Experimente:**
  - Deslize o carrossel de modelos
  - Toque em uma bicicleta para abrir os detalhes
- **Animação:** O carrossel se alinha ao encerrar a rolagem. O conteúdo sobe 6 px e aparece em 260 ms, uma vez por visita.
- **Pontos de atenção:** Um vídeo pesado pode aumentar o tempo de carregamento na rede móvel.

### Versão 2: Comunidade
- **Proposta:** Comece pela experiência de pedalar: um mural de pedais, rotas e eventos, com produtos inseridos quando fizerem sentido.
- **Personas:** Ciclista de fim de semana, Explorador de trilhas
- **Problemas que resolve:**
  - Faltam motivos para abrir o aplicativo entre uma compra e outra
  - A comunidade está em outras plataformas
- **Experimente:**
  - Experimente os filtros
  - Toque no produto exibido no mural
- **Animação:** Os filtros mudam de estado em 150 ms. A rolagem não tem animações extras para facilitar a leitura.
- **Pontos de atenção:** Precisa de novos pedais e histórias com frequência para continuar relevante.

### Versão 3: Encontre sua bicicleta
- **Proposta:** Comece com uma pergunta: três respostas ajudam a indicar duas bicicletas adequadas ao seu jeito de pedalar.
- **Personas:** Primeira grande compra, Ciclista de fim de semana
- **Problemas que resolve:**
  - Quem compra pela primeira vez não sabe por onde começar
  - Os nomes dos modelos não ajudam quem está começando
- **Experimente:**
  - Escolha uma resposta e toque em Avançar
  - Confira as duas sugestões
- **Animação:** As perguntas mudam com uma transição de 200 ms. O indicador destaca a etapa atual.
- **Pontos de atenção:** Acrescenta uma etapa antes dos modelos, que ciclistas experientes podem preferir pular.

## 02. Página da bicicleta (`bike`)

O momento de escolher.

- **Experiência atual:**
  - Página atual do produto

### Versão 1: Galeria em destaque
- **Proposta:** Uma página centrada na galeria: imagens grandes, escolha de cor e uma ação principal fixa na parte inferior.
- **Personas:** Ciclista de fim de semana, Atleta
- **Problemas que resolve:**
  - As imagens são pequenas e o preço exige rolagem
  - A escolha de cor fica escondida em uma lista
- **Experimente:**
  - Deslize a galeria
  - Escolha uma cor
  - Toque no botão fixo na parte inferior
- **Animação:** Os indicadores acompanham a imagem atual. A cor escolhida recebe um contorno em 160 ms.
- **Pontos de atenção:** A ficha técnica fica mais abaixo na página.

### Versão 2: Ficha técnica
- **Proposta:** Uma página para comparar: abas de visão geral, geometria e especificações, com seleção de modelos para comparação.
- **Personas:** Atleta
- **Problemas que resolve:**
  - A geometria só está disponível em PDF
  - Não é possível comparar dois quadros lado a lado
- **Experimente:**
  - Alterne entre as abas
  - Ative e desative Comparar
- **Animação:** O conteúdo muda sem deslocamento. Apenas o indicador da aba desliza em 180 ms.
- **Pontos de atenção:** A quantidade de informações pode dificultar a primeira compra.

### Versão 3: História da bicicleta
- **Proposta:** Apresente a bicicleta por uma história: onde pedalar, por que foi construída assim e para quem ela é indicada, antes do preço.
- **Personas:** Explorador de trilhas, Primeira grande compra
- **Problemas que resolve:**
  - As páginas descrevem a bicicleta, mas não explicam seus usos
  - Falta mostrar como é pedalar antes da compra
- **Experimente:**
  - Role para acompanhar a história
  - Observe o botão fixo aparecer após o primeiro capítulo
- **Animação:** O botão sobe em 220 ms após o primeiro capítulo e permanece visível.
- **Pontos de atenção:** A página fica mais longa para quem já sabe o que procura.

## 03. Monte sua bicicleta (`build`)

Escolha de componentes com clareza.

- **Experiência atual:**
  - Configurador atual

### Versão 1: Passo a passo
- **Proposta:** Monte a bicicleta em quatro etapas, com uma decisão por tela e o total sempre visível.
- **Personas:** Primeira grande compra, Ciclista de fim de semana
- **Problemas que resolve:**
  - Hoje, todas as opções ficam em uma página longa
  - O total só aparece ao finalizar a compra
- **Experimente:**
  - Escolha uma opção e toque em Avançar
  - Observe o indicador de etapas e o total
- **Animação:** As etapas mudam em 200 ms. O indicador da opção escolhida aparece em 180 ms.
- **Pontos de atenção:** São quatro telas para quem talvez prefira configurar tudo de uma vez.

### Versão 2: Visualização ao vivo
- **Proposta:** Configure olhando a bicicleta: uma visualização grande com opções em um painel que pode ser aberto e fechado.
- **Personas:** Atleta, Ciclista de fim de semana
- **Problemas que resolve:**
  - As opções mudam, mas a imagem continua igual
  - Não é possível visualizar a cor no quadro
- **Experimente:**
  - Toque em Opções para abrir o painel
  - Escolha um grupo de opções e feche o painel
- **Animação:** O painel de opções sobe em 420 ms, sobre a tela escurecida.
- **Pontos de atenção:** Uma visualização 3D interativa aumenta o esforço de desenvolvimento e o carregamento.

### Versão 3: Configurações prontas
- **Proposta:** Comece por uma de três configurações e ajuste os componentes conforme sua preferência.
- **Personas:** Primeira grande compra, Explorador de trilhas
- **Problemas que resolve:**
  - Há escolhas demais logo no início
  - Falta orientação sobre componentes compatíveis
- **Experimente:**
  - Escolha uma configuração
  - Toque em Personalizar para ajustar
- **Animação:** A configuração escolhida recebe um contorno em 160 ms. O restante permanece estável.
- **Pontos de atenção:** As configurações orientam a escolha e precisam ser selecionadas com cuidado.

## 04. Finalizar compra (`checkout`)

Pagamento sem surpresas.

- **Experiência atual:**
  - Compra atual, primeira etapa
  - Compra atual, pagamento

### Versão 1: Página única
- **Proposta:** Carrinho, entrega e pagamento em uma única página, com o valor total em destaque acima do botão.
- **Personas:** Atleta, Ciclista de fim de semana
- **Problemas que resolve:**
  - A finalização da compra ocupa cinco páginas
  - O frete só aparece na última etapa
- **Experimente:**
  - Escolha uma opção de entrega
  - Confirme o pedido de demonstração
- **Animação:** As escolhas recebem um contorno em 160 ms. A confirmação é o único destaque adicional.
- **Pontos de atenção:** A página fica longa em telas pequenas.

### Versão 2: Confirme o tamanho
- **Proposta:** Antes de pagar, confira o tamanho: duas medidas ajudam a orientar a escolha.
- **Personas:** Primeira grande compra
- **Problemas que resolve:**
  - Trocas por tamanho incorreto geram custos
  - As tabelas pressupõem que a pessoa saiba medir a altura entrepernas
- **Experimente:**
  - Ajuste os dois controles
  - Confira a indicação e continue
- **Animação:** A indicação aparece em 200 ms após ajustar as duas medidas.
- **Pontos de atenção:** Acrescenta uma etapa em um momento decisivo da compra.

### Versão 3: Pagamento parcelado
- **Proposta:** Mostre as formas de pagamento lado a lado, cada uma com o valor total, para deixar claro o custo do parcelamento.
- **Personas:** Primeira grande compra, Ciclista de fim de semana
- **Problemas que resolve:**
  - As opções de parcelamento ficam em um link pouco visível
  - O valor mensal aparece sem o custo total
- **Experimente:**
  - Escolha um plano
  - Abra as condições completas
- **Animação:** O plano escolhido recebe um contorno em 160 ms. As condições abrem em um painel.
- **Pontos de atenção:** Exibir o custo total pode reduzir o apelo do parcelamento, mas ajuda a decidir com clareza.

## 05. Minha garagem (`garage`)

A experiência após a entrega.

- **Experiência atual:**
  - Página atual da conta

### Versão 1: Identificação da bicicleta
- **Proposta:** Após a compra, reúna número de série, garantia e as principais ações para cuidar da bicicleta.
- **Personas:** Ciclista de fim de semana, Atleta
- **Problemas que resolve:**
  - A garantia fica perdida em um e-mail
  - Faltam motivos para voltar após a entrega
- **Experimente:**
  - Toque em uma ação rápida
- **Animação:** Os botões respondem ao toque. O restante permanece estável para facilitar uma consulta rápida.
- **Pontos de atenção:** Precisa vincular números de série e garantias às contas.

### Versão 2: Histórico de manutenção
- **Proposta:** Uma linha do tempo das manutenções, com a próxima revisão sugerida no topo.
- **Personas:** Ciclista de fim de semana, Explorador de trilhas
- **Problemas que resolve:**
  - É fácil esquecer a data da última revisão
  - Quem compra uma bicicleta usada não consegue consultar seu histórico
- **Experimente:**
  - Agende a revisão sugerida
- **Animação:** Apenas os botões respondem ao toque. O histórico permanece estável.
- **Pontos de atenção:** Depende da qualidade dos registros feitos pelas oficinas.

### Versão 3: Estatísticas de uso
- **Proposta:** Acompanhe distância, tempo e conquistas com indicadores simples de uso.
- **Personas:** Atleta, Explorador de trilhas
- **Problemas que resolve:**
  - Os pedais são registrados em outros aplicativos
  - Faltam motivos para abrir o aplicativo entre os pedais
- **Experimente:**
  - Alterne o período
- **Animação:** As barras mudam de altura em 300 ms ao trocar o período.
- **Pontos de atenção:** Disputa atenção com aplicativos de atividade física e precisa manter a simplicidade.

## 06. Pedais (`rides`)

Um motivo para voltar.

- **Experiência atual:**
  - Página atual de eventos

### Versão 1: Pedais em grupo
- **Proposta:** Encontre um pedal próximo e confirme sua participação. A comunidade se reúne no próprio aplicativo.
- **Personas:** Ciclista de fim de semana, Primeira grande compra
- **Problemas que resolve:**
  - Os eventos aparecem apenas como notícias
  - Não há como confirmar presença
- **Experimente:**
  - Participe de um pedal e depois cancele sua participação
- **Animação:** O botão Participar muda de texto e cor em 150 ms. Uma mensagem confirma a ação.
- **Pontos de atenção:** Precisa de organizadores locais para ter eventos além das grandes cidades.

### Versão 2: Desafios
- **Proposta:** Desafios mensais com metas claras oferecem novos motivos para pedalar e voltar ao aplicativo.
- **Personas:** Atleta, Explorador de trilhas
- **Problemas que resolve:**
  - O relacionamento se resume a cupons de desconto
  - Falta reconhecer as conquistas de quem pedala
- **Experimente:**
  - Aceite um desafio
- **Animação:** O indicador de progresso preenche em 600 ms ao abrir a tela e depois permanece estável.
- **Pontos de atenção:** Os desafios precisam ter um propósito claro para quem pedala.

### Versão 3: Histórias
- **Proposta:** Histórias curtas de ciclistas e oficinas, em sequência vertical, com um encerramento claro.
- **Personas:** Explorador de trilhas, Ciclista de fim de semana
- **Problemas que resolve:**
  - Os vídeos da marca ficam em outra plataforma
  - Falta apresentar as pessoas por trás das bicicletas
- **Experimente:**
  - Toque no lado direito para avançar
  - Avance até a tela final
- **Animação:** Os indicadores acompanham os toques. A tela final aparece em 200 ms.
- **Pontos de atenção:** Produzir vídeos novos exige uma equipe dedicada.

## Personas

- **Atleta** (`racer` · Em busca de desempenho): Ficha técnica, peso, rigidez e uma compra rápida.
- **Ciclista de fim de semana** (`weekend` · Pedais de domingo): Orientação de tamanho, comunidade e manutenção simples.
- **Primeira grande compra** (`first` · Hora de trocar de bicicleta): Segurança, orientação de tamanho, preço total claro e troca simples.
- **Explorador de trilhas** (`explorer` · Fins de semana fora do asfalto): Sugestões de rotas, durabilidade e acessórios adequados.
