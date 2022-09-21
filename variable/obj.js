var obj1 = {
    name : 'jisu'
}

var obj2 = {
    name : 'jisu'
}

console.log(obj1 === obj2) 
console.log(obj1.name === obj2.name) 
//겉에 있는 객체라는 래퍼는 다르지만 내부 프로퍼티는 같은 메모리를 공유

var obj3 = obj1;
console.log(obj3 === obj1)