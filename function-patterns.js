/*

Factory Pattern and Constructor pattern in JS

*/

// Part1 - Factory Pattern

function addEmployeeDetails(name, age, designation)
{
    var stdObj = new Object();
     stdObj.name         = name;
     stdObj.age          = age;
     stdObj.designation  = designation;
     stdObj.printName = function()
    {
       alert(this.name);
    };
    return stdObj;

}

var employee1 = addEmployeeDetails('Rahul Jadeja', '30', 'developer');
console.log(employee1);

// part 2: constructor pattern
function DetailsOfEmployee(name, age, designation)
{
     this.name         = name;
     this.age          = age;
     this.designation  = designation;
     this.printName = function()
    {
       alert(this.name);
    };

}

var employeeDetails = new DetailsOfEmployee("Karan Ojha", 35, 'Project Manager');
console.log(employeeDetails);

// part 3 : prototype pattern

function ExampleOfPrototype(){
    //
}

ExampleOfPrototype.prototype.name = "Henry Volts";
ExampleOfPrototype.prototype.age = 40;
ExampleOfPrototype.prototype.designation = 'CGO';
ExampleOfPrototype.prototype.sayName = function()
{
    alert(this.name);
};
ExampleOfPrototype.prototype.whatIsJob = function()
{
    alert('Your job role is: '+ this.designation);
};

var emp1 = new ExampleOfPrototype();
emp1.sayName();

var emp2 = new ExampleOfPrototype();
emp2.whatIsJob();

//part 4: combination of constructor and prototype pattern

function EmployeeConstructor(name, totalexp, companyName)
{
    this.name = name;
    this.totalexp = totalexp;
    this.companyName = companyName;
}

EmployeeConstructor.prototype = {
    constructor: EmployeeConstructor(),
    getDetailCompany: function() {
        console.log('Company name is: '+this.companyName);
    }
}


//example
function PersonInfo(name, age, job, address){
    this.name = name;
    this.age = age;
    this.job = job;
    this.address = address;
}

PersonInfo.prototype = {
    constructor: PersonInfo,
    PrintName: function(){
        alert(this.name);
    }

}

var SendInfo = new PersonInfo('Jayesh', 30, 'Marketing', 'Mumbai');
console.log(SendInfo);