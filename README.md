# EBAC Games - Redux

Este projeto é uma aplicação React de e-commerce de jogos (EBAC Games), focada em demonstrar a utilização de conceitos modernos do **React**, **Redux Toolkit** e **RTK Query** para gerenciamento de estado e chamadas de API.

## Conceitos do React e Bibliotecas Utilizadas

Abaixo estão explicados os principais conceitos e ferramentas aplicados neste projeto:

### 1. Componentização (React)
A interface de usuário foi dividida em pequenos pedaços reutilizáveis e independentes chamados de componentes (ex: `Header`, `Produto`, `Produtos` (Lista)). 
- **Props**: Utilizamos propriedades (`props`) para passar dados de componentes pais para componentes filhos (ex: repassando um objeto `game` da listagem para o componente `Produto`).

### 2. Gerenciamento de Estado Global (Redux Toolkit)
Ao invés de passar dados (`props` ou `state`) através de vários níveis de componentes, usamos o **Redux Toolkit** para criar uma loja (Store) central.
- **Store (`store/index.ts`)**: Onde o estado global da aplicação vive. Abriga tanto o estado do carrinho quanto os reducers da API.
- **Slice (`store/reducers/carrinho.ts`)**: Uma coleção de lógica do Redux e ações de um único recurso (o "carrinho" de compras). Ele define o estado inicial (uma lista de jogos `itens: Game[]`) e os modificadores ou *reducers* (como `adicionarAoCarrinho`).
- **Hooks do React-Redux (`useSelector`, `useDispatch`)**: 
  - `useSelector`: Permite que os componentes (como o `Header`) leiam e reajam a mudanças em informações específicas da Store (ex: a quantidade ou quais itens estão no carrinho).
  - `useDispatch`: Usado para despachar ações (como o clique no botão "Adicionar ao carrinho" dentro de `Produto`) que indicam à Store que ela deve atualizar o estado usando os redutores.

### 3. Data Fetching e Caching (RTK Query)
A aplicação faz chamadas à uma API REST simulada (`json-server`) para buscar a listagem de jogos na página. 
- **`createApi` (`api.ts`)**: Utilizamos o utilitário do RTK Query em vez da forma tradicional do React com `useEffect` e `state` locais para buscar dados. Ele abstrai todo o processo de *fetching*, oferecendo estados nativos como "carregando" (`isLoading`) ou "dados" (`data`).
- **`useGetJogosQuery`**: Um hook gerado automaticamente pela API (`services/api.ts`) que busca nossos produtos e retorna os dados prontos para uso no componente `Produtos.tsx`.

### 4. Styled Components (CSS-in-JS)
Em vez de depender de arquivos `.css` externos ou Modules, toda a renderização visual e estilo é controlada via Javascript através da biblioteca `styled-components`.
- **Estilos Globais**: Garantimos um reset customizado (`createGlobalStyle` em `styles.ts`) que atinge toda a hierarquia de forma transversal (cores padrão, formatações de fonte, margens etc.).
- **Componentes Estilizados**: (Ex: `<S.Produto>`, `<S.BtnComprar>`) Onde misturamos tags HTML encapsuladas com os visuais da interface sem sujar o DOM com infinitas classes.

### 5. TypeScript
Todo o projeto foi construído utilizando TypeScript. Ele garante o máximo de previsibilidade e auto-complemento de código adicionando **Tipos e Interfaces** (por exemplo o tipo `export type Game`, ou o tipo da própria `Store` com o `RootState`). Isso ajuda a prevenir a maioria dos erros de tempo de execução como propriedades não existentes (`any` e `undefined`). 

## Como Rodar o Projeto

1. Instale as dependências com `npm install`.
2. Em um terminal, starte a Fake API (db.json): `npx json-server db.json --port 4000`.
3. Em outro terminal rode a aplicação: `npm start`.
