const alice = [23, 82, 46];
const bob = [45, 8, 32];

function encontrarGanhador(a, b) {
    let pontosJogador1 = 0;
    let pontosJogador2 = 0;

    for (let i = 0; i < a.length; i++) {
        if ((a[i] > b[i]) && (a[i] !== b[i])) {
            pontosJogador1 = pontosJogador1 + 1;
        } else if ((a[i] < b[i]) && (a[i] !== b[i])) {

            pontosJogador2 = pontosJogador2 + 1;
        } else {
            console.log('A rodada ' + i + ' empatou');
        }
    }

    if (pontosJogador1 > pontosJogador2) {
        console.log('Alice venceu com ' + pontosJogador1 + ' pontos')
    } else {
        console.log('Bob venceu com ' + pontosJogador2 + ' pontos');
    }
}
encontrarGanhador(alice, bob);

//extra
function digitalHouse(num1, num2) {
    for (i = 1; i <= 100; i++) {
        if (i % num1 === 0 && i % num2 === 0) {
            console.log('Digital House')
        } else if (i % num1 === 0) {
            console.log('Digital')

        } else if (i % num2 === 0) {
            console.log('House')
        }else{
            console.log(i)
        }
        

    }

}
digitalHouse(10,10)