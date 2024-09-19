let estudante; 

var variavel; //global, pode ser alterada fora de escopo
let variavel2; //apenas pode ser alterada dentro do escopo
const variavel3 = ''; //apenas pode ser alterada dentro do escopo

if(1 > 0){

    estudante = 'Caroline';
    console.log(estudante);

}

//Variável global sendo alterada dentro de um bloco


if(1 > 0){

    estudante = 'Caroline'; //let
    console.log(estudante);

}

estudante = 'Marcos'; //var 
console.log(estudante);

//Temos duas variáveis aqui, quando não definimos o tipo da variável ela se torna automaticamente VAR.


if (1 > 0) {
    let nome = 'Ana';
    console.log(nome); // ‘Ana’
  }
  
  // variável `nome` não está acessível
  console.log(nome); // Error: nome is not defined
  