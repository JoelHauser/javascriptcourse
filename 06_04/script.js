/**
 * The let statement
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
 */

let color = "purple";

document.querySelector(".left").style.backgroundColor = color;
document.querySelector(".left .color-value").innerHTML = color;

color = "pink";

function headingColor() {
  let titleColor = "red";
  document.querySelector(".title").style.color = titleColor;
  console.log("inside", titleColor);
}

headingColor();

//out of scope!
console.log("outside", titleColor);

document.querySelector(".right").style.backgroundColor = color;
document.querySelector(".right .color-value").innerHTML = color;
