//Crie uma função que receba um array composto por números e retorna uma nova matriz (array) com todos os valores divididos pela soma de toda a matriz, usando map() e reduce().
let numeros = [4,5,6,8,5,2,7,9,1,3];

let exercicio1 = (array) => {
    let soma = array.reduce(function(acumulador, num){
        return acumulador + num
    });
    let divisao = array.map(function(item){
        return item / soma
    });
    return divisao
}
// console.log(exercicio1(numeros));

//Crie uma função que receba um array de palavras e um número, e que retorna uma matriz (array) com apenas as palavras que têm uma quantidade de letras maior do que o número informado. (verifique como funciona o método filter ())
let array = ['oi','carro','aviao','abacate','io'];
let num = 5;

   let exemplo = array.filter(function(str){
         return str.length > num;
    });
    console.log(exemplo);



