let fizzBuzz = function(num1,num2){
for (let i = 1;i <= 100; i++){
    if(i % num1  === 0 && i % num2 === 0){
        console.log('fizzBuzz')
    }
    else if(i % num1 === 0){
        console.log('fizz')
    }else if(i % num2 === 0){
        console.log('buzz')
    }else{
        console.log(i)
    }
}

}
// fizzBuzz(2,5);

let fizzBuzz2 = function(num1,num2,str1, str2){
    let i = 1
    while(i < 100){
        if(i % num1  === 0 && i % num2 === 0){
            console.log(str1, str2)
        }
        else if(i % num1 === 0){
            console.log(str1)
        }else if(i % num2 === 0){
            console.log(str2)
        }else{
            console.log(i)
        }
        i++
    }  
    

} 

fizzBuzz2(3,5,'batata','frita')

