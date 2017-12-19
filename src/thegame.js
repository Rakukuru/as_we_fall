var theGame = function(game){
}

var bgtile;
var music;
var player;
var platforms;
var objective;

theGame.prototype = {
	create: function(){
		// --- We crate the background and turn the music ON! --- //
		bgtile = this.game.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, 'fog');
		music = this.game.add.audio("bg_music");
		music.loopFull();

		// --- We add the player to the game --- //
		player = this.game.add.sprite(this.game.world.width/2, 50, 'val');
		player.anchor.setTo(0.5,0.5);
		player.animations.add('left', [0, 1], 10, true);
    	player.animations.add('right', [3, 4], 10, true);

    	// We need to enable physics on the player
    	this.game.physics.arcade.enable(player);

    	// Now we can add the physic properties
    	player.body.gravity.y = 150;
    	player.body.collideWorldBounds = true;

    	// --- Create the keyboard input using Phaser's built in keyboard listener --- //
    	cursors = this.game.input.keyboard.createCursorKeys();

    	// --- We add the objective --- //
    	objective = this.game.add.group();
    	var kai = objective.create([(this.game.world.width/2) - 15], this.game.world.height - 5, 'kai');
    	kai.anchor.setTo(0.5,1);
    	var spirit = objective.create([(this.game.world.width/2) + 15], this.game.world.height - 5, 'spirit');
    	spirit.anchor.setTo(0.5,1);

    	// --- We add the platforms --- //
    	platforms = this.game.add.group();
    	
    	//  We will enable physics for any object that is created in this group
    	platforms.enableBody = true;

    	// Creation
    	platforms.create(150, 100, 'platform');
    	platforms.create(150, 300, 'platform');
    	platforms.create(150, 500, 'platform');
    	platforms.create(50, 200, 'platform');
    	platforms.create(250, 200, 'platform');
    	platforms.create(50, 400, 'platform');
    	platforms.create(250, 400, 'platform');
    	// Scale ground.ong to 100 px width
    	platforms.setAll('width', 100);
		platforms.setAll('anchor.x', 0.5);

    	// The physics
    	platforms.setAll('body.allowGravity', false);
    	platforms.setAll('body.immovable', true);
    	//ledge.body.allowGravity = false;
    	//ledge.body.immovable = true;

	},
	update: function() {
   		bgtile.tilePosition.y -= 1;

   		//  Reset the players velocity (movement)
    	player.body.velocity.x = 0;

    	// --- COLLISIONS --- //

    	//  Collide the player with the platforms
    	var hitPlatform = this.game.physics.arcade.collide(player, platforms);

    	// --- CONTROLS --- //
   		if (cursors.left.isDown){
   		    //  Move to the left
   		    player.body.velocity.x = -150;

   		    player.animations.play('left');
   		}
   		else if (cursors.right.isDown){
   		    //  Move to the right
   		    player.body.velocity.x = 150;

   		    player.animations.play('right');
   		}
   		else{
   		    //  Stand still
   		    player.animations.stop();

   		    player.frame = 2;
   		}

   		// Win Condition
    	if ( this.CheckOverlap(player, objective) ){ this.win(); }
	},
	// --- You can use this handy function in other games! --- ///
	// This function checks collision between non physics based objects
	CheckOverlap: function(spriteA, spriteB) {
		var boundsA = spriteA.getBounds();
		var boundsB = spriteB.getBounds();

		return Phaser.Rectangle.intersects(boundsA, boundsB);
	},
	win: function() {
		console.log("%cCongratulations!!! :D", "color:white; background:red");
		this.game.state.start("WinScreen");
	}
}