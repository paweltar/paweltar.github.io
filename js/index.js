$(document).ready(function() {
  particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

  // var $grid = $('.gallery-wrapper').masonry({
  //   itemSelector: '.gallery-card',
  //   fitWidth: true,
  //   gutter: 10
  // });
  // // layout Masonry after each image loads
  // $grid.imagesLoaded().progress(function() {
  //   $grid.masonry('layout');
  // });
});
