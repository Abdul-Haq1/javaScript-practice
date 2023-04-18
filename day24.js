// scope refers to the visibility of variables. Variables which are defined outside of a function block have Global scope. 
// This means, they can be seen everywhere in your JavaScript code.


const globalScope = 23;

function fun1() {
    globalScopeVar = 5; //the varible which intialize without CONST or LET variable they autmotically became global scope varible 
} 

fuction fun2(){
  console.log(globalScope + globalScopeVar);
}  
