// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    //loop over 1-100
    for(var i = 1; i <= 100; i++){
        //make empty string variable for numbers between 1-100
        var nums = '';
        //check if each number is a remainder of 3
        if (i % 3 === 0){
            //add string to empty string
             nums += 'Fizz';
        //check if each number is a remainder of 5
        }if (i % 5 === 0){
            //add string to empty string
            nums += 'Buzz';
        //log the string of nums OR just the number if false
         } console.log(nums || i)
    }


    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}