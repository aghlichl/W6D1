Function.prototype.curry = function (numArgs) {
  let arr = [];
  let func = this;
  let _curry = function(num){
    console.log(numArgs)
    arr.push(num);
    if (arr.length === numArgs) {
      return func(...arr);
    } else {
      return _curry;
    }
  }
  return _curry;
}



let twoSum = function(a, b){
  return a + b
}

twoSum.curry(2);
_curry(5);
_curry(8);
twoSum(5, 8)


twoSum.curry(2)(5)(8)