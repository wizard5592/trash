let system;
function setup() {
  createCanvas(600, 600);
  system = new ParticleSystem(createVector(width/2, height/2));
  setInterval(add,5000);
  system.addParticlefirst();
}

function draw() {
  background(0);
  textSize(32);
  text("공이 벽에 튕기면 복제됩니다",120, height / 2);
  system.run();
}

function add(){
  //system.addParticle();
}

function keyPressed(){
  if(keyCode == 32){ 
    for(let i=0; i <10; i++){
    system.removeParticle();
    system.origin = createVector(width/2, height/2);
    system.addParticlefirst();
    }
  }
} 