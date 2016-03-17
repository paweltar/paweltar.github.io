$( document ).ready(function() {
  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

  $( ".site-title" ).hover(
  function() {
    $( this ).addClass( "font-effect-anaglyph" );
  }, function() {
    $( this ).removeClass( "font-effect-anaglyph" );
  }
);
});
