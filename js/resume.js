$(document).ready(function() {
  var hi_css = "font-size: 16px; color: #FF5252";
  var function_css = "font-size: 16px; color: #A9CF33;"

  console.log("%cno hej! "+ "↷ " + "%cmyCode()", hi_css, function_css);

});

function myCode() {
    console.info('5 sekund i przekierowuję na moją stronę (﻿ ͡° ͜ʖ ͡°)');

    window.setTimeout(function() {
    window.location.href = 'http://paweltar.github.io/sketchbook.html';
}, 5000);
}
