var number = 10;
var hasil = "";
for (var i = 0; i < number ; i++) {
    hasil = number&i;
    if(hasil === 0 ) {
        console.log(i);
    }
}