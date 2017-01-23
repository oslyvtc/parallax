// function start(){

// 		var scrolled=$(window).scrollTop();
				
// 	 	if ($(window).scrollTop() <= 300) {

	 		function changeWhitePos(whiteCurrentPosTop, whiteDirectionTop, whiteCurrentPosRight, whiteDirectionRight, speed, scrolledPos) {

	 			var scrolled=$(window).scrollTop();

	 			var whiteCurrentPosTop = $(window).height()*whiteCurrentPosTop; 
				var whiteDirectionTop = whiteCurrentPosTop - ( (scrolled - scrolledPos) * whiteDirectionTop * speed);
				var whiteCurrentPosRight = $(window).width()*whiteCurrentPosRight;
				var whiteDirectionRight = whiteCurrentPosRight + ( (scrolled - scrolledPos) * (whiteDirectionRight * speed));

				// $(".yellow").css({
				// 		top: '62.8%',
				// 		left: '23%',
				// }); // Bug rescroll

				$(".white").css({
					top: whiteDirectionTop + 'px',
					right: whiteDirectionRight + 'px'
				});

	 		}

	 		function changeColorPos(whiteCurrentPosTop, whiteDirectionTop, whiteCurrentPosRight, whiteDirectionRight, speed, scrolledPos) {

	 			var colorCurrentPosTop = $(window).height()*whiteCurrentPosTop; 
				var colorDirectionTop = colorCurrentPosTop - ((scrolled-scrolledPos) * (whiteDirectionTop * speed) );
				var colorCurrentPosLeft = $(window).width()*whiteCurrentPosRight;
				var colorDirectionLeft = colorCurrentPosLeft - ((scrolled-scrolledPos) * (whiteDirectionRight * speed) );

				$(".yellow").css({
					display: 'block',
					top: colorDirectionTop + 'px',
					left: colorDirectionLeft + 'px'
				});
	 		}

	 		 
		

	 // 		} else if ($(window).scrollTop() >= 300 && $(window).scrollTop() < 1000) {

	 // 			var whiteCurrentPosTop = $(window).height()*0.6595; 
		// 		var whiteDirectionTop = whiteCurrentPosTop - ((scrolled - 300) * (0.0815 * 4) );
		// 		var whiteCurrentPosRight = $(window).width()*0.7373;
		// 		var whiteDirectionRight = whiteCurrentPosRight - ( (scrolled - 300) * (0.0283 * 4));

	 // 			$(".white").css({
		// 			top: whiteDirectionTop + 'px',
		// 			right: whiteDirectionRight + 'px'
		// 		});

		// 		var colorCurrentPosTop = $(window).height()*0.628; 
		// 		var colorDirectionTop = colorCurrentPosTop - ((scrolled-300) * (0.324 * 2) );
		// 		var colorCurrentPosLeft = $(window).width()*0.23;
		// 		var colorDirectionLeft = colorCurrentPosLeft - ((scrolled-300) * (0.23 * 2) );

		// 		$(".yellow").css({
		// 			display: 'block',
		// 			top: colorDirectionTop + 'px',
		// 			left: colorDirectionLeft + 'px'
		// 		});

	 // 		} else if ($(window).scrollTop() >= 1000 && $(window).scrollTop() < 1300) {

	 // 			$(".yellow").css({
		// 			display: 'none'
		// 		});

	 // 			var whiteCurrentPosTop = $(window).height()*0.3319; // 0.3319 - теперішні висота в процентах
		// 		var whiteDirectionTop = whiteCurrentPosTop - ( (scrolled - 1000) * (0.0958 * 1.5) ); // 0.0958 - різниця між вищою кульою і нижчьою (поправка на шар - 0.06); 1.5 - швидкість п.с. має бути одинакова для висоти і ширини
		// 		var whiteCurrentPosRight = $(window).width()*0.6821; // 0.6821 - теперішні відстань з права в процентах
	 // 		  var whiteDirectionRight = whiteCurrentPosRight + ((scrolled - 1000) * (0.1658*1.5)); // 0.1658 - різниця між вищою кульою і нижчьою (поправка на шар - 0.06)

	 // 			$(".white").css({
		// 			top: whiteDirectionTop + 'px',
		// 			right: whiteDirectionRight + 'px'
		// 		});

		// 		$(".green-ball").css({
		// 			top: '25.4%',
		// 			left: '23%'
		// 		});

	 // 		} else if ($(window).scrollTop() >= 1300 && $(window).scrollTop() < 1600) {

	 // 			var colorCurrentPosTop = $(window).height()*0.254; 
		// 		var colorDirectionTop = colorCurrentPosTop - ((scrolled-1300) * (0.324 * 1.5) );
		// 		var colorCurrentPosLeft = $(window).width()*0.23;
		// 		var colorDirectionRLeft = colorCurrentPosLeft - ((scrolled-1300) * (0.63 * 1.5) );

		// 		$(".green-ball").css({
		// 			display: 'block',
		// 			top: colorDirectionTop + 'px',
		// 			left: colorDirectionRLeft + 'px'
		// 		});

	 // 		} else if ($(window).scrollTop() >= 1600) {
	 // 			$(".green-ball").css({
		// 				display: 'none'
		// 		});
	 // 		}

  // } // end start