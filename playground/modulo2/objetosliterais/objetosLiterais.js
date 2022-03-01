//estrutura de um objeto literal em Javascript

//let cidade = {
//   nome: "Amparo",
//    estado: "São Paulo",
//    pais: "Brasil",
//    prefeito: "Carlos Alberto",
//    populacao: 75.000
//};

//console.log(cidade);

//incluindo uma função dentro de um objeto literal

let cidadeComFuncao = {
    nome: "Amparo",
    estado: "São Paulo",
    pais: "Brasil",
    prefeito: "Carlos Alberto",
    populacao: 75.000,
    visitar: function(){
        return 'Venha nos fazer uma visíta e se encantar com as nossas atrações turísticas.\n' +  
        'A cidade de ' + this.nome + ' espera por vocês!';
    }
}

console.log(cidadeComFuncao.visitar());

//um jeito de declarar os objetos literais

let carro = {
    marca: 'Fiat',
    modelo: 'Uno'
};

let carro1 = {
    marca: 'Fiat',
    modelo: 'Palio'
};

let carro2 = {
    marca: 'Fiat',
    modelo: 'Toro'
};

console.log(carro)
console.log(carro1)
console.log(carro2)

//um jeito de declarar os objetos literais utilizando um metodo construtor

function Carro(valorMarca, valorModelo){
    this.marca = valorMarca ;
    this.modelo = valorModelo;
}

console.log(new Carro("Toyota", "Corolla"));