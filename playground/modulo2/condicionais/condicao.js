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