$(document).ready(function() {



  var button = document.getElementById("modal-first");
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;


     nightmode()
		$('.navbar').hide();
		$('#rumble-credit').hide(0).fadeIn(500);
		$('.borboletas').hide(0).fadeIn(500);
      $('.fixedbutton').hide();

		setTimeout(function(){
			$('#rumble-credit').fadeOut(1500);
			$('.borboletas').fadeOut(1500);
		}, 1000);

		setTimeout(function(){
      		$('body').removeClass("noscroll");
    		  $('body').addClass('loaded');
    			$('.navbar').fadeIn();
          $('.fixedbutton').fadeIn();
		}, 2500);

    setTimeout(function(){
      // typewriter()
        // $('#modalLoginForm').modal('show');
        // $('body').addClass('black-background');
        // $('.modal').addClass('black-background');
    }, 2500);


    $("#getting-started").countdown("2023/09/25", function(event) {
      $(this).text(
        event.strftime('%D:%H:%M:%S')
      );
    });


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
    count = ($(".slideshow :nth-child("+count+")").fadeOut(2000).next().length == 0) ? 1 : count+1;
    $(".slideshow :nth-child("+count+")").fadeIn(2000);
}, 5000);

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
	 const randomIndex = 0;
	 const randomColorScheme = colorSchemes[randomIndex];

	 if (randomColorScheme.primaryColor === '#000000') {
		 console.log("true color white")
		 $('#head-logo-footer').css('display', 'none');
     $('#head-logo-footer-3').css('display', 'none');
		 $('#head-logo-footer-2').css('display', 'block');


		 document.getElementById("modal-first").classList.remove("buttonGlow");
		 document.getElementById("modal-first").classList.remove("red");
		 document.getElementById("modal-first").classList.add("buttonMain");
		 document.getElementById("modal-first").classList.add("black");
		 document.getElementById("modal-first").classList.add("hvr-buzz");
	   document.getElementById("modal-white").classList.add("white");

		 document.getElementById("rillanation").classList.remove("buttonGlow");
		 document.getElementById("rillanation").classList.add("buttonMain");
		 document.getElementById("rillanation").classList.add("black");
		 document.getElementById("modal-one").classList.add("hidden");
      document.getElementById("modal-three").classList.add("hidden");
		 document.getElementById("modal-two").classList.remove("hidden");
		 document.getElementById("demo").classList.add("nightmode");
		 // document.getElementById("model-white-2").css('display', 'block');

	 }

   if (randomColorScheme.backgroundColor === '#002aff') {
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
		 $('.navbar-nav > li > a').css('color', randomColorScheme.backgroundColor);
		$('#rumble-credit').css('color', randomColorScheme.secondaryColor);

    $('.nav>li>a:hover').css('color', randomColorScheme.primaryColor);


	 // Apply the random color scheme to the desired elements
	 // $('.navbar').css('color', randomColorScheme.primaryColor);
	 // $('#rumble-credit').css('color', randomColorScheme.secondaryColor);
	 // $('#bars').css('background-color', randomColorScheme.backgroundColor);
	 // $('#artist-name').css('color', randomColorScheme.primaryColor);
	 // $('#project-title').css('color', randomColorScheme.secondaryColor);
	  // $('.navbar').css('color', randomColorScheme.primaryColor);

}
