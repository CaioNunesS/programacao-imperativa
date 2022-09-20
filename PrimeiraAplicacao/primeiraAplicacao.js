let pessoas = [
    {
      altura : 1.80,
      sexo : 'M'  
    },
    {
        altura : 1.75,
        sexo : 'F'  
    },
    {
        altura : 1.65,
        sexo : 'F'  
    },
    {
        altura : 1.55,
        sexo : 'M'  
    },
    {
        altura : 1.85,
        sexo : 'F'  
    },
    {
        altura : 1.87,
        sexo : 'M'  
    },
    {
        altura : 1.75,
        sexo : 'M'  
    },
    {
        altura : 1.90,
        sexo : 'F'  
    },
    {
        altura : 1.95,
        sexo : 'M'  
    },
    {
        altura : 1.65,
        sexo : 'M'  
    },
    {
        altura : 1.67,
        sexo : 'F'  
    },
    {
        altura : 1.95,
        sexo : 'F'  
    },
    {
        altura : 1.57,
        sexo : 'F'  
    },
    {
        altura : 2.05,
        sexo : 'M'  
    },
    {
        altura : 1.98,
        sexo : 'F'  
    }
];

const maiorMenorAltura = array =>{
    let menor = array[0].altura;
    let maior = array[0].altura;

    
for(let i = 1; i < array.length ; i++){
    let altAux = array[i];

    if(altAux.altura < menor ){
         menor = altAux.altura;

    }else if(altAux.altura > maior ){
        maior = altAux.altura;
        
    }
}
console.log('A maior altura é: ' + maior + ' e a menor altura é: ' + menor);
};
maiorMenorAltura(pessoas);
    //percorre o array 
    // verificar qual é o maior
    // verificar qual é o menor 

const mediaAltura = (array) =>{
    let media = 0;
    let qtaF = 0;
    let altSoma = 0;

    for(i = 0; i < array.length; i++){
        let sexAux = array[i]

        if(sexAux.sexo === 'F' ){
            qtaF ++;
            altSoma = sexAux.altura + altSoma
        }

        media = altSoma/qtaF

    }
console.log(media);
}
mediaAltura(pessoas);
    
    //filter para separar as mulheres

    //reduce para somar 

    //dividir pelo length


const qtdHomens = (array) =>{
    //filter para separar os masculinos

    //length
        let qtaM = 0;
    
        for(i = 0; i < array.length; i++){
            let sexAux = array[i]
    
            if(sexAux.sexo === 'M' ){
                qtaM ++;
            }
    
    
        }
    console.log(qtaM);
    }
    qtdHomens(pessoas);

    //a média das idades das pessoas que responderam ótimo;

    let espectadores = [
        {id:1, opiniao: 1, idade: 18},
        {id:2, opiniao: 2, idade: 28},
        {id:3, opiniao: 3, idade: 38},
        {id:4, opiniao: 3, idade: 48},
        {id:5, opiniao: 2, idade: 58},
        {id:6, opiniao: 1, idade: 68},
        {id:7, opiniao: 2, idade: 78},
        {id:8, opiniao: 3, idade: 88},
        {id:9, opiniao: 1, idade: 45},
        {id:10, opiniao: 3, idade: 37},
        {id:11, opiniao: 1, idade: 51},
        {id:12, opiniao: 2, idade: 21},
        {id:13, opiniao: 3, idade: 39},
        {id:14, opiniao: 2, idade: 43},
        {id:15, opiniao: 1, idade: 56} 
    ];
    
    const mediaIdades = (array) =>{
    
    
      let soma = array.reduce(function(acumulador, i){
        return acumulador + i.idade},0);
      
        return soma / espectadores.length
    
    }
    
    console.log(mediaIdades(espectadores));

    
    
//a quantidade de pessoas que responderam regular;
const qtdPessoas = (array) =>{

    let pessoasRegular = array.filter(function(array){
      return array.opiniao === 1
    });
  
    return pessoasRegular.length
  
  }
  
  console.log(qtdPessoas(espectadores));

 // a porcentagem de pessoas que responderam bom entre todos os espectadores analisados.

const porcentagem = (array) =>{

  let espectadoresBom = array.filter(function(array){
    return array.opiniao === 2
  });

  return espectadoresBom.length / espectadores.length * 100

}

console.log(porcentagem(espectadores)+" %");
















