 /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  var i = 0;
  var txt = 'The Legendary Artist" Southside Rilla is routinely compared to the likes of Michelangelo, Leonardo, Donatello, & DMX. Heavily inspired by the storytelling artistry of Jesus Christ, he is "literally" the most influential gorilla artist alive...';
  var speed = 10;
  console.log(" I am Southside Rilla, The Legendary Artist")
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
