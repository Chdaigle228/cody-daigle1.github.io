/**
 *                                            DATATYPES
 * Datatypes:
 * 
 * 0. Built-in data structures in Javascript That can be mutable or immutable. These types are described as simple, or primitive,
 *    datatypes and complex datatypes. Simple datatypes are considered to be 'immutable' or unchangable. Whereas, complex datatypes
 *    are considered to be 'mutable' or changable.
 * 
 * 1. Simple/Primitive Datatypes:
 *      Number: Numeric Data - Any combonation or single use of numbers
 */        typeOf 1234567890 //<- will return "Number"
 //     string: Character Data - Usually combined with quotes
           Console.log("This is a string") //<- Will log 'This is a string' to the console 
//      Boolean: True or false
           Console.log(true) //<- will log true to the console 
//      NaN: Not a Number
           console.log(Math.sqrt(-1)) //<- will log 'NaN' to the console.  
//      null: No value, absence of an object. - Often intentional. Unlike other languages, JS is considered an object. Weird.          
//      undefined: No value, not initialized - indicates an absence of value          
            return; //<- implicitly returns 'undefined'
 /* 
 *  These datatypes are immutable and do not hold, combine, or collect other values and can only return simple values.
 *  Mostly can be identified with the typeOf operator, besides null. Simple Datatypes are copy-by-value
 * 
 * 2. Complex Datatypes:
 *       Array: A collection with list like items, organaized by index - [array]
 */      let array = [1, 2, 3, 4, 5]// <- an array of numbers
//       Object: A collection with key/value pairs. An Associative array. - {object}
         let obj = {name: "Cody"} //<- An object with a key of name and a value of 'Cody'
//      Function: A statement, or set of statements, that performs a task or calculates a value.
        let func = function(){}
 /* 
 *  These Datatypes are considered mutable and can combine simple and complex datatypes. With that in mind, they are capable of
 *  an indefinite size, unlike simple datatypes. Complex Datatypes are copy-by-reference
 *     
 */