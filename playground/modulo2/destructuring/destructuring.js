let cores = ["branco", "azul", "amarelo", "vermelho", "preto"];
let [cor1, cor2, cor3] = cores;
console.log(cor1);
console.log(cor2);
console.log(cor3);

let pessoa = {
    nome: "Moisés",
    idade: "39",
    profissão: "analista de sistemas",
    hobbie: "ler",
    esporte: "ciclismo"
}
let {nome, idade, profissão} = pessoa;

console.log(nome);
console.log(idade);
console.log(profissão);

let destinosIncriveis = ['Marrocos', 'Bariloche', 'Barcelona', 'China', 'Grecia']

let [Bariloche] = destinosIncriveis;
let [China] = destinosIncriveis;

console.log(Bariloche);
console.log(China);