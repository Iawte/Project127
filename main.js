var song=""

function setup(){
canvas=createCanvas(500,500)
canvas.center()
video=createCapture(VIDEO);
video.hide()
}

function preload(){
song=loadSound("music.mp3")
}


function draw(){
image(video,0,0,500,500);
}


function play(){
song.stop();
song.play();
song.setVolume(1)
song.rate(1)
}