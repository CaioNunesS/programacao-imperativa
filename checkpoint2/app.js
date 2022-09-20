const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function comparar_media() {
    for (let media1 = 0; media1 <= asiaScores.length; media1++) {
        if (asiaScores[media1] === euroScores[media1]) {
            console.log('As médias são iguais!')
        } else {
            console.log("As médias são diferentes!")
        }
    }
}
comparar_media();

for(var i=0;i<50;i+= 10){
    console.log(i)
}
console.log(i);

let frutasVermelhas 