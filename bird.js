class Bird {
    constructor(x, y){
        var options = {
            'restitution':0.8,
            'friction':1,
            'density':1.0
    }
    this.body = Bodies.rectangle(x, y, 45, 45, options);
        this.width = 45;
        this.height = 45;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;
        var topplingAngle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(topplingAngle);
        rectMode(CENTER);
        fill('yellow');
        rect(0, 0, this.width, this.height);
        pop();
      }
    
    }