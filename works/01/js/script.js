'use strict';

// 英語のスライドイン
const CLASSNAME = "-visible";
const TIMEOUT = 100;
const $target1 = $(".heading");

setInterval(() => {
  $target1.addClass(CLASSNAME);

  
}, TIMEOUT * 2);



// // ローディング画面
// $(function(){
//   $(window).on('load', function(){
//       $('.loading').delay(1500).fadeOut(300);
//   });
//   function stopload(){
//       $('.loading').delay(1000).fadeOut(700);
//   }
//   setTimeout('stopload()',10000);
// });



// ★スライドショー
$('.slider').slick({
  autoplay: true,//自動的に動き出すか。初期値はfalse。
  infinite: true,//スライドをループさせるかどうか。初期値はtrue。
  speed: 500,//スライドのスピード。初期値は300。
  slidesToShow: 3,//スライドを画面に3枚見せる
  slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
  prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
  nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
  centerMode: true,//要素を中央ぞろえにする
  variableWidth: true,//幅の違う画像の高さを揃えて表示
  dots: true,//下部ドットナビゲーションの表示
});


// ★ふわっと現れるanimation
// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime() {

  //ふわっと動くきっかけのクラス名と動きのクラス名の設定
  $('.fadeUpTrigger').each(function () { //fadeInUpTriggerというクラス名が
    var elemPos = $(this).offset().top - 50; //要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('fadeUp');
      // 画面内に入ったらfadeInというクラス名を追記
    } else {
      $(this).removeClass('fadeUp');
      // 画面外に出たらfadeInというクラス名を外す
    }
  });

  //関数でまとめることでこの後に違う動きを追加することが出来ます
  $('.fadeDownTrigger').each(function () { //fadeInDownTriggerというクラス名が
    var elemPos = $(this).offset().top - 50; //要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('fadeDown');
      // 画面内に入ったらfadeDownというクラス名を追記
    } else {
      $(this).removeClass('fadeDown');
      // 画面外に出たらfadeDownというクラス名を外す
    }
  });


}//ここまでふわっと動くきっかけのクラス名と動きのクラス名の設定

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  fadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  fadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述



// topに戻るボタン

//スクロールした際の動きを関数でまとめる
function PageTopAnime() {
  var scroll = $(window).scrollTop();
  if (scroll >= 200){//上から200pxスクロールしたら
    $('#page-top').removeClass('RightMove');//#page-topについているRightMoveというクラス名を除く
    $('#page-top').addClass('LeftMove');//#page-topについているLeftMoveというクラス名を付与
  }else{
    if(
      $('#page-top').hasClass('LeftMove')){//すでに#page-topにLeftMoveというクラス名がついていたら
      $('#page-top').removeClass('LeftMove');//LeftMoveというクラス名を除き
      $('#page-top').addClass('RightMove');//RightMoveというクラス名を#page-topに付与
    }
  }
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});


// #page-topをクリックした際の設定
$('#page-top').click(function () {
  $('body,html').animate({
      scrollTop: 0//ページトップまでスクロール
  }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
  return false;//リンク自体の無効化
});

// PDF タブ切り替え
document.querySelectorAll('.works__tabBtn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    var targetId = this.getAttribute('data-tab');
    var card = this.closest('.works__otherCard');

    card.querySelectorAll('.works__tabBtn').forEach(function(b) {
      b.classList.remove('is-active');
    });
    card.querySelectorAll('.works__tabContent').forEach(function(c) {
      c.classList.remove('is-active');
    });

    this.classList.add('is-active');
    document.getElementById(targetId).classList.add('is-active');
  });
});