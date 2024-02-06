let score = 1
let score1 = "1"
let score2 = "1a"
let score3 = null
let score4 = undefined
let score5 = true
let score6 = false
console.log(typeof score); //hum isko directly bhi likh saktai hai orr
console.log(typeof score1);
console.log(typeof score2);
console.log(typeof score3);
console.log(typeof score4);
console.log(typeof score5);
console.log(typeof score6);

// console.log(typeof (score,score1,score2,score3,score4,score5,score6)); // yafir hum is ko as a method bhi likh saktay. 

// Q What Is The Diffreance between  { typeof value  & typof(value) }.

 let valueInNumber =Number(score) //Convert String Into number (Integer)

 let valueInNumber1 =Number(score1)
 let valueInNumber2 =Number(score2)
 let valueInNumber3 =Number(score3)
 let valueInNumber4 =Number(score4)
 let valueInNumber5 =Number(score5)
 let valueInNumber6 =Number(score6)

console.log(typeof valueInNumber);
console.log(typeof valueInNumber1);
console.log(typeof valueInNumber2);
console.log(typeof valueInNumber3);
console.log(typeof valueInNumber4)
console.log(typeof valueInNumber5);
console.log(typeof valueInNumber6);


console.log(valueInNumber); //But jab us ko print karay gay to vo NaN (Not A Number) Show Kray ga.
//NaN Bhi Ek Special Type Hai.
//when we try to find out the value of null it showes the 0 { console.log(valueInNumber) } Using This method.
//jab hum value mai undefined detai hai to uska O/P NaN aata hai.
//when we put boolean vale for eg true or false (For true it show 1 & for false it show 0)

console.log(valueInNumber1);
console.log(valueInNumber2);
console.log(valueInNumber3);
console.log(valueInNumber4);
console.log(valueInNumber5);
console.log(valueInNumber);

// "33"=> 33 easly converted
// "33aba" => NaN Showes Not A Number 
// null => object , 0
// True => 1 | False => 0
// undefine => 0 