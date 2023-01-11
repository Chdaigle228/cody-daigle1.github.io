/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 *  1. Open up the file `functions.js` in your editor.
 2. Implement a function declaration called `search` that:
   - Takes a paramater representing an Array of `animals`.
   - Takes a paramater representing a String, the name of an animal on which to perform a search.
   - Looks through the `animals` Array, and returns the animal's Object if an animal with that name exists.
   - Returns `null` if no animal with that name exists
 3. Use the search bar at the top of the page to make sure your function works.
 */

 /*
 var animal = {};
animal.species = "Dog";
animal['name'] = "Chloe";
animal.noises = [];
console.log(animal);
*/

/*
    describe("Part 2, Step 1: Search", function () {
        it('search() should return animal by name!', function () {
            const
                nameOne = animals[0].name,
                nameTwo = animals[1].name;
            expect(search(animals, nameOne).name).to.equal(nameOne);
            expect(search(animals, nameTwo).name).to.equal(nameTwo);
*/


//animals is an array of objects
//string is the name of the animal being searched
function search(array, string){
    //iterate through animals array of objects
    for(let i = 0; i < array.length; i++){ // don't need to equal length, need index
        //check if name exists in array of objects
        if(string === array[i].name){ // <- if string is (loosely) equal to the name property in each object
            //return animal object
            return array[i]; //<- returns the animals object
            //else, return null
        } 
    } return null
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
