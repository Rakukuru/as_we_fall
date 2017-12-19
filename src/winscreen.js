var winScreen = function(game){
}

winScreen.prototype = {
	create: function(){		
		console.log("%cYay! You did it!", "color:white; background:red");
		var varus = this.game.add.sprite(150, 300, 'varus');
    	varus.anchor.setTo(0.5,0.5);
    	varus.width = 150;
    	varus.height = 100;
	}
}