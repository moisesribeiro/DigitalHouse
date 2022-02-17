let cores = ["Azul", "Preto", "Amarelo", "Branco", "Verde"];
console.log('-------------------------------------------------------------');
console.log('tamanho inicial do array = ' + cores.length);
console.log(cores);
console.log('-------------------------------------------------------------');

//com esse comando incluimos um item no final do array
cores.push('Vermelho');
console.log('-------------------------------------------------------------');
console.log('tamanho modificado do array após incluir nova cor = ' +cores.length);
console.log(cores);
console.log('-------------------------------------------------------------');

//com esse comando removemos o último item do array
let guardarValor = cores.pop();
//cores.pop();*/
console.log('-------------------------------------------------------------');
console.log('tamanho modificado do array após remover última cor = ' +cores.length);
console.log(cores);
console.log('valor guardado antes de ser removido do array = ' +guardarValor);
console.log('-------------------------------------------------------------');

//com esse comando eliminamos o primeiro item do array
 let removerPrimeiroValor = cores.shift();
 console.log('-------------------------------------------------------------');
console.log('tamanho modificado do array após remover primeira cor = ' +cores.length);
console.log(cores);
console.log('-------------------------------------------------------------');

//adicionar um ou mais elemento no inicio do array
cores.unshift('Azul', 'Cinza');
console.log('-------------------------------------------------------------');
console.log('tamanho modificado do array após incluir mais cores = ' +cores.length);
console.log(cores);
console.log('-------------------------------------------------------------');

//juntar os valores em um array
let separadosPorVirgula = cores.join(',');
console.log('-------------------------------------------------------------');
console.log('unindo as cores com uma vírgula');
console.log(separadosPorVirgula);
console.log('-------------------------------------------------------------');

//procurar pela posição inicial um elemento no array por um valor explícito e retornar a posição
let posição = cores.indexOf('Preto');
console.log('-------------------------------------------------------------');
console.log(cores);
console.log('retornando a posição do elemento ' + posição + ' do array = ' + cores[2]);
console.log('-------------------------------------------------------------');

//procurar pela posição final um elemento no array por um valor explícito e retornar a posição
let posiçãoFinal = cores.lastIndexOf('Verde');
console.log('-------------------------------------------------------------');
console.log(cores);
console.log('retornando a posição do elemento ' + posiçãoFinal + ' do array = ' + cores[5]);
console.log('-------------------------------------------------------------');

//procurar um elemento no array e retornar um valor booleano
let procurar = cores.includes('Verde');
console.log('-------------------------------------------------------------');
console.log(cores);
console.log('retornando se o elemento procurado existe no array = ' + procurar);
console.log('-------------------------------------------------------------');
