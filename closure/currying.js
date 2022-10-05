var curry3 = function (func) {
    return function (a) {
        return function (b) {
            return func(a,b)
        }
    }
}

var getMaxWith10 = curry3(Math.max)(10)
