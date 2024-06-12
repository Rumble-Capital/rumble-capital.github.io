// Initialize Firebase
var signupSuccess = document.getElementById("signup-success");
var signupError = document.getElementById("signup-error");

var form = document.getElementById("signup-form");
var pushBtn = document.getElementById("push-btn");
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCshAtyQmnlI_a-AKAq-mtzwpKwSPJnjxU",
  authDomain: "rumble-x-client.firebaseapp.com",
  databaseURL: "https://rumble-x-client-default-rtdb.firebaseio.com",
  projectId: "rumble-x-client",
  storageBucket: "rumble-x-client.appspot.com",
  messagingSenderId: "804489516592",
  appId: "1:804489516592:web:50bc9b2e35950010083ff5",
  measurementId: "G-LMR2TTEJZL"
};
// console.log("Welcome to the Jungle!");
// console.log(" ");
// console.log("If you are reading this, know that we are ranked #1 in Gorilla Marketing for a reason.");
// console.log(" ");
// console.log("Reach out today so we can help you market your brand :).")

firebase.initializeApp({
  apiKey: "AIzaSyCshAtyQmnlI_a-AKAq-mtzwpKwSPJnjxU",
  authDomain: "rumble-x-client.firebaseapp.com",
  projectId: "rumble-x-client"
});

var db = firebase.firestore();

// Initialize Firebase
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// var myFirebaseRef = firebase.database().ref();
var url = window.location.href;
var unique_id = Math.random().toString(36).slice(2);
var time = Date();


$( document ).ready(function() {
console.log("no more");

  db.collection("pushforgorilla").get().then(function(querySnapshot) {
  console.log(querySnapshot.size);
  var number = querySnapshot.size;
  var newNumber = number;
  $("#count").append( "<p>" + newNumber + "</p>");
});

});

// get visit data
// jQuery(function ($) {
//
//   $.getJSON("https://ipapi.co/json/", function (response) {
//
//     db.collection("pushforgorilla").doc(unique_id).set({
//       url: url,
//       country: response.country,
//       city: response.city,
//       region: response.region,
//       timezone: response.timezone,
//       time: time,
//       ip:response.ip,
//       postal:response.postal,
//     });
//   });
// });

// get email,name, phone and handle //

function handleForm(event) {


  // prevent page reload
  event.preventDefault();
  var userName = "Test Name"
  var userEmail = document.getElementById("email").value;
  var userPhone = "Test Two"
  // var selectedService = document.getElementById("dropdownMenuButton").value;
  signupError.innerHTML = "";
  signupSuccess.innerHTML = "";
  if (userEmail.includes("@")) {
    jQuery(function ($) {
      $.getJSON("https://ipapi.co/json/", function (response) {

        db.collection("pushforgorilla").doc(unique_id).set({
          name:userName,
          email: userEmail,
          phone:userPhone,
          url: url,
          country: response.country,
          city: response.city,
          region: response.region,
          timezone: response.timezone,
          time: time,
          // service: selectedService,
          ip:response.ip,
          postal:response.postal,
        });
      });
    });

    jQuery(function ($) {
console.log("success");
$("#email").hide();
$("#submit").hide();
$("#join").hide();


$("#signup-2")
        .html("Thanks for signing up 🙏, welcome to RILLANATION. -SOUTHSIDE RILLA")
        .show()
        .delay(3000)
        .fadeOut(2000);


        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "assets/js/newconfetti.js";
        console.log(s);
        $("body").append(s);

      setTimeout(function(){

        $('#project-title').hide();
        $('#bars').hide();
        $('#black').show();
        $('body').removeClass("noscroll");
        $('body').addClass('loaded');



      }, 2000);

      var s = document.createElement("script");
       s.type = "text/javascript";
       s.src = "//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5eeed4279d4dd544";
       $("body").append(s);

     setTimeout(function(){
     }, 500);
    });
  } else {
    document.getElementById("email").value = "";
    jQuery(function ($) {
      $("#signup-error")
        .html("Please make sure you entered your e-mail correctly!")
        .show()
        .delay(3000)
        .fadeOut(2000);
      $("#modalLoginForm").modal("hide");
    });
    return false;
  }
  document.getElementById("email").value = "";
}



// message handle and append
//
// var signupSuccess = document.getElementById("signup-success");
// var signupError = document.getElementById("signup-error");
//
// var form = document.getElementById("signup-form");
// var pushBtn = document.getElementById("push-btn");

form.addEventListener("submit", handleForm);
//
// const audio = new Audio("./assets/crowdcheer.mp3");
// const signature =  document.getElementById("submit");
//
// signature.addEventListener(“click”, () => {
//     audio.play();
//   });
