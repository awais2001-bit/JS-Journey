//truthy and falsy values

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean("HELLLOOOOO"));

// loose and strict euquality operators
console.log(5 == "5"); // loose equality, type coercion
console.log(5 === "5"); // strict equality, no type coercion
