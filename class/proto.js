var Person = (function () {
    function Person(name) {
        this.name = name
    }
    Person.prototype.sayHi = function () {
        console.log(`hi My name is ${this.name}`)
    }
    
    return Person
}());

var me = new Person('kim')
me.sayHi()

