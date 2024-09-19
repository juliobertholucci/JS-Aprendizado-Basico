const pessoa = {

    nome: 'Julio',
    idade: 20,
    cidade: 'Andradas'

}   

console.log(pessoa.nome);
console.log(`O nome da pessoa é ${pessoa.nome} e seus três primeiros digitos da cidade são: ${pessoa.cidade.substring(0, 3)}`); 
//puxa o nome dentro do objeto e puxa a cidade dentro do objeto. Porém em cidade só puxa do indice 0 até o 3 (0,3) [APENAS P/ STRINGS]

function exibeInfosPessoa(quem, informacao){ 

    return quem[informacao]; //retorna como pessoa.[informação]

}

console.log(exibeInfosPessoa(pessoa, 'nome'));
console.log(exibeInfosPessoa(pessoa, 'cidade'));

 