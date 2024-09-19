const estudantes= {

    nome: 'aaa',
    idade:'25',
    media: 7.5,
    estaAprovado: function(mediaBase){

        return this.media >= mediaBase ? 'reprovado' : 'aprovado' //argumento 'this' indica onde está a variável. No caso media.

    }

}

console.log(estudantes.estaAprovado(0));
