$(function () {
    window.setTimeout(function () {
      $('.preloader').addClass('hide-loader');
      $('.content').addClass('show-content');
    }, 1500);
    window.setTimeout(function () {
      $('.preloader').addClass('kill-loader');
    }, 2000);
  });