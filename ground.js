class Ground{

    constructor(x, y, width, height) {
  
      var ground_options = {
      isStatic: true
      }
      
      this.body = Bodies.rectangle(x, y, width, height, ground_options);
      this.width = width;
      this.height = height;
      this.crumpledBall = loadImage("crumpledball.png");
      
      World.add(world, this.body); 
    }
  
    display() {

      image(this.crumpledBall, paper.x, paper.y);
      var pos = this.body.position;
      rectMode(CENTER);
      stroke(color("white"));
      fill("white");
      rect(pos.x, pos.y, this.width, this.height);
    }
  
  }