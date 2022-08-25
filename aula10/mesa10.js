let itens = ['lapis','caneta','borracha','folha']


function imprimirInverso() {
    console.log(itens[3]);
    console.log(itens[2]);
    console.log(itens[1]);
    console.log(itens[0]);
}
imprimirInverso()

function inverter() {
    console.log(itens = ['folha', 'borracha', 'caneta', 'lapis']);
}
inverter()

//Neste exercício, você criará uma função somarArray() que aceita um array de números e retorna a soma de todos eles.
function somarArray([a, b, c]) {
    let result = [a + b + c];
    console.log(result);
}
somarArray([1, 2, 3]);

//Neste exercício, você criará uma função chamada join que recebe um array e simula o comportamento do método Array.join().
function join([a, b, c, d,]) {
    let ab = ["" + a + b + c + d + ""];
    console.log(ab);
}
join(["C", "A", "I", "O"]);

//O tech leader da equipe precisa conhecer a estrutura de dados do novo projeto. Para isso, devemos:
//criar a estrutura apropriada para armazenar os seguintes filmes e séries:
let filmes = ['Star Wars', 'Matrix', 'O Preço do amanhã', 'A vida é bela'];
// console.log(filmes);
// console.log(filmes[2]);

//Os filmes devem estar todos em letras maiúsculas. Para isso, crie uma função que recebe um array por parâmetro e converta o conteúdo de cada elemento em letras maiúsculas.
function maiuscula([m]) {
    console.log(filmes[m].toUpperCase());
}
maiuscula([0]);
maiuscula([1]);
maiuscula([2]);
maiuscula([3]);

//Crie outra estrutura semelhante à primeira, mas com os seguintes filmes de animação:
let series = ['Toy Story', 'Procurando Nemo', 'Kung-fu Panda', 'Wally', 'Fortnite'];
// console.log(filmes);
function dhFilmes() {
    let result = [filmes + series];
    console.log(result);
}
dhFilmes();

//Durante o processo, percebemos que o último elemento na série de filmes animados é, na verdade, um game. Agora devemos editar nosso código e modificá-lo para que possamos remover o último elemento antes de migrar o conteúdo para o array que contém todos os filmes.
let game = 'Fortnite';
series.pop();
let soma1 = [filmes + series]
console.log(soma1);

//Finalmente, recebemos dois arrays com classificações feitas por diferentes usuários do mundo nos filmes com o seguinte formato:
//const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
//const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
//Crie uma função que compare as notas e nos diga se elas são iguais ou diferentes.   
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
comparar_media()