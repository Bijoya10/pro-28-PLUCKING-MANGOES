class Stone{
    constructor(x,y,radius){
        this.body=Bodies.circle(x,y,radius)
        this.radius=radius+12
        World.add(world,this.body)
        this.image=loadImage("images/stone.png")
    }

    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        imageMode(CENTER)
        image(this.image,0,0,this.radius,this.radius)
        pop()
    }
}