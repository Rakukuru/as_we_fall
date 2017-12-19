var preload = function(game){
	console.log("%cStarting...", "color:white; background:red");
}
 
preload.prototype = {
	preload: function(){ 
		this.game.load.image("fog","assets/fog.png");
		this.game.load.image('platform', 'assets/platform.png');
		this.game.load.spritesheet("val","assets/Val.png", 30, 34);
		this.game.load.image("spirit","assets/Spirit.png");
		this.game.load.image("kai","assets/Kai.png");
		this.game.load.image("varus","assets/Varus.png");
		this.game.load.audio("bg_music", ["assets/disturbing_of_peace.mp3", "assets/disturbing_of_peace.ogg"]);
	},
  	create: function(){
  		console.log("%cGametitle", "color:white; background:red");
		this.game.state.start("GameTitle");
	}
}