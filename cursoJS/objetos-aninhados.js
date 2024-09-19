const estudante = { //objeto

    nome: 'Ferg',
    idade: 12,
    escola: 'Alcides',
    telefone: ['5252', '5353']

}

estudante.casa = { //objeto dentro de um objeto

    rua: 'Jaguari',
    bairro: 'Centro'

}

console.log(estudante.casa.rua);