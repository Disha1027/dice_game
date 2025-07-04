var p1= Math.floor(Math.random()*6+1);
var p2= Math.floor(Math.random()*6+1);

document.querySelector(".d1").setAttribute("src", "dice" + p1 + ".png");
document.querySelector(".d2").setAttribute("src", "dice" + p2 + ".png");
if (p1 > p2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (p1 < p2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}   
else {
    document.querySelector("h1").innerHTML = "It's a Draw!";
}
