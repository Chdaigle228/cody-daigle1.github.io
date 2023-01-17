/*
Loops are built in constructs ustilized to iterate through
collections of data so that you can work with each individual value
one by one.

Examples of loops are as follows
*/

//THE FOR LOOP

/*
the for loop is useful for looping or iterating through arrays in order to work with each index, whether its forwards or backwards.
IE: for (start; stop; update){
    code to repeat on each iteration(loop)
}
*/

//Example

//  var num = [1, 2, 3];
// // for (var i = 0; i < num.length; i++){
// //   console.log(num[i]); // logging array's index for each iteration
// // }

// //Example in reverse

// for (var i = num.length -1; i >= 0; i--){
//   console.log(num[i]); //logs in reverse
// }

//THE FOR IN LOOP

/*
The for in loop is used for looping over objects in order to use each key wthin an object to get each value one by one.
*/
//Example

// var me = {
//   firstName: 'Cody',
//   middleName: 'Houston',
//   lastName: 'Daigle',
// };
// for(var key in me){
//   //console.log(key);  //logs each key within the me object
//   // console.log(me[key]); //logs each key's value within the me object
//   console.log(me.lastName); // for specific key
// }

/*
Array Syntax or bracket notation is required in order to access each element within an object. using dot notation will attempt to access a property named 'key' and in the example above is no property named 'key'.
Dot notation may be used if you know specifically which key you want access within the object.
*/

//THE WHILE LOOP

/*
A while loop is used to state a true condition and will continue to loop until it becomes false
*/

var num = 0;
while (num < 5){ //0 is less than 5
  console.log(num); //will log the current number num is
  num++; //then will increment in a loop until it becomes false
}