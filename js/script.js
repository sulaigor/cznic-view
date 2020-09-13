(function ($) {
  let menuIcon = $('.menu-icon');

  menuIcon.on('click', function (event) {
    event.preventDefault();
    let navigation = $('.header').find('.small-menu');
    navigation.find('.header-nav').slideToggle();
  });

  let searchBtn = $('.search');
  let searchBar = $('.search-bar');
  let escapeBtn = $('.escape');

  searchBtn.on('click', function (event) {
    event.preventDefault();
    searchBar.slideDown();
  });

  escapeBtn.on('click', function (event) {
    event.preventDefault();
    searchBar.slideUp();
  });
})(jQuery);
