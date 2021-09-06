"use strict";
let category = document.querySelector(".category");
let western = document.querySelector(".western");
let traditional = document.querySelector(".traditional");
let accesories = document.querySelector(".accesories");
let westerncategory = document.querySelector(".westerncategory");
let traditionalcatergory = document.querySelector(".traditionalcategory");
let accesoriescategory = document.querySelector(".accesoriescategory");
let icons = document.querySelector(".icons");

category.addEventListener("click", function () {
  western.classList.toggle("hidden");
  traditional.classList.toggle("hidden");
  accesories.classList.toggle("hidden");
  icons.classList.toggle("hidden");
  westerncategory.classList.add("hidden");
  traditionalcatergory.classList.add("hidden");
  accesoriescategory.classList.add("hidden");
});

western.addEventListener("click", function () {
  westerncategory.classList.toggle("hidden");
  traditionalcatergory.classList.add("hidden");
  accesoriescategory.classList.add("hidden");
});

traditional.addEventListener("click", function () {
  traditionalcatergory.classList.toggle("hidden");
  westerncategory.classList.add("hidden");
  accesoriescategory.classList.add("hidden");
});

accesories.addEventListener("click", function () {
  westerncategory.classList.add("hidden");
  traditionalcatergory.classList.add("hidden");
  accesoriescategory.classList.toggle("hidden");
});
