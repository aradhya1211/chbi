class balll{
    constructor(x,y){
        var options = {
            'istatic':false,
             'restitution':0.8,
             'friction':1,
             'density':1  
        };
        this.body = Bodies.rectangle(x,y,20,30,options);
        this.width = 20;
        this.height = 30;
        this.image = loadImage("22.png");
        World.add(world , this.body);

    };
    display(){
         var pos = this.body.position;
         var angle = this.body.angle;
        
        push();
        translate(pos.x , pos.y);
        rotate(angle);
        imageMode(CENTER)
        image(this.image,+60,-91);
        
        pop();

    };

}