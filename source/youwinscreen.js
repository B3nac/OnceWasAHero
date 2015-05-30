Player.YouWin = function(game) {};
Player.YouWin.prototype = {
  create: function() {
      this.game.load.tilemap('butts', 'assets/floor.json', null, Phaser.Tilemap.TILED_JSON);
      map = this.add.tilemap('butts');
      map.addTilesetImage('Worldfloor', 'tiles');
      layer = map.createLayer('tile-layer-1');
      this.gameTitle = this.add.sprite(400.5, 40, 'YouWin');
		  this.gameTitle.anchor.set(0.5,0);
		  this.restartButton = this.add.button(this.game.world.centerX - 0, 400, 'Restartbutton', this.restartGame, this, 2, 0, 1);
		  this.restartButton.anchor.set(0.5,0);
		  this.restartButton.input.useHandCursor = true
      keypickup.play();
  },
  restartGame: function() {
        healthislow.stop();
        music.stop();
        energy = 0
        switches = 0
        keyNum = 0
        switchsound.play();
        this.game.state.start('Game')
    }
};
