

/**
   Question 3 

   execution context:
  The execution context in JavaScript is the environment where JavaScript code is executed. It has two components: a memory component and a code component. 
 
 Execution phase:
 JavaScript Execution Context is the environment in which JavaScript code is executed. It contains information about the variables, functions, and objects that are available to the code being executed


creation phase:   
In this phase, the JavaScript engine sets up the environment for the code to be executed. During this phase, the JavaScript engine creates the following:

The Variable Object (VO): The VO contains all the variables and functions that are defined in the current scope. This includes function arguments, function declarations, and variable declarations. The VO is used to resolve identifiers to their values during execution.
 */


/**
 *   Question 6
    Difference between undefined vs not defined vs NaN

    undefine: when a variable is declared and not initialized or not assigned with any value.

    Not Defined: variable is not defined and try to Access them than we can get error

    NaN:NaN stands for "Not a Number" and is a value in JavaScript used to represent an undefined or unrepresentable value.
 */

    /**
        Question 8

       Block Scope, : means a variable declare inside block or function called local Scope
       {
       let a=45
       console.log(a);
       } 
       this variable valid only inside the black 
       we can not access this variable out side of the block (const,let follow block but var follow global Scope)

       Local Scope:
       Variables declared inside a function have local scope and can only be accessed within that function.

      function printMessage() {
      var message = 'Hello, World!';
      console.log(message);
     }

      printMessage(); // Output: Hello, World!
      console.log(message); // Error: message is not defined

     Scope Chain:
     What if we define a function inside a function and access the global variable inside the inner function? Yes, as you know we can do so as a global variable is available anywhere in the code, we can access it in the inner function as well.

     When a variable is accessed, Javascript first searches for it in the current scope, and if it's not found, it moves up the scope chain until the variable is found or the global scope is reached.

    This hierarchical structure determines the order in which Javascript looks for variables is called a Scope Chain


   var globalVariable = "Hello"
   function outer() {
   var outerVariable = 'My';

    function inner() {
     var innerVariable = 'World';
    console.log(globalVariable + ' ' + outerVariable + ' ' + innerVariable);
  }

   inner(); // Output: Hello My World
}
outer();
     */


