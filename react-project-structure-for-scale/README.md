# React Project Structure for Scale

Artigo de estudos: [React project structure for scale: decomposition, layers and hierarchy](https://www.developerway.com/posts/react-project-structure).

### Proposta

#### Step #1: Decomposition

Podemos pensar uma aplicação react como um monotilo modular/microserviços. Cada
feature tem o seu próprio "bounded context" e funciona como um package. É exportado
apenas a sua tela principal, a feature em si.

![React decomposition](/docs/decomposition.png)

Estrutura de pastas:

```bash
/packages
  /my-feature
    /some-folders-in-feature
    index.ts
    package.json // this is what defines the my-feature package
  /another-feature
    /some-folders-in-feature
    index.ts
    package.json // this is what defines the another-feature package
```

Cada `package.json` se parece com:

```json
{
  "name": "@project/my-feature",
  "main": "index.ts"
}
```

O `main` de cada package é importado como:

```ts
import { Something } from "@project/my-feature";
```

##### Por que usar packages ao invés de simples pastas?

1. Imports mais declarativos.
   Ao invés de:

```ts
// este botão é do ds? ou é da minha feature?
import { Button } from "../../components/button";
// ah, esste text-field com certeza é do ds
import { TextField } from "@/packages/design-system/components/text-field";
```

Podemos usar:

```ts
import { Button } from "@design-system/button";
import { TextField } from "@design-system/text-field";
```

2. Explicit entry points.
Com um pouco de configuração de package.json podemos proibir o uso de imports
profundos `@project/button/some/deep/path` e forçar apenas o uso do que realmente
é exportado pelo módulo ao mundo exterior `@project/button`.

https://nodejs.org/api/packages.html#package-entry-points
https://webpack.js.org/guides/package-exports



- an environment with dozens of loosely connected teams in the same repository working on the same product
- in a fast-paced environment of a small startup with just a few engineers
- or even for one-person projects (yeah, I use it all the time for my personal stuff)

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
