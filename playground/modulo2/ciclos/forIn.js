let livro = {
    nome: "Examinando as Escrituras",
    autor: "Charles Swindoll",
    ano: "2019",
    edicao: "1"
}

//forIn

for(let prop in livro){
    console.log(prop + ": " + livro[prop]);
}

//forOf

let musicos = ['Jefferson', 'Robson', 'Cido'];

for(let musico of musicos){
    console.log(musico);
}





