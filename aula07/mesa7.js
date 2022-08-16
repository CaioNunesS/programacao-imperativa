let num1 = 5;
let num2 = 5;
let num3 = 10;
// console.log(num1 == num2 && num3 == 9); //e
// console.log(num1 == num2 || num3 == 5); //ou
// console.log(num1 == num2 && !num3 == 10); //not


//O que cada expressao retorna

!true //false
let num4 = !true;
console.log(num4);

!false //true
let num5 = !false;
console.log(num5)

!!false // false
let num6 = !!false;
console.log(num6);

!1 //false
let num7 = !1;
console.log(!1);

!!1 //true
let num8 = !!1;
console.log(!!1);

!0 //false
let num9 = !0;
console.log(num9);

!!0 //true
let num10 = !!0;
console.log(num10);

!!"" //true
let num11 = !!"";
console.log(num11)

let x = 5;
let y = 9;
console.log(x < 10 && x!==5); //true
console.log(x > 9 || x === 5); //true
console.log( !(x === y) ) //true

//atividade2//

let a = 10;
let b = "a";
b === "b" || x > 10; //true


let s = 3;
let d = 8;
console.log(!(s == "3" || s === d) && !(d !== 8 && s <= d)); //false

let str = ""
let msg = "haha!"
let eBonito = "false"
console.log(!((str || msg) && eBonito)); //false 
















