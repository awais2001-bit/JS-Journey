let massMark = 78; //weight in kg
let heightMark = 1.69; //height in meters

let massJohn = 92;
let heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log("BMI of Mark", BMIMark);
console.log("BMI Of John", BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);
