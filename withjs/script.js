let h2 = document.querySelector("h2")
console.dir(h2.innerText)
h2.innerText = h2.innerText + "from apna College";

// let divs = document.querySelectorAll(".box")
// console.log(divs)
// let idx = 1;
// for(div of divs){
//     div.innerText = `new uniqe value is ${idx}`;
//     idx++;
// }
// divs[0].innerText = "new uniqe value is 1";
let divs = document.querySelectorAll("div")
console.log(divs);

//q1
let newbutton = document.createElement("button")
newbutton.innerText = "Click me!"
newbutton.style.color = "white";
newbutton.style.backgroundColor = "red";
document.querySelector("body").prepend(newbutton)

//q2
let para = document.querySelector("p")
