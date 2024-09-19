const estudantes = {

    nome: 'Julio',
    idade: 25,
    cidade: [{
        nome: 'Andradas',
        estado: 'MG'
    }]

}

//console.log(estudantes.cidade);

estudantes.cidade.push({

    regiao: 'Sul de Minas',
    clima: 'quente'

})

console.log(estudantes.cidade[0]);

const listaDeEnderecos = estudantes.cidade.filter((cidade) => cidade.clima)
