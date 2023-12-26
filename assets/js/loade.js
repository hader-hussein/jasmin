$(document).ready(function(){
     'use strict';
     var windoh = $(window).height();
     $('body').height(windoh);
   
    $(".component-stert  .component--intro ").fadeOut(2000,function()
      {
          $(this).parent().fadeOut(1000,function(){
          $("body").css("overflow","auto");
          $(this).remove();
          $('body').height("100%");
      });
      
    }
    
     );
     const currentabout = location.href; 
     const menuitemabout = document.querySelectorAll('.navber-index .nav-item .nav-link');
      const menulengthabout = menuitemabout.length
     for (let j = 0; j<menulengthabout; j++){
      if(menuitemabout[j].href === currentabout) {
       menuitemabout[j].className = "active" 
         }
     }
         $('.navber-index .nav-item .nav-link').removeClass('active').removeAttr('aria-current');
         $('a[href="' + location.pathname + '"]').closest('li').addClass('active').attr('aria-current', 'page');
        
  })
/** */
$(window).scroll(function(){
  $(' .navber-index').toggleClass('scrolled', $(this).scrollTop() > 50);
  });

// You can also pass an optional settings object

function increaseCount(a, b) {
  var input = b.previousElementSibling;
  var value = parseInt(input.value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  input.value = value;
}

function decreaseCount(a, b) {
  var input = b.nextElementSibling;
  var value = parseInt(input.value, 10);
  if (value > 1) {
    value = isNaN(value) ? 0 : value;
    value--;
    input.value = value;
  }
}
//
function addRow() {
  var main = $('.addMain').val();
  var preferred = $('.addPrefer').val();
  var common = $('.addCommon').val();
  $(formatRows(main,preferred,common)).insertAfter('#addRow');
  $(input).val('');  
}

$('.addBtn').click(function()  {
  addRow();
});