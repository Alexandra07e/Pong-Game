class Ball{
  constructor(){
    this.r=10; //raza cercului in pixeli
    this.reset();  //resetam pozitia si viteza
  }
  
  reset(){
    //plasam mingea pe mijlocul ecranului
    this.x=width/2;
    this.y=height/2;
    
    this.xSpeed=random(3,4); //viteza intre 3 si 4 pixeli aleatoriu
    
    //alegem aleatoriu directia initiala
    let direction=random(1)>.5;  //cu 50%sanse mingea porneste spre stanga(viteza x devine negativa)
    
    if(direction)
      this.xSpeed=-this.xSpeed;
    
    this.ySpeed=random(-3,3); //pe axa y,mingea se poate misca in sus sau in jos
  }
  
  update(){ 
    //actualizam pozitia mingii
    if(this.y<this.r || this.y>height-this.r)
      this.ySpeed=-this.ySpeed;
    
    if(this.x<this.r || this.x>width+this.r) //mingea iese complet
      this.reset();
    
    this.x+=this.xSpeed;
    this.y+=this.ySpeed;
  }
  
  display(){
    ellipse(this.x,this.y,this.r*2,this.r*2);
  }
  
  
  sameHeight(player){
    return this.y>=player.y && this.y<=player.y+player.height;
  }
  
  hitPaddle1(player1){
    if(this.x-this.r<=player1.x+player1.width && this.x>player1.x)
      if(this.sameHeight(player1)){
        this.xSpeed=-this.xSpeed;
        score1++;
      } else score1=0;
  }
  
  hitPaddle2(player2){
    if(this.x+this.r>=player2.x && this.x<=player2.x+player2.width)
      if(this.sameHeight(player2)){
        this.xSpeed=-this.xSpeed;
        score2++;
      } else score2=0;
  }
  
  
}