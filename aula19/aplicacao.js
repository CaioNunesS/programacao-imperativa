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
maiorMenorAltura(pessoas)
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

