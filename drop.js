//JS. filen for skuddene----------------------------------------
function Drop(x, y) {
  this.x = x;
  this.y = y;
  this.r = 7;
  this.toDelete = false;
  
//Funskjonen som viser kulene-----------------------------------
  this.show = function() {
    fill(255,200,0)
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }
  
//Fjerner kulene------------------------------------------------
  this.gone = function() {
    this.toDelete = true;
  }

//Funskjon som sjekker om kulen treffer astronautene------------
  this.hits = function(astro) {
    var d = dist(this.x, this.y, astro.x, astro.y);
    if (d < this.r + astro.r) {
      return true;
    } else {
      return false;
    }
  }
  
//Flytter kulen opp
  this.move = function() {
    this.y = this.y -5;
  }
  
}