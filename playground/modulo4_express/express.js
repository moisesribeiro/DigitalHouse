const express = require('express')
const app = express()

app.get('/', (req, res) => {res.send('você esta na pagina principal')})
app.get('/contato', (req, res) => {res.send('você esta na pagina de contato')})


app.listen(3000, () => console.log('Servidor no ar! url http://localhost:3000'))



