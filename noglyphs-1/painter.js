const canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const ctx = canvas.getContext('2d')

ctx.strokeStyle = "black"
ctx.lineWidth = 20
ctx.lineCap = "butt"
ctx.shadowBlur = 5;
ctx.shadowColor = "black";

let shouldPaint = false

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "ä", "ö", "ü", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "ß", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "0", '"', "1", "2", "3", "4", "5", "6", "7", "8", "9", ":", ";", "<", "=", ">", "?", "@", ];

var i = 0


document.addEventListener('mousedown', function(event) {
  shouldPaint = true
  x = event.pageX - 300
  y = event.pageY - 300
  ctx.moveTo( x, y)
  ctx.beginPath()
})

document.addEventListener('mouseup', function (event) {
  shouldPaint = false
})

window.onload = function(){
                var bsDiv = document.getElementById("pen");
                var x, y;
    // On mousemove use event.clientX and event.clientY to set the location of the div to the location of the cursor:
                window.addEventListener('mousemove', function(event){
                    x = event.clientX;
                    y = event.clientY;
                    if ( typeof x !== 'undefined' ){
                        bsDiv.style.display = "block";
                        bsDiv.style.left = event.pageX - 300 + "px";
                        bsDiv.style.top = event.pageY - 300 + "px";
                    }
                }, false);
            }

document.addEventListener('mousemove', function(event) {
  if(shouldPaint) {
    x = event.pageX - 300
    y = event.pageY - 300
    ctx.lineTo(x, y)
    ctx.stroke()
  }
})

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(event){
    ctx.lineCap = this.style.color
  })
});
