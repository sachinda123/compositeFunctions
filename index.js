const express = require("express");
const app = express();

const split = (str) => {
  return str.split("");
};
const reverse = (strArray) => {
  return strArray.reverse();
};
const join = (strArray) => {
  return strArray.join("");
};

const compose = (str) => join(reverse(split(str)));

console.log("fff", compose("hellow"));

app.listen(3000, () => {
  console.log("app started");
});
