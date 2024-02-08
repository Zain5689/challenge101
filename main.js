console.log("###################################");
console.log("                                 ");
// التكليف 03

// let myDiv = document.querySelector(".our-element");
// let myp = document.querySelector("p");

// myp.remove();

// let myDiv1 = document.createElement("div");
// let myDiv2 = document.createElement("div");

// myDiv1.textContent = "start";
// myDiv2.textContent = "end";

// myDiv1.title = "Start Element";
// myDiv2.textContent = "end Element";

// myDiv1.className = "start";
// myDiv2.className = "end";

// myDiv.before(myDiv1);
// myDiv.after(myDiv2);

console.log("###################################");
console.log("                                 ");
// التكليف 04

let span = document.querySelector("span");
let div = document.querySelector("div");

console.log(span.parentElement);

span.onclick = function () {
  span.parentElement.append(" Elzero ");
};

console.log("###################################");
console.log("                                 ");
// التكليف 05

let span1 = document.querySelector("span");
let div1 = document.querySelector("div");
let p = document.querySelector("p");
let article = document.querySelector("article");
let section = document.querySelector("section");

this.onclick = function () {
  console.log("This Is ");
};

console.log("###################################");
console.log("                                 ");
//challenge

let myMainElement = document.createElement("div");
let myHeading = document.createElement("h2");
let myul = document.createElement("ul");

let myHeadingText = document.createTextNode("Elzero ");

// Add Heading Text
myHeading.appendChild(myHeadingText);

document.body.appendChild(myHeading);
document.body.appendChild(myul);

myHeading.style.cssText =
  "font-weight: bold; color: green; font-family: Arial, Helvetica, sans-serif;";
myul.style.cssText =
  " position: relative; display: flex;justify-content: space-around;float:right;margin-top: -60px;list-style: none;";
// Create an array of menu items
const menuItems = ["Home", "About", "Service", "Contact"];

// Loop through the menu items and create corresponding <li> elements
for (let i = 0; i < menuItems.length; i++) {
  let menuItem = menuItems[i];

  let myli = document.createElement("li");
  let mya = document.createElement("a");
  let menuItemText = document.createTextNode(menuItem);

  mya.appendChild(menuItemText);
  mya.href = "#";
  myli.appendChild(mya);
  myul.appendChild(myli);

  myli.style.cssText = "padding: 10px;";

  mya.style.cssText =
    "color:#000; text-decoration: none; font-weight: 500;display: block;";
}

let myMaindiv = document.createElement("div");

for (let i = 1; i <= 15; i++) {
  let myProductDiv = document.createElement("div"); // Create a div for each product
  let myh3 = document.createElement("h3");
  let myp = document.createElement("p");
  let menuItemText = document.createTextNode(i);
  let menuItemTextp = document.createTextNode("product");

  myh3.appendChild(menuItemText);
  myp.appendChild(menuItemTextp);

  myProductDiv.appendChild(myh3); // Append h3 to the product div
  myProductDiv.appendChild(myp); // Append p to the product div

  myh3.style.cssText = "padding: 10px;";
  myp.style.cssText = "padding: 10px;margin-top:-40px";
  myMaindiv.appendChild(myProductDiv); // Append the product div to the main div
  myProductDiv.style.cssText =
    "  text-align: center;background-color: white;height: 80px;";
}

document.body.appendChild(myMaindiv);

myMaindiv.style.cssText =
  "margin: auto; display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px;background-color: #eee;padding:50px";

let footer = document.createElement("div");
let footerp = document.createElement("p");

footer.appendChild(footerp);
let footerpText = document.createTextNode("Copyright 2021");

// Add Heading Text
footerp.appendChild(footerpText);
document.body.appendChild(footer);

footer.style.cssText =
  "background-color: #0D9276;text-align: center; padding: 0.5px;";

footerp.style.cssText = "color: white; padding: 20px;";
