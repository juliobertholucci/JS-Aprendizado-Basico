const estudante = 'Julio';
const EstaAprovado = true;

if (EstaAprovado === true){ //realizamos a comparação, o "===" compara os tipos de dados e o conteúdo, devendo ser iguais: string = string etc.

    console.log('Aprovado');

} else {console.log("reprovado");}

if(0 == '0'){ //nesse caso, == apenas avalia o conteúdo, temos uma string sendo comparada com um int e retornando true.

    console.log("Passou");

} else console.log("Não");

if(0 === '0'){

    console.log("Passou");

} else console.log("Não Passou");