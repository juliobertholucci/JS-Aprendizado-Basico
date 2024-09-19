let nomeEstudande; //variavel sem atribuição
console.log(nomeEstudande); //retorna indefinido
console.log(typeof nomeEstudande); //o tipo é indefinido

let telefoneEstudante = null; //atribuido o tipo null a variável

console.log(telefoneEstudante + 3); //null se comportou como 0;

console.log(nomeEstudande + 3); //retorna um NaN, sendo operação matemática mal formada

const professora = 'Ana';

console.log(typeof nomeEstudande);
console.log(typeof professora);
console.log(typeof telefoneEstudante); //por erro nativo, o retorno do typeof de uma variável NULL é 'object'


