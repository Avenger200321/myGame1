var homescreen,cPaddle,pPaddle,singlePlayer,multiplayer;
var state=0;

function setup() {
  createCanvas(800,800);
  home=new Home();
}
function draw() {

  background(0); 
  home.display(); 
  if(state===1){
    singlePlayer= new SinglePlayer();
    singlePlayer.display();
  }
  
  drawSprites();

}