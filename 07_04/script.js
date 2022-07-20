/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

const myArray = ["blanket", "computer", "ipad", "phone", "headphones"];

console.log(myArray);

myArray.pop();
console.log("New Array:", myArray);

myArray.unshift(myArray.pop());
console.log("Last item now first:", myArray);

myArray.sort();
console.log("Sorted Array:", myArray);

const foundItem = myArray.find((item) => item === "blanket");
console.log(foundItem);

let remove = "computer";
myArray.splice(myArray.indexOf(remove), 1);
console.log(`Array with "${remove}" removed:`, myArray);
