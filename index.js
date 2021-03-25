$(function(){
//ハンバーガー処理
  $(".nav-toggle").click(function(){
    $(".nav-wrapper").toggleClass("open");
$('.nav-wrapper').click(function(){
$('.nav-wrapper').removeClass('open');
});
  });
//スライドショーの処理
$('#nav_btn .next').click(function(){
  $('#salmon-slide:not(:animated)').animate({
  'margin-left' : -4.2*$('#salmon-slide li').width()
  },function(){
    $('#salmon-slide').append($('#salmon-slide li:first-child'));
    $('#salmon-slide').css('margin-left','0');
    });
    });
$('#nav_btn .prev').click(function(){
$('#salmon-slide:not(:animated)').prepend($('#salmon-slide li:last-child'))
.css('margin-left' , -4.2*$('#salmon-slide li').width())
.animate({
'margin-left' :1
});
});
$('#nav_btn1 .next').click(function(){
  $('#seaurchin-slide:not(:animated)').animate({
  'margin-left' : -4.2*$('#seaurchin-slide li').width()
  },function(){
    $('#seaurchin-slide').append($('#seaurchin-slide li:first-child'));
    $('#seaurchin-slide').css('margin-left','0');
    },);
    });
    $('#nav_btn1 .prev').click(function(){
var durasion = 200
      $('#seaurchin-slide:not(:animated)').prepend($('#seaurchin-slide li:last-child'))
      .css('margin-left' , -4*$('#seaurchin-slide li').width())
      .animate({
      'margin-left' :0
      },durasion);
      });
//アコーディオン機能
$('.answer').slideUp();
$('.faq-list-item').click(function(){
var $answer = $(this).find('.answer');
if($answer.hasClass('open')){
$answer.removeClass('open');
$answer.slideUp();
$(this).find('span').text('?');
}else{
$answer.addClass('open');
$answer.slideDown();
$(this).find('span').text('!');
}
});
});
