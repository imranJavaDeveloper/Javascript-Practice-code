

/** example of spread operator */

let str="imran";
console.log(...str);


let str2="Rahat";
console.log(...str2);


/*** Example of spreed operator in object */

let obj={
      name:"md imran alam",
      age:25
}

let obj2={
      
    gender:"male"
}


let obj3={
    ...obj,
    ...obj2,
    salary:50000
}
console.log(obj2);
//{gender: 'male'}
console.log(obj);
//{name: 'md imran alam', age: 25}

console.log(obj3);
// spread operator create sallow copy in the form of object
// {name: 'md imran alam', age: 25, gender: 'male', salary: 50000}


