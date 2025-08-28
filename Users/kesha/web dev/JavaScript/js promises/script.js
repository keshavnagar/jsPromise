// now we understood the call back function

function callBackFun(sum) {
  return sum(1, 2);
}

let result = callBackFun((a, b) => {
  return a + b;
});
console.log(result);
