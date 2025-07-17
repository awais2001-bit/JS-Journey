const resturant = {
  name: "The Great Restaurant",
  location: "123 Food St, Flavor Town",
  categories: ["Italian", "Mexican", "Indian"],
  starterMenu: ["Garlic Bread", "Bruschetta", "Stuffed Mushrooms"],
  mainMenu: ["Pizza", "Tacos", "Curry"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  delivery: function (starterIndex, mainIndex, time) {
    return `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered at ${time}.`;
  },
  openingHours: {
    thursday: {
      open: 12,
      close: 22,
    },
    friday: {
      open: 11,
      close: 23,
    },
  },
};

// 1. Destructure the `starterMenu` and `mainMenu` arrays from the `resturant` object.
resturant.delivery({
  starterIndex: 1,
  mainIndex: 2,
  time: "20:00",
});

const { name, location, categories } = resturant; // Destructuring object properties

const { name: restaurantName, location: restaurantLocation } = resturant; // Renaming destructured variables

const { menu = [], starterMenu = [] } = resturant; // Destructuring with default value

// Mutating variables
let a = 111;
let b = 999;

const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj); // Mutating variables using destructuring without parantheses will get an error

// Nested destructuring
const {
  openingHours: {
    thursday: { open, close },
  },
} = resturant; // Destructuring nested object properties
