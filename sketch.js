var ship;
var astro = [];
var drops = [];

//Lydvariabler--------------------------------------------------
let oof;
let gun;

//Bildevariabler------------------------------------------------
let jord;
let naut;

//Variabel for score--------------------------------------------
let score1=0;


function setup() {
  createCanvas(600, 400);
  ship = new Ship();
  for (var i = 0; i < 9; i++) {
   astro[i] = new Astro(i*60+80, 60);
  }
}

//Laster inn alle filene----------------------------------------
function preload() {
  oof=loadSound('oof.wav')
  gun=loadSound('gun.wav')
  
  jord=loadImage('jord.png')
  naut=loadImage('astronaut.png')
}

//Funksjonen for alt som skal tegnes.
function draw() {
 background(jord);

  for (var i = 0; i < drops.length; i++) {
    drops[i].show();
    drops[i].move();
    for (var j = 0; j < astro.length; j++) {
      if (drops[i].hits(astro[j])) {
        astro[j].boom();
        drops[i].gone();
      }
    }
  }
//Viser og lar skipet bevege seg--------------------------------
 ship.show();
 ship.move();  
  
  var edge = false;

  for (var i = 0; i < astro.length; i++) {
    astro[i].show();
    astro[i].move();
    
//Sjekker om firkantene går utenfor background------------------
    if (astro[i].x > width || astro[i].x < 0) {
      edge = true;
    }
  }

//Sier hva som skal skje om den treffer kanten
  if (edge) {
    for (var i = 0; i < astro.length; i++) {
      astro[i].shiftDown();
    }
  }

//Sletter kulen om den går utenfor bakgrunnen
  for (var i = drops.length-1; i >= 0; i--) {
    if (drops[i].toDelete) {
      drops.splice(i, 1);
    }
  }

//Viser poengene dine-------------------------------------------
  fill(255)
  text(score1,20,20)
  
}



function keyReleased() {
  if (key != ' ') {
    ship.setDir(0);
  }
}



//Skyter kulen når du trykker Space-----------------------------
function keyPressed() {
  if (key === ' ') {
    var drop = new Drop(ship.x, height);
    drops.push(drop);
    gun.play()
  }

//Flytter skipet når du trykker på piltastene-------------------
  if (keyCode === RIGHT_ARROW) {
    ship.setDir(1);
  } else if (keyCode === LEFT_ARROW) {
    ship.setDir(-1);
  }
}


