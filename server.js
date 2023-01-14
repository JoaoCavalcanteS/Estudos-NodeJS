//criou uma constante que vem no método http
const http = require('http');

//Deve receber parametros
//Voce esta mandando executar um servidor http.createServer()
//Cria um escutador, que recebe uma porta callback(retornar uma função)
// recebe uma ArrowFunction
//---http.createServer().listen(3000, ()=>console.log('Server is Running'));

//CreateServer espera dois parametro, uma requisição e uma resposta
//executando com arrowFunction executa uma funsao
//retorna uma resposta => RES
http.createServer((req, res)=>{
    res.end('<h1>Workink</h1>')
}).listen(3000, ()=>console.log('Server is Running'));
