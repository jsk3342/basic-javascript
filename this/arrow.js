var obj1 = {
    outer: function () {
        console.log(this);
        var innerFunc = () => {
            console.log(this);
        }
        innerFunc();
    }
};

obj1.outer();