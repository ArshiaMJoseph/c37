class Form{
    constructor(){
        this.title = createElement('h2');
        this.input = createInput("Name");
        this.button = createButton("PLAY");
        this.greeting = createElement('h3')

    }
    display(){

        
        this.title.position(250,0)
       this.title.html("CAR RACING GAME")

        
        this.input.position(250,160);

       
        this.button.position(450,200);


        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.updateCount(playerCount);
            player.update();

           

             
             this.greeting.position(130,160);
             this.greeting.html("Hello "+player.name);

        })
    }

    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }
}