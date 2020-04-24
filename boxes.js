class Boxes{

constructor(x,y,width,height){

    this.body = Bodies.rectangle(x,y,width,height);
    this.width = width;
    this.height = height;

    World.add(world,this.body);

}

display(){

    var pos = this.body.position;

    push();

    rectMode(CENTER);
    fill(random(0,255),random(0,255),random(0,255));
    rect(pos.x,pos.y,this.width,this.height);

    pop();

}

}