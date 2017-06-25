//parallax scroll

$(document).ready(function() {

  $window = $(window);

  $('section[data-type="background"]').each(function() {
    var $scroll = $(this);

    $(window).scroll(function() {
      var yPos = -($window.scrollTop() / $scroll.data('speed'));
      var coords = '50% ' + yPos + 'px';
      $scroll.css({
        backgroundPosition: coords
      });
    }); // end window scroll
  }); // end section function


  /* Create HTML5 element for IE */
  document.createElement("section");

  // welcome ** typed.js by http://www.mattboldt.com/ **


    $(".welcomeText").typed({
      strings: ["Hello.", "Olá.", "¡Hola!", "Bonjour.", "Ciào."],
      typeSpeed: 30, // typing speed
      backDelay: 500, // pause before backspacing
      loop: true, // loop on or off (true or false)
      loopCount: false, // number of loops, false = infinite
    });


    //nav

  $(".navbar").hide();


    $(window).scroll(function() {
      if ($(this).scrollTop() > 150) {
        $('.navbar').fadeIn();
      } else {
        $('.navbar').fadeOut();
      }
    });




  //tooltip


  $("[data-toggle=tooltip]").tooltip();



  //descriptions



  $(".info").on("click", function() {
    $('.descSection').removeClass('hide');
    $('.description').hide();
    $('#desc' + $(this).attr('data-desc')).show();
    $('html, body').animate({
      scrollTop: +($('.alldescriptions').offset().top) + ($('.descSection').height())
    }, 800);

  });


  $(".fecha").on("click", function() {
    $('.descSection').addClass('hide');
    $('html, body').animate({
      scrollTop: $('.works').offset().top
    }, 600);
  });


  //carousel


  $('.carousel').carousel({
    interval: 2000
  });

});