class Home {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      //this.title = createElement("");
      //this.greeting=createElement("");
    }
    hide(){
      this.button.hide();
      this.input.hide();
    }
  
    display(){
  
      this.input.position(380,300);
      this.button.position(400,400);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        homescreen= new Homescreen();
        homescreen.display();
      });
      
      }
  
    }
  
  