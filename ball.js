class Ball{

constructor(x,y,diameter){

    var options ={
        'restitution': 0.5,
        'friction': 0.5,
        'density': 0.1
    }

    this.body = Bodies.circle(x,y,diameter,options);
    this.d = diameter;

    World.add(world,this.body)
}



display(){

    var pos = this.body.position;
    ///translate(pos.x,pos.y);

    push();
    

    fill("red");
    circle(pos.x,pos.y,this.d);

    pop();
}

}

// class Ball extends BaseClass {
//     constructor(x,y){
//       super(x,y,50,50);
//       this.image = loadImage("sprites/bird.png");
//     }
  
//     display() {
//       //this.body.position.x = mouseX;
//       //this.body.position.y = mouseY;
//       super.display();
//     }
//   }
  