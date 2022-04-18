var number = 10;
var hasil = "";
var temp = "";
for (var i = 0; i < number ; i++) {
    hasil = number&i;
    if(hasil === 0 ) {
        temp += i
        console.log(temp);
    }
}