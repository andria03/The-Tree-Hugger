var bg1img;
var gamestate=0;
var playbutton;
var skipbutton;

function preload(){
  bg1img=loadImage("images/bg1.png")
}

function setup(){
  createCanvas(displayWidth,displayHeight);
  playbutton=createButton("PLAY");
  skipbutton=createButton("SKIP");
  

}

function draw(){
  if(gamestate===0){
    background(bg1img);
    textSize(72);
    fill("darkgreen");
    textFont('Georgia');
    text("THE TREE  HUGGER",displayWidth-1100,displayHeight/2);
    
   
    playbutton.style('width','150px');
    playbutton.style('height','70px');
    playbutton.style('font-family','georgia')
    playbutton.style('background','darkgreen')
    playbutton.style('color','white');
    playbutton.style('font-size','48px')
    playbutton.position(displayWidth-800,displayHeight-300);


    playbutton.mousePressed(()=>{
      clear();
      playbutton.hide();
      gamestate=1;
    })
  }

  else if(gamestate===1){
    text("second page",500,500)
    skipbutton.position(600,400);
    skipbutton.mousePressed(()=>{
      clear();
      skipbutton.hide();
      gamestate=2;
    })
  }

  else if(gamestate===2){
    text("third  page",500,500)
  }

}