var fruits = ["cherry","blueberry","avocado","apple","cranberry"]
var kamus = 'abcdefghijklmnopqrstuvwxyz'

var tempAlpha = []
var result = []

for (var i = 0; i < kamus.length; i++) {
    for (var j = 0; j < fruits.length; j++) {
        if (kamus[i] === fruits[j][0]) {
            tempAlpha.push(fruits[j])
        }
    }
    if (tempAlpha.length !== 0) {
        result.push(tempAlpha)
    }
    tempAlpha = []
}
console.log
