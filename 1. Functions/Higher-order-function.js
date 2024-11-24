// higher-order function is a function that can either:
//Take one or more functions as arguments, or
//Return a function as a result.
//Higher-order functions can be used for tasks like filtering, mapping, reducing data, and more.

//1. Function that takes another function as an argument

function myfunc(myfunc2,num){  //fn passed as an argument
    return myfunc2(num);
}

function double(x){
    return x*2;
}

function triple(y){
    return y*3;
}

console.log(myfunc(double,3)); //6
console.log(myfunc(triple,4)); //12

// *** myfunc is higher order fn ,its take fn as argument

//2. Function that returns another function

function multiplier(factor) {
    return function(x) {
      return x * factor;
    };
  }
  
  const multiplyBy3 = multiplier(3);
  console.log(multiplyBy3(4));  //12


  //**** Using Array methods as higher-order functions */

  //JavaScript array methods are higher-order functions, such as map, filter, and reduce. These methods take a function as an argument.

  