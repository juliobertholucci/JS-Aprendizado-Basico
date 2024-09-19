function callStudant(){ //função criada

    console.log("Julio");

}

callStudant(); //chama a função

console.log(callTeacher("Fernand" , "Geografia")); //porém o return precisa de um log para ser exibido!

function callTeacher(nome, materia){ //parâmetros de função atribuidas no escopo 

    console.log(`O professor(a) é ${nome} e sua matéria é sobre ${materia}`);
    return `o professor é ${nome} e ele leciona ${materia}`; //return gera um resultado que pode ser utilizado em todo o código!
}

callTeacher("Carlos", "enologia");



//todas as funçoes exibidas aqui são métodos tradicionais chamada de declaração de funcoes. Elas são lidas pelo JS no começo do arquivo
//independente se a chamada está acima da função ou não! Isso se chama HOISTING