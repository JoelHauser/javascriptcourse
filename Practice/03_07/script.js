/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const Rachel = {
  name: "rachel",
  height: "5'10",
  eyeColor: "i dont know",
  clothing: {
    shirt: "baggy",
    pants: "none",
  },
  joel: {
    what: "your mom",
  },
  pantsOn: false,
  togglePants: function (pants) {
    this.pantsOn = pants;
  },
};

console.log(Rachel);
