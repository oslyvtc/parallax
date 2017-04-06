var navigate = (function() {

  function navigateOnClick() {
    $('#btn-1').on('click', function() {
      $('html,body').animate({
        scrollTop: $("#page1").offset().top
      }, 1000);
      return false;
    });

    $('#btn-2').on('click', function() {
      $('html,body').animate({
        scrollTop: $("#page2").offset().top
      }, 1000);
      return false;
    });

    $('#btn-3').on('click', function() {
      $('html,body').animate({
        scrollTop: $("#page3").offset().top
      }, 1000);
      return false;
    });

    $('#btn-4').on('click', function() {
      $('html,body').animate({
        scrollTop: $("#page4").offset().top
      }, 1000);
      return false;
    });

    $('#btn-5').on('click', function() {
      $('html,body').animate({
        scrollTop: $("#page5").offset().top
      }, 1000);
      return false;
    });

    $('#btn-6').on('click', function() {
      $('html,body').animate({
        scrollTop: $("#page6").offset().top
      }, 1000);
      return false;
    });
  };

  function navigateOnScroll() {
    var page1Top = 0;
    var page2Top = $("#page2").offset().top - (($("#page3").offset().top - $("#page2").offset().top) / 2);
    var page3Top = $("#page3").offset().top - (($("#page4").offset().top - $("#page3").offset().top) / 2);
    var page4Top = $("#page4").offset().top - (($("#page5").offset().top - $("#page4").offset().top) / 2);
    var page5Top = $("#page5").offset().top - (($("#page6").offset().top - $("#page5").offset().top) / 2);
    var page6Top = $("#page6").offset().top - (($(document).height() - $("#page6").offset().top) / 2);

    $("#dots a").removeClass("active"); 

    if ($(document).scrollTop() >= page1Top && $(document).scrollTop() < page2Top) {
      $("#btn-1").addClass("active");
    } else if ($(document).scrollTop() >= page2Top && $(document).scrollTop() < page3Top) {
      $("#btn-2").addClass("active");
    } else if ($(document).scrollTop() >= page3Top && $(document).scrollTop() < page4Top) {
      $("#btn-3").addClass("active");
    } else if ($(document).scrollTop() >= page4Top && $(document).scrollTop() < page5Top) {
      $("#btn-4").addClass("active");
    } else if ($(document).scrollTop() >= page5Top && $(document).scrollTop() < page6Top) {
      $("#btn-5").addClass("active");
    } else if ($(document).scrollTop() >= page6Top) {
      $("#btn-6").addClass("active");
    }


  }

  return {
    navigateOnClick: navigateOnClick,
    navigateOnScroll: navigateOnScroll
  };



})();