@import 'jquery';
$(document).ready(function(){
    $('.icon-menu').click(function() {
    $('.menu').animate({
      left: "0px"
    }, 100);

    $('body').animate({
      left: "185px"
    }, 100);
    
    
    
   });

 
  $('.icon-close').click(function() {
    $('.menu').animate({
      left: "-285px"
    }, 100);

    $('body').animate({
      left: "0px"
    }, 100);
  });
  
  
    
    });