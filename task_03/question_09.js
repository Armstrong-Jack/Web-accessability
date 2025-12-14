/*jshint esnext: true, browser: true, devel:true */
"use strict";


document.addEventListener("DOMContentLoaded", function() {
  let form = document.getElementById("set_age");
  let age = document.getElementById("age");

  form.addEventListener("submit", function(event) {
    let ageInput = form.elements["age"].value;
    age.textContent = ageInput;
  });
});
