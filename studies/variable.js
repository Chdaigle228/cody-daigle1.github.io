//********************************************Notes********************************* */
/**
 * 
 * VARIABLES:
 * 
 * 0:(intro) Variables are named containters for data in javascript. we can declare variables with the var, let, const 
 * keywords.
 * 
 * 1: Declarations & assignment: To create a variable in javascript it must be declared with a declarative keyword
 * 
 * 2: Var, Let, Const: Var, let, and Const are doff dec;atratyo keywordsa,s they do different thnksd...
 * 
 * need to have examples of everthing
 * 
 * var age; ..declares varaible
 * age = 31 //names the variable
 */
//********************************************start********************************* */
/**
 * VARIABLES:
 * 
 * 0: Variables are name containers (var) for reassignable values and are hoisted to their function or global scope.
 * Variables have the capability to be reassigned to another value, may contain primitive type values or even point to a location
 * in memory where a complex value is stored. 
 * Constants (const) are containers whose values cannot be changed. They do not get hoisted like variables, are block scoped, and 
 * must be declared imediately, unlike variables. 
 * The let (let) constainer is a mixture between the two. They can be reassigned like a variable, but will not be hoisted to the top
 * of it's scope.
 * 
 **/
 /* 
 *  1: Declaration:
 *  a. A statement used to give a specific peice of information a name, but not a value.
 */
 var food;
 console.log(food); // <- This will log undefined to the console becuase the food variable was not initialized
  /*
  * 1: Assignment:
  * b. statement that gives a named container a specific value to point at and initializes it.
  */
 food = "pizza";
 console.log(food); // <- This will log the "pizza" string to the console due to calling it's declared name.
 /*
  * 2. variable Containers:
  * var (variable): The var keyword can be reassigned and is hoisted to their function or global scope.
  * const (constant): a variable that cannot be reassigned and it is block scoped so it does not get hoisted.
  * let: The let keyword is a variable that may be reassigned, but is block scoped.
  * 
  * 
  * 3. Hoisting
  * Before the execution of a program's statements the var keyword and function declarations are hoisted to the top.
  * Due to them being hoisted they will not cause a reference error if they are referenced before they are declared, but
  * only the declaration is hoisted, not the initialization.
  */
 toppings = "cheese"; // < - assigning the value of 'cheese' to toppings before declaration
 console.log(toppings); // <- calling the toppings before it was declared. This logs cheese
 var toppings; // <- declares the variable toppings, but the var declaration is hoisted before execution and is not undefined.
 /*
 let and const do not get hoisted like var does and is declared after initialization so it must be done first otherwise
 it will throw a ReferenceError: Cannot access 'meat' before initialization.
 Note that const cannot be left unassigned or undefined.
 */
 meat = "Bacon"
 console.log(meat); 
 let meat; //<- returns ReferenceError
 