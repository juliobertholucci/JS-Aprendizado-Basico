const NotaPrimeiroBi = 10; //Número Inteiro (int)
const NotaSegundoBi = 5.5; //Número Decimal (float)
const NotaTerceiroBi = '10'; //Número Inteiro (string)
const NotaTerceiroBiConvertida = Number.parseInt('10'); //Número Inteiro em string convertida para int
const NotaQuartoBi = -4; //Número inteiro negativo (int)

const MediaTotal = (NotaPrimeiroBi + NotaSegundoBi + NotaTerceiroBiConvertida + NotaQuartoBi) / 4;

console.log('A média total é: ' + MediaTotal.toFixed(2)); //concatenação de uma frase com + e função para limitar a quantidade de casas