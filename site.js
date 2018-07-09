$('#circle').click(function() {
 $('p').html("now you've done it");
});

$('.square').click(function() {
  $(this).css('background-color', 'blue');
});

$('#circle').click(function() {
 $(this).hide(1000);
});

$('.square').hover(function() {
  $(this).css('width', '400px');
});

$(function(){
  $('#resizable').resizable();
})
