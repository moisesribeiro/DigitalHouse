let frutas = ["maça","banana","laranja"];
let frutasComplementar = ["morango","pêra","mamão"];
let listaFrutas = [...frutas,...frutasComplementar];

let pessoa = {
    nome: "Moisés",
    idade: 39,
}
let infoPessoal = {
    tel: "(19) 9999-9999",
    endereco: "Rua Bernardino",
    cidade: "Jaguariúna",
    ...pessoa
}

function alfabeto(...letras){
    console.log(letras);
    console.log(letras[2]);
}
alfabeto("a", "b", "c");

console.log(listaFrutas);
console.log(infoPessoal);