// 1. Declare an array
// Declare an array with 5 elements containing fruits
// console log the 3rd index element
// change the value of the 2nd index element to jambura
// console log the final array

let fruits = ["apple","banana","guava","lemon","mango"]
console.log(fruits.indexOf("lemon"))
console.log(fruits[3])
fruits[2] = "jambura";
let change_fruit = fruits[2];
console.log(fruits)


// 2. Add or remove elements
// Declare an array of 3 tourist destinations
// Add a new tourist destination to your tourist array
// Add two more to your array
// Remove the last tourist destination you have added
// display the final array as output

let tourist_destinations = ["cox's Bazar", "Kaptai", "sylhet"];
tourist_destinations.push("Tangail");
tourist_destinations.push("Bandorban", "khagrachori");
console.log(tourist_destinations)
tourist_destinations.pop();
console.log(tourist_destinations)



// 3. Checking Array Membership with ‘includes’
// Instructions:
// Create an array of books containing different book.
// Use the includes method to check if the array contains a javascript book.
// Print a message to the console indicating whether the element is present in the array or not.

let books = ["rahe belayet", "ar rahitul", "ahkame jindegi"]

console.log(books.includes("javascript"))

if(books.includes("javascript")){
    console.log("yeah, It is present")
}
else{
    console.log("Oh, No! it is not included")
}


// 4. Checking if it's an Array
// Instructions:
// Create different variables, each containing either an array or a non-array value.
// Now use isArray to check if each variable is an array.
// Print a message to the console indicating whether each variable is an array or not.

let book = ["rahe belayet", "ar rahitul", "ahkame jindegi"];
console.log(Array.isArray(book))
if(Array.isArray(book)){
    console.log("yeah it as a pure Array");
}
else{
    console.log("it is a vajilla Array")
}


let num = 2;
console.log(Array.isArray(num))
if(Array.isArray(num)){
    console.log("yeah it as a pure Array");
}
else{
    console.log("it is a vajilla Array")
}

let name = "tareq";
console.log(Array.isArray(name))
if(Array.isArray(name)){
    console.log("yeah it as a pure Array");
}
else{
    console.log("it is a vajilla Array")
}



// 5. Combining Arrays
// Instructions:
// Create two arrays of your choice.
// Use the concat method to combine the two arrays into a new array.
// Print both the original arrays and the combined array using console.log().
let namaj1 = ["fajar", "johor", "achor"]
let namaj2 = ["magrid", "esha"]
let namajConcat = namaj1.concat(namaj2);
console.log(namaj1);
console.log(namaj2);
console.log(namajConcat);