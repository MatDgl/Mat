var character = document.getElementById("character");
var block = document.getElementById("block");
var click = document.getElementById("click");
var counter=0;

function musique() {
    var audio = document.getElementById("audio");
    var checkBox = document.getElementById("toggle");
    if (checkBox.checked == true){
        audio.play();
    }
}

function keydownFunction() {
    document.getElementById("jeu").saut();
  }
    
function saut() {
    if (perso.classList != "animate") {
        perso.classList.add("animate");
    }
    setTimeout(function(){
        perso.classList.remove("animate");
    },300)
}

var highscore = localStorage.getItem('highscore');
document.getElementById("highscore").innerHTML = Math.floor(highscore/100);

function jouer() {
    click.remove();
    document.getElementById("jouer").remove();
    document.getElementById("hscore").remove();
    document.getElementById("music").remove();
    while (document.getElementsByClassName('check')[0]) {
        document.getElementsByClassName('check')[0].remove();
    }
    jeu.style.marginTop = "3.65%";
    block.style.animation = 'block 1s infinite linear';
    var mort = setInterval(function() {
        var persoTop =
        parseInt(window.getComputedStyle(perso).getPropertyValue("top"));
        var blockLeft =
        parseInt(window.getComputedStyle(block).getPropertyValue("left"));
        if(blockLeft<20 && blockLeft>0 && persoTop >= 130) {
            if (counter > highscore) {
                localStorage.setItem('highscore',counter);
            }
            block.style.animation = "none";
            alert("Tu as perdu. Score : " +Math.floor(counter/100));
            window.location.reload();
            counter=0;
        } else {
            counter ++;
            document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
        }
    },10);
}