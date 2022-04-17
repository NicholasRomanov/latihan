var minuman = "plain tea";

switch (minuman){
    case 'sweet tea':
    console.log("You chose Sweet Tea, thanks")
     break;
    case 'plain tea':
    console.log("You chose Plain Tea, thanks")
     break;
    case 'boba':
    console.log("You chose Boba, thanks")
     break;
    case 'milk coffee':
    console.log("You chose Milk Coffee, thanks")
     break;
    case 'choco ice':
    console.log("You chose Choco Ice, thanks")
     break;
    default:
     if (minuman === "") {
    console.log("Input minuman")
    } else {
    console.log("minuman is undefined")
    }
     break;
}
   