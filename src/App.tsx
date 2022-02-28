import React from "react";

// Basic Types in Typescript

let name: String;
let age: number;
let isStudent: boolean;
// array of string
let hobbies: string[];
// array of one number and one string
let role: [number, string];

// define object
type Person = {
  name: string;
  age?: number;
};
let person: Person = {
  name: "John",
};

// Array of Person Object
let lotsOfPeople: Person[];

function App() {
  return <div className="App">Hello world</div>;
}

export default App;
