"use strict";
// array 
const friends = ["Afjal", "Sakib"];
friends.push("Tusan");
//tuple
const coordinate = [1, 2];
const nameAge = ["Istiaq", 30, false];
// object
const person = {
    firstName: "Kazi",
    lastName: "Mahamud",
    isMarried: false,
    company: "Zone Sparks Limited",
    designation: "Frontend Developer"
};
// function
function add(a, b) {
    return a + b;
}
const arrowAdd = (a, b) => a + b;
// method
const account = {
    name: "Istiaq",
    age: 30,
    balance: 1000,
    addBalance(newBalance) {
        return `My new Balance is ${this.balance + newBalance}`;
    }
};
const array = [1, 2, 3];
const squareOfArray = array.map((elem) => elem * elem);
