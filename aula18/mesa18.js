//1
function loopDePares(num){
    for(let i = 0; i <= 100;i++){
        if (((i + num) % 2 )=== 0){
            // console.log('Este número ' + i + ' é par' )
        }
    }
};
loopDePares(1);

//2
function loopDeImpares(num,str){
    for(let i = 0; i <= 100;i++){
        if (((i + num) % 2 ) != 0){
            // console.log(str)
        }else {
            // console.log(i)
        }
    }
}
    loopDeImpares(2,'abobora');

//3
function soma(num){
    let numArray = []
    for(let i = 0; i <= num;i++){
        numArray.push(i)
    }
    return numArray.reduce(function(a,i) {
        return a + i
    })
}
    console.log(soma(8));

//4

function newArray(num){
    let newArray = []
    for(i = 0; i <= num; i++){
        newArray.push(i)
    }
    console.log(newArray); 
}
newArray(5);

//5

function split (str){
    let newArray = []
    for(i = 0; i < str.length; i++){
        newArray.push(str[i])
    }
    console.log(newArray)
}
split('teste');

//6 Mover os zeros para o final

let array1 = [false, 2, 5 ,9, 0, 6, 0, 2, 0, 'a']
function moverZeros(array){
    let arrayPrincipal = [];
    let arraySeparador = [];
    for (i = 0; i < array.length; i++){
        if (array[i] !== 0){
            arrayPrincipal.push(array[i])
        }else {
            arraySeparador.push(array[i])
        }
    };
    return arrayPrincipal.concat(arraySeparador);
};

console.log(moverZeros(array1));

//7 lidando com dois arrays

let array2a = [1, 2, 3];
let array2b = ['o','l','a'];
function arrayHandler(array1,array2){
    for(i = 0; i < array1.length; i++){
        console.log('eu sou ' + array1[i] + ' e eu sou ' + array2[i])
    }
};
arrayHandler(array2a,array2b);

//8  arrays de objetos
function arrayObjects(num){
    let newArray = []
    for (i = 0; i <= num; i++){
        newArray.push({valor: i})
    }
    return newArray;
}
console.log(arrayObjects(5));

//arrays de objetos 2

function arrayObjects2(num,str){
let newArray = [];
for(i = 0; i <= num; i++){
    newArray.push({[str]: i})
}
return newArray;
}

console.log(arrayObjects2(5, 'teste'));








