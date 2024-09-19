let saldo = 100;
let saque;
let deposito;
const diaRecebimento = 1;
const diaPagar = 10;

if (diaRecebimento === 5){

    deposito = 150;
    saldo = saldo + deposito;
    console.log(saldo);

}

else if (diaPagar === 10){

    saque = 80;
    saldo = saldo - saque;
    console.log(saldo); 

}

const numericalNumber = 20;

const resultado = numericalNumber % 2 ? 'impar' : 'par';
console.log(resultado);


const logado = true;
const permissionAdmin = true;

if (logado === true && permissionAdmin === false){

    console.log(`Welcome user! sua permissão de administrador é ${permissionAdmin}`);

}else if (logado === false){

    console.log("Deslogado!");

} else if(logado === true && permissionAdmin === true){

    console.log("Fala admin!");

}

const fim = logado == true && permissionAdmin == true ? 'Logado' : 'Deslogado';
console.log(fim);
