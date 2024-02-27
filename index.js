var randomNumber_1 = Math.floor(Math.random() * 6) + 1 ;
var randomNumber_2 = Math.floor(Math.random() * 6) + 1 ;


var imagePath_1 = "images/dice"+randomNumber_1+".png";
var imagePath_2 = "images/dice"+randomNumber_2+".png";

document.querySelectorAll(".dice img")[0].setAttribute("src",imagePath_1);
document.querySelectorAll(".dice img")[1].setAttribute("src",imagePath_2);

if(randomNumber_1> randomNumber_2){
    document.querySelector("h1").innerHTML = "🚩Player 1 won";
}
else if(randomNumber_1 < randomNumber_2){
    document.querySelector("h1").innerHTML = "Player 2 won🚩";
}
else{
    document.querySelector("h1").innerHTML = "Draw🤝";
}