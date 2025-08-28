// now we understood the call back function 

function sum(x,y) {
  return x+y;
}

function callBackFun (sum){
return sum(1,2);
}

let  result = callBackFun(sum);
console.log(result)