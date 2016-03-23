$(document).ready(function() {
  // We retrieve our drop cap elements using a class selector...
    var dropcaps = document.querySelectorAll(".dropcap");
    // ...then give them a height of three lines.
    // By default, the drop cap's baseline will also be the third paragraph line.
    window.Dropcap.layout(dropcaps, 2, 2);
});
