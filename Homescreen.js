class Homescreen{
    constructor(){
    this.sPlayer=createButton("Single Player");
    this.mPlayer=createButton("Multiplayer");
    }

    display(){
        this.mPlayer.position(400,350);
        this.sPlayer.position(400,450);
        this.mPlayer.mousePressed(()=>{
            multiPlayer.display();
        })
        this.sPlayer.mousePressed(()=>{
            this.sPlayer.hide();
            this.mPlayer.hide();
            state=1;
            

        })
    
    
    }

    
}