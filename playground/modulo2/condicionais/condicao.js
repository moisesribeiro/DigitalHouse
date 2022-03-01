//condicional utilizando if, else if, else

let idade = 17;
let acesso = '';

if(idade < 16){
    acesso = 'proibido';
}else if(idade >= 16 && idade <= 18){
    acesso = 'permitido só acompanhado de um maior de idade';
}else{
    acesso = 'permitido';
}
console.log(acesso);

//condicional do exercício 1 do playground
let dado = true;

if(dado == true){
    console.log('É verdadeiro!');
}else{
    console.log('É falso!');
}

//condicional do exercício 2 do playground
let linguagem = "javascript"

if(linguagem === "javascript"){
    console.log('Estou aprendendo');
}else{
    console.log('Vou aprender mais pra frente');
}

//if ternário, sintaxe e funcionamento

let mesAtual = "maio";
let ferias = mesAtual == "janeiro"? "Período aquisito de férias, pode programar!":"Aguardar perído aquisitivo de férias!";
console.log(ferias);

let diaSemana = "segunda";
switch(diaSemana){
    case"segunda":
        console.log("Dia de futebol");
        break;
    case"terca":
        console.log("Dia de aula de violino");
        break;
    case"quarta":
        console.log("Dia de aula de inlgês");
        break;
    default:
        console.log("Dia de descanso!")
}

let dia = "sabado";

function fimDeSemana(dia){
	switch(dia){
    	case"segunda":
        	console.log("você tem aulas!");
        break;
    	case"quarta":
        	console.log("você tem aulas!");
        break;
    	case"sexta":
       	 	console.log("você tem aulas!");
        break;
    default:
        console.log("você não tem aulas")
}
}

fimDeSemana(dia)

