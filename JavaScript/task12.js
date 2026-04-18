

function calculator(val1,val2,callbackfun){
return callbackfun(val1,val2)
}


let res1 = calculator(100,20,(a,b)=>a+b)
let res2 = calculator(100,20,(a,b)=>a-b)
let res3 = calculator(100,20,(a,b)=>a*b)
let res4 = calculator(100,20,(a,b)=>a/b)

console.log(res1)
console.log(res2)
console.log(res3)
console.log(res4)