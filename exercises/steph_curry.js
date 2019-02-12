function curriedSum(numArgs){
  let nums = [];
  let _curriedSum = function(num){
    nums.push(num);
    if(nums.length === numArgs){
      let sum = 0;
      nums.forEach( el => {
        sum+=el;
      })
      return sum;
    }
    else{
      return _curriedSum;
    }
  }
  return _curriedSum;
}


// console.dir(curriedSum(4));
const sum = curriedSum(4);
// console.log(sum);
sum(5)(30)(20)(1); // => 56