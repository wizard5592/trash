  class Particle {
    constructor(position, changex,changey, ck){
      this.vel = createVector(random(-1, 1), random(-1, 1));
      this.pos = position.copy();
      this.ckvel = createVector(changex,changey);
      
      this.r = 20;
      this.count = 20;
      if(ck > 0){
        this.vel.x = this.ckvel.x * -1;
        this.vel.y = this.ckvel.y * -1; 
      }
    }

    run(){
      this.update();
      this.display();
    }

    update(){
      this.edge();
      this.pos.add(this.vel);
    }

    display(){
      stroke(100);
      fill(255);
      ellipse(this.pos.x, this.pos.y, this.r, this.r);
    }

    edge(){
      if(this.pos.y > height-10){
        system.origin = createVector(this.pos.x, this.pos.y - 1 );
        print("1",this.ckvel);
        this.vel.y = this.vel.y * -1;  
        system.addParticle(this.vel.x,this.vel.y);
        this.count--;
      }  
       if( this.pos.y < 10){
        system.origin = createVector(this.pos.x, this.pos.y + 1);
        this.vel.y = this.vel.y * -1;  
        system.addParticle(this.vel.x,this.vel.y);
        this.count--;
      }  
      if(this.pos.x > width - 10){
        system.origin = createVector(this.pos.x - 1, this.pos.y);
        this.vel.x = this.vel.x * -1; 
        system.addParticle(this.vel.x,this.vel.y);
        this.count--;
      } 
      if(this.pos.x < 10){
        system.origin = createVector(this.pos.x + 1, this.pos.y);
        this.vel.x = this.vel.x * -1; 
        system.addParticle(this.vel.x,this.vel.y);
        this.count--;
      }
    }

    isDead(){
      return this.count < 0;
    }
  }