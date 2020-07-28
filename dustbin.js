class Dustbin {

    constructor(x, y, width, height) {

        var dustbin_options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x, y, width, height, dustbin_options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        stroke("brown");
        strokeWeight(4);
        fill("white");
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);     
    }

}