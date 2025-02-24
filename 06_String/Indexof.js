

/** Find the index of any character  */

let name="you will be Amazing Developer";

let index=name.indexOf("Developer");
console.log(index);

let name2="I am JavaScript Developer";
let index2=name2.indexOf("JavaScript");
console.log(index2);

let str1="I am java Backend Developer";
let index3=str1.indexOf("backend");
console.log(index3);
   




function equalsIgnoreCase(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}

console.log(equalsIgnoreCase("Hello", "hello")); // Output: true
console.log(equalsIgnoreCase("JavaScript", "JAVASCRIPT")); // Output: true
console.log(equalsIgnoreCase("Test", "Testing")); // Output: false


