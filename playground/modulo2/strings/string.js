let texto = "Serei um programador Js";

console.log(texto.length);

//indexOf
console.log(texto.indexOf("Js"));

//slice
console.log(texto.slice(21,23));

//trim
console.log(texto.trim());

//split
console.log(texto.split(''));

//replace
let textoModificado = texto.replace('Js', 'Phyton'); 
console.log(textoModificado);
console.log(texto);

//metodo ou função num objeto literal

let tenista = {
    nome: 'Rafael',
    sobrenome: 'Nadal',
    cumprimentar: function(){
        return 'Bom dia, meu nome é ' + this.nome + " " + this.sobrenome;
    }
}
console.log(tenista.cumprimentar());

let frase = "Vamos estudar programação? Você gosta de programação? Estude Programação!";
var novaFrase = frase.replace(/programação/gi, "JavaScript");
console.log(frase);
console.log(novaFrase);

let repetirString = 'JavaScript';
let resultado = repetirString.replace('JavaScript', 'Vamos substituir o texto e adicionar a palavra $&');
console.log(resultado);

let palavra = "Vamos estudar programação?";
let novaPalavra = palavra.replace("programação", "JavaScript");
console.log(palavra);
console.log(novaPalavra);

var expressao = /(\w+)\s(\w+)\s(\w+)/;
var nomes = 'Pedro Paulo Maria';
var novosNomes = nomes.replace(expressao, '$3, $1 e $2 ');
console.log(novosNomes); 

var strRG = "999999999";
var stringRGResultado = strRG.replace(/(\d{2})(\d{3})(\d{3})(\d{1})/,"$1.$2.$3-$4");
console.log("O RG informado é: " + stringRGResultado);

var valorCompra = "O valor da compra é de R$ 500.00." 
var valorComDesconto = valorCompra.replace(/(\d+).(\d+)/, function aplicarDesconto(valor) {
    let valordaCompra = parseFloat(valor);
    let desconto = 0;
    desconto = valordaCompra*0.1;
    return ((valordaCompra-desconto).toFixed(2) +
     ". Seu desconto foi de " + desconto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
    });
console.log(valorComDesconto);

var strLista = "Lista de compras: arroz, feijão, açúcar, óleo, Carne";
var listaSubstituicao = {
  arroz:"café",
  feijão:"macarrão",
  óleo:"vinagre",
  Carne:"ovos"
};
alteracaoLista = strLista.replace(/arroz|feijão|óleo|carne/gi, function(item){
    let it = listaSubstituicao[item];
    let itemLista = it.replace(/(?:^|\s)\S/g, function(elemento) { return elemento.toUpperCase(); });
    return itemLista;
});
console.log(alteracaoLista);

