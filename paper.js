  
class CrumpPaper {
    constructor(x, y) {
      var options = {
          isStatic : false,
          restitution : 0.3,
          friction : 0.5,
          density : 1.2
      }
      this.body = Matter.Bodies.circle(x, y, 40, options);
      this.width = width;
      this.height = height;

      World.add(world, this.body);
    }

    display(){
      
      color(255,192,203);
      
      var angle = this.body.angle;     
      var post = this.body.position;
      push(); 
      rotate(angle);
      translate(post.x, post.y);
      ellipseMode(RADIUS);
      ellipse(0,0);
      pop();
    }
  }