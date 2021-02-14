
function single() {
    var div = document.getElementById("divimage");
    div.innerHTML="";
    var x = summon();
    var divperso = document.createElement("div");
    divperso.style.border = "solid darkcyan";
    divperso.style.padding= "5px";
    div.appendChild(divperso);
    var img = document.createElement("img");
    img.setAttribute("src", `img/perso${x}.png`);
    img.setAttribute("width", "300");
    divperso.appendChild(img);
    div.style.height = "500px";
    div.style.width = "315px";
    div.style.margin = "auto";
    var h2 = document.createElement("h2");
    h2.setAttribute("class", "nom")
    h2.textContent = $char;
    divperso.appendChild(h2);
    var nom = document.getElementsByClassName("nom");
    if ( x == 1 ) {
        var audio = document.getElementById("snk");
        audio.volume = 0.1;
        audio.play();
    }
}

function multi() {
    var div = document.getElementById("divimage");
    div.innerHTML="";
    for (i = 0; i < 10; i++) {
        var x = summon();
        var divperso = document.createElement("div");
        divperso.style.display = "inline-block";
        divperso.style.border = "solid darkcyan";
        divperso.style.marginRight = "10px";
        divperso.style.marginBottom = "10px";
        divperso.style.padding= "5px";
        div.appendChild(divperso);
        var img = document.createElement("img");
        img.setAttribute("src", `img/perso${x}.png`);
        img.setAttribute("width", "200");
        divperso.appendChild(img);
        div.style.height = "700px";
        div.style.width = "1130px";
        div.style.margin = "auto";
        var h2 = document.createElement("h2");
        h2.setAttribute("class", "nom")
        h2.textContent = $char;
        divperso.appendChild(h2);
        var nom = document.getElementsByClassName("nom");
        if ( x == 1 ) {
            var audio = document.getElementById("snk");
            audio.volume = 0.1;
            audio.play();
        }
    }
}

function summon () {
    var x = Math.floor((Math.random()*100)+1);
    console.log(x); //Number in console
    if ( x <= 1 ) { // Luffy : 1%
        $char = "Luffy";
        return 1;
    } else if ( x > 1 && x <= 3) { // Zoro : 2%
        $char = "Zoro";
        return 2;
    } else if ( x > 3 && x <= 18) { // Nami : 15%
        $char = "Nami";
        return 3;
    } else if ( x > 18 && x <= 33) { // Usopp : 15%
        $char = "Usopp";
        return 4;
    } else if ( x > 33 && x <= 40) { // Sanji : 7%
        $char = "Sanji";
        return 5;
    } else if ( x > 40 && x <= 55) { // Chopper : 15%
        $char = "Chopper";
        return 6;
    } else if ( x > 55 && x <= 67.5) { // Robin : 12.5%
        $char = "Robin";
        return 7;
    } else if ( x > 67.5 && x <= 80) { // Franky : 12.5%
        $char = "Franky";
        return 8;
    } else if ( x > 80 && x <= 92.5) { // Brook : 12.5%
        $char = "Brook";
        return 9;
    } else { // Jinbei : 7.5%
        $char = "Jinbei";
        return 10;
    }
}