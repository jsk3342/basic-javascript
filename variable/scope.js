var a = 1;

var outer = function() {
    var inner = function() {
        console.log(a);
        var a = 3;
    };
    inner();
    console.log(a);
};

outer();
console.log(a);

// var a = 1;

// var outer = function() {
//     var b = 2;
//     var inner = function() {
//         console.log(b);
//         debugger;
//     };
//     inner();
// };

// outer();