//var firstName = 'Kamal';

// var job = 'human'
// switch(job) {
//     case 'trotro':
//         console.log(firstName + ' is a trotro Driver')
//         break;
//     case 'Startup':
//         console.log(firstName + ' runs a shitty startup')
//         break;
//     case 'human':
//         console.log(firstName + ' needs deliverance')
//         break;
//     default:
//         console.log (firstName + ' should not exist in this world')
// }

// falsy value: undefined, null, 0, '', NaN
// truthy values are all values that are not falsy

// var johnTeamScore = 89 + 120 + 103;
// var mikeTeamScore = 116 + 94 + 123;

// var avgJohnTeam = johnTeamScore/3;
// var avgMikeTeam = mikeTeamScore/3;

// if (avgJohnTeam > avgMikeTeam) {
//     console.log('John\'s team is the winner with ' + johnTeamScore + ' points.')
// } else if (avgJohnTeam === avgMikeTeam) {
//     console.log('John\'s team and Mike\'s team both have equal points of' + avgJohnTeam)
// } else {
//     console.log('Mike\'s team is the winner with ' + mikeTeamScore + ' points.')
// }


//function declaration
// function calculateAge(birthYear) {
//     return 2022 - birthYear;
// }
// var ageMike = calculateAge(1995);
// var ageJohn = calculateAge(1935);
// var ageJane = calculateAge(1990);

// // console.log(ageJane,ageJohn,ageMike);

// function yearsUntilRetirement (year, firstName){
//     var age = calculateAge(year);
//     var retirement = 65 - age;
//     if (retirement > 0) {
//         console.log(firstName + ' retires in ' + retirement + ' years.');
//     } else {
//         console.log(firstName + ' has already retired.');
//     }
// }

// yearsUntilRetirement(1993, 'David');
// yearsUntilRetirement(1935, 'John');
// yearsUntilRetirement(1953, 'Mike');


//function expressions

// var whatDoYouDo = function(job, firstName) {
//     switch (job) {
//         case 'teacher':
//             return firstName + ' teaches kids how to code.';
        
//         case 'driver':
//             return firstName + ' driver a car in Lisbon.';
        
//         case 'designer':
//             return firstName + ' designs beautiful codes.';
        
//         case 'parent':
//             return firstName + ' sponsors kids education.';
        
//         default:
//             return firstName + ' does something else.'
//     }
// }

// console.log(whatDoYouDo('teacher','John'));
// console.log(whatDoYouDo('driver','Mark'));
// console.log(whatDoYouDo('designer','Tony'));
// console.log(whatDoYouDo('parent','Mum'));
// console.log(whatDoYouDo('retired','Mark'));

//Arrays

// var john = ['John', 'Smith', 1990, 'teacher', false];

// john.push('blue')
// console.log(john)

// function tipCalculator(bill) {
//     var percentage;
//     if (bill < 50) {
//         percentage = .2
//     } else if (bill >= 50 && bill <= 200) {
//         percentage = .15
//     } else {
//         percentage = .1
//     }
//     return percentage * bill;
// }

// var billPaid = [124, 48, 268];
// var tips = [tipCalculator(billPaid[0]), 
//             tipCalculator(billPaid[1]), 
//             tipCalculator(billPaid[2])];
// console.log(tips);

// var totalBillPaid = [   billPaid[0] + tips[0],
//                         billPaid[1] + tips[1],
//                         billPaid[2] + tips[2]
//                     ]
// console.log(totalBillPaid);

//Objects

// john = {
//     firstName: 'John',
//     lastname: 'Smith',
//     birthYear: 1990,
//     familymembers: ['Ted','Bundy','Philips','Joan'],
//     calcAge: function() {
//         this.age = 2022 - this.birthYear;
//     },
//     isMarried: false
// }
// john.calcAge();

// console.log(john)


//Javascript Dom


// var Person = function(name, yearOfBirth, occupation) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.occupation = occupation;
// }

//inheritance
// Person.prototype.calculateAge = function () {
//     console.log(2022 - this.yearOfBirth)
// }
// Person.prototype.lastName = 'Smith';

// var john = new Person('John',1990,'Teacher');
// john.calculateAge();

// var jane = new Person ('Jane', 1980, 'Doctor');
// jane.calculateAge();
// var mark = new Person ('Mark', 1975, 'Pilot');
// mark.calculateAge();

// console.log(john.lastName);
// console.log(jane.lastName);
// console.log(mark.lastName);

// var x = [1,2,3]
// console.info(x);

//Using Object.create function
// var personProto = {
//     calculateAge: function () {
//         console.log(2022 - this.yearOfBirth);
//     }
// }


//Passing functions as arguments

//var years = [1990, 1986, 1965, 1994, 2000];


//destructuring arrrays

// [a,b] = ['Boy', 'Girl'];
// console.log(b);

// console.log('I am working');

//factory function
// function createCircle (radius) {
//     return {
//         radius,
//         draw: function () {
//             console.log('draw')
//         }
//     };
// }
// const circle = createCircle(1);

// //constructor function

// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function () {
//         console.log('Draw')
//     }
// };
// const colors = ['red','yellow','blue'];
// const items = colors.map(color => `<li>${color}</li>`);
// console.log(items);


//spread operator

// const first = [1,2,3];
// const second = [4,5,6];
// const combined = [...first, 'end of first', ...second, 'end of second'];
// console.log(combined)


// console.log(a);
// let a = 4;

// console.log(a);//stateful
// import React, {Component} from React;

// class David extends Component {
//     state = {
//         count: 0
//     }

//     render () {
//         return (
//             <div>
//                 {this.props}
//             </div>
//         );
//     }
// }
// export default David;

// //stateless
// import React from React;

// const nana = () => {
//     return (
//         <div>
//             {props}
//         </div>
//     )
// }

// export default nana;




//hoisting
//closure
//currying
//pure function

// ajax vs REST

//propdrilling - how to prevent it?

// Jest - toBe vs toEqual?

// localstorage vs sessionstorage

// throttling vs debounce

//put vs patch

//401, 403, 400 and 201

//JWT and CORS - why are they important?

// monolith vs microservices

// how do you deploy your app?

//Unit Test vs Integration testing

//REDUX

//stubs and mocks

//synthetic events

//Solid state principles

//difference between type and interface

//React hooks

//stateful vs stateless

//hashng vs encoding vs encrypting

// how do you document components?

// how do you persist authentication

// const multiplier = {
//     numbers: [1,2,3],
//     multiplyBy: 2,
//     multiply() {
//      return   this.numbers.map((number)=> number * this.multiplyBy );
//     }
// }
// console.log(multiplier.multiply());

// let count = 0;
//   const addOne = () => {
//     count++;
//     console.log('addOne')
//   };

//   const minusOne = () => {
//     count--;
//     console.log('minusOne')
//   };

//   const reset = () => {
//     count = 0;
//     console.log('reset')
//   };

class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        return(`Hi I am ${this.name} !`)
    };
    getDescription(){
        return(`${this.name} is ${this.age} years old! `)
    }
}

class Student extends Person {
    constructor(name,age,major){
        super(name,age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += `Their Major is ${this.major}.`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name,age,homeLocation){
    super(name,age);
    this.homeLocation = homeLocation;
    }

    hasLocation() {
        return !!this.hasLocation;
    };
    getGreeting() {
        let greeting = super.getGreeting();
        if(this.hasLocation){
            greeting += `I am coming from ${this.homeLocation}`
        }
        return greeting;
    }
    
}

const me = new Traveler('Andrew Mead',24,'Accra');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());