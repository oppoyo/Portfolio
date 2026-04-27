'use strict';

// ローディング画面

// 3秒は表示してからローディング画面を非表示に
// window.setTimeout(stopload, 1500);

//ページ読み込み完了でローディング画面を非表示
window.addEventListener('load', stopload);

//10秒経過で強制的にローディング画面を非表示
setTimeout('stopload()',7000);

//ローディング画面を非表示にする処理
function stopload() {

  //ローディング画面とページを取得
  let loader = document.querySelector('.loading')

  //ローディング画面とページにクラスを追加
  loader.classList.add('hide');
}

// ハンバーガーメニュー
$(".openbtn1").click(function () {//ボタンがクリックされたら
  $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
    $(".circle").toggleClass('circle--none');
    $(".inner").toggleClass('circle--none');
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn1").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
    $(".circle").removeClass('circle--none');
    $(".inner").removeClass('circle--none');
});



// 文字回転
const textArray = document.querySelector('.text').textContent.split('');

let after = '';
textArray.forEach(function(val, index) {
  after += '<span class="circle__text">' + val + '</span>';
});  

document.querySelector('.text').innerHTML = after;

const textcnt = textArray.length;
const circleR = (document.querySelector('.circle').clientHeight) / 2;
const fontH = (document.querySelector('.inner').clientHeight);
const dist = circleR - fontH;

const spans = document.querySelectorAll('span.circle__text');
spans.forEach(function(span, index) {
  const num = index + 1;
  const radX = Math.sin(360 / textcnt * num * (Math.PI / 180));
  const radY = Math.sin((90 - (360 / textcnt * num)) * (Math.PI / 180));
  span.style.transform = 'translate(' + dist * radX + 'px, ' + -(dist * radY) + 'px) rotate(' + 360 / textcnt * num + 'deg)';
});



// スクロールでサイトタイトルを小さく
$(function(){
  $(window).scroll(function(){
    var obj = $('.siteTitle');
    var objs = $('.sitetitle--small');
    var objss = $('.circle');
    var objsss = $('.inner');
    var objfff = $('.base-head');
    
    scroll = $(window).scrollTop();
    if (scroll > 1) {
      obj.addClass('isSmall');
      objs.addClass('isSmall');
      objss.addClass('isSmall');
      objsss.addClass('isSmall');
      objfff.addClass('isWhite');
    } else{
      obj.removeClass('isSmall');
      objs.removeClass('isSmall');
      objss.removeClass('isSmall');
      objsss.removeClass('isSmall');
      objfff.removeClass('isWhite');
    }
  })
});

