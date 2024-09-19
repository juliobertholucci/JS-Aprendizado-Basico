const alunos = ['Ana', 'Marocs', 'Ferdnand', 'Cal']
const medias = [7, 4.5, 8, 9]

const tamanhoNome = alunos.filter((_, indice) => {
    
    return medias[indice] > 5;

});

console.log(tamanhoNome);