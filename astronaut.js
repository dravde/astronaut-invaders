//JS. fil for astonautene(fienden)------------------------------
//Variabler
function Astro(x, y){
  this.x = x;
  this.y = y;
  this.r = 18;
  
//farten til arrayen-------------------------------------------- 
  this.xdir = 6;

//Boom funksjonen sletter kulen, spiller lyd, legger til score--
  this.boom = function() {
    this.r = this.r.splice;
   oof.play()
    score1=score1+1050;
  }
  
//Dytter hele arrayen ned---------------------------------------
   this.shiftDown = function() {
    this.xdir *= -1;
    this.y += this.r;
  }
 
//Flytter alle astronautene-------------------------------------
    this.move = function() {
    this.x = this.x + this.xdir;
  }
  
//funksjonen som viser firkantene(uten bilder)------------------
  this.show = function(){
    fill(51,153,255)
    noStroke();
    rectMode(CENTER)
    rect(this.x, this.y, this.r*2, this.r*2);
  }
  
}