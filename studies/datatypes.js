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
//      null: No value, absence of an object. - Often intentional. Unlike other languages, 
//      in JS it is considered an object. Weird.          
//      undefined: No value, not initialized - indicates an absence of value          
            return; //<- implicitly returns 'undefined'
/**  Then there are some numerical datatypes, like NaN, but are 'Mathematical' types.
 *   These are inifinty and -infinity. Inifinity is reached when a number exceeds the 
 *   upper limit for a number, while -infinity is the lower limit
 * 
 *  These datatypes are immutable and do not hold, combine, or collect other values and can only return simple values.
 *  Mostly can be identified with the typeOf operator, besides null. Simple Datatypes are copy-by-value.
 *  Copy-by-value means that a value sends a copy of the data stored in the variable that is specified.
 */ 
    let simple = 'a'; //<- variable simple equals 10
    let newSimple = simple; //<- newSimple copies the value of the variable simple, but is not
//                              connected to let simple = 10
 /* 
 * 2. Complex Datatypes:
 *       Array: A collection with list like items, organaized by index - [array]
 *              (Note: Arrays are not exactly datatypes, but data structures, instead)
 */      let array = [1, 2, 3, 4, 5]// <- an array of numbers
//       Object: A collection with key/value pairs. An Associative array. - {object}
         let obj = {name: "Cody"} //<- An object with a key of name and a value of 'Cody'
//      Function: A statement, or set of statements, that performs a task or calculates a value.
        let func = function(){}
 /* 
 *  These Datatypes are considered mutable and can combine simple and complex datatypes. With that in mind, they are capable of
 *  an indefinite size, unlike simple datatypes. Complex Datatypes are copy-by-reference.
 *  Copy-by-reference means that a passed in reference sends a direct link to the variable itself.     
 */ let newObj = {name: "Cody"}; //<- newObj is pointing at {name: "Cody"}
        let newerObj = newObj; //<- newerObj is pointing at the same memory address as newObj