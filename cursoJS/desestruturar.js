
const alunos = ['Julio', 'Marcio', 'Marcos', 'Leo', 'Hugo'];
const notas = [10, 5, 6, 8, 4];

const lista = [alunos, notas];

function nomeAlunoEMedia(aluno){

    if(lista[0].includes(aluno)){ //verifica se no array alunos existe o nome que foi digitado para a busca
        const [alunos, notas] = lista;
        const indice = lista[0].indexOf(aluno); //cria uma variável que puxa o indice do aluno para buscar a média. Includes retorna true ou false por isso é usado em if
        const mediaAluno = lista[1][indice]; //busca no array o valor com base no indice obtido acima
        console.log(`O aluno é ${aluno} e sua média de notas é: ${mediaAluno}`);

    }else{

        console.log("Nada");

    }  
}

nomeAlunoEMedia('Leo');

