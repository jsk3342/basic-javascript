//원시 타입 참조 타입
console.log("실행중");

var a = 10;
var b = a;

a = 11;

console.log(a);
console.log(b);
console.log(a === b);

var obj1 = {
  c: 10,
  arr: [1, 2, 3, 4],
};

var obj2 = obj1;
obj2.c = 11;

console.log(obj1);
console.log(obj2);
obj2.c = 12;

console.log(obj1);
console.log(obj2);

console.log(obj1 === obj2);

//참조 타입 또한 내부의 프로퍼티만 변경 될 경우만 가변 성립
//원본 객체가 변경되지 않아야 할 때 불변 객체를 만들어야 할 필요성이 생김

var user = {
  name: "jisu",
  gender: "male",
};

var changeName = function (user, newName) {
  var newUser = user;
  newUser.name = newName;
  return newUser;
};

var user2 = changeName(user, "kim");

console.log(user === user2);
