// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');
const { pullAll, pull } = require('lodash');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./cody-daigle1.github.io/projects/let-s-get-functional
 * 
 *      Directory: cd projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    let males = array.filter((customer) => {
        return customer.gender === 'male'
    });
    return males.length
};
//npm start --prefix ./cody-daigle1.github.io/projects/let-s-get-functional
var femaleCount = function(array){
    let females = _.reduce(array, function(acc, curr){
        if(curr.gender === 'female'){
            acc += 1;
        }
        return acc;
    }, 0)
    return females;
}


//npm start --prefix ./cody-daigle1.github.io/projects/let-s-get-functional
var oldestCustomer = function(array){  //reduce with no seed value
    var old = array.reduce((acc, curr) => {
        if(curr.age > acc.age){
            return curr;
        } else {
            return acc;
        }
    });
    return old.name
}

//npm start --prefix ./cody-daigle1.github.io/projects/let-s-get-functional
var youngestCustomer = function(array){ //reduce with no seed value 
    var kid = array.reduce((acc, curr) => {
        if(curr.age < acc.age){
            return curr;
        } else {
            return acc;
        }
    });
    return kid.name
} 

//npm start --prefix ./cody-daigle1.github.io/projects/let-s-get-functional
var averageBalance = function(array){
    //use reduce method to turn values into one element
    let avg = array.reduce((acc, curr) =>{
    //remove symbols and quotes
    let rep = curr.balance.replace(/['$',]/g, "");
    //account for decimal with parseFLoat
    let parse = parseFloat(rep);
    //return the accumulator with the parsed number
    return acc + parse;
    }, 0)
    return avg / array.length;
};

//npm start --prefix ./cody-daigle1.github.io/projects/let-s-get-functional
var firstLetterCount = function(array, letter){
    let names = array.reduce((acc, curr) =>{
        //declare new variable for curr
        let first = curr.name.toUpperCase().startsWith(letter.toUpperCase());
        //return acc + new variable to incriment
           return acc + first
           //seed of 0
    }, 0);
    //return function
    return names
};

//Find how many friends of a given customer have names that start with a given letter
var friendFirstLetterCount = function(array, customer, letter){
let cust = array.reduce((acc, curr) => {
    
})
}

//npm start --prefix ./cody-daigle1.github.io/projects/let-s-get-functional
var friendsCount;

//npm start --prefix ./cody-daigle1.github.io/projects/let-s-get-functional
var topThreeTags;

//npm start --prefix ./cody-daigle1.github.io/projects/let-s-get-functional
var genderCount;


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
