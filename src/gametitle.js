var gameTitle = function(game){
}

var bgtile;

gameTitle.prototype = {
	create: function(){
		bgtile = this.game.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, 'fog');
		var text = "PLAY";
		var style = { font: "15px Arial", fill: "#ff0044" , align: "center" };
		var t = this.game.add.text(150, 310, text, style);
		t.anchor.setTo(0.5,0.5);
		var playButton = this.game.add.button(150,350,"kai",this.playTheGame,this);
		playButton.anchor.setTo(0.5,0.5);
	},
	playTheGame: function(){
		console.log("%cGame starts! ;)", "color:white; background:red");
		this.game.state.start("TheGame");
	}
}