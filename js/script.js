$(document).ready(function() {
		$('#rumble-credit').hide(0).fadeIn(500);
		$('.borboletas').hide(0).fadeIn(500);
      // $('navbar').hide(0);

		setTimeout(function(){
			$('#rumble-credit').fadeOut(1500);
			$('.borboletas').fadeOut(1500);
		}, 1500);

		// setTimeout(function(){
		// 	$('#project-title').show();
		// 	$('#artist-name').show();
		// 	$('#bars').show();
		// }, 3500);
    //
    //
		// $( "#skip" ).click(function() {
		// 	$('#project-title').hide();
		// 	$('#bars').hide();
		// 	$('#artist-name').hide();

		setTimeout(function(){
			$('body').removeClass("noscroll");
			$('body').addClass('loaded');
      $('#mainNav').removeClass('none');
		}, 4000);


	//   setTimeout(function(){
	// 		$('#project-title').hide();
	// 		$('#artist-name').hide();
	//   }, 6000);
  //
  //
  // setTimeout(function(){
	// 	  $('body').addClass('loaded');
	// 		$('body').removeClass("noscroll");
	// 	}, 6400);
 });
