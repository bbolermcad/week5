var beats, sound1, sound2;

function preload() {
  beats = loadSound('beats.wav');
  sound1 = loadSound('guitar.wav');
  sound2 = loadSound('synth.mp3');
}

function setup() {
  createCanvas(600, 400);
  background (202, 190, 190);
  beats.loop();
}

function draw () {
  fill(14, 189, 189);
  ellipse(150, 150, 200, 200);
  fill(174, 73, 185);
  ellipse(400, 150, 200, 200);
}

function mousePressed(){
  var d1 = dist(mouseX, mouseY, 150, 150);
  var d2 = dist(mouseX, mouseY, 400, 150);
  if (d1 < 100) {
    sound1.play()
  }
  if (d2 < 100) {
    sound2.play()
  }
}
