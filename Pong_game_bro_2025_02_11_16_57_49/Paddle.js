class Paddle{
  constructor(x){
    this.x=x;  //x e lungimea
    this.height=80; 
    this.y=height/2; //y e latimea
    this.width=20;
    
    //pentru functiile up and down
    
    this.isUp=false;
    this.isDown=false;
  }
  
  display(){
    fill(255); //coloram toata suprafata dreptunghiului cu alb
    rect(this.x,this.y,this.width,this.height); //cream un paddle dreptunghi
  }
  
  up(){
    if(this.y>0)
      this.y-=2;  //se misca paddle ul in jos
  }

  down(){
    if(this.y<height - this.height)  //height ul e setat in sketch,parametrul 2
      this.y+=2; //se misca paddle ul in sus 
  }
}