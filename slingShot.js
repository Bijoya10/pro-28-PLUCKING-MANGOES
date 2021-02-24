class Slingshot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:20
        }
        this.sling=Matter.Constraint.create(options)
        this.pointB=pointB
        World.add(world,this.sling)
    }
    fly(){
        this.sling.bodyA=null
    }
    attach(stone){
        this.sling.bodyA=stone
    }
    display(){
        if(this.sling.bodyA){
            var posA=this.sling.bodyA.position
            var posB=this.pointB
            push()
            strokeWeight(4)
            line(posA.x,posA.y,posB.x,posB.y)
            pop()
        }
    }
}