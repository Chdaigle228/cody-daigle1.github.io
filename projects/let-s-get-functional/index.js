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

//npm start --prefix ./cody-daigle1.github.io/projects/let-s-get-functional
function friendFirstLetterCount(array, customer, letter) {
  //filter through the customers and match names
  let filterCustomers = array.filter(person => person.name === customer)[0];
  if (filterCustomers === false) {
    return 0;
  }  //filter through friends
 let allFriends = filterCustomers['friends'].filter(friend => friend['name'].toUpperCase().startsWith(letter.toUpperCase()));
 return allFriends.length
}

//Find the customers' names that have a given customer's name in their friends list
//npm start --prefix ./cody-daigle1.github.io/projects/let-s-get-functional
var friendsCount = function(array, name){
    //create name collection becuase can't figure out high order functiuon
    let isFriends = [];
    //loop over customers array of objects the old school way
    for(var i = 0; i < array.length; i++){
      //loop over friends array of objects in customers array of objects
      for(var f = 0; f < array[i].friends.length; f++){
        //determine if customer is friends with other customers
        if(array[i].friends[f].name === name){
          //push customer's name into names array
          isFriends.push(array[i].name);
        }
      }
    }
    return isFriends;
  }

//npm start --prefix ./cody-daigle1.github.io/projects/let-s-get-functional
var topThreeTags = function(array) {
    // collect every tag into one location
    let tag = [];
    //loop over customers array of objects
    for (let i = 0; i < array.length; i++) {
      //loop through customer's tags
      for (let r = 0; r < array[i].tags.length; r++) {
        //current tag at each iteration pushed to []
        tag.push(array[i].tags[r]);
      }
    }
    //create tag variable
    let topTags = {}; //will have every tag every time it appears
    //iterate through all tags
    //console.log(topTags);
  
    for (let i = 0; i < tag.length; i++) {
      //determine if the current tag already exists in tag
      if (topTags[tag[i]]) {
        topTags[tag[i]]++;
      } else { //else it does not
        topTags[tag[i]] = 1;
      }
      //create new array for sub arrays
    } var tagsCount = [];
    for (var key in topTags) {
      tagsCount.push([key, topTags[key]]);
    } var final = tagsCount.sort((a, b) => {
      return b[1] - a[1]
    });
    var done = [];
    for (var q = 0; q < 3; q++) {
      done.push(final[q][0]);
    }
    return done;
  }

//npm start --prefix ./cody-daigle1.github.io/projects/let-s-get-functional
var genderCount = function(array) {
    var sex = {
      male: 0,
      female: 0,
      'non-binary': 0
    };
    _.reduce(array, function(acc, curr) {
      if (curr.gender === 'male') {
        sex.male += 1;
      } else if (curr.gender === 'female') {
        sex.female += 1;
      } else {
        sex['non-binary'] += 1;
      }
    }, 0);
  
    return sex;
  }


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
