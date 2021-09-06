"use strict";
let category = document.querySelector(".category");
let girls = document.querySelector(".girls");
let boys = document.querySelector(".boys");
let toys = document.querySelector(".toys");
let girlscategory = document.querySelector(".girlscategory");
let boyscatergory = document.querySelector(".boyscategory");
let toyscategory = document.querySelector(".toyscategory");
let icons = document.querySelector(".icons");

category.addEventListener("click", function () {
  girls.classList.toggle("hidden");
  boys.classList.toggle("hidden");
  toys.classList.toggle("hidden");
  icons.classList.toggle("hidden");
  girlscategory.classList.add("hidden");
  boyscatergory.classList.add("hidden");
  toyscategory.classList.add("hidden");
});

girls.addEventListener("click", function () {
  girlscategory.classList.toggle("hidden");
  boyscatergory.classList.add("hidden");
  toyscategory.classList.add("hidden");
});

boys.addEventListener("click", function () {
  boyscatergory.classList.toggle("hidden");
  girlscategory.classList.add("hidden");
  toyscategory.classList.add("hidden");
});

toys.addEventListener("click", function () {
  girlscategory.classList.add("hidden");
  boyscatergory.classList.add("hidden");
  toyscategory.classList.toggle("hidden");
});
