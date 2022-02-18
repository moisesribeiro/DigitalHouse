let pessoa = {
    nome:"Moisés",
    idade: 39,
    peso: 78.5
}
let json = JSON.stringify(pessoa);
console.log(json);

let novoObjeto = JSON.parse(json);
console.log(novoObjeto);