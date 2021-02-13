var u = require('umbrellajs');

/* global console, document, Excel, Office */

// change to `true` to render Nav Tree fully opened
const devMode = false;

Office.initialize = () => {
  // hide submenu, forms by default
  !devMode && hideComponents()
  // Browse Structural Toolkit
  u("#run").on("click", showNav);
  devMode && showNav();
  initializeTree();
  initializeForms();
}

const hideComponents = () => {
  u("section ul").addClass("hidden");
  u("section ul li > button").addClass("hidden");
  u("section ul li > form").addClass("hidden");
}

const showNav = () => {
  u("#welcome").addClass("hidden");
  u("nav").removeClass("hidden");
}

const initializeTree = () => {
  // root
  u("h1").on("click", function(){
    u(this).siblings("ul").toggleClass("hidden");
  })

  // sub menu
  u("h2").on("click", function(){
    u(this).siblings("button").toggleClass("hidden");
  })

  // components
  u("li > button").on("click", async function(){
    let id = u(this).nodes[0].id;
    if (id.includes("toggle-form")) {
      // show form
      let formName = id.replace("toggle-form-", "")
      u(`#${formName}`).toggleClass("hidden");
    } else {
      // load component
      console.log(id);
      const component = await import(`../components/${id}`);
      await Excel.run(async context => {
        await component.execute(context);
      });
    }
  })
}

function initializeForms() {
  u("form button").handle("click", async function(){
    let form = u(this).parent("form");

    // hide form
    form.addClass("hidden");

    // convert form to JSON
    let formEl = document.getElementById(form.nodes[0].id) as HTMLFormElement;
    let formData = new FormData(formEl);
    var options = {};
    formData.forEach(function(value, key){
      options[key] = value;
    });

    // load component
    let id = u(this).nodes[0].id;
    const component = await import(`../components/${id}`);
    await Excel.run(async context => {
      await component.execute(context, options);
    });
  })
}