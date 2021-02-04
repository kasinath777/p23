class Hammer extends Base{
    constructor(x,y){
      super(x,y,50,80);
    }
    display(){
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
      super.display();
    }
  }
