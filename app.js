<<<<<<< HEAD
var main = function() {
  /* Push the body and the nav over by 285px over */
  $('.icon-menu').click(function() {
    $('.menu').animate({
      left: "0px"
    }, 200);

    $('body').animate({
      left: "285px"
    }, 200);
  });

  /* Then push them back */
  $('.icon-close').click(function() {
    $('.menu').animate({
      left: "-285px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);
  });
  
  /*toggle the sub-menu on pictures on and offs*/
  $('#pictures').click(function(){
//    alert( $('#picturesSubMenu').attr('id') )
    $('#picturesSubMenu').toggle('hidden_custom');
  });  
};


=======
var main = function() {
  /* Push the body and the nav over by 285px over */
  $('.icon-menu').click(function() {
    $('.menu').animate({
      left: "0px"
    }, 200);

    $('body').animate({
      left: "285px"
    }, 200);
  });

  /* Then push them back */
  $('.icon-close').click(function() {
    $('.menu').animate({
      left: "-285px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);
  });
  
  /*toggle the sub-menu on pictures on and offs*/
  $('#pictures').click(function(){
//    alert( $('#picturesSubMenu').attr('id') )
    $('#picturesSubMenu').toggle('hidden_custom');
  });  
};


>>>>>>> f971ba45093bcb87e72736f4217f23525c676740
$(document).ready(main());