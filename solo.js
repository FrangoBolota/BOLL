class Solo{
    constructor(x,y,w,h){
        var options={
            isStatic : true  
        }
        this.w=w
        this.h=h
        this.bodies=Bodies.rectangle(x,y,w,h,options)
        World.add(world,this.bodies)
    }
    display(){
        rectMode(CENTER)
        rect(this.bodies.position.x,this.bodies.position.y,this.w,this.h)
    }



}