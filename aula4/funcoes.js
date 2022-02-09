/*
function soma(){
    console.log(1 + 171)
};
soma()


function soma(num1, num2){
    console.log(num1 + num2)
};
soma(1, 171)



function soma(num1, num2){
    const total = num1 + num2;
    console.log(total)
    return total;
};

soma(1,171)
**/
function podeVotar(idade){
    if(idade >= 16 && idade < 18){
     return ('Você tem o voto facultativo!')
    }
    else if(idade < 16){
        return ('Você não tem idade mínima para votar!')
       }
       else{
       return('Você tem a obrigação de votar!')
    }
}
console.log(18, idade)
