const estudante = {

    nome: 'Julio',
    idade:20,
    cidade: 'Andradas',
    dados: [{

        cpf:5252,
        rg: 5151

    }, 
    {

        cpf:8585,
        rg:9696

    }]

}

for(let chave in estudante){

    console.log(estudante[chave]);
    const tipo = typeof estudante[chave];
    if(tipo !== 'object' && tipo !== 'function'){

        const texto = `A chave é ${chave} e seu dado é ${estudante[chave]}`;
        console.log(texto);

    }
    
}

const chaves = Object.keys(estudante);

console.log(chaves);
