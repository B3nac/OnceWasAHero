Player.Startscreen = function(game) {};
Player.Startscreen.prototype = {
  create: function() {
	    this.game.load.tilemap('butts', 'assets/floor.json', null, Phaser.Tilemap.TILED_JSON);
      map = this.add.tilemap('butts');
    	map.addTilesetImage('Worldfloor', 'tiles');
      layer = map.createLayer('tile-layer-1');
      this.gameTitle = this.add.sprite(400.5, 40, 'Mainmenu');
		  this.gameTitle.anchor.set(0.5,0);
		  this.startButton = this.add.button(this.game.world.centerX - 0, 400, 'Startbutton', this.startGame, this, 2, 0, 1);
		  this.startButton.anchor.set(0.5,0);
		  this.startButton.input.useHandCursor = true
      B3nacGamesText = this.game.add.text(270, 540, 'B3nac Games', {fontSize: '40px', fill: '#000'});
      switchsound = this.game.add.audio('switchdown');
  },
  startGame: function() {
        switchsound.play();
        this.game.state.start('Game');
    }
};
