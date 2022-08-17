let altura = 1.30;
let acompanhada = true;

function podeSubir(altura, acompanhada){
    if(altura >= 1.40 && altura <= 2){
         return true;
    }
    else if((altura < 1.40 && altura >= 1.20) && acompanhada){
        return true;
    }
    else{
        return false;
    }
    
}
console.log(podeSubir(altura, acompanhada));


function podeSubirTexto(altura, acompanhada){
    if(altura >= 1.40 && altura <= 2){
        return "Acesso permitido";
    }
    else if((altura <= 1.40 && altura >= 1.20) && acompanhada){
        return "Acesso permitido";
    }
    else {
        return "Acesso negado";
    }
}
altura = 1.30;
acompanhada = false;

console.log(podeSubirTexto(altura, acompanhada));






