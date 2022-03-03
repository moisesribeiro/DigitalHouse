let listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//map

let listaNumerosDobro = listaNumeros.map(function(valor, index){
    return valor * 2;
});

//filter

let numerosFiltrados = listaNumeros.filter(function(valor, index){
    return valor > 5;
})

//reduce

let listaNumerosSomados = listaNumeros.reduce(function(resultado, valor){
    return resultado + valor;
})

//forEach

listaNumeros.forEach(function(valor, index){
    console.log("O valor é: " + valor + " e a posição é: " + index);
})

console.log(listaNumerosDobro);
console.log(numerosFiltrados);
console.log(listaNumerosSomados);