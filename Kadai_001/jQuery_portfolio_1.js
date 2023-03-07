$(function(){
    $('.carousel').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        autoplaySpeed: 3000,
        fade: true,
        cssEase: 'linear'
      });


      // $('.navigation').on({
      //   'mouseenter': () => {
      //     // テキストを「mouseenter」 
      //     $('.navigation').css('color', 'red'); 

      //    },
      //    'mouseout': () => {
      //     // テキストを「mouseout」 
      //     $('.navigation').css('color', 'black'); 
      //   },
      // });


 // お問い合わせフォームの入力チェック
 function inputCheck() {
   
 }


// メールアドレスのチェック
if ($('#email').val() == '' || $('#email').val().indexOf('@') == -1 || $('#email').val().indexOf('.') == -1) {
    // エラーあり
    $('#email').css('background-color', '#f79999');
    error = true;
    message += 'メールアドレスが未記入、または「@」「.」が含まれていません。\n';
  } else {
    // エラーなし
    $('#email').css('background-color', '#fafafa');
  }
});

$(function(){
  //.accordion_oneの中の.accordion_headerがクリックされたら
  $('.s_02 .accordion_one .accordion_header').click(function(){
    //クリックされた.accordion_oneの中の.accordion_headerに隣接する.accordion_innerが開いたり閉じたりする。
    $(this).next('.accordion_inner').slideToggle();
    $(this).toggleClass("open");
    //クリックされた.accordion_oneの中の.accordion_header以外の.accordion_oneの中の.accordion_headerに隣接する.accordion_oneの中の.accordion_innerを閉じる
    $('.s_02 .accordion_one .accordion_header').not($(this)).next('.accordion_one .accordion_inner').slideUp();
    $('.s_02 .accordion_one .accordion_header').not($(this)).removeClass("open");
  });
});


      //ハンバーガー　↓↓↓ 
$(function () {
  $(".phone_area").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
      $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
  });
  
  $("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
      $(".phone_area").removeClass('active');//ボタンの activeクラスを除去し
      $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
  }); 
});
        //ハンバーガー　↑↑↑ 
  

  $(function () {
    $("#js-pagetop").click(function () {
      $('html, body').animate({
        scrollTop: 0
      }, 300);
    });
    $(window).scroll(function () {
      if ($(window).scrollTop() > 1) {
        $('#js-pagetop').fadeIn(300).css('display', 'flex')
      } else {
        $('#js-pagetop').fadeOut(300)
      }
    });
  });



   // ==========================================================================
  // コース一覧の拡大画像モーダル処理
  // ==========================================================================

  // コース画像モーダル表示イベント
  $(".menu_img").click(function () {
    // まず、クリックした画像の HTML(<img>タグ全体)を#grayDisplay内にコピー
    $("#grayDisplay").html($(this).prop("outerHTML"));
    // outerHTMLとは、要素とそのHTMLの中を取得するプロパティです。
    //そして、fadeInで表示する。
    $("#grayDisplay").fadeIn(200);
    return false;
  });

  // コース画像モーダル非表示イベント
  // モーダル画像背景 または 拡大画像そのものをクリックで非表示にする
  $("#grayDisplay").click(function () {
    $("#grayDisplay").fadeOut(200);
    return false;
  });

  $(function() {
    $('.tab').on('click', function() {
      $('.tab, .panel').removeClass('active');
   
      $(this).addClass('active');
      
      var index = $('.tab').index(this);
      $('.panel').eq(index).addClass('active');
    });
  });
  


