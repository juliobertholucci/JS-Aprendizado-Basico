const estudantes = require('./estudantes.json') //require do JSON estudantes 

function buscaEstudante(lista, chave, valor){ //function que passa o parametro da lista (dados JSON), chave (nome do dado('nome') e valor ('Cecelia'))
//function buscaEstudante(estudantes[require], nome, Cecelia)

    return lista.find((estudante) => estudante[chave].includes(valor)) //return fora do escopo de função com os dados caçados, includes utilizado para encontrar valores dentro de array
                    //lista   se busca de dados pela chave     for igual a valor
}

const estudanteEcontrado = buscaEstudante(estudantes, 'telefone', '3569848931');
console.log(estudanteEcontrado);
