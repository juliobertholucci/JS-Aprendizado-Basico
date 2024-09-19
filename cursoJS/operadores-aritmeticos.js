const NotaPrimeiroBi = 10; 
const NotaSegundoBi = 5.5; 
const NotaTerceiroBi = 10; 
const NotaQuartoBi = 4; 

let MediaTotal = (NotaPrimeiroBi + NotaSegundoBi + NotaTerceiroBi + NotaQuartoBi) / 4; //operador de soma e divisão (+ e /)

console.log('A média total é: ' + MediaTotal.toFixed(2));

if( MediaTotal >=6){ //operação de maior ou igual, se a nora for maior ou igual a 6 o aluno ganha um bonus de 10% em sua nota

    MediaTotal += MediaTotal * 0.10;  //operação de soma de variável e multiplicação (+= também é representado por x = x + y) evitando criar uma variável para guardar o bonus
    console.log(`A média total é de ${MediaTotal.toFixed(2)} e o aluno está aprovado!`);

}

else{

    console.log('reprovado!');

}