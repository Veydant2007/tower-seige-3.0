class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();
      if (this.body.speed>3){
        super.display()
        }
        else {
        this.visibility = this.visibility - 5
        World.remove(world,this.body)
        push()
        tint(200,this.visibility)
        image(this.image,this.body.position.x,this.body.position.y,50,50)
        pop();
        }
    }
    score(){
      if(this.visibility<0 && this.visibility>=105){
        score++;
      
      }
    }
  };
  