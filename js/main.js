$(function () {
    var parent = $("#shuffle");
    var divs = parent.children();
    while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
});


$( document ).ready( function() {
  $('body').flurry({
    character: '.',
    height: 1000,
    speed: 10000,
    color: "rgb(0,190,0)",
    small: '12',
    large: '35',
  });
});
