"use strict";

// Declare variables
const studentName = "Fabio van den Broek";
const studentGroup = "MD2B";
const year = main.year;

// Init
init();

// Functions

function init() {
    // Set content based on variables
    document.getElementById("studentName").innerText = studentName;
    // Add navigation link to the navigation panel on the left of the page
    main.addContenItem("Inleiding", intro);
    // Activate the first navigation link
    intro();
    ChangeMyName();
    ChangeMyClass();
    ChangeMyYear();
}

function intro() {
    let description = "Je bent in dienst van energiemaatschappij Energy Solutions en"
        + " krijgt de opdracht om een webpagina te maken die de energiestanden toont van een aantal adressen."
        + " De data wordt via een webAPI beschikbaar gesteld. "
        + " Dit gebeurt in kleine stapjes en uiteindelijk is het de bedoeling om de data op een nette manier te presenteren."
        + "<p>Succes!!!</p>";
    main.updateContent("Inleiding", description);

    // Set link to the element in the DOM
    var element = document.getElementById("contentPlaceholder");

    // Create the image and set some properties
    var img = document.createElement("img");
    img.src = "photo.jpg";
    img.style.width = "100px";

    // Create the label
    var label = document.createElement("label");
    label.innerHTML = "Fabio van den Broek";

    // Create the paragraph and add the image and label to it
    var p = document.createElement("p");
    p.appendChild(img);
    p.appendChild(document.createElement("br"));
    p.appendChild(label);

    // Add the paragraph to the DOM
    element.appendChild(p);
}

function ChangeMyName() {
  var namen = document.getElementsByClassName("studentName");
  for(var i = 0; i < namen.length; i++ ) {
    namen[i].innerText = 'Fabio van den Broek';
  }
}

function ChangeMyClass() {
  var klas = document.getElementsByClassName("studentGroup");
  for(var i = 0; i < klas.length; i++ ) {
    klas[i].innerText = 'MD2B';
  }
}

function ChangeMyYear() {
  var jaar = document.getElementsByClassName("pageYear");
  for(var i = 0; i < jaar.length; i++ ) {
    jaar[i].innerText = '2018';
  }
}