# meli-challenge-nextjs

Este é o código front-end do Desafio Técnico Mercado Libre

Para instalar o projeto:

`npm i`

Para executar o projeto localmente:

`npm run dev`

Para 'buildar' um projeto otimizado em produção, utilize o seguinte comando:

`npm run build`

Para executar localmente o projeto otimizado:

`npm start`

### Este repositório também já contempla o back-end da aplicação, não sendo necessário rodar dois projetos.
Porém para fins de completude do Desafio Técnico, o seguinte repositório com um servidor Node/Express está disponível no seguinte link: https://github.com/fabianommoraes/meli-challenge-node-express


## Observações técnicas

### Cidade de origem do produto

Existe uma discrepância entre os desenhos e a especificação técnica das APIs.
No desenho dos resultados da busca, é possível ver o local de origem do produto (por exemplo: Capital Federal).
Porém o documento da API não comtempla o campo "state".

Inicialmente ao exibir uma busca, a seguinte tela será renderizada:

![Captura de tela de 2024-02-27 20-53-49](https://github.com/fabianommoraes/meli-challenge-nextjs/assets/11391586/8bd0a6e5-34b3-4b39-bb96-07c40da988aa)

Para exibir a cidade do local da compra, pode-ser adicionar o parâmetro `&extraInfo=true` apenas como um exemplo.
**Isto aumenta drasticamente o tempo de carregamento da página**, pois são necessários 4 chamadas a mais na API de produtos.

![Captura de tela de 2024-02-27 20-56-21](https://github.com/fabianommoraes/meli-challenge-nextjs/assets/11391586/426ea8d1-441e-4430-bc23-f41fe3fa98a0)

### Números decimais do preço

A API de produtos retorna valores do tipo `number` no formato `1999.08`. Ao realizar a conversão para `number` conforme a especificação, pode-se perder informações. Exemplo: ao converter `08` para `number` o resultado é `8`.
Sendo assim foi necessário deixar os decimais como `string`.

### Categorias da PDP (página do produto) ou Detalhes do Produto

Também existe uma discrepância entre o desenho e a especificação técnica da API.
As APIs disponibilizadas e as especificações do retorno da API não contemplam as categorias.
Foi adicionado a chamada a API de categorias do Mercado Libre. Isto aumenta um pouco o tempo de carregamento da página pois há uma chamada a mais.

![Captura de tela de 2024-02-27 21-07-55](https://github.com/fabianommoraes/meli-challenge-nextjs/assets/11391586/a13a31c0-1069-400c-9986-6f4d7ddec675)

## Performance
### ISR do Next.js

Para visualizar o ISR em ação, utilize o build em produção.
Os seguintes IDs são gerados em tempo de build do projeto: MLA1362438311, MLA1437406762, MLA903665569, MLA1130295049

![Captura de tela de 2024-02-27 21-14-07](https://github.com/fabianommoraes/meli-challenge-nextjs/assets/11391586/1beb8217-cb35-49ca-a628-3afd5d138186)

### Resultados do Lighthouse
#### Página de busca (Server Side Rendering)
![Captura de tela de 2024-02-27 21-18-43](https://github.com/fabianommoraes/meli-challenge-nextjs/assets/11391586/275cac70-7bee-41e5-81d7-d250dd1271f3)

#### Detalhes do Produto (Server Side Rendering)
![Captura de tela de 2024-02-27 21-17-04](https://github.com/fabianommoraes/meli-challenge-nextjs/assets/11391586/ae15a8b7-09c2-45e2-b531-1a091b2ecc34)

#### Detalhes do Produto (Incremental Static Regeneration) - Disponível para 4 IDs
![Captura de tela de 2024-02-27 21-15-03](https://github.com/fabianommoraes/meli-challenge-nextjs/assets/11391586/f0b31390-f66d-468f-b77b-e071a0d70fc4)


## Testes de Unidade
Para rodar os testes de unidade, utilize o seguinte comando:

`npm run test`

![Captura de tela de 2024-02-27 21-25-53](https://github.com/fabianommoraes/meli-challenge-nextjs/assets/11391586/fb0c1dd5-10a9-4602-bf56-6e2982c2b441)


## Testes E2E
Para rodar os testes de unidade, digite o seguinte comando:

`npx cypress open`

![Captura de tela de 2024-02-27 21-39-18](https://github.com/fabianommoraes/meli-challenge-nextjs/assets/11391586/448a430b-ec89-4cd8-8c16-3eceb0c3798b)

## Acessibilidade e Usabilidade
É possível "realizar uma compra" utilizando a navegação por tab. Foram considerados alguns aspectos de acessibilidade para funcionar melhor com leitores de tela.

![Captura de tela de 2024-02-27 21-44-06](https://github.com/fabianommoraes/meli-challenge-nextjs/assets/11391586/5a95b26e-0f55-4f94-b034-7dd45735d719)



