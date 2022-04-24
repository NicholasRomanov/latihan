function printNumbers(num) {
    var i = 1;
    var x = 0;
    while (x < num) {
        if (checkPrime(i) === true) {
            console.log(i)
            x++
        }
        i++
    }
}

function checkPrime(n) {
    var faktor
}