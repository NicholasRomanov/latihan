var input = 5;
var temp = "";
var temp2 ="";

for (var i = 0; i < input; i++) {
    temp += "#";
}

for (var j = 0; j < input; j++) {
    if (j === 0 || j === (input - 1)){
    temp2 += "#";
    } else {
    temp2 += " ";
    }
}
for (var k = 0; k < input; k++) {
    if (k === 0 || k === (input - 1)){
    console.log(temp);
    } else {
    console.log(temp2);
    }
}