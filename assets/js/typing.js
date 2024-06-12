var i = 0;
var txt1 = 'The dissident gorilla artist Southside Don Rilla, tells the true story of how he became known "The Legendary Artist" with stunning visuals.';
var txt2 = 'Heavily inspired by the storytelling artistry of Jesus Christ, SOUTHSIDE D RILLA ,also known as "The Legendary Artist", is routinely compared to the likes of Michelangelo, Vince McMahon, & DMX.  With his own multi media brand, PUSHFORGORILLA, the Legendary Artist openly beefs with Disney mostly because they ruined STAR WARS. With PUSHFORGORILLA, the Legendary Artist aims to deliver top stories via compelling visual and audio experiences. ';
var txt3 = "'The Legendary Artist' SOUTHSIDE RILLA is a 'Positively Inspirational Motivating Gorilla' on a mission to shake up the world with the sprawling multi medium gorilla art campaign, PUSHFORGORILLA. Heavily inspired by the storytelling artistry of 'The Good Shepherd', the ever versatile Southside Rilla is known for telling stories two places at once. His pronouns? 'Dat Rilla'. For weekly originals and exclusives from the Legendary Artist, subscribe below.";
var txt4 = "PUSHFORGORILLA";
var speed = 55;
var number = Math.random() * 2 | 0;
var stored = number;

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(document).ready(function(){


	 var counter = 0;

    function blink(){
       $(".chatGpt").animate({"opacity": 0}, 1000 ).animate({"opacity": 1}, 400 );
        counter++;
        if(counter > 200) {
            clearInterval(interval);
        }
    }
	 var interval = setInterval(blink, 5000);
});


 /* The speed/duration of the effect in milliseconds */

function typeWriter() {


  var array = [txt1, txt2, txt3];
  var number = randomInteger(0,2);
console.log(number);
  console.log(" i am writing")
  if (i < txt3.length) {
    document.getElementById("demo").innerHTML += txt3.charAt(i);
    i++;
    setTimeout(typeWriter, speed);

  }

}

function bananaExpressions() {
  const url = "https://pushforgorilla.com/be";
  const number= randomIntFromInterval(1, 118);
  const newUrl = url + number;
  return window.open(newUrl);
}

function randomIntFromInterval(min, max) { // min and max included
return Math.floor(Math.random() * (max - min + 1) + min)
}


function comingSoon() {
  alert("Coming soon! Subscribe to PUSHFORGORILLA to get the latest from 'The Legendary Artist' SOUTHSIDE RILLA 🙏");
}
