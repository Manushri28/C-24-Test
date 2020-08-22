
  
class Ground {
    constructor(x, y, width, height) {
      var optn = {
          isStatic : true
      }
      this.body = Bodies.rectangle(x, y, width, height, optn);
      this.width = width;
      this.height = height;

      World.add(world, this.body);
    }
    display(){
      
      color(119,136,153);
      var pos = this.body.position;
      translate(pos.x, pos.y);
      rect( 0, 0, this.width, this.height);
      rectMode(CENTER);   
    }
  }
  