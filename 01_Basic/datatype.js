/* Practice on data type  */

console.log("example of data type");
age=45;
firstName="md";
middileName="furkan";
lastName="Alam";

// print all value
console.log(age);
console.log(firstName)
console.log(middileName)
console.log(lastName);


// create variable using the let keyword

   let age2=45;
   let fullName="Md Furkan Alam";
   let phoneNumber=9109495918;

// const keyword after define wen can not prefrom changes in save variable
  
const a=566;
const c=889;
const name="md imran alam";
console.log(a);
console.log(c);
console.log(name);

// example of undefined

  let x;
  let y;
console.log(x); // undefined
console.log(y);

// in const keyword we  can not use undefined 
 
 //  const a;
console.log(a); // error variable a not inilition

let s="md Atif alam";

console.log(s);
console.log(typeof s); // type of used for check data type of the variable

// BigInt and symbol

let t=BigInt("123466");

let g=Symbol("hello");

console.log(t); // typeof BigInt
console.log(g); // typeof symbol

// example of non primitive datatye 

let student={
    age:age,
    fName:"md shahid alam",
    isPass:true
};

// print student infromation 
  console.log(student);

// an other example of non primitive data type

 let teacher={
     teacherName:"Md Raja Alam",
     teacherAge:45,
     teacherAddress:"NAWADA",
    
 }

 // print teacher all infromation
 console.log(teacher);
 


      