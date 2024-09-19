//console.log(variavel);

//console.log('olá')

try {
    
    const net = require('net');

    net.createConnection(-1);
  
  } catch (erro) {
    console.log(`O nome do erro é: ${erro.name}\n`)
    console.log(`A mensagem de erro é: ${erro.message}\n`)
    console.log(`A stack do erro é: ${erro.stack}\n`)}