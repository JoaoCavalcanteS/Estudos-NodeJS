
//OS é um módulo que tras metodos e propriedades do seu sistema operacional
const os = require('os');

//Começando tirando "Os métodos dentro do método OS"
//Fazendo uma DESESTRUTURAÇÃO:
//1 - Criando uma constante que é um objeto
//2 - Ela recebe a constante OS
//3 - Escolha os métodos que deseja usar, colocando dentro do objeto
const {arch, platform, totalmem, freemem} = os;
const tRam = totalmem()/1024/1024/1024;//Dividindo por 1024 pois os numeros vem em bytes
const fRam = freemem()/1024/1024/1024;

//Criou um objeto, que passa parametros e valores
const stats = {
    os:platform(),
    arch: arch(),
    TotalRAM:parseInt(tRam),
    FreeRAM:parseInt(fRam),
}
console.log(stats);