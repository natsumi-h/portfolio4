
$(function(){
    /*=================================================
    スマホメニュー
    ===================================================*/
    $('.hamburger-button').on('click', function() {
        
      if ($('header').hasClass('open')) {
        $('header').removeClass('open');
      } else {
        $('header').addClass('open');
      }
    });
  
    // #maskのエリアをクリックした時にメニューを閉じる
    $('.mask').on('click', function() {
      $('header').removeClass('open');
    });
  
    // リンクをクリックした時にメニューを閉じる
    $('.header-nav-item').on('click', function() {
      $('header').removeClass('open');
    });


    //wow ふわっと表示
    new WOW().init();









});










