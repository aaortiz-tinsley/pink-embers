var piggy;
var cloudBlu;
const particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  piggy = color(237, 20, 93);
  cloudBlu = color(196, 203, 242, 15);
  //create number of particles based on the window width
  const particlesLength = Math.floor(windowWidth / 1.9);
  //go through and add to particles array
  for(let i = 0; i < particlesLength; i++) {
    particles.push(new Particle());
  }
  frameRate(40);
}

function draw() {
  background(piggy);
  //for each particle, draw a circle and update velocity
  particles.forEach((particle, index) => {
     particle.update();
     particle.draw();
  });
}

class Particle {
  constructor () {
    //objects position
    this.pos = createVector(random(windowWidth), random(windowHeight));
    //objects velocity
    this.vel = createVector(random(5, -5), random(-10, 10));
    //objects size
    this.size = 75;
  }
  
  //update movement by adding velocity
  update () {
    this.pos.add(this.vel);
    this.edges();
  }
  
  //draw single particle
  draw() {
    noStroke();
    fill(cloudBlu);
    circle(this.pos.x, this.pos.y, this.size);
  }
  
  //detect edges 
  edges() {
    if (this.pos.x < 0 || this.pos.x > width) {
      this.vel.x *= -1;
    }
    
    if (this.pos.y < 0 || this.pos.y > height) {
      this.vel.y *= -1;
    }
  }
}

