import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(() => { //runs when server is launched

});

// object spread operator ...user -> inject properties of other objects

// object property shorthand -> inside objects we can put variables directly



// class Person {
//   constructor (name, age = 0) {
//     this.name = name;
//     this.age = age;
//   }
//   getGreeting() {
//     return `Hi! I am ${this.name}.`;
//   }
//   getPersonDescription () {
//     return `${this.name} is ${this.age} year(s) old.`;
//   }
// }
//
// class Employee extends Person {
//   constructor(name, age, title) {
//     super(name, age); // passing details to the original class
//     this.title = title;
//   }
//   hasJob () { // creating a new function
//     return !!this.title;
//   }
//   getGreeting () {// overriding a construction
//     if (this.title) {
//       return `Hi I am ${this.name} and i work as ${this.title}`; //use template string syntax
//     } else {
//       return super.getGreeting();
//     }
//   }
// }
//
// class Programmer extends Person {
//   constructor (name, age, preferredLanguage = 'Assembly') { // set preferredLanguage to default
//     super(name, age);
//     this.preferredLanguage = preferredLanguage;
//   }
//   getGreeting () {
//     return `Hi my name is ${this.name} and I am ${this.preferredLanguage} developer.`;
//   }
// }
//
// let me = new Employee('Anton', 24, 'DB admin');
// console.log(me.getPersonDescription());
// console.log(me.getGreeting());
//
// let developer = new Programmer('Nick', 21, 'React');
// console.log(developer.getGreeting());
