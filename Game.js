class Game{
    constructor(){}
    getState(){
        var gameStateRef = database.ref('gameState').on("value",function(data){
            gameState = data.val();
        })
    }
    update(state){
        database.ref('/').update({gameState:state});
    }
    async start(){
        if(gameState === 0){
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value")
            if(playerCountRef.exists()){// it checks whether we read the playercount 
                playerCount = playerCountRef.val();
                player.getCount();

            }
            form = new Form();
            form.display();


        }
    }
    play(){
        form.hide();

        textSize(15);
        text("Game Start",200,100);

        Player.getPlayerInfo();//to get all the players's info i.e name and distance

        if(allPlayers !== undefined){

            var display_position = 130;//y position to display the text

            for(var plr in allPlayers){//   player1,player2.....

                if(plr === "player"+player.index)
                    fill('red');

                else
                    
                    fill('black');
                    
                display_position += 50; // increasing the y position to display the name on the next line
                textSize(50);
                text(allPlayers[plr].name+": "+allPlayers[plr].distance,150,display_position);


            }

        }
        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance += 50;
            player.update();
        }

    }
}