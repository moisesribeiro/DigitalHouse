const filmes = require('./novos-filmes')
console.log('___________________________\n')
console.log('Antes de adicinar filmes!')
console.log('___________________________\n')
console.log(filmes)
/*console.log(filmes[0])*/
/*console.log(require('./series'))*/
console.log('___________________________\n')
console.log('Depois de adicinar filmes!')
console.log('___________________________\n')
let addFilmes = filmes.push('Transformers', 'Eu, eu mesmo e Irene'); 
console.log(filmes)   
let removeFilmes = filmes.pop('Conan', 'Matrix');  
console.log('___________________________\n')
console.log('Depois de remover filmes!')
console.log('___________________________\n')
console.log(filmes) 