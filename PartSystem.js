class ParticleSystem{
  constructor(position){
    this.origin = position.copy();
    this.particles = [];
  }
  
  addParticlefirst(){
    this.particles.push(new Particle(this.origin,0));
  }
  
  addParticle(x,y){
    this.vel = createVector(x,y);
    this.particles.push(new Particle(this.origin, this.vel.x,this.vel.y, 1));
  }
                     
              
  
  removeParticle(){
    for(var i = 0; i < this.particles.length + 1; i++){
      this.particles.pop();
    }
  }
  run(){
    for (let i = this.particles.length-1; i >= 0; i--) {
      let p = this.particles[i];
      p.run();
      if (p.isDead()) {
        this.particles.splice(i, 1);
      }
    }
  }
}