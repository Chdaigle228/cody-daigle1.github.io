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
 * @returns {Number}: Function returns the index of the input value || -1 if array is not an array
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
 * contains: Designed to return truthy or falsey dependant upon if it exists in an array
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
    const noDup = array.filter((element, index) => {
        return array.indexOf(element) === index;
    });
    return noDup
}
module.exports.unique = unique;

/**
 * filter: Designed to return a new array of elements for which calling <function> returned true
 * @param {Array}: Function takes in any array
 * @param {Function}: callbackfn returns new array with truthy elements
 * @returns {Array}: Copy of array with the truthy elements
 */

function filter(array, func){
    var arr = [];
    for(let i = 0; i < array.length; i++){
        func(array[i], i, array) ? arr.push(array[i]) : null
        }
   return arr;
}
module.exports.filter = filter;

/**
 * reject: Designed to return a new array of elements for which calling <function> returned false. The logical inverse of filter()
 * @param {Array}: Function takes in any array
 * @param {Function}: Function takes in a callbackfn
 * @returns {Array}: Function returns new array with falsey elements
 */

function reject(array, func){
    var arr = [];
    for(let i = 0; i < array.length; i++){
        !func(array[i], i, array) ? arr.push(array[i]) : null
        }
   return arr;
}
module.exports.reject = reject;

/**
 * partition: Designed to separate truthy and falsey items within an array and combine them as sub arrays within an array
 * @param {Array}: Function takes in any array
 * @param {Function}: Function takes in a callbackfn
 * @returns {Array}: Function returns new array with a falsey elements array & truthy elements array inside, separated.
 */

function partition(array, func){
    var truthy = [];
    var falsy = [];
    for(let i = 0; i < array.length; i++){
        func(array[i], i, array) ? truthy.push(array[i]) : falsy.push(array[i])
    } return [truthy, falsy]
}
module.exports.partition = partition;

/**
 * map: Designed to iterate through collection(s) elements and copy items into a new array
 * @param {Collection}: Function takes in any array/object
 * @param {Function}: Function takes in a callbackfn
 * @returns {Array}: Function returns a copy of the collection as a new array
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

/**
 * pluck: Designed to iterate through an array of objects for properties
 * @param {Array of Objects}: Function takes in any array of objects
 * @param {Property}: Resemebles the property values during the iteration
 * @returns {Array}: Function returns new array with al the values of each property in an array
 */

_.pluck = function(array, prop){
var plucked = array.map(function(arr){
    return arr[prop]
    })
    return plucked
}
module.exports.pluck = pluck;

/**
 * every: Designed to iterate through a collection for truthy/falsey elements
 * @param {Collection}: Function takes in any array/object
 * @param {Function}: Function takes in a callbackfn
 * @returns {Boolean}: Function returns true if all elements are truthy, but false if any one returns falsey
 */

_.every = function(collection, func){
         if(Array.isArray(collection)){
            //check if noi function passed in
            if(func === undefined){ //<-- meaning it has nothing passed into it
                for(let i = 0; i < collection.length; i++){
                    if(!collection[i]){ //check if NOT truthy
                        return false;
                    }
                }
            }else{
                for(let i = 0; i < collection.length; i++){
                    //check if result of invoking func is truethy/falsey\
                    if(func(collection[i], i, collection) === false){
                        return false;
                    }
                }
            }
            //else it's an object
        } else{ 
            if(Array.isArray(collection)){
                for(let i = 0; i < collection.length; i++){
                    if(func(collection[i], i, collection) === false){
                        return false;
                    }
                }
            } else{
                for(let key in collection){
                    if(func(collection[key], key, collection) === false){
                        return false;
                }
            }
        }
    }
    return true;
    
}
module.exports.every = every;

/**
 * some: Designed to iterate through a collection for any truthy element. Direct inverse of every()
 * @param {Collection}: Function takes in any array/object
 * @param {Function}: Function takes in a callbackfn
 * @returns {Boolean}: Function returns true if at least one element is truthy, otherwise false if none are truthy
 */

_.some = function(collection, func){
    //call func if its an array
    if(func === undefined ){
        if(Array.isArray(collection)){
            for(let i = 0; i < collection.length; i++){
                if(collection[i] === true){
                    return true;
                }
            }
        } else {
            for(let key in collection){
                if(collection[key] === true){
                    return true;
                }
            }
        }
    } else{ 
        if(Array.isArray(collection)){
            for(let i = 0; i < collection.length; i++){
                if(func(collection[i], i, collection) === true){
                    return true;
                }
            }
        } else{
            for(let key in collection){
                if(func(collection[key], key, collection) === true){
                    return true;
                }
            }
        }
    }
    
    return false;
}
module.exports.some = some;
/**
 * reduce: Designed to iterate through an array and return an accumulated value
 * @param {Array}: Function takes in any array
 * @param {Function}: Function takes in a callbackfn
 * @param {Seed}: Function takes in a seed valey for callbackfn
 * @returns {Array}: Function returns the accumulated element per all indexs
 */

_.reduce = function(array, func, seed){
    var result;
    //check if seed is defined
    if(seed === undefined){
        //force seed to default to 0 index
        result = array[0];
        //loop through array for indexs starting at index 1
        for(let i = 1; i < array.length; i++){
            //blank variable will become the function call when result was the seed
            result = func(result, array[i], i, array)
        }
    }else{//it has a seed
        //blank variable is the seed
        result = seed;
        //loop through array for index for seed
            for(let i = 0; i < array.length; i++){
                //blank variable will become the function call when result was the seed
                result = func(result, array[i], i, array)
        }
    }
    return result;
};
module.exports.reduce = reduce;
/**
 * extend: Designed to add iterables into each other, by the order they are passed in
 * @param {Object}: Function takes in any object
 * @param {Object}: Function takes in a second object
 * @param {Object}: Takes in an empty object
 * @returns {Array}: Function returns new array with a falsey elements array & truthy elements array inside, separated.
 */

_.extend = function(object1, object2, def={}){
    //use Object.assign to add to first object
    let obj = Object.assign(object1, object2, def)
    return obj
}
module.exports.extend = extend;