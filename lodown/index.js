'use strict';

// YOU KNOW WHAT TO DO //
/**
 * identity: Designed to return input value unchanged
 * @param {Any value}: function takes in any value
 * @returns {Any value}: Function returns input value unchanged
 */

function identity(value){
    //return value unchanged
    return value;
};

module.exports.identity = identity;

/**
 * typeof: Designed to return input value datatype
 * @param {Any value}: function takes in any value
 * @returns {string}: Function returns input value datatype as a string 
 */


function typeOf(value){
    if(Array.isArray(value)){
        return "array";
    }else if(typeof(value) === "string"){
        return "string";;
    }else if(typeof(value) === typeof(true)){
        return "boolean";
    } else if(typeof(value) === typeof(4)){
        return "number";
    } else if(value === null){
        return "null";
    } else if(typeof(value) === typeof notavalue){
        return "undefined";
    } else if(typeof value === typeof function (){} ){
        return "function";
    } else if(typeof value === typeof {}){
        return 'object';
    }
    return value;
}
module.exports.typeOf = typeOf;


/**
 * first: Designed to return first items in an array
 * @param {Array}: Function takes in any array
 * @param {Number}: Function takes in a number
 * @returns {Array}: Function returns new array with first element or the first number items in an array
 */

function first(array, num){
    //empty array to store result
    var arr = [];
    //determine if array or not
    if(!Array.isArray(array)){
        return [];
        //determine if num exists
        }if(num === false || typeof num !== typeof 5){
            //if not return first item in array
            return array[0];
      }//iterate through num
      for(var i = 0; i < num; i++){
        //push new items in arr
            arr.push(array[i]);
    }//determine if num is > array length
    if(num > array.length){
            return array;
  } return arr;
}
module.exports.first = first;

/**
 * last: Designed to return last items in an array
 * @param {Array}: Function takes in any array
 * @param {Number}: Function takes in a number
 * @returns {Array}: Function returns new array with last element or the last number items in an array
 */

function last(array, num){
    //determine if array is an array
    if(!Array.isArray(array)){
    //return empty array
        return [];
    //determine if number is not given
    }if(num === undefined){
    //return last element
        return array[array.length - 1];
    //determine if number is greater than the arrays length
    }if(num > array.length){
        return array;
    //determine if number is a negative number
    }if(num < 0){
    //return empty array
        return [];
    //return array sliced
    }return array.slice(1);
}
module.exports.last = last;

/**
 * indexOf: Designed to return the index of <array> that is the first occurrance of <value>
 * @param {Array}: Function takes in any array
 * @param {Value}: Function takes in a value
 * @returns {Index}: Function returns first occurrance of the input value || -1 if array is not an array
 */

function indexOf(array, value){
    for(let i = 0; i < array.length; i++){
        if(value === array[i]){
            return array[i].length
        }
    }
    return -1
}
module.exports.indexOf = indexOf;

/**
 * contains: Designed to return truthy or falsey dependant upon it exists in an array
 * @param {Array}: Function takes in any array
 * @param {value}: Function takes in a value
 * @returns {Boolean}: Function returns true if array contains the value, false otherwise
 */

function contains(array, value){
        //using ternary determin if array has the input value
       return array.includes(value) ? true : false;
}
module.exports.contains = contains;

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * unique: Designed to return a new array of all elements from <array> with duplicates removed
 * @param {Array}: Function takes in any array
 * @returns {Array}: Function returns new array with duplicates removed
 */

function unique(array){
    //use set to return new array without dups
   var noDup = [...new Set(array)]
   return noDup;
}
module.exports.unique = unique;

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/


function filter(array, func){
    var arr = [];
    for(let i = 0; i < array.length; i++){
        func(array[i], i, array) ? arr.push(array[i]) : null
        }
   return arr;
}
module.exports.filter = filter;

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

function reject(array, func){
    var arr = [];
    for(let i = 0; i < array.length; i++){
        !func(array[i], i, array) ? arr.push(array[i]) : null
        }
   return arr;
}
module.exports.reject = reject;

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

function partition(array, func){
    var truthy = [];
    var falsy = [];
    for(let i = 0; i < array.length; i++){
        func(array[i], i, array) ? truthy.push(array[i]) : falsy.push(array[i])
    } return [truthy, falsy]
}
module.exports.partition = partition;

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

function map(collection, func){
    //store saved values
    var bank = [];
    //check if array
    if(Array.isArray(collection) === true){
        //loop through array
        for(let i = 0; i < collection.length; i++){
            //push function into new array
            bank.push(func(collection[i], i, collection));
        }//else it's an object
    } else{
        //iterate through object
    for(var key in collection){
        //push function into new array
        bank.push(func(collection[key], key, collection));
        }
    }//return new array
    return bank;
}
module.exports.map = map;