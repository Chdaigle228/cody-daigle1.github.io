/**
 * 0. OPERATORS:
 * There are many types of operators: Assignment, Arithmetic, Logical, Comparison, Unary, and Ternary. 
 * Operators are symbols that are used to act upon data called Operands. Each operator is classed by what it does and how many 
 * operands they require. For instance Unary operators only work with one value, Binary operators work with two, and Ternary works 
 * with three.
 */

/**
 * Assignment Operators:
 * Assigns a value to its first operand based on the value of its second with a single equals(=)
 * The Assignment Operator can be used to shorthand assignments by adding an Arithmetic Operator to it.
 * This method can also be used in conjunction with other Operators such as Comparison or Logical Operators.
 */
x =5;
x += 1; //<- which means x is EQUAL to x PLUS 1
console.log(x); //<- Logs 6 to the console.

/**
 * Arithmetic Operators:
 * These Operators will take a numerical value as it's Operand and return a numerical value. 
 * These operators can even be shorthanded by using the Increment or Decrement Operators
 * Examples of Arithmetic Operators are: +, -, *, /, %, ++, --, **
 */
y = 10;
y++; //<- y++ (or 10 + 1) is an example of the short hand using the increment to increase y's value by 1
console.log(y); //<- This will log 11 to the console.

/**
 * Logical Operators:
 * Typically Logical Operators are used with Boolean values and will return a Boolean value. However some Logical Operators can also
 * be used to return a value from a specific Operand, meaning it is capable of returning non-Boolean values as well.
 * Some examples of these Operators: &&(AND), ||(OR), !(NOT).
 */
z = 5;
y = x && z; //<- y is EQUAL to x's value AND z's value reassigning y's value to equal their's
console.log(y); //< - Logs 5 to the console

/**
 * Comparison Operators:
 * These Operators compare it's Operands and returns a logical value based on if it's true or false. These Operands can be numerical,
 * logical, string, or even object's values. The Comparison Operator is a Binary Operator meaning it takes in two Operands to
 * compare. These Operands are compared based off whether they are the same type or not. If they are not the same type then Javascript
 * will actually attempt to convert them into an appropriate type to compare. This operator can also be used with Logical Operators.
 * Some examples: <, >, ==, ===, !=, !==
 */
a = 5;
b = 6;
c = a !== b //< c's assignment equals a boolean based off if a is NOT EQUAL to b.
console.log(c) //<-- Logs true to the console.
/**
 * Unary Operators:
 * This operator only takes in one Operand. It acts upon a single Operand, in an expression or statement, and returns a value.
 * Many Operators actually have Unary Operators as well.
 * Some examples: delete, typeof, -, + 
 */
var who = "Me";
typeof(who); //<- typeof Operator will return the datatype it is called with. It will log 'string' to the console.

/**
 * Ternary Operators:
 * Also called a Conditional Operator and it is the only one that takes three operands. It can have one of two values 
 * based on a condition. It can be seen as type of if-else statement. Where ever a standard Operator is
 * used, a Ternary Operator can be as well.
 */
 //The syntax is: 
 theCondition ? firstValue : secondValue //So if theCondition is true then it's value becomes firstValue, 
//                                                          else it becomes secondValue.