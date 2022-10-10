// var NewConstructor = function () {
//     console.log('this is new constuctor!')
// }


function Person(name) {
    this.name = name;
}

var foo = new Person('Kim');

console.log(Person.prototype.constructor === Person)
console.log(foo.constructor === Person)
console.log(Person.constructor === Function)