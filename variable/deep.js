var obj1 = {
  name: "jisu",
};

var obj2 = deep(obj1);

function deep(obj) {
  return obj;
}

console.log(obj1 === obj2);
