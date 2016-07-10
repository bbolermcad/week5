var beats, sound1, sound2;

function preload() {
  beats = loadSound('beats.wav');
  sound1 = loadSound('guitar.wav');
  sound2 = loadSound('synth.mp3');
}

function setup() {
  createCanvas(500, 500)
  background (202, 190, 190)
  beats.loop();
}

function draw () {
  rect(150, 150, 150, 150);
  fill(14, 189, 189);
  mouseClicked(function(){
    if (sound1.isPlaying() ) {
      sound1.stop();
    } else {
      sound1.play()
    }
  });
}
