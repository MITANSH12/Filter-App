function preload() {

}

function setup() {
canvas = createCanvas(600 , 480);
canvas.position(110 , 270);
video = createCapture(VIDEO);
video.hide();
tint_colour = "";
}

function draw() {
image(video , 0 , 0 , 600 , 480);

tint(tint_colour);
}

function take_snapshot() {
    save('filter_image.png');   
}

function filter_tint() {
    tint_colour = document.getElementById("color_name").value; 
}
window.addEventListener("keydown" ,  capture_keydown);
function capture_keydown(e) {
 keyPressed = e.keyCode;
 if (keyPressed == '65') {
  filter_tint();
  
 }
 if (keyPressed == '83') {
    take_snapshot();
    }
}
