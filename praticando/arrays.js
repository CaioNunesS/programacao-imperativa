let comprar = ['feijao', 'arroz', 'carne', 'óleo', 'sal'];
let separadosPorTraco = comprar.join(' - ');
let comprarPop = comprar.pop();
let comprarPush = comprar.push('pipoca', 'peixe');
let comprarShift = comprar.shift();
let comprarUnshift = comprar.unshift('refri','suco');

console.log(comprar);

console.log("o join separa os elementos com o caractere que definir, nesse caso, o ' - ' ");
console.log(separadosPorTraco);

console.log("o pop elimina o ultimo elemento da array e retorna o elemento eliminado")
console.log(comprarPop);

console.log("o push adiciona elementos após o ultimo elemento do array e retorna a quantidade de elementos");
console.log(comprarPush);

console.log("o shift elimina a o primeiro elemento da array e retorna o eliminado");
console.log(comprarShift);

console.log("o unshift elementos no inicio do array e retorna a quantidade de elementos");
console.log(comprarUnshift);


let frutas = ['limao', 'laranja', 'morango'];
frutas.push('kiwi','amora')
frutas[0] = 'banana';
console.log(frutas);

let comprar1 = ['feijão', 'banana', 'manga'];
console.log(comprar[0] == comprar1[0]);


































