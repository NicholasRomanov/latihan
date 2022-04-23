var watches = ["Swiss Army","Daniel Wellington","Dublot"]
var hasil = "Saya punya ";

for (var i = 0; i < watches.length; i++) {
 if(i+1 === (watches.length)){
     hasil += ("dan " + watches[i] + ".");
 } else {
     hasil += ( watches[i] + ", ");
 }
}
console.log(hasil);