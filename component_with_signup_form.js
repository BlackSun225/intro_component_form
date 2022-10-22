$(document).ready(function(){
  $('button').on({
    mouseover: function() {
      $(this).css({
        'opacity': '75%',
        'cursor': 'pointer'
      });
      $("input").blur();    
    },
    mouseout: function() {
      $(this).css('opacity', '100%');
    }
  })
  $('input[type="text"]').blur(function(){
    if($(this).val() === '' || !$(this).val().match(/[a-z]{3,}/) || $(this).val().match(/\d+|\W/)) {
        $(this).css('border', '2px solid hsl(0, 100%, 74%)');
        $(this).attr('placeholder', '');
        $(this).nextAll().css('display', 'block');
      }else{
          $(this).nextAll().css('display', 'none');
          $(this).css('border', '1px solid hsl(249, 10%, 26%)');
      }
  })
  $('input[type="password"]').blur(function(){
    if($(this).val() === '') {
      $(this).css('border', '2px solid hsl(0, 100%, 74%)');
      $(this).attr('placeholder', '');
      $(this).nextAll().css('display', 'block');
    }else{
        $(this).nextAll().css('display', 'none');
        $(this).css('border', '1px solid hsl(249, 10%, 26%)');
    }
  });
  const z = /[a-z0-9]+@[a-z]{3,}\.[a-z]{2,}/;
  $('input[type="email"]').blur(function(){
    if(!$(this).val().match(z)) {
      $(this).nextAll().css('display', 'block');
      $(this).css('border', '2px solid hsl(0, 100%, 74%)');
      $(this).attr('placeholder', '');
    }else{
      $(this).nextAll().css('display', 'none');
      $(this).css('border', '1px solid hsl(249, 10%, 26%)');
    }
  });
});