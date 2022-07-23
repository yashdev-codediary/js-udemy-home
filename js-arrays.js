// there are two methods by which we can declare array in js
// method 1: by new keyword

var objArray = new Array("red", "yellow", "green", 34, 56,675, ['yes', 'no', 34.89]);
console.log(objArray);

// method 2: by literals []

var litArray = [1,2,3,46,109];
console.log(litArray);

//get the length of an array
console.log("Length of litArray: "+litArray.length);

//accessing the array element
console.log("fav color is: "+objArray[2]);

//manipulating the array length
console.log("original lenght of objArray: "+litArray.length);
console.log("reduced length of objArray: "+(litArray.length = 2));
console.log(litArray);

//detecting array is true/false
console.log(Array.isArray(objArray));

//conversion methods - toString(), join()
var exArrya = ['Rahul', 'Himanshu', 'Lodha'];
console.log(exArrya.toString());  //converts array into string
console.log(exArrya.join(' '));		//takes an argument of on which basis we want to join array element. here I use space

// stack methods - last in first out
// push() method insert element/s in the last
// pop() method will removed the last item
var games = [];
games.push('cricket', 'volleyball', 'basketball');
console.log(games);
games.push('baseball');
console.log(games);

var delItem = games.pop();
console.log(games);
console.log("Deleted item: "+delItem);

// queue methods - first in first out
// shift() - removes first item in array. can be use as opposite of pop()
// unshift() - addes items in first place of array

var queArray = ['Karan', 'Raj', 'Payal'];
queArray.unshift('Lalit', 'John');
console.log(queArray);
var queRemoveItem = queArray.shift();
console.log(queArray, "Removed item: "+queRemoveItem);

// manipulation method - concat(), slice(), splice() 
var maniArray = new Array('mumbai', 'nashik', 'nagpur', 'raigad');
var concatArray = maniArray.concat(['Sindhudurga', 'Parbhani', 'Akola']);
console.log("orginal array: "+maniArray+" , concated array: "+concatArray);

//slice method - use for to show part of an array
console.log(concatArray.slice(2));
console.log(concatArray.slice(1,4)); //last one skips

// splice() - insert/replace/delete items from specific positions
// for just showing items from index 1 to 4
//console.log("original array: "+concatArray+" --- array after splice: "+concatArray.splice(1,4));

// for adding an item in specific position
var stateMap = ['Maharashtra', 'Goa', 'Rajasthan', 'Uttar Pradesh'];
var spliceArray = stateMap.splice(0,2);
console.log("orginal array: "+stateMap+" , spliced array: "+spliceArray);