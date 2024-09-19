const valor = 49;
const texto = valor < 50 ? 'Olá, isso é um true' : 'Olá, isso é um false'; //primeiro a condição seguida de ?, depois um true e o false
console.log(texto);                                                        //serve para substituir um if else de 1 linha.

let serverOn = true;

function servidor(){
    if (serverOn == true){

        console.log("O servidor está rodando!");

    } else{

        console.log("O servidor está offline!");
        
    }
}

return(servidor());

function servidorReduzido(){

    return serverOn ? 'servidor funcionando' : 'servidor off';

}

console.log(servidorReduzido());

let idadeEstudante = 22;

const autorização = idadeEstudante < 18 ? `sim pois sua idade é ${idadeEstudante}` : `não pois sua idade é maioridade`;

console.log(autorização);

