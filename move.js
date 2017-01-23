var move = (function() {


	function changeWhitePos(whiteCurrentPosTop, whiteDirectionTop, whiteCurrentPosRight, whiteDirectionRight, speed , scrolledPos, left, top) {
		var scrolled=$(window).scrollTop();

    var whiteCurrentPosTop = $(window).height()*whiteCurrentPosTop; 
    if (top) {
    	var whiteDirectionTop = whiteCurrentPosTop - ( (scrolled - scrolledPos) * whiteDirectionTop * speed);
    } else {
    	var whiteDirectionTop = whiteCurrentPosTop + ( (scrolled - scrolledPos) * whiteDirectionTop * speed);
    }

		var whiteCurrentPosRight = $(window).width()*whiteCurrentPosRight;
		if (left) {
			var whiteDirectionRight = whiteCurrentPosRight + ( (scrolled - scrolledPos) * (whiteDirectionRight * speed));
		} else {
			var whiteDirectionRight = whiteCurrentPosRight - ( (scrolled - scrolledPos) * (whiteDirectionRight * speed));
		};

		$('.white').css({
			top: whiteDirectionTop + 'px',
			right: whiteDirectionRight + 'px'
			});
	 };

	function changeColorPos(colorClassName, whiteCurrentPosTop, whiteDirectionTop, whiteCurrentPosRight, whiteDirectionRight, speed, scrolledPos, left, top) {
	 	var scrolled=$(window).scrollTop();

	 	var colorCurrentPosTop = $(window).height()*whiteCurrentPosTop; 
		if (top) {
			var colorDirectionTop = colorCurrentPosTop - ((scrolled-scrolledPos) * (whiteDirectionTop * speed) );
		}else {
			var colorDirectionTop = colorCurrentPosTop + ((scrolled-scrolledPos) * (whiteDirectionTop * speed) );
		}
		var colorCurrentPosLeft = $(window).width()*whiteCurrentPosRight;
		if (left) {
			var colorDirectionLeft = colorCurrentPosLeft - ((scrolled-scrolledPos) * (whiteDirectionRight * speed) );
		} else {
			var colorDirectionLeft = colorCurrentPosLeft + ((scrolled-scrolledPos) * (whiteDirectionRight * speed) );
		}
		
		
		$(colorClassName).css({
			display: 'block',
			top: colorDirectionTop + 'px',
			left: colorDirectionLeft + 'px'
		});
	};

	return {
	 	changeWhitePos: changeWhitePos,
	 	changeColorPos: changeColorPos
	};

})();
