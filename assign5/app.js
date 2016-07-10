var beats, sound1, sound2;

function preload() {
  beats = loadSound('beats.wav');
  sound1 = loadSound('guitar.wav');
  sound2 = loadSound('synth.mp3');
}

function setup() {
  createCanvas(800, 500)
  background (202, 190, 190)
  beats.loop();
}

function draw () {
  fill(14, 189, 189);
  rect(50, 100, 200, 200);
  fill(174, 73, 185);
  rect(400, 100, 200, 200);
}
