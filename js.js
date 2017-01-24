$(function() {
start();

	$(window).on("scroll", start)
	 	function start(){

		var scrolled=$(window).scrollTop();
				
	 	if ($(window).scrollTop() <= 300) { 
	 		move.whiteBall(0.8, 0.172, 0.72, 0.044, 2, 0, true, true);
	 		$(".yellow").css({
				top: '62.8%',
				left: '23%',
			}); // Bug rescroll

	 	} else if ($(window).scrollTop() >= 300 && $(window).scrollTop() < 1000) {

			move.whiteBall(0.6595, 0.0815, 0.7373, 0.0283, 4, 300, false, true);
			move.colorBall('.yellow', 0.628, 0.324, 0.23, 0.23, 2, 300, true, true);

	  } else if ($(window).scrollTop() >= 1000 && $(window).scrollTop() < 1300) {
			
			$('.yellow').hide();

			move.whiteBall(0.3319, 0.0958, 0.6821, 0.1658, 1.5, 1000, true, true);

			$('.green-ball').css({
				top: '25.4%',
				left: '23%'
			});// Bug rescroll

	 	} else if ($(window).scrollTop() >= 1300 && $(window).scrollTop() < 1600) {

	 		$('.yellow').hide();

			move.colorBall('.green-ball', 0.254, 0.324, 0.23, 0.67, 1.5, 1300, true, true);
			move.whiteBall(0.2738, 0.0301, 0.7306, 0.0485, 1, 1300, false, false);

	 	} else if ($(window).scrollTop() >= 1600 && $(window).scrollTop() < 1900) {

	 		$('.yellow').hide();
	 		$('.green-ball').hide();

			$('.brown').css({
				top: '43.4%',
  			left: '23%'
			});// Bug rescroll

	 		move.whiteBall(0.286, 0.0122, 0.721, 0.0036, 23.2, 1600, true, false);
	 		console.log($(window).scrollTop())

	 	} else if ($(window).scrollTop() > 1900 && $(window).scrollTop() < 2300) {

	 		$('.yellow').hide();
	 		$('.green-ball').hide();

	 		move.colorBall('.brown', 0.434, 0.566, 0.23, 0.5, 1.7, 1900, true, false);
	 		move.whiteBall(0.4012, 0.5239, 0.7374, 0.235, 1.75, 1900, false, false);

	 	} else if ($(window).scrollTop() >= 2300 && $(window).scrollTop() < 2600) {

	 		$('.yellow').hide();
	 		$('.green-ball').hide();
	 		$('.brown').hide();

			move.whiteBall(0.8991, 0.2268, 0.6293, 0.1616, 3, 2300, false, true);

	 	} else if ($(window).scrollTop() >= 2600 && $(window).scrollTop() < 2800) {

	 		$('.yellow').hide();
	 		$('.green-ball').hide();
	 		$('.brown').hide();

	 		$('.blue').css({
				top: '43.4%',
  			left: '49%'
			});// Bug rescroll

	 		move.whiteBall(0.6186, 0.1846, 0.5319, 0.11, 2.85, 2600, false, true);

	 	} else if ($(window).scrollTop() >= 2800 && $(window).scrollTop() < 3100) {
	 		$('.yellow').hide();
	 		$('.green-ball').hide();
	 		$('.brown').hide();

	 		$('.blue').show();

	 		move.colorBall('.blue', 0.434, 0.434, 0.49, 0, 2.45, 2800, true, true);
	 		move.whiteBall(0.4760, 0.152, 0.4907, 0.176, 2.5, 2800, false, false);
	 		console.log($(window).scrollTop())

	 	} else if ($(window).scrollTop() >= 3100 && $(window).scrollTop() < 3400) {

	 		$('.yellow').hide();
	 		$('.green-ball').hide();
	 		$('.brown').hide();
	 		$('.blue').hide();

			move.whiteBall(0.6311, 0.1971, 0.4038, 0.2522, 2.15, 3100, false, true);

			$('.pink').css({
				top: '43.4%',
  			left: '70%'
			});// Bug rescroll

	 	} else if ($(window).scrollTop() >= 3400 && $(window).scrollTop() < 3900) {
	 		$('.yellow').hide();
	 		$('.green-ball').hide();
	 		$('.brown').hide();
	 		$('.blue').hide();

	 		move.colorBall('.pink', 0.434, 0.434, 0.70, 0.60, 1.35, 3400, false, true);

	 		move.whiteBall(0.4585, 0.434, 0.2975, 0.6, 0.7, 3400, false, true);

	 	} else if ($(window).scrollTop() >= 3900 && $(window).scrollTop() < 4000) {
	 		$('.yellow').hide();
	 		$('.green-ball').hide();
	 		$('.brown').hide();
	 		$('.blue').hide();
	 		$('.pink').hide();
			move.whiteBall(0.4585, 0.434, 0.2975, 0.6, 0.7, 3400, false, true);

	 	} else if ($(window).scrollTop() > 4000 && $(window).scrollTop() < 4300) {

	 		$('.yellow').hide();
	 		$('.green-ball').hide();
	 		$('.brown').hide();
	 		$('.blue').hide();
	 		$('.pink').hide();

	 		move.whiteBall(0.2108, 0.2232, 0.1320, 0.115, 2, 4000, false, false);

	 		$('.black').css({
				top: '43.4%',
  			left: '90%'
			});// Bug rescroll

	 	} else if ($(window).scrollTop() > 4300 && $(window).scrollTop() < 4900) {

	 		$('.yellow').hide();
	 		$('.green-ball').hide();
	 		$('.brown').hide();
	 		$('.blue').hide();
	 		$('.pink').hide();

	 		move.colorBall('.black', 0.434, 0.566, 0.90, 0.128, 1, 4300, false, false);
	 		move.whiteBall(0.392, 0.2232, 0.0868, 0.115, 1.205, 4300, false, false);

	 	} else if ($(window).scrollTop() > 4900 && $(window).scrollTop() < 5500){

	 		$('.yellow').hide();
	 		$('.green-ball').hide();
	 		$('.brown').hide();
	 		$('.blue').hide();
	 		$('.pink').hide();
	 		$('.black').hide();
	 		move.whiteBall(0.6112, 0.2232, 0.0321, 0.115, 0.55, 4900, true, false);

	  }

  }; // end start

});

	// $('.white').animate({
	// 	top: '66%',
 //  	left: '24.2%',
	// },1000, 'linear', function() {
	// $('.yellow').animate({
	// 	top: '0%',
 //  	left: '0%'
	// },2000)}).animate({
	// 	top: '43.4%',
 //  	left: '33%'
	// },1500,'linear')