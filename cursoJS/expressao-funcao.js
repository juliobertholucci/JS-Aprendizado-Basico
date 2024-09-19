//diferente de uma declaração de função que pode ter seu call antes da definição da função, a expressão deve ter seu call após ser 
//definida

expressaoFuncao("Julio", 20);

const expressaoFuncao = function exemplo(nome, idade){

    if(idade > 18){

        console.log(`${nome} é maior de idade!`);

    }else{

       console.log("Falso!");

    }


}
