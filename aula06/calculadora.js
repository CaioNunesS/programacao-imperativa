function somar (num1, num2){
    return num1 + num2;
}

console.log( somar( (somar(5,5) ) , (5) ) );

function subtrair (num3, num4){
    return num3 - num4;
}

console.log( subtrair( (subtrair(5,5) ) , (5) ) );

function dividir (num5, num6){
    return num5 / num6;
}

console.log( dividir( (dividir(5,5) ) , (5) ) );


function multiplicar (num7, num8){
    return num7 * num8;
}

console.log( multiplicar( (multiplicar(5,5) ) , (5) ) );

//calculadora parte2 - os console.log das operaçoes estao acima.

console.log ("-------------- Teste de Operações / Calculador --------------");
console.log(dividir(100,0))

//calculadora parte3
function aoQuadrado(num7){
 return multiplicar(num7, num7)
}
console.log(aoQuadrado(3));

function media(num1, num2, num3){
    return dividir (somar(num1, num2,) + num3), 3;  
}
console.log (media(2,3,4));

function calculaPorcentagem(num1, num2){
    return dividir (multiplicar (num1, num2 ) ,100);
}
console.log(calculaPorcentagem(100, 10));

function geradorDePorcentagem(num1, num2){
    return dividir (multiplicar (num1, 100) ,num2);
}
console.log(geradorDePorcentagem(2,200));


