//example of declartion of objects in JS
var student = {
    name : 'Rahul Tygi',
    age : 23,
    hobbies: {
        movies : 'Hambirrao',
        'fav place' : 'Raigad Fort'
    },
    result : function(){
        return this.name;
    }
}

//adding/updating JS object properties at outermost level
student.name = "Vinod Jwel";

//deletion of JS object properties at outermost level
delete student.age;

//methods to access the properties of JS objects
console.log(student.result(), student.age, student['hobbies'].movies, student.hobbies['fav place']);