
/** print day using day number */

let day=prompt("enter Day  number 1 to 7")

switch (true){
    case day==1:
            console.log("Monday");
        break;
    case day==2:
        console.log("tuesday");
        break;
    case day==3:
      console.log("wednesday");
      break;
          
    case day==4:
        console.log("thursday");
        break;
              
    case day==5:
        console.log("friday");
        break;
    case day==6:
        console.log("saturday");
        break;
    case day==7:
        console.log("sunday");
      break;
            
    default:
          log("invalid day");
        break;
}