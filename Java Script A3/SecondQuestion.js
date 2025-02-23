

for(let i=1;i<=45;i++){

      if(i%3==0){
         i*3;
         console.log("Fizz");
         break;
      }
}
       

for(let i=1;i<=45;i++){

      if(i%5==0){
         i*5;
         console.log("Buzz");
         break;
      }
}


for(let i=1;i<=45;i++){

      if(i%5==0 && i%3==0){
         i*5;
         i*3;
         console.log("FizzBuzz");
         
         break;
      }
}
  
       