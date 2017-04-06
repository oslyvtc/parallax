var move = (function() {

  function whiteBall(whiteCurrentPosTop, whiteCurrentPosLeft, whiteDirectionTop, whiteDirectionLeft, speed, scrolledPos, goLeft, goUp) {

    var scrolled = $(window).scrollTop() / $(document).height(); // get scrolled position in percentage;

    if (goUp) { // if ball moves up 
      var whiteDirectionTop = whiteCurrentPosTop - ((scrolled - scrolledPos) * whiteDirectionTop * speed);
      // determine vector of white ball, considering scrolled position 
    } else {
      var whiteDirectionTop = whiteCurrentPosTop + ((scrolled - scrolledPos) * whiteDirectionTop * speed);
      // determine vector of white ball, considering scrolled position 
    }

    if (goLeft) { // if ball moves left 
      var whiteDirectionLeft = whiteCurrentPosLeft - ((scrolled - scrolledPos) * (whiteDirectionLeft * speed));
      // determine vector of white ball, considering scrolled position 
    } else {
      var whiteDirectionLeft = whiteCurrentPosLeft + ((scrolled - scrolledPos) * (whiteDirectionLeft * speed));
      // determine vector of white ball, considering scrolled position 
    };

    $('#white').css({
      top: whiteDirectionTop * 100 + '%',
      left: whiteDirectionLeft * 100 + '%'
    });
  };

  function colorBall(colorIdName, colorCurrentPosTop, colorCurrentPosLeft, colorDirectionTop, colorDirectionLeft, speed, scrolledPos, goLeft, goUp) {

    var scrolled = $(window).scrollTop() / $(document).height();

    if (goUp) { // if ball moves up 
      var colorDirectionTop = colorCurrentPosTop - ((scrolled - scrolledPos) * (colorDirectionTop * speed));
      // determine vector of white ball, considering scrolled position 
    } else {
      var colorDirectionTop = colorCurrentPosTop + ((scrolled - scrolledPos) * (colorDirectionTop * speed));
      // determine vector of white ball, considering scrolled position 
    }

    if (goLeft) { // if ball moves left 
      var colorDirectionLeft = colorCurrentPosLeft - ((scrolled - scrolledPos) * (colorDirectionLeft * speed));
      // determine vector of white ball, considering scrolled position 
    } else {
      var colorDirectionLeft = colorCurrentPosLeft + ((scrolled - scrolledPos) * (colorDirectionLeft * speed));
      // determine vector of white ball, considering scrolled position 
    }

    $(colorIdName).css({
      display: 'block',
      top: colorDirectionTop * 100 + '%',
      left: colorDirectionLeft * 100 + '%'
    });
  };

  return {
    whiteBall: whiteBall,
    colorBall: colorBall
  };

})();