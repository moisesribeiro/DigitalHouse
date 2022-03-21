const http = require('http');

http.createServer( (req, res) => {
    console.log('testando servidor retorno no console')
    res.writeHead(200, {'content-type':'text/pain'})
    if(req.url === '/home'){
        res.end('Voce esta na pagina principal')
    }else if(req.url === '/contato'){
        res.end('Voce esta na pagina de contato')
    }else{
        res.end('desculpe, essa pagina nao existe')
    }
    //res.end('testando o servidor retorno no navegador')
}).listen(8080)