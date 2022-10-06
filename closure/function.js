function makeCounter(aux) {
    let counter = 0;
    return function () {
        counter = aux(counter)
        return counter;
    }
}

function increase(n) {
    return ++n;
}

function decrease(n) {
    return --n;
}

const increaser = makeCounter(increase);
