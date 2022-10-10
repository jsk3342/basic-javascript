function Person(name) {
    this.name = name;
}

var foo = new Person('kim');

console.dir(Person); // 함수는 함수의 프토토타입을 참조하게 되고
console.dir(foo); // 인스턴스는 자신의 원형을 가리키는 프로토타입을 담는다