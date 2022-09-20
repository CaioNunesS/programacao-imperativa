const informaNome = function (name) {
    console.log(`OLA MUNDO ${name} JS`)
}
informaNome(`Caio`);

const calc = function (tipo, num1, num2) {
    let result = 0
    switch (tipo) {
        case 'soma':
        case 'Soma':
        case '+':
            result = num1 + num2
            break;
        case 'divisao':
        case '/':
        case 'dividir':        
            result = num1 / num2
            break;
        case 'multiplicacao':
        case 'vezes':
        case 'multiplicar':        
            result = num1 * num2
            break;
        case 'subtracao':
        case 'menos':
        case 'subtrair': 
        case '-':
            result = num1 - num2   
            break;
            
        default:
            result = 'nenhuma opcao'
    }
    return result
}
console.log(calc('vezes', 5, 10));

let aluno = [5, 8, 4, 9, 5];
let alunoB = [5, 10];

const somaPontuacao = function (aluno) {
    let somaPontuacao = 0
    for (let i = 0; i < aluno.length; i++) {
        somaPontuacao = somaPontuacao + aluno[i]
        console.log(somaPontuacao)
    }
    return (somaPontuacao / aluno.length).toFixed(2)
}
// console.log(somaPontuacao(aluno))




function radar(velocidade) {
    const velocidadeMax = 70;
    const pontosPorKm = 5;

    if (velocidade <= velocidadeMax) {
        console.log('okay')
    } else { const pontos = Math.floor(((velocidade - velocidadeMax) / pontosPorKm)) 
           if (pontos >= 12) {
           console.log('Carteira Suspensa')
    }      else
           console.log(pontos + ' Pontos' )
        }
}
// radar(100);


function parOuImpar(limite){
    for(let i = 1; i < limite; i++ ){
        if(i % 2 === 0){
        console.log(i + ' Par')
    }else {
        console.log(i + ' Impar')
    }
    }
}
// parOuImpar(10);

let jogador = {
    nome: 'R.Ceni',
    num: 01,
    posicao: 'goleiro',
    time: 'São Paulo'

}

let exibirPropriedades = function(obj){
    for( prop in obj ){
        if (typeof obj[prop] === 'string'){
            // console.log(prop, obj[prop])
        }
    }

}
exibirPropriedades(jogador);

//callback

function soma(a,b){
return a + b;
}

function resultado(msg,valor1,valor2, callback){
    // console.log(msg + ' ' + callback(valor1,valor2));
}

resultado('O RESULTADO É ' , 5, 10, soma);

const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
  
};

let exercicio2 = ['oi','carro','aviao','abacate','oi',5];

let teste = function(str,num){
    for(let i = 0;1 < exercicio2.length;i++){
        if(exercicio2[i] > num){
            return str
        }
    }
}
teste()
console.log(teste);