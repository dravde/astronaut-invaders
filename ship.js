//JS. filen for spilleren(skipet)-------------------------------
function Ship() {
  this.x = width/2;
  this.xdir = 0;

  
//Funskjonen som viser spilleren--------------------------------
  this.show = function() {
    fill(255);
    rectMode(CENTER);
    rect(this.x, height-20, 30, 30);
  }

//Setter posisjonen til spilleren
  this.setDir = function(dir) {
    this.xdir = dir;
  }
  
//Funksjonen som lar spilleren flytte begge veier---------------
  this.move = function(dir) {
    this.x += this.xdir*5;
  }

}
