
/**  example of map method in js */
let A=[4,5,3,8];
/** map method apply on Array  */
 let result=A.map(x => x*2);
 console.log(result); //  [8, 10, 6, 16]

 /**  example 2 */
let A2=[4,5,3,8];
/** map method apply on Array  */
 let result2=A.map(x => (x-2)); 
 console.log(result2); // [2, 3, 1, 6]
 
 /*** Example 3 */
 let A3=["Mohan","Gita","Rakesh"];
 /** map() method  */
 let res=A3.map(f => "hello " +f);
 console.log(res); // ['hello Mohan', 'hello Gita', 'hello Rakesh']
 
 