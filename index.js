$(document).ready(function () {
  //creates progress bars
  $(".circlechart").circlechart();
  // creates ripples
  $("#ripples-style").ripples({
    resolution: 512,
    dropRadius: 20,
  });
});
