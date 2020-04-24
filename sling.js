class Sling{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.1,
            length: 3
        }

        this.pointB = pointB;
        this.bodyA = bodyA;
        this.sling = Constraint.create(options);
        
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");

      
    }

    fly(){
      
        this.sling.bodyA = null;
    }

    display(){

        //var pos = this.bodyA.position;
        

        image(this.sling1,110,200);
        image(this.sling2,85,200);

        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        push();

        
    
        stroke("#301608");
        if(pointA.x < 220){
        strokeWeight(8);
        line(pointA.x - 15,pointA.y,pointB.x - 20, pointB.y);
        line(pointA.x - 20,pointA.y,pointB.x + 15,pointB.y -3);
        image(this.sling3,pointA.x-30,pointA.y-10,15,30);
        }
        else{
        strokeWeight(6);
        line(pointA.x + 25,pointA.y,pointB.x - 30, pointB.y);
        line(pointA.x + 25,pointA.y,pointB.x + 15,pointB.y -3);
        image(this.sling3,pointA.x + 25,pointA.y-10,15,30);
        }
        pop();
      }
    }

}