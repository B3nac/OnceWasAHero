var Player = {};

Player.Preloader = function(game) {};
Player.Preloader.prototype = {
  preload: function() {
    //Load Menu Images
    this.game.load.image('Mainmenu', 'assets/title2.png');
    this.game.load.image('Gameover', 'assets/gameover.png');
    this.game.load.spritesheet('Startbutton', 'assets/start.png', 250, 51);
		//this.game.load.spritesheet('Mainmb', 'assets/mmb.png', 250, 51);
    this.game.load.spritesheet('Restartbutton', 'assets/restart.png', 345, 51);
    this.game.load.spritesheet('YouWin', 'assets/YouWin.png', 345, 51);
    //Load Audio
    this.game.load.audio('track1', 'sounds/hero1.ogg');
    this.game.load.audio('ouch', 'sounds/hurt.ogg');
    this.game.load.audio('pickup', 'sounds/collect.ogg');
    this.game.load.audio('keypickup', 'sounds/keypickup.ogg')
    this.game.load.audio('switchdown', 'sounds/switchsound.ogg')
    this.game.load.audio('lowhearts', 'sounds/heartbeat.ogg');
    //Load Images
    this.game.load.image('level1door', 'assets/door.png');
	  this.game.load.image('energy', 'assets/energyball.png');
	  this.game.load.image('pit', 'assets/pitfall.png');
	  this.game.load.tilemap('butts', 'assets/floor.json', null, Phaser.Tilemap.TILED_JSON);
	  this.game.load.image('tiles', 'assets/tile.png');
    this.game.load.image('morewalls', 'assets/w4.png');
	  this.game.load.image('platform', 'assets/w3.png');
	  this.game.load.image('walls2', 'assets/w2.png');
	  this.game.load.image('shortwall', 'assets/shortwall.png');
	  this.game.load.image('key', 'assets/key.png');
	  this.game.load.image('spike', 'assets/spikes.png');
    this.game.load.image('spikedown', 'assets/spikes2.png');
	  this.game.load.image('switchblock', 'assets/switch.png');
    this.game.load.image('switchdown', 'assets/switch2.png');
	  this.game.load.spritesheet('dude', 'assets/player.png', 32, 48);

},
  create: function() {
        this.game.state.start('Startscreen');
}
};
