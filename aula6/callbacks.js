setTimeout(() => { //Callback Function anônima
    console.log('Uma callback sendo executada!');
    }, 5000
)

let meuCallback = () => { // Callback Function definida
    console.log('Executando um callback!')
}
setTimeout(meuCallback, 8000);

