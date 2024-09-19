const MeuSimbolo = Symbol(); //criação dos simbolos

const SimboloComDescricao = Symbol('meu simbolo'); //podemos colocar descrições nos simbolos (opcional)

const OutroSimbolo = Symbol('simbolos são unicos!');

console.log(MeuSimbolo === OutroSimbolo); //retorna falso

const objeto = { //utilização de chaves de propriedade de objetos

    [MeuSimbolo]: 'valor_do_simbolo',
    [SimboloComDescricao]: null,
    [OutroSimbolo]: 50,
};

console.log(objeto[SimboloComDescricao]);
console.log(objeto[MeuSimbolo]);
console.log(objeto[OutroSimbolo]);


