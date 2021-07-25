class Game{
    constructor(){}

    getState(){
        var gameStateref = database.ref("gameState");
        gameStateref.on("value", function(data){
            gameState = data.val()
        })
    }
    update(state){
        database.ref('/').update({
            gameState: state
        });
    }
    async start(){
        if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
          }
          form = new Form()
          form.display();
        }
      }
    
    
      play(){
          form.hide();
          textSize(40);
          text("Start Game", 500,500);
          Player.getPlayerInfo()
          if(allPlayers!== undefined){
              var displayPosition = 100
              for(var plr in allPlayers){
              if(plr === "player"+player.index)
              fill("green");
              else
              fill("blue")
              displayPosition += 50
              textSize(20);
              text(allPlayers[plr].name+ ": "+ allPlayers[plr].distance,displayPosition, 100);
          } 
    }
    if(keyIsDown(UP_ARROW)&& player.index!== null){
        player.distance += 50
        player.update();

    }
}
}    