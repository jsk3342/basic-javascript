const x = 1;
function foo() {
    const x = 10;
    bar();
}

function bar() {
    console.log(x)
}

foo();
bar();

//좋은 예시 같습니다.