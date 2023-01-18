
//OS é um módulo que tras metodos e propriedades do seu sistema operacional
const os = require('os');

//Ele vai rodar o que está dentro a cada 1000 mili/s
setInterval(()=>{
    const {arch, platform, totalmem, freemem} = os;
    const tRam = totalmem()/1024/1024;
    const fRam = freemem()/1024/1024;
    const usage = (fRam/tRam)*100;

    const stats = {
        os:platform(),
        arch: arch(),
        TotalRAM:`${parseInt(tRam)}MB`,
        FreeRAM:`${parseInt(fRam)}MB`,
        Usage: `${usage.toFixed(2)}%`//pega somente duas casas apos o ponto
    }
    console.clear();//antes de imprimir, ele limpa
    console.table(stats);

}, 1000);


//Começando tirando "Os métodos dentro do método OS"
//Fazendo uma DESESTRUTURAÇÃO:
//1 - Criando uma constante que é um objeto
//2 - Ela recebe a constante OS
//3 - Escolha os métodos que deseja usar, colocando dentro do objeto
