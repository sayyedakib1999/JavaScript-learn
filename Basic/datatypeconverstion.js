// let score = 1
// let score1 = "1"
// let score2 = "1a"
// let score3 = null
// let score4 = undefined
// let score5 = true
// let score6 = false
// console.log(typeof score); //hum isko directly bhi likh saktai hai orr
// console.log(typeof score1);
// console.log(typeof score2);
// console.log(typeof score3);
// console.log(typeof score4);
// console.log(typeof score5);
// console.log(typeof score6);

// // console.log(typeof (score,score1,score2,score3,score4,score5,score6)); // yafir hum is ko as a method bhi likh saktay. 

// // Q What Is The Diffreance between  { typeof value  & typof(value) }.

//  let valueInNumber =Number(score) //Convert String Into number (Integer)

//  let valueInNumber1 =Number(score1)
//  let valueInNumber2 =Number(score2)
//  let valueInNumber3 =Number(score3)
//  let valueInNumber4 =Number(score4)
//  let valueInNumber5 =Number(score5)
//  let valueInNumber6 =Number(score6)

// console.log(typeof valueInNumber);
// console.log(typeof valueInNumber1);
// console.log(typeof valueInNumber2);
// console.log(typeof valueInNumber3);
// console.log(typeof valueInNumber4)
// console.log(typeof valueInNumber5);
// console.log(typeof valueInNumber6);


// console.log(valueInNumber); //But jab us ko print karay gay to vo NaN (Not A Number) Show Kray ga.
// //NaN Bhi Ek Special Type Hai.
// //when we try to find out the value of null it showes the 0 { console.log(valueInNumber) } Using This method.
// //jab hum value mai undefined detai hai to uska O/P NaN aata hai.
// //when we put boolean vale for eg true or false (For true it show 1 & for false it show 0)

// console.log(valueInNumber1);
// console.log(valueInNumber2);
// console.log(valueInNumber3);
// console.log(valueInNumber4);
// console.log(valueInNumber5);
// console.log(valueInNumber);

// // "33"=> 33 easly converted
// // "33aba" => NaN Showes Not A Number 
// // null => object , 0
// // True => 1 | False => 0
// // undefine => 0 */

// let isLoggedIn = 1
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// let isLoggedOut = 0
// let booleanIsLoggedOut = Boolean(isLoggedOut)
// console.log(booleanIsLoggedOut);

// // we can also convet the string into boolean value 

// let myName = "Akib"
// let userName = String(myName)
// console.log(myName)

// // we can Convert Number into the string 

// let myUsername = "Akib"
// let cUsername = Boolean(myUsername)
// console.log(cUsername); /* when we try to change string into boolean 
// (The empty string showes the "FALSE" vale & the string that contain any value shoes "TRUE" Vale) */

// //1 => true | 0 => false 
// /* "" => false | "Akib" => True (If The String is empty it show the "FALSE" value, 
// but when the string contain some thing it show "TRUE") */

// console.log(+true);
// console.log(+""); nahi kr na chaeyh 

// let n1,n2,n3 
// n1=n2=n3= 2+2 
// console.log(n3);

let gameCounter = 100
gameCounter++;
console.log(gameCounter); 
// [source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment)