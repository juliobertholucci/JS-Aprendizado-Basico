
const expressaoFuncao = (nome, idade) => {
    
    if(idade > 18){
        
        console.log(`${nome} é maior de idade!`);
        
        }else{
            
            console.log("Novo!");
            
        }
                
};

expressaoFuncao("Julio", 12);


const funcaoCurtaArrow = (nome) => nome;
//atribui a função a variável, passa o parametro e após o arrow possui um return escondido, retornando o resultado da funcao
console.log(funcaoCurtaArrow('Julio'));