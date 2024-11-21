
//Deff - An arrow function is a concise way to write functions in JavaScript. It uses the => syntax and can make code more readable and compact, especially for short functions.

//syntax :-
const functionName = (parameters) => {
    // function body
};


//1. sample program :

const add=(a,b)=>{
  return a+b;  
};


console.log(add(2,3));  //5

//2. Implicit Return:
//If the function consists of a single expression, you can omit the {}
// doesn't require the return keyword:

const add2=(x,y)=>x+y;

console.log(add2(2,2));


// 3. No Parameters:

const add3 =()=>"hello";

console.log(add3);

// 4. Single Parameter: When there is only one parameter, you can omit the parentheses:

const mul=x=> x*x;

console.log(mul(2)); //4

// 5. Returning an Object: If you want to return an object, you need to wrap it in parentheses to distinguish it from the function body:

const myobjfn= ()=>({name:"kavipriya",qualification:"BCA"});

console.log(myobjfn);



//Note
//When Not to Use Arrow Functions
//1. Methods inside classes or objects: If you need a method to have its own this (like in object methods or class methods), use regular function expressions instead of arrow functions.
//2. Constructor functions: Arrow functions can't be used as constructors, as they do not have the new keyword behavior.

// Arrow functions are best suited for:

// Short, single-expression functions.
// Callback functions (like .map(), .filter(), .reduce()).
// Event handlers when you need to preserve the this context


//telusko

const greet=function(){
  console.log("hello world");
  return 1;
    
}

console.log(greet());

//arrow function
const greet2= ()=>{
  console.log("hello world");
  return 1;
}

console.log(greet2());


//if we are using single line statement

const greet3=()=>"hello world war";

console.log(greet3());

// convert 4 type of function into arrow function

//1. named function with multiple parameter

function namedfn1(x,y){
  return x+y;
}

console.log(namedfn1(3,3));  //6
// 1. arrow conversion 
let namedFnwithMulPar= (x,y)=>x+y;

console.log(namedFnwithMulPar(3,3));  //9


// 2. Named function with single parameter

function namedfn2(num){
  return num<=0;  
}

console.log(namedfn2(2));  //false

//2. arrow conversion

const namedfn2arw=num=>num<=0;

console.log(namedfn2arw(2));

//3. named function with no parameter

function myfunction(){
  return "hi team";
}

console.log(myfunction());

// 3. arrow convertion

const withoutParameter=()=>"Hi Team";

console.log(withoutParameter());

