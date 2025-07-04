// //truthy and falsy values

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(""));
// console.log(Boolean(null));
// console.log(Boolean(NaN));
// console.log(Boolean("HELLLOOOOO"));

// // loose and strict euquality operators
// console.log(5 == "5"); // loose equality, type coercion
// console.log(5 === "5"); // strict equality, no type coercion

// const friends = ["Michael", "Steven", 1];
// console.log(friends);

// friends.pop();
// console.log(friends);

// const jonas = {
//   firstName: "Jonas",
//   friends: ["Michael", "Steven", "Peter"],
//   birthYear: 2001,
//   calcAge: function () {
//     this.age = 2025 - this.birthYear;
//     return this.age;
//   },
//   hasDriversLicense: true,
// };

// console.log(
//   ` ${
//     jonas.firstName
//   } is a ${jonas.calcAge()} -years old teacher, and he has a ${
//     jonas.hasDriversLicense ? "driver's license" : "no driver's license"
//   }.`
// );

/* Write your code below. Good luck! 🙂 */

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78, //kg
//   height: 1.69, //meters
//   calcBmi: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBmi: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// if (mark.bmi > john.bmi) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.calcBmi()}) is higher than ${
//       john.fullName
//     }'s (${john.calcBmi()})`
//   );
// } else {
//   console.log(
//     `${john.fullName}'s BMI (${john.calcBmi()}) is higher than ${
//       mark.fullName
//     }'s (${mark.calcBmi()})`
//   );
// }

function boolToWord(bool) {
  return bool ? "Yes" : "No";
  //...
}

console.log(boolToWord(true)); // 'Yes'
