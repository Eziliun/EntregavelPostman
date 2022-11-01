var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.send('Oi, mundo :-)');
});

function soma(a, b) {
  return a + b;
}

function sub(a, b){
  return a - b;
}

function multi(a, b){
  return a * b;
}

function div(a, b){
  return a / b;
}

var port = 3001;

// iniciando o processo do servidor
app.listen(port, function() {
  console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
});

app.post('/soma', function (req, res) {
    var body = req.body;
    var resultadosoma = soma(body.a, body.b);
    
    return res.send(`O resultado da soma de ${body.a} e ${body.b} é ${resultadosoma}`);
});
  
  
  app.post('/sub', function (req, res) {
    var body = req.body;
    var resultadosub = sub(body.a, body.b);
    
    res.send(`O resultado da subtracao de ${body.a} e ${body.b} é ${resultadosub}`);
  });
  
  
  app.post('/multi', function (req, res) {
    var body = req.body;
    var resultadomulti = multi(body.a, body.b);
    
    res.send(`O resultado da multiplacao de ${body.a} e ${body.b} é ${resultadomulti}`);
  });
  
  
  app.post('/div', function (req, res) {
    var body = req.body;
    var resultadodiv = div(body.a, body.b);
    
    res.send(`O resultado da divisao de ${body.a} e ${body.b} é ${resultadodiv}`);
  });