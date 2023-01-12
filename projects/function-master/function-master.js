//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
return Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    var str = Object.keys(object);
    return str.join(' ')
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
var arr = [];
    for(var key in object){
      if(typeof object[key] === 'string'){
        arr.push(object[key])
        }var newStr = arr.join(' ')
    }return newStr
}
//     var arr = [];
//     var str = Object.values(object);
//     if(typeof str === 'string'){
//        arr.push(str)
//     } 
//     var newStr = arr.join(' ');
//     return newStr
// }

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
   if(Array.isArray(collection)){
    return "array"
    }
    return "object"
   }

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
 return string[0].toUpperCase() + string.substring(1)
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    var arr = string.split(' ');
    for(let i = 0; i < arr.length; i++){
       arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1)
      
    }  return arr.join(' ')
   
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
return "Welcome " + object.name[0].toUpperCase() + object.name.substring(1) + '!'
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object with a name an a species and return '<Name> is a <Species>'"
function profileInfo(object) {
    var name = object.name[0].toUpperCase() + object.name.substring(1)
    var species = object.species[0].toUpperCase() + object.species.substring(1)
    return name + ' is a ' + species
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object, if this object has a noises array return them as a string separated 
//by a space, if there are no noises return 'there are no noises'"

function maybeNoises(object) {
    if(Array.isArray(object.noises) && object.noises.length > 0){
        return object['noises'].join(' ');
    }
    return 'there are no noises';
}
// if(object.hasOwnProperty(noises)){
//     return noises.join(' ')
//     }
//     return "there are no noises"
// }

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false."

function hasWord(string, word) {
if(string.includes(word)){
    return true;
    } else{
        return false
    }
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take a name and an object and add the name to the object's friends array then return the object"

function addFriend (name, object) {
object['friends'].push(name);
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Should take a name and an object and return true if <name> is a friend of <object> and false otherwise"

function isFriend(name, object) {
    if(Object.hasOwn(object, 'friends') && object['friends'].includes(name)){
        return true;
    }
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Should take a name and a list of people, and return a list of all the names that <name> is not friends with"

function nonFriends(name, array) {
    //create empty array to put not friends in
    var enemy = []; 
    //loop through array of objects
    for (var i = 0; i < array.length; i++) {
        //create variable for friend
        var isFriends = false;
        //check if the input is the same as a name within the array of objects
        if (name !== array[i].name){
            //loop over the friends array in each object
            for (var f = 0; f < array[i]['friends'].length; f++){
                //check if they are friends with the input
                if (array[i].friends[f] === name){
                    isFriends = true;
                } 
            }
            //outside of loop for friends check if isFriends is not true so it can be pushed
            if (!isFriends) enemy.push(array[i].name);
        }
    }
    return enemy;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Should take an object, a key and a value. Should update the property <key> on <object> with new <value>. 
//If <key> does not exist on <object> create it."

function updateObject(object, key, value) {
    for(key in object){
    }
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}