//funçao com passagem de parâmetros

function somar (a, b){
    return a + b;
}
console.log (somar (10,20));

//funçao sem a passagem de parâmetros

function subtrair(){
    console.log(10 - 5 + 25);
}
subtrair();

//função declarada

function saudacao(){
    console.log("Bom dia!");
}
saudacao();

//função expressa

let cumprimento = function(){
    console.log("Olá, tudo bem com você!")
}
cumprimento();

//interagindo com variáveis globais e locais na função

let resultado = 0;
console.log('resultado fora da função =', resultado);

function multiplicar(numA, numB){
    let resultado = numA * numB;
    console.log('resultado dentro da função =', resultado);
}
multiplicar(4,2)

