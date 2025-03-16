
/*** All String Method In js */

let text="Hello World";
// 1.length
console.log(text.length); // 11

// 2.indexOf
console.log(text.indexOf("World"));// 6
console.log(text.indexOf("W"));//6

// 3.lastIndexOf
console.log(text.lastIndexOf("World"));//6

// .slice(start, end) → Extracts part of a string.

let newString="i am java developer as a fresher";
console.log(newString.slice(5,10)); // java

console.log(newString.slice(5,15));

// substring(start, end) → Similar to slice, but does not accept negative indexes.
let string="i am javaScript developer ";
console.log(string.substring(4,10));// javaSc

// toLowerCase()

let s="MD IMRAN ALAM";
console.log(s.toLocaleLowerCase());

// toUpperCase()
let s2="md imran alam";
console.log(s2.toUpperCase());

// charAt()  take index return crossponding character from a string
let n="javaScript";
console.log(n.charAt(8)); // p









