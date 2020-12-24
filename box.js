class Box{
    constructor(x, y, width, height, angle) {
        var options = {
         
            restitution:0.8,
            friction:1.0,
            density:0.03
        }
        this.Visiblity=255,
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        // this.image = loadImage("sprites/.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        console.log(this.body.speed)
        if(this.body.speed<9.5){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        // imageMode(CENTER);
        // image(this.image, 0, 0, this.width, this.height);
        pop();
        }
        else{
          push();
          World.remove(world,this.body)       
          this.Visiblity = this.Visiblity-50
          tint(255,this.Visiblity)
          image(this.image,this.body.x,this.body.y,50,50);
          pop();
        }
      }
      score(){
         if(this.visiblity<0 && this.visiblity>-105){
        score++
      }
  }
}