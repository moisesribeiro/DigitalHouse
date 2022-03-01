const somar = (numA, numB) => numA + numB;

const calculadora = (numA, numB, operacao) => operacao (numA, numB);

//retorno com função expressa, criada
console.log(calculadora (1, 9, somar));

//retorno com função anônima, criada dentro da saida
console.log(calculadora (1, 9, (numA, numB) => numA - numB));

//callback anônima

setTimeout(function(){
    console.log('Meu callback!');
}, 1000)

//callback definida

let callback = () => console.log('Hello meu callback!');
setTimeout (callback, 2000);


// let PI = 3.14;

// const calculateArea = (radius) => radius * radius * PI;

// calculateArea(10); // returns 314.0

let PI = 3.14;

const calculateArea = (radius, pi) => radius * radius * pi;

calculateArea(10, PI); // returns 314.0


const aplicar = (num, dobro) => num * 2;

calculateArea(10, PI); // returns 314.0

// Exercios do Playgrond

//Exercicio 01
function dobro(num) {
    return num * 2;
  }
  function triplo(num) {
    return num * 3;
  }
  
  function aplicar(num, operacao){
      return operacao(num)
  }

//Exercicio 02
const somar = (numeroA, numeroB) => numeroA + numeroB
const subtrair = (numeroA, numeroB) => numeroA - numeroB
const multiplicar = (numeroA, numeroB) => numeroA * numeroB
const dividir = (numeroA, numeroB) => numeroA / numeroB

let calculadora = (numeroA, numeroB, operacao) => operacao(numeroA, numeroB);

//Exercicio 03
function adicionarHttp(url) {
    return 'http://' + url
}

function processar(array, adicionarHttp){
    for(var i=0; i < array.length; i++){
        array[i] = adicionarHttp(array[i])
    }
    return array
}