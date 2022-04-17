var minuman = "Plain tea";

switch (minuman) {
    
    case 'Sweet Tea':
    console.log("You choose Sweet Tea, thanks")
     break;
   
    case 'Plain Tea':
    console.log("You choose Plain Tea, thanks")
     break;
   
    case 'Boba':
    console.log("You choose Boba, thanks")
     break;
    
    case 'Milk Coffee':
    console.log("You choose Milk Coffee, thanks")
     break;
    
    case 'Choco Ice':
    console.log("You choose Choco Ice, thanks")
     break;
    
    default:
    
     if (minuman === "") {
    console.log("Input minuman")
    } else {
    console.log("minuman is undefined")
    }
     break;
}