
// first dice
var randomNumbr1 = Math.floor(Math.random() * 6) +1;

var randomImage = "images/dice" + randomNumbr1 + ".png";

var image1 = document.querySelectorAll("img")[0]

image1.setAttribute("src", randomImage); 

// second dice 

var randomNumber2 = Math.floor(Math.random()*6)+1; 
var randomImage2 = "images/dice" + randomNumber2 + ".png"; 
var image2 = document.querySelectorAll("img")[1]
image2.setAttribute("src", randomImage2);

//changing the heading based on which player wins 

if(randomNumbr1>randomNumber2){ 
    document.querySelector("h1").innerHTML = "Player 1 wins!"

}else if(randomNumbr1<randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins!"
}