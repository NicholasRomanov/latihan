var number = 10;
var hasil = "";
var temp = "0";
for (var i = 1; i < number ; i++) {
    hasil = number&i;
    if(hasil === 0 ) {
        temp += "," +i
    }
}
console.log(temp);