/* 
	Here is an example of function expression in Javascript
*/
//function as function in arguments
function callFunction(myNewFunction,  gfunArgs)
{
	return myNewFunction(gfunArgs);
}

// function declaration for addition
function addNumbers(num)
{
	return num + 100;
}

var finalResult = callFunction(addNumbers, 374);  //this is called function expression
console.log(finalResult);