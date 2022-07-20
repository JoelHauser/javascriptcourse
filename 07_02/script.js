/**
 * Working with arrays
 * @link https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays
 */

let item = "flashlight";

const collection = ["Piggy", item, 5, true];

collection[3] = "camera";
collection[collection.length] = "new item";
collection[9] = "bobble head";

console.log(collection);

let a = 10;
let b = 20;

console.log(a + b);

if (a == b) {
  console.log("nope");
} else {
  console.log("yes");
}
