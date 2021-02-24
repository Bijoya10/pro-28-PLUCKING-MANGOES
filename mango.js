class Mango{
    constructor(x,y,radius){
        this.body=Bodies.circle(x,y,radius,{isStatic:true})
        this.radius=radius+14
        World.add(world,this.body)
        this.image=loadImage("images/mango.png")
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