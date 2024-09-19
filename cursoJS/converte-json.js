const estudante = require('./estudante.json'); 

const stringEstudante = JSON.stringify(estudante); //transformado em string
console.log(stringEstudante);

const objEstudante = JSON.parse(stringEstudante); //transformado novamente em objeto
console.log(objEstudante);
