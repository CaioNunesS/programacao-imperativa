function converterDePolegadasParaCm (polegadas) {
    return polegadas + " polegadas equivalem a " + polegadas*2.54 + " centímetros.";
}

console.log(converterDePolegadasParaCm(20));

function converteStringEmUrl(){
    return convercao;
}
let  convercao = 'dominio';
convercao = 'google'
console.log("https//:www." +convercao+ ".com.br")

function retornarFrase(frase) {
    return frase + "!";
}

console.log(retornarFrase("Olá"));

function valorDaHoraDeTrabalho (salario) {
    const valorDaHoraDeTrabalho = salario/160;
    return "Você ganha R$" + valorDaHoraDeTrabalho.toFixed(2)+ "pela sua hora de trabalho." ;
}

console.log(valorDaHoraDeTrabalho(1400));

function letraMaiuscula (frase) {
    return "Escrevemos isso: '" + frase + "' e temos isso: '" + frase.toUpperCase() + "'";
}

console.log(letraMaiuscula("olá mundo"));

function tipoDeDado(dadoParaValidar) {
    return " O dado informado foi " + dadoParaValidar + ", ele é: " + typeof dadoParaValidar;
}

console.log(tipoDeDado(1));

console.log(tipoDeDado("bola"));

function calcularCircunferencia (raio) {
    return "A circunferência é de: " + (2* Math.PI * raio).toFixed(2);
}

console.log(calcularCircunferencia(2));