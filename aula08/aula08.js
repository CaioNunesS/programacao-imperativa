let a = "marcos";

if(a == "jose"){
//se a condiçao for verdadeira ou seja TRUE
console.log("dentro do if");

}
else{
    // se a condiçao for falsa ou seja FALSE
    console.log("dentro do else")
    
}


let idade = 24;

if( idade > 18 ){
    
//se a condiçao for verdadeira ou seja TRUE
console.log("dentro do if maior de 18");

}else if(idade > 15){
    
//se a condiçao for verdadeira ou seja TRUE e a primeira condiçao for falsa
console.log("dentro do else if maior de 15");
}

else {
    // se a condiçao for falsa ou seja FALSE
    console.log("dentro do else")
}


let result = idade > 18 ? "maior de idade" : "menor de idade";
// console.log(result)

switch(idade){
    case 18:
        console.log("idade igual a 18");
        break;
    case 19:
        console.log("idade igual 19");
        break;
    default:
        console.log("nao era igual a nenhum");

    
}