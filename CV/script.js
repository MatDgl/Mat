
var img = document.getElementById("img");
var figure = document.getElementById("figure");

img.addEventListener("mouseover",mouseover);

img.addEventListener("mouseout",mouseout);

function mouseover () {
    var age = document.createElement("figcaption");
    age.innerHTML = "Né le 30/11/2001 - 19 ans.";
   figure.appendChild(age);
}

function mouseout () {
    figure.removeChild(figure.lastChild);
}