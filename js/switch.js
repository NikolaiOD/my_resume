$(document).ready(function(){
  $('.language .head').click(function() {
    $(this).closest('.language').find('ul').stop().slideToggle();
  });
});