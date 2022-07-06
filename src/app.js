/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  function Onload() {
    let excusas =
      who[Math.floor(Math.random() * 3)] +
      " " +
      what[Math.floor(Math.random() * 3)] +
      " " +
      when[Math.floor(Math.random() * 4)];

    return excusas;
  }
  document.querySelector("#button").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = Onload();
  });
  console.log(Onload());

  console.log("Hello Rigo from the console!");
};
