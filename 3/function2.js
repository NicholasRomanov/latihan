function triplePyth(a, b, c) {
    var resultA = a ** 2
    var resultB = b ** 2
    var resultC = c ** 2

    return resultA + resultB === resultC ? true : false
}

console.log(triplePyth(3,4,5))