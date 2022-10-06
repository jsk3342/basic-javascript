const counter = (function () {
    let num = 0;
    return {
        increase() {
            return ++num
        },
        decrease() {
            return --num
        },
        getdata() {
            return num
        }
    }
}())