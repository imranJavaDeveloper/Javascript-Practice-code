

/** Example of FILTER() method in js */

let myArray=["Dog","Cow","Lion","Tiger"];

let result=myArray.filter(w => w.length> 3);

console.log(result);// ['Lion', 'Tiger']
console.log(myArray);// ['Dog', 'Cow', 'Lion', 'Tiger']

