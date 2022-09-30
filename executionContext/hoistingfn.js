// function a () {
//     console.log(b);
//     var b = 'bbb';
//     console.log(b);
//     function b () {
//     }
//     console.log(b);
// }

// a();


function a () {
    console.log(b);
    function b () {}
    console.log(b);
    var b = 'bbb';
    console.log(b);
}

let b = () => {
    console.log("호출 했니?")
}

b();

a();