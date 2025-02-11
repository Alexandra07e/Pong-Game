let player1Paddle;
let player2Paddle;
let ball;
let score1=0;
let score2=0;

function setup(){
  createCanvas(650,350);
  player1Paddle=new Paddle(28);
  player2Paddle=new Paddle(width-48);  //width ul la noi e 20?
  ball=new Ball();
}

function keyPressed(){  //functie predefinita whatsoever
  if(keyCode==UP_ARROW) //keyCode=retine codul pt ultima tasta apasata
    player1Paddle.isUp=true;
  else if(keyCode==DOWN_ARROW)
    player1Paddle.isDown=true;
  
  if(keyCode==87) //codul pt tasta W
    player2Paddle.isUp=true;
  else if(keyCode==83) //codul pt tasta S
    player2Paddle.isDown=true;
}


function keyReleased(){
  if(keyCode==UP_ARROW)
    player1Paddle.isUp=false;
  else if(keyCode==DOWN_ARROW)
    player1Paddle.isDown=false;
  
  if(keyCode==87)
    player2Paddle.isUp=false;
  else if(keyCode==83)
    player2Paddle.isDown=false;
}


function draw(){
  background(0);
  player1Paddle.display();
  player2Paddle.display();
  
  if(player1Paddle.isUp==true)
    player1Paddle.up();
  else if(player1Paddle.isDown==true)
    player1Paddle.down();
  
 if(player2Paddle.isUp==true)
    player2Paddle.up();
  else if(player2Paddle.isDown==true)
    player2Paddle.down();
  
  ball.update();
  ball.display();
  
  ball.hitPaddle1(player1Paddle);
  drawNumber(score1,width/2-40,height-300);
  ball.hitPaddle2(player2Paddle);
  drawNumber(score2,width/2+40,height-300);
  
  
  //desenam o dunga la mijlocul canvas-ului
  stroke(255);
  line(width/2,0,width/2,height);
  
  console.log("Have fun playing xoxo");
}


function drawNumber(score,x,y){
  fill(255);
  textSize(32);
  textAlign(CENTER,CENTER);
  text(score,x,y);
}