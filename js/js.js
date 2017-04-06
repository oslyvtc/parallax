$(function() {
  start();
  navigate.navigateOnScroll();
  navigate.navigateOnClick();

  $(window).on("scroll", function() {
    start();
    navigate.navigateOnScroll();
  });

  function start() {

    var scrolled = $(window).scrollTop() / $(document).height();
    // get scrolled position in percentage;
    var checkPoint = document.body.scrollHeight / 15 / $(document).height();
    // divide document height by 15 and turn it to percentage;

    if (scrolled <= checkPoint) {
      move.whiteBall(0.82, 0.26, 0.57, 0.1, 3, 0, true, true);
      $("#yellow").css({
        top: '67.4%',
        left: '23%',
      }); // Bug rescroll

    } else if (scrolled >= checkPoint && scrolled < checkPoint * 2) {

      move.whiteBall(0.7, 0.238, 0.6, 0.1, 8, checkPoint, false, true);
      move.colorBall('#yellow', 0.674, 0.23, 0.58, 0.19, 16, checkPoint, true, true);

    } else if (scrolled >= checkPoint * 2 && scrolled < checkPoint * 3) {

      $('#yellow').hide();

      move.whiteBall(0.38, 0.293, 0.33, 0.24, 2.9, checkPoint * 2, true, true);

      $('#green-ball').css({
        top: '29.7%',
        left: '23%'
      }); // Bug rescroll

    } else if (scrolled >= checkPoint * 3 && scrolled < checkPoint * 4) {

      $('#yellow').hide();

      move.colorBall('#green-ball', 0.297, 0.23, 0.81, 0.67, 5, checkPoint * 3, true, true);
      move.whiteBall(0.3165, 0.2468, 0.33, 0.24, 1, checkPoint * 3, false, false);

    } else if (scrolled >= checkPoint * 4 && scrolled < checkPoint * 5) {

      $('#yellow').hide();
      $('#green-ball').hide();

      $('#brown').css({
        top: '47.4%',
        left: '23%'
      }); // Bug rescroll

      move.whiteBall(0.3382, 0.2626, 0.472, 0.09, 3.58, checkPoint * 4, true, false);

    } else if (scrolled > checkPoint * 5 && scrolled < checkPoint * 6) {

      $('#yellow').hide();
      $('#green-ball').hide();

      move.colorBall('#brown', 0.474, 0.23, 0.472, 0.215, 15.5, checkPoint * 5, true, false);
      move.whiteBall(0.4497, 0.2413, 0.7374, 0.235, 9.68, checkPoint * 5, false, false);

    } else if (scrolled >= checkPoint * 6 && scrolled < checkPoint * 7) {

      $('#yellow').hide();
      $('#green-ball').hide();
      $('#brown').hide();

      move.whiteBall(0.915, 0.3895, 0.6293, 0.1616, 6, checkPoint * 6, false, true);

    } else if (scrolled >= checkPoint * 7 && scrolled < checkPoint * 8) {

      $('#yellow').hide();
      $('#green-ball').hide();
      $('#brown').hide();

      $('#blue').css({
        top: '47.4%',
        left: '49%'
      }); // Bug rescroll

      move.whiteBall(0.6661, 0.4534, 0.53, 0.12, 4.65, checkPoint * 7, false, true);

    } else if (scrolled >= checkPoint * 8 && scrolled < checkPoint * 9) {
      $('#yellow').hide();
      $('#green-ball').hide();
      $('#brown').hide();

      $('#blue').show();

      move.colorBall('#blue', 0.474, 0.49, 0.474, 0, 15, checkPoint * 8, true, true);
      move.whiteBall(0.5031, 0.4902, 0.4907, 0.176, 6, checkPoint * 8, false, false);

    } else if (scrolled >= checkPoint * 9 && scrolled < checkPoint * 10) {

      $('#yellow').hide();
      $('#green-ball').hide();
      $('#brown').hide();
      $('#blue').hide();

      move.whiteBall(0.6983, 0.5682, 0.43, 0.2522, 7.1, checkPoint * 9, false, true);

      $('#pink').css({
        top: '47.4%',
        left: '70%'
      }); // Bug rescroll

    } else if (scrolled >= checkPoint * 10 && scrolled < checkPoint * 11) {
      $('#yellow').hide();
      $('#green-ball').hide();
      $('#brown').hide();
      $('#blue').hide();

      move.colorBall('#pink', 0.474, 0.70, 0.422, 0.2522, 16, checkPoint * 10, false, true);
      move.whiteBall(0.4952, 0.6872, 0.43, 0.2522, 10, checkPoint * 10, false, true);

    } else if (scrolled >= checkPoint * 11 && scrolled < checkPoint * 12) {

      $('#yellow').hide();
      $('#green-ball').hide();
      $('#brown').hide();
      $('#blue').hide();
      $('#pink').hide();

      move.whiteBall(0.209, 0.8549, 0.59, 0.103, 6, checkPoint * 11, false, false);

      $('#black').css({
        top: '47.4%',
        left: '90%'
      }); // Bug rescroll

    } else if (scrolled >= checkPoint * 12 && scrolled < checkPoint * 13) {

      $('#yellow').hide();
      $('#green-ball').hide();
      $('#brown').hide();
      $('#blue').hide();
      $('#pink').hide();

      move.colorBall('#black', 0.474, 0.9, 0.9, 0.105, 7, checkPoint * 12, false, false);
      move.whiteBall(0.4474, 0.8958, 0.0868, 0.115, 1.205, checkPoint * 12, false, false);

    } else if (scrolled >= checkPoint * 13) {

      $('#yellow').hide();
      $('#green-ball').hide();
      $('#brown').hide();
      $('#blue').hide();
      $('#pink').hide();
      $('#black').hide();

      move.whiteBall(0.4542, 0.9042, 0.0868, 0.115, 1, checkPoint * 13, false, false);

    } // end if

  }; // end start

});