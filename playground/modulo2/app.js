//console.log("Testanto o retorno do endpoint!")

/*
    importando um módulo nativo do node
*/

const fs = require('fs');

let dados  = fs.readFileSync(__dirname + '/dados.txt', 'utf8');

console.log(dados);

/*
    importando um módulo instalado
*/

const moment = require('moment');

let data = moment().format('MMM do YY')

console.log(data);

/* 
    importando um módulo criado dentro do
*/

const concessionariaVeiculos = require('./concessionariaVeiculos');

console.log(concessionariaVeiculos);