class SlingShot{
    
    constructor(bodyA, pointB) {

        var slingShot_options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10            
        }

        this.slingShot = Constraint.create(slingShot_options);
        this.pointB = pointB;
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        World.add(world, this.slingShot);
    }

     
    fly() {

        this.slingShot.bodyA = null;   
    }

    display() {

        image(this.sling1, 250, 90);
        image(this.sling2, 220, 90);        

        if(this.slingShot.bodyA) {

            var pointA = this.slingShot.bodyA.position;
            var pointB = this.pointB;
    
            push();
            stroke(color(64, 30, 11));

            if(pointA.x < 220) {
                strokeWeight(7);
                line(pointA.x - 20, pointA.y, pointB.x - 10, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.sling3, pointA.x - 30, pointA.y - 10, 15, 30);
            }
            else{
                strokeWeight(3);
                line(pointA.x + 25, pointA.y, pointB.x - 10, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
                image(this.sling3, pointA.x + 25, pointA.y - 10, 15, 30);
                
            }

            pop();
        }
    }
}