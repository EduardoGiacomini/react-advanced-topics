# React Context API

Artigo de estudos: [How to write performant react apps with context](https://www.developerway.com/posts/how-to-write-performant-react-apps-with-context).

### Aprendizados

Ao centralizar o estado todo em um componente ancestral, qualquer setState (usando useState ou useReducer) irá forçar
o re-render de toda a árvore. No exemplo do formulário, a cada letra digitada é feito um setState de um dos campos,
forçando o re-render da árvore.

Neste exemplo pequeno não há problema algum nesse approuch, porém, se tivermos algum componente lento nessa árvore,
o mesmo será renderizado desnecessariamente muitas vezes seguidas causando falta de performance.

Ao movermos o estado para um único react context, ganhamos em organização do código já que movemos lógica de estados e
interação com ambientes externos (APIs) para o contexto, separando código de UI de outras lógicas. Mas o problema ainda
persiste.

Ao crirarmos um contexto para cada campo do formulário (cada estado) mudamos completamente o jogo. Isso porque os
componentes da árvore só irão sofre re-render se o estado no qual estiverem fazendo uso mudar. Dessa forma, ao editar
o campo name, outros campos do formulário não sofrem re-render já que não dependem desse estado!!! Excelente.

É importante notar que o botão de salvar depende de todos os estados para enviar os dados do formulário. Logo, este
componente sofre re-render toda vez que qualquer estado se altera.

Interessante também o uso do useReducer ao invés de múltiplos useStates. O useReducer existe justamente para agregar
múltiplos estados em somente um. Tem um funcionamento muito legal pois suas mutações são funções puras, logo, escrever
testes de unidade seria bem fácil! Com certeza uma ótima alternativa para quando estiver usando 3+ useStates!
