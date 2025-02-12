
let character= prompt("enter character");

switch(true){
    case character=="p" || character=="P":
        console.log("PrepBytes");
        break;

     case character=="Z" || character=="z":
        console.log("Zenith");
        break;

        case character=="E" || character=="e":
        console.log("Expert Coder");
        break;


        case character=="D" || character=="d":
        console.log("Data Structure");
        break;


        
        default:
            console.log("invalid  character");
            break;
            
           
}