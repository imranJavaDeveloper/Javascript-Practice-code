
/**  hoisting: give some when we declare a variable
      1 first declare variable
      2 than assign the value 
      3 than  use */


 /*** in js we have 6 types of operator
  *  1 Arithmetic operator (+,-,/,%)      
  *  2 inrement and decerement operator (++,--)
  *  3 logical operator( && ,||,!)
  *  4 comparasion  operator(==,===,!=,!==,>,<,>=,<=)
  *  5 ternary operator (condition) ? : 
  *  6.Assignement operator (+=,-=,*=,/=,%=) */ 
      
  //1 Arithmetic operator (+,-,/,%,*) 

  {
    let a =20;
    let b= 5;

    console.log(a+b);
    console.log(a-b);
    console.log(a*b);
    console.log(a/b);
    console.log(a%b);
  }

  //   *  2 inrement and decerement operator (++,--)

  {
    let first=55;
    let second =first++; // post inrement 
    console.log(second) 
    console.log(first)

     
    let b=40;
    let c=++b; // pre incerement
    console.log(b);
    console.log(c);

    let num1=45;
    let num2=num1--; // post inrement

    console.log(num2);
    console.log(num1);


    let num3=21;
    let num4=--num3; // pre decrement

    console.log(num4);
    console.log(num3);

  }


  // 3 logical operator( && ,||,!)

  {
    let a=45;
    let b=78;
    let c=40;

    console.log(a<b && c<b);
    // && both condition must true

    console.log(a>b || a<b);
    // || one condition true and one false 
    console.log(a != b); 
  }


  //  4 comparasion  operator(==,===,!=,!==,>,<,>=,<=)

{
     // ==
     let x = 15;
     let y = '15';

console.log(x == y); // == equal operaor check value not data type



// ===
let x2 = 15;
let y2 = '15';
console.log(x === y); // == equal operaor check value with  data type

//  !=


let x3 = 15;
let y3 = '15';

console.log(x3 != y3) // false check only value not its data type 



let x4 = 15;
let y4 = '15';
console.log(x3 !== y3); //  true check only value not its data type 

// >,<
// > check value greather
// < check value less than

let x5=45;
let y5=45;

console.log(x5> y5);// flase
console.log(x5<y5); // true


// >=,<=

let f=12;
let f2=12;

console.log(f1>=f2);// true
console.log(f1<=f2);// true

//  >= check value greather than or qeual
// <= check value less than or equal 
}



// 6.Assignement operator (+=,-=,*=,/=,%=) */
{
let a =20;
a+=5;
console.log(a); // 25 add 5 in 20


let b=54;
b-=20;
console.log(b); // 34 subtract 20

let c=5;
c*=5;
console.log(c); // 25  5*5 multiplay


let a2 = 10; 
let  b2 = 5;
a /= b;
console.log(a); // 2  give divison


let a3 = 10; 
let  b3 = 5;
a %= b;
console.log(a); // 0 give reminder 



}



// ternary operator (condition) ? : 

let age = 60;

let res = (age > 59) ? "Adult" : "Not Adult";

console.log(res);// Not Adult

// used for check condition 