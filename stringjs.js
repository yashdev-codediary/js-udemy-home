/* 

There are two types of strings or object we can say
Reference type and primitive types

We can change the property of reference type object but cannot with primitive types
*/

//example of reference type object
var student = {
    name: "Rahul"
};

//we can add/update the property of student object
student.age = 20;
student.className = '10A';
console.log(student);

//but we cannot add properties to primitive type object with above method
//example of primitive type object

var myString = "Hello World";

//myString.age = 29;  //wrong method

//instead we can manipulate by predefined or default string functions
var mySubString = myString.substring(2); //right method
console.log(mySubString);


/* 

Part 2: String Manipulation Methods in for primitive types
*/

// method 1: concate()
var strValOne = "Hi, This is New York. ";
var finalResult = strValOne.concat('It is my hometown too.', 'Thanks !');
console.log(finalResult);

//method 2: slice()
var strCellWithOneArgs = strValOne.slice(3);
var strCellWithTwoArgs = strValOne.slice(3,8);
console.log("Result of Slice method with one argument:  "+strCellWithOneArgs);
console.log("Result of Slice method with Two argument:  "+strCellWithTwoArgs);

//method 3: subtstring()
var strSubResult = finalResult.substring(5);
console.log("Result of Substring method: "+strSubResult);

/*
Part 3: String manipulaton methods 

*/
// trim()
var TrimMethodExample = "        The WSJ noted that the iPhone 3G addressed the two main drawbacks of the original";
console.log(TrimMethodExample.trim());

/* 
Part 4: string pattern matching functions

*/

// match() - matches the desired pattern with given string and returns the word containing that pattern

var strMatchExample = 'The rainy season in the SPAIN is mainly in the gain.'
var patterns = /.ain/g;     //finds the word which contains 'ain' in them and 'g' defines as global for getting all words containing 'ain'.
var resultMatch = strMatchExample.match(patterns);
console.log(resultMatch);

//replace() - it replces the word with given string/pattern.

var strReplaceExample = 'Cat is playing with bat along with rat now becomes fat';
var resultWithoutPattern =  strReplaceExample.replace('at', 'aor');
console.log(resultWithoutPattern); //only replaces the first match - Coar

var resultWith0Pattern = strReplaceExample.replace(/at/g, 'ond');
console.log(resultWith0Pattern); //replces all matching with pattern.

//split() - method does split given string on basis of given pattern and creates ordered list
var splitrStrExample = 'Compare the cloud provides up to date, exciting, and comprehensive blogs in the fields of cloud, AI, FinTech, IoT, blockchain, and much more.'
console.log(splitrStrExample.split(','));

