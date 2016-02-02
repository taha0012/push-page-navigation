// Needs latest version of jQuery to run

$(function(){
  $('body').removeClass('noscript');

$('.toggle-btn, .close-btn').click(function(){
  togglenav();

  });
});

function togglenav(){
  if($('.site-wrapper').attr('data-state') == 'slide-closed'){

$('.site-wrapper').attr('data-state','slide-open');
  }else{
$('.site-wrapper').attr('data-state','slide-closed');

  }
}
