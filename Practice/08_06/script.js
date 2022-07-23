/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */
const filler = {
  name: "timmy",
  weight: "100lbs",
  height: "6'9",
  newHeight: function (height) {
    console.log("this.height in the method:", this.height);
    this.height = height;
    console.log("this.height in the method:", this.height);
    this.height = height;
  },
};

const mainArticle = (article) => {
  const newArticle = document.createElement("Article");
  newArticle.innerHTML = `
    <article> ${article}.name </article>
    <article> ${article}.weight </article>
    <article> ${article}.height </article>
    `;
  return newArticle;
};
const main = document.querySelector("main");
main.append(mainArticle(filler));
