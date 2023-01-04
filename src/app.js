/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const randomWord = arr => {
  let i = Math.floor(Math.random() * arr.length);
  return arr[i];
};

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  const excuseTag = document.getElementById("excuse");
  const excuse = `${randomWord(who)} ${randomWord(action)} ${randomWord(
    what
  )} ${randomWord(when)}`;
  const text = document.createTextNode(excuse);

  excuseTag.appendChild(text);
};
