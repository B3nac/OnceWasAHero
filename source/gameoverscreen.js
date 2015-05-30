Player.Gameoverscreen = function(game) {};
Player.Gameoverscreen.prototype = {
  create: function() {
      this.gameTitle = this.add.sprite(400.5, 40, 'Gameover');
		  this.gameTitle.anchor.set(0.5,0);
		  this.restartButton = this.add.button(this.game.world.centerX - 0, 400, 'Restartbutton', this.restartGame, this, 2, 0, 1);
		  this.restartButton.anchor.set(0.5,0);
		  this.restartButton.input.useHandCursor = true
  },
  restartGame: function() {
        healthislow.stop();
        music.stop();
        energy = 0
        switches = 0
        keyNum = 0
      	energyspawn = 0
        switchsound.play();
        this.game.state.start('Game')
    }
};
