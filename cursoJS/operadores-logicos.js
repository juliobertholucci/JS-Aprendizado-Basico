const notaFinal = 4;
const faltas = 3;
const advertencias = 0;


if(notaFinal <= 2 || !faltas > 2){ //Utilização de OU e negação (No caso inverte MAIOR para MENOR)

    console.log("Reprovado!");

} else {

    console.log("Aprovado!");

}

if (faltas > 2 && !advertencias){ //Utilização do E e negação (zero é considerado false, ao ser negado vira true)

    console.log("Reprovado");

}else {

    console.log("Aprovado");

}