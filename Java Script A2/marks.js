
let marks= prompt("enter marks");
switch(true){
    case marks<=10:
        console.log("E");
        break;

     case marks>=11 && marks<=20:
        console.log("D");
        break;

        case marks>=21 && marks<=30:
        console.log("C");
        break;


        case marks>=31 && marks<=40:
        console.log("B");
        break;


        case marks>=41 && marks<=50:
        console.log("A");
        break;

        default:
            console.log("invalid marks");
            break;
            
           
}