//criou uma constante que vem no método http
const http = require('http');//importou um modulo nativo
const host = 'http://localhost';
const port = 3000;
const stats = require('./pcRamUsage');// pode importar um modulo que voce ja criou


//CreateServer espera dois parametro, uma requisição e uma resposta
//executando com arrowFunction executa uma funsao
//retorna uma resposta => RES
//variavel url recebe uma requisiçao, do tipo url
http.createServer((req, res)=>{
    let url = req.url;

    /*rota secreta:fazemos uma verificação, SE a url for igual a rota stats,
     então:*/
    if(url==='/stats'){
        res.end(JSON.stringify(stats, null, 2));//vai aparecer o modulo que criamos
        //para aparecer la escrito, fazemos atravez do JSON
        //ele recebe os parametros:valor, replace(n usamos) e espaçamento.
    }else{
        //rota padrão
        res.end('<h1>seja bem vindo</h1>');
    }


}).listen(port, ()=>console.log(`Server is Running in ${host}:${port} `));
