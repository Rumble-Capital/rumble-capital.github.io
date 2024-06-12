$(document).ready(function() {
	$('.borboletas').hide();

		// $('#rumble-credit').hide(0).fadeIn(500);
		// $('.borboletas').hide(0).fadeIn(500);
		//
		// setTimeout(function(){
		// 	$('#rumble-credit').fadeOut(1500);
		// 	$('.borboletas').fadeOut(1500);
		// }, 1000);

		setTimeout(function(){
			$('#project-title').show();
			$('#bars').show();
			$('#artist-name').show();
		}, 500);

    setTimeout(function(){
      $('#project-title').hide();
      $('#bars').hide();
      $('#artist-name').hide();
          $('body').removeClass("noscroll");
          $('body').addClass('loaded');
          $('.navbar').fadeIn();
          $('.fixedbutton').fadeIn();
    }, 2000);

    var button = document.getElementById("modal-first");
      var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

      // if (screenWidth < 768) {
      //   var url = "https://linktr.ee/pushforgorilla"; // Change this to your desired URL
      //
      //   button.addEventListener("click", function() {
      //     window.open(url);
      //   });
      // }



	//
	// 	setTimeout(function(){
	// 		$('#project-title').hide();
	// 		$('#bars').hide();
	// 	}, 4500);
	//
  // setTimeout(function(){
	// 		$('body').removeClass("noscroll");
	// 	  $('body').addClass('loaded');
	// 		$('.navbar').fadeIn();
	// 	}, 4800);


 });

 var classes = [
    'FROM THE LEGENDARY SOUTHSIDE RILLA',
    'AGAINST ALL ODDS',
    'WEEKLY ART DROPS',
];

(function displayClass(i) {
    $('').text(classes[i]).fadeIn(1000, function() {
        $(this).delay(600).fadeOut(1000, function() {
            displayClass((i + 1) % classes.length);
        });
    });
})(0);




 $( "#modal-first" ).click(function() {
	 		$('.navbar').show();
		 	$('#project-title').hide();
			$('#artist-name').hide();
		 	$('#bars').hide();
		 	$('#black').show();
			 	$('body').removeClass("noscroll");
			 $('body').addClass('loaded');


		 setTimeout(function(){


		 }, 500);
 });

 var count = 1;
setInterval(function() {
    count = ($(".slideshow :nth-child("+count+")").fadeOut(1000).next().length == 0) ? 1 : count+1;
    $(".slideshow :nth-child("+count+")").show();
}, 5000);

// setInterval(function() {
//     count = ($(".main-feature :nth-child("+count+")").fadeOut(1000).next().length == 0) ? 1 : count+1;
//     $(".main-feature :nth-child("+count+")").show();
// }, 5000);

 $( "#skip" ).click(function() {
	 $('#project-title').hide();
	 $('#bars').hide();
 	$('#black').show();
	 $('body').removeClass("noscroll");
	$('body').addClass('loaded');

	 // var s = document.createElement("script");
	 // s.type = "text/javascript";
	 // s.src = "//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5eeed4279d4dd544";
	 // $("body").append(s);

 setTimeout(function(){


 }, 500);
 });



$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});

$(window).scroll(function() {
  var scrollTop = $(this).scrollTop();

  $('#header-fade').css({
    opacity: function() {
      var elementHeight = $(this).height(),
          opacity = ((1 - (elementHeight - scrollTop) / elementHeight) * 0.78);

      return opacity;
    }
  });

});


// function applyNightMode() {
//   var now = new Date();
//   var hour = now.getHours();
// 	console.log(hour);
//
//   // Check if current time is between 8:00 PM and 5:00 AM
//   if (hour >= 20 || hour < 5) {
//     // Select the elements you want to change the color of
//     var element = document.getElementById('#black');
//
// element.style.cssText = 'backgroundColor:white !important';
//     // Loop through the elements and apply the desired color
//     // for (var i = 0; i < elements.length; i++) {
//     //   elements[i].style.color = '#FFFFFF'; // Change the color to white
//     //   elements[i].style.backgroundColor = '#000000'; // Change the background color to black
//     // }
//   }
// }


function randomIntFromInterval(min, max) { // min and max included
return Math.floor(Math.random() * (max - min + 1) + min)
}



function nightmode () {
	console.log("nightmode on?")
	const colorSchemes = [
		 {
			 primaryColor: '#FF0E0E',
			 secondaryColor: '#FFFFFF',
			 backgroundColor: '#000000'
		 },
		 {
			 primaryColor: '#000000',
			 secondaryColor: '#000000',
			 backgroundColor: '#FFFFFF'
		 }
     // {
     //   primaryColor: '#FFFFFF',
     //   secondaryColor: '#FFFFFF',
     //   backgroundColor: '#002aff'
     // }
	 ];

	 // Select a random color scheme index
	 const randomIndex = Math.floor(Math.random() * colorSchemes.length);
	 const randomColorScheme = colorSchemes[randomIndex];

	 if (randomColorScheme.primaryColor === '#000000') {
		 console.log("true color white")
		 $('#head-logo-footer').css('display', 'none');
     $('#head-logo-footer-3').css('display', 'none');
		 $('#head-logo-footer-2').css('display', 'block');
      $('#modal-white').css('border-color', 'white');
      $('#icon-one').css('background', 'black');
      $('#icon-two').css('background', 'black');
      $('#icon-three').css('background', 'black');
      document.getElementById("main-nav").classList.add("background-white");




		 document.getElementById("modal-first").classList.remove("buttonGlow");
		 document.getElementById("modal-first").classList.remove("red");
		 document.getElementById("modal-first").classList.add("buttonMain");
		 document.getElementById("modal-first").classList.add("black");

		 document.getElementById("modal-first").classList.add("hvr-buzz");
     document.getElementById("subscribe-toggle").classList.add("background-black");
     document.getElementById("subscribe-footer").classList.add("background-black");

	   // document.getElementById("modal-white").classList.add("white");

		 // document.getElementById("rillanation").classList.remove("buttonGlow");
		 // document.getElementById("rillanation").classList.add("buttonMain");
		 // document.getElementById("rillanation").classList.add("black");
		 // document.getElementById("modal-one").classList.add("hidden");
     //  document.getElementById("modal-three").classList.add("hidden");
		 // document.getElementById("modal-two").classList.remove("hidden");
		 // document.getElementById("demo").classList.add("nightmode");

		 // document.getElementById("model-white-2").css('display', 'block');

	 }

   if (randomColorScheme.backgroundColor === '#ffffff') {
     console.log("true color white")
     $('#head-logo-footer').css('display', 'none');
      $('#head-logo-footer-3').css('display', 'block');
     $('#head-logo-footer-2').css('display', 'none');









     document.getElementById("modal-first").classList.remove("buttonGlow");
     document.getElementById("modal-first").classList.remove("red");
     document.getElementById("modal-first").classList.add("buttonMain");
     document.getElementById("modal-first").classList.add("black");
     document.getElementById("modal-first").classList.add("hvr-buzz");
     document.getElementById("modal-white").classList.add("blue");


     document.getElementById("rillanation").classList.remove("buttonGlow");
     document.getElementById("rillanation").classList.add("buttonMain");
     document.getElementById("rillanation").classList.add("black");
     document.getElementById("modal-one").classList.add("hidden");
     document.getElementById("modal-two").classList.add("hidden");
     document.getElementById("modal-three").classList.remove("hidden");
     document.getElementById("demo").classList.add("nightmode");
     document.getElementById("artist-bio").classList.add("nightmode");



     // document.getElementById("model-white-2").css('display', 'block');

   }

	 $('#project-title').css('color', randomColorScheme.primaryColor);
	 $('.borboleta-anim').css('background-color', randomColorScheme.secondaryColor);
	 $('.bar').css('background', randomColorScheme.primaryColor);
	  $('.link').css('color', randomColorScheme.secondaryColor);
	  $('#loader-wrapper .loader-section').css('backgroundColor', randomColorScheme.backgroundColor);
		 $('.navbar').css('background', randomColorScheme.backgroundColor);
		 $('.section.social').css('background', randomColorScheme.backgroundColor);
		 $('a.navbar-title').css('color', randomColorScheme.primaryColor);
		 $('.navbar-nav > li > a').css('color', randomColorScheme.secondaryColor);
		$('#rumble-credit').css('color', randomColorScheme.secondaryColor);
      $('.brand-color').css('color', randomColorScheme.primaryColor);



      // $('.icon-bar').css('color', 'white');



	 // Apply the random color scheme to the desired elements
	 // $('.navbar').css('color', randomColorScheme.primaryColor);
	 // $('#rumble-credit').css('color', randomColorScheme.secondaryColor);
	 // $('#bars').css('background-color', randomColorScheme.backgroundColor);
	 // $('#artist-name').css('color', randomColorScheme.primaryColor);
	 // $('#project-title').css('color', randomColorScheme.secondaryColor);
	  // $('.navbar').css('color', randomColorScheme.primaryColor);

}





// var classes = [
//     'FROM THE LEGENDARY ARTIST SOUTHSIDE RILLA',
//     'THE KING OF GORILLA MARKETING',
//     'WEEKLY ART DROPS',
// ];
//
// (function displayClass(i) {
//     $('#king h2').text(classes[i]).fadeIn(5000, function() {
//         $(this).delay(1000).fadeOut(5000, function() {
//             displayClass((i + 1) % classes.length);
//         });
//     });
// })(0);
