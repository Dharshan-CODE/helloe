class Stone{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.r=r;
        this.body=Bodies.circle(x,y,r,options);
        this.image=loadImage("stone.png");
        World.add(world,this.body);
    }

    display(){
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,50,50);
    }
}