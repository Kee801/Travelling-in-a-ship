var waves;
var ship;
var ship_animation;
var water;
var water_animation;
var horn;
var seagull;


function preload(){

  waves = loadSound('wavebig.mp3');
  horn = loadSound('Boat horn wav.wav');
  seagull = loadSound('seagull.mp3');

  dolphin_animation = loadAnimation('Dolphin_Jump.png');
  ship_animation = loadAnimation("ship-1.png","ship-2.png","ship-3.png", "ship-4.png" ) ;
  water_animation = loadAnimation("sea.png");

 
  
 
}


function setup(){



  waves.loop();
  seagull.setVolume(10.0);
  horn.setVolume(40.0);
  seagull.loop();


  createCanvas(1530,750);

  

  water = createSprite(765, 365);
  water.addAnimation("water_animation", water_animation);


  ship = createSprite(200, 550);
  ship.addAnimation("ship_animation", ship_animation);
  ship.scale = 0.4;
  
  
  

  
}


function draw() {


  background("white");

  
  if(water.x < 0 )
  {
    water.x = water.width/2;
  }

  water.velocityX = -5;

  if(keyDown("right"))
  {
    ship.x = ship.x+5;
  }

  if(keyDown("left"))
  {
    ship.x = ship.x-5;
  }

  if(keyDown("space"))
  {
    horn.play();
  }
  if(ship.x <= 0)
  {
    ship.x = ship.x + 5;
  }

  if(ship.x > 1530)
  {
    ship.x = 0;
  }

  drawSprites();



}


