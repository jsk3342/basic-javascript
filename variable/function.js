function fn(person) {
    person.name = 'kim'
    return person
}

var obj1 = {
    name : 'jisu'
}

var obj2 = fn(obj1)

console.log(obj1, obj2, obj1 === obj2)