# Introdução a Node.js

Até o momento vimos o javascript, tanto na nossa revisão quanto durante o nivelamento, para desenvolvimento de pequenos sistemas como objetivos pontuais ou apenas em nossas plataformas de testes, mas este não é o seu principal uso. O conteúdo abaixo nos ajudará a compreender um pouco mais sobre o seu poder e como podemos potencializar o seu uso com o Node.js.

__________________________________________________________________________________________________________________________________

# Nesta aula, vamos ver os seguintes tópicos:

 - Introdução a Node.js - entender como diferenciar os componentes que formam um ecossistema Node e explorar suas funcionalidades.
 - NPM - conhecer a utilidade do NPM e como podemos incorporar suas bibliotecas em nossos projetos.
 - Sistema de módulos - compreender como utilizar diferentes módulos (exportar e importar) dentro dos nossos blocos de código.
__________________________________________________________________________________________________________________________________
# NPM Introdução

Pense como seria legal se em todo projeto que você precisasse validar um CPF bastasse instalar um validador e pronto! Só começar a usar!


Bem vindo ao mundo do Node.JS!


O NPM (Node Package Manager) é um gerenciador de pacotes que nos permite incorporar bibliotecas (também conhecidas como dependências) para as mais diversas funcionalidades aos nossos projetos. É uma ferramenta fundamental dentro do Node, pois ela age como um repositório online de pacotes node, nos permitindo escolher, instalar e atualizar pacotes. Por isso, é necessário saber utilizá-lo para encarar um projeto de forma profissional.

__________________________________________________________________________________________________________________________________
# Comandos utilizados no aprendizado

 ```sh
npm -v 
npm init -y
npm install moment --save
npm update
```
__________________________________________________________________________________________________________________________________
# Sistema de módulos

Uma grande parte da programação é como encarar um problema grande e difícil, dividindo-o em pequenos e simples. Os módulos são uma das ferramentas que nos permitirão alcançar a solução!

Vamos conhecê-los!

```sh
São estruturas de código que, juntas, constituem a totalidade de nossa aplicação e configuram sua usabilidade.
```
__________________________________________________________________________________________________________________________________
# Variáveis

Neste módulo, vamos relembrar um pouco sobre as variáveis. Como vimos anteriormente, as variáveis nos permite armazenar dados com múltiplos intuitos.

Em complemento com o que foi visto no nivelamento, vamos ver os tipos distintos de variáveis que temos e como podemos utilizá-las.

Vamos lá!
__________________________________________________________________________________________________________________________________
# Tipo de Dados

Como vimos anteriormente, o JavaScript lida com diferentes tipos de dados que são muito importantes e que vale a pena termos em mente.

Por isso, vamos dedicar um tempo para analisá-los, pois eles serão fundamentais a partir de agora. Cada tipo de dado tem suas próprias características e particularidades que lhes permitem definir um contexto correto dentro do qual ele pode ser utilizado.
__________________________________________________________________________________________________________________________________
# Operadores

Dentro do nivelamento, vimos como adicionar dois valores numéricos, comparar duas cadeias de texto (strings) entre si e juntar uma cadeia de texto com um valor numérico para gerar uma única saída de texto. Agora vamos retomar estes conceitos, pois os operadores nos permitem manipular não apenas o valor das variáveis, mas também realizar operações aritméticas, entre muitas outras coisas.

No vídeo a seguir, vamos ver quais operadores existem e para que cada um deles é utilizado.
__________________________________________________________________________________________________________________________________
# Revisão de Funções

Todos adoram pizza, mas, se tivéssemos que fazer uma pizza todos os dias? Fazer a massa se tornaria um processo muito cansativo e repetitivo. Diríamos provavelmente "como seria bom ter uma máquina para fazer massa de pizza" e tornar o processo de preparação um pouco mais agradável e rápido.

É sob um contexto semelhante que as funções em JavaScript são utilizadas. Uma função é um bloco de código que definimos uma vez e que podemos executar quantas vezes forem necessárias. Embora possa realizar uma ou mais tarefas específicas, é importante notar que SEMPRE devolverá um único valor (a máquina de massa de pizza é apenas para isso, não para fazer café).

As funções no JavaScript nos permitem agrupar um ou vários blocos de código, que podemos reutilizar muitas vezes.

É importante diferenciar dois momentos:

1. O momento de definir o que a função fará;
2. O momento da execução da função.

No primeiro momento, a função e toda sua lógica interna estão armadas. Isto é, onde definimos o que queremos que ela faça. Enquanto o segundo momento se refere a quando a função é utilizada, ou seja, é o momento exato em que precisamos colocá-la em movimento.

Para ver tudo isso mais claramente e para refrescar um pouco o que vimos no nivelamento, compartilhamos o seguinte vídeo, que certamente esclarecerá as suas dúvidas.
__________________________________________________________________________________________________________________________________
# Introdução a Condicionais

O que acontece se a energia acaba em casa e não podemos mais assistir àquele capítulo novo da nossa série no Netflix? Pegamos um livro para ler ou fazemos uma pausa e vamos para a cozinha pegar um lanchinho?

Esses tipos de decisões também podem ser tomadas quando se escreve um código de programação. Para isso, utilizamos mecanismos de controle de fluxo, também chamados de "condicionais", pois nos permitem avaliar as condições e realizar diferentes ações de acordo com o resultado dessa avaliação.
__________________________________________________________________________________________________________________________________
# Arrays
Como podemos agrupar muitas informações em uma única variável? Para isso, temos um tipo de dado um pouco mais estruturado, denominado array, também conhecido como lista.

Sempre que tiver um grupo de informações para guardar, utilize Array. Vamos ao exemplo: para guardar uma lista de hobbies favoritos, podemos criar uma variável hobbiesFavoritos e atribuir um array, separando os itens com vírgulas:

```sh
let hobbiesFavoritos = [‘Leitura’, ‘Games’, ‘Arco e flecha’, ‘Cozinhas’]
```
__________________________________________________________________________________________________________________________________
# Métodos de Arrays

Agora que sabemos que um array é uma coleção de dados ordenados:

Como podemos manipular os dados em um array? E se, por exemplo, quisermos adicionar ou extrair dados para outro array existente?

Os arrays em JS têm muitas funções chamadas métodos, que nos permitem modificar ou reutilizar os valores em um array.
__________________________________________________________________________________________________________________________________
