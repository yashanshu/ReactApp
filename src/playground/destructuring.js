// Object and Array destructuring

// Object destructuring
const person = {
  name: "Andrew",
  age: 76,
  location: {
    city: "Philadelphia",
    temp: 92,
  },
};

const { name: firstName = "Anonymous", age } = person;
console.log(`${firstName} is ${age}`);

const { city, temp: temperature } = person.location;

const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
  publisher: {
    name: "Penguin",
  },
};

const { title: bookName, author: writer = "unknown" } = book;
const { name: PublishedBy = "Self-Published" } = book.publisher;

console.log(
  `${bookName} is written by ${writer} and published by ${PublishedBy}`
);

// Array destructuring
const address = ["1299 S jp street", "Phohpel", "Mangus", "12323"];

const [, cityName, state, ] = address;
console.log(`you are in ${cityName} ${state}`);
