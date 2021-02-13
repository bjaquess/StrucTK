var u = require('umbrellajs');

/* global console, document, Excel, Office */

Office.initialize = () => {
  // hide submenu, forms by default
  u("section ul").addClass("hidden");
  u("section ul li > button").addClass("hidden");
  u("section ul li > form").addClass("hidden");
  // Browse Structural Toolkit
  // u("#run").on("click", showNav);
  showNav();
  initializeTree();
}

const showNav = () => {
  u("#welcome").addClass("hidden");
  u("nav").removeClass("hidden");
}

const initializeTree = () => {
  u("h1").on("click", function(){
    u(this).siblings("ul").toggleClass("hidden");
  })
  u("h2").on("click", function(){
    u(this).siblings("button").toggleClass("hidden");
  })
  u("button").on("click", function(){
    let toggleForm = u(this).first().id;
    if (toggleForm) {
      u("#"+toggleForm.replace("toggle-", "")).toggleClass("hidden");
    }
  })
}