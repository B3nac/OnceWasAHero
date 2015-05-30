Player.Game = function(game) {
	var score = 0
	var scoreText;
	energy = 0
	var energyText;
	keyNum = 0
	var keyText;
	playerHealth = 5
	var map;
	var layer;
	switches = 0
	soundstate = 1
  var player;
};

Player.Game.prototype = {

			create: function() {

	this.game.physics.startSystem(Phaser.Physics.ARCADE);
	this.game.load.tilemap('butts', 'assets/floor.json', null, Phaser.Tilemap.TILED_JSON);
	map = this.add.tilemap('butts');
	map.addTilesetImage('Worldfloor', 'tiles');
  layer = map.createLayer('tile-layer-1');
	music = this.game.add.audio('track1');
	healthislow = this.game.add.audio('lowhearts');
	pickup = this.game.add.audio('pickup');
	keypickup = this.game.add.audio('keypickup');
	switchsound = this.game.add.audio('switchdown');
	music.loop = true;
	music.play();
	//Draws behind player.
	switchesblockdown = this.game.add.group();
	switchesblockdown.enableBody = true;
	spikesdown = this.game.add.group();
	spikesdown.enableBody = true;

	walls = this.add.group();
	walls.enableBody = true;
	walls2 = this.game.add.group();
	walls2.enableBody = true;
	shortwall = this.game.add.group();
	shortwall.enableBody = true;

	var ground = walls.create(0, this.world.height - 25, 'morewalls');
	ground.body.immovable = true;
	var ground = walls.create(400, this.world.height - 25, 'morewalls');
	ground.body.immovable = true;
	//draw
	var shortwalls = shortwall.create(250, -30, 'shortwall');
	shortwalls.body.immovable = true;
	var shortwalls = shortwall.create(320, 90, 'shortwall');
	shortwalls.body.immovable = true;
	var shortwalls = shortwall.create(320, 250, 'shortwall');
	shortwalls.body.immovable = true;

	var upwall = walls2.create(400, 100, 'walls2');
	upwall.body.immovable = true;

	var ledge = walls.create(400, 400, 'platform');
	ledge.body.immovable = true;
	ledge = walls.create(-50, 280, 'platform');
	ledge.body.immovable = true;
	ledge = walls.create(-50, 120, 'platform');
	ledge.body.immovable = true;
	ledge = walls.create(-50, 440, 'platform');
	ledge.body.immovable = true;

	ledge = walls.create(680, 420, 'platform');
	ledge.body.immovable = true;

  dlevel1 = this.game.add.group();
	dlevel1.enableBody = true;

  pitfall = this.game.add.group();
	pitfall.enableBody = true;

	switchesblock = this.game.add.group();
	switchesblock.enableBody = true;

	spikes = this.game.add.group();
	spikes.enableBody = true;

	spikes2 = this.game.add.group();
	spikes2.enableBody = true;

	energyballs = this.game.add.group();
	energyballs.enableBody = true;

  keys = this.game.add.group();
	keys.enableBody = true;

  var dungeondoor1 = dlevel1.create(700, 405, 'level1door')
  dungeondoor1.body.immovable = true;

	var pit = pitfall.create(500, 160, 'pit')
	pit.body.immovable = true;

	var pit = pitfall.create(500, 250, 'pit')
	pit.body.immovable = true;

	var pit = pitfall.create(535, 205, 'pit')
	pit.body.immovable = true;

	var spikesdown = spikesdown.create(240, 85, 'spikedown');

	var spike = spikes.create(500, 500, 'spike');
	spike.body.immovable = true;

	var spike = spikes.create(200, 475, 'spike');
	spike.body.immovable = true;

	var spiked = spikes2.create(240, 85, 'spike');
	spiked.body.immovable = true;

	var switchblock = switchesblock.create(50, 370, 'switchblock');
	switchblock.body.immovable = true;
	//for (var i = 0; i < 12; i++)
	//{
	var energyball = energyballs.create(70, 70, 'energy');
	var energyball = energyballs.create(750, 500, 'energy');
  //}

	var key = keys.create(500, 200, 'key');
  key.body.immovable = true;

	this.player = this.add.sprite(32, this.world.height - 100, 'dude');
	this.game.physics.arcade.enable(this.player);
	this.player.body.setSize(32,32,0,15);
	this.player.body.bounce.y = 0.2;
	this.player.body.gravity.y = 0;
	this.player.body.bounce.x = 0.2;
	this.player.body.gravity.x = 0;
	this.player.body.collideWorldBounds = true;

	this.player.animations.add('left', [0, 1, 2, 3], 10, true);
	this.player.animations.add('right', [5, 6, 7, 8], 10, true);
  this.player.animations.add('up', [9, 10, 11, 12], 10, true);
	this.player.animations.add('down', [13, 14, 15, 16], 10, true);

	//game.world.setBounds(0, 0, 1920, 1920);
	healthText = this.game.add.text(280, 16, 'Health: 5', {fontSize: '32px', fill: '#000'});
  //scoreText = game.add.text(300, 40, 'score: 0', {fontSize: '32px', fill: '#000'});
	energyText = this.game.add.text(425, 16, 'energy: 0', {fontSize: '32px', fill: '#000'});
	keyText = this.game.add.text(580, 16, 'keys: 0', {fontSize: '32px', fill: '#000'});
	youwinlvl1Text = this.game.add.text(100, 250, '', {fontSize: '50px', fill: '#000'});

},

update: function() {

	this.physics.arcade.collide(this.player, walls);
	this.physics.arcade.collide(energyballs, walls);
	this.physics.arcade.collide(this.player, walls2);
	this.physics.arcade.collide(this.player, shortwall);
	this.physics.arcade.overlap(this.player, energyballs, collectEnergy, null, this);
	this.physics.arcade.collide(this.player, keys, keyCollect, null, this);
	this.physics.arcade.collide(this.player, spikes, hurtPlayer, null, this);
	this.physics.arcade.collide(this.player, spikes2, killSpike2, null, this);
	this.physics.arcade.collide(this.player, switchesblock, playerSwitch, null, this);
	this.physics.arcade.overlap(this.player, pitfall, ohNo, null, this);
	this.physics.arcade.collide(this.player, dlevel1, level1Complete, null, this);


	this.player.body.velocity.x = 0;
	this.player.body.velocity.y = 0;
	this.player.body.bounce.setTo(1, 1);
	cursors = this.input.keyboard.createCursorKeys();

if (cursors.left.isDown)
{
	this.player.body.velocity.x = -150;
	this.player.animations.play('left');
}
else if (cursors.right.isDown)
{
	this.player.body.velocity.x = 150;
	this.player.animations.play('right');
}

else if (cursors.up.isDown)
{
	this.player.body.velocity.y = -150;
	this.player.animations.play('up');
}

else if (cursors.down.isDown)
{
	this.player.body.velocity.y = 150;
	this.player.animations.play('down');
}

else
{
  this.player.animations.stop();
  this.player.frame = 4;
}

function collectEnergy(player, energyball){
	energyball.kill();
	pickup.play();
	//score += 10;
	//scoreText.text = 'Score:' + score;
  energy += 1;
	energyText.text = 'energy:' + energy;
}

function keyCollect(player, key){
  if (energy >= 2){
	energy = energy - 2;
	energyText.text = 'energy:' + energy;
	keyNum += 1;
	keyText.text = 'keys:' + keyNum;
	key.kill();
	keypickup.play();
	}
}

function hurtPlayer(player, spike){

	if (playerHealth <= 5){
		playerHealth = playerHealth - 1;
		hurt = this.game.add.audio('ouch');
		hurt.play();
		healthText.text = 'Health:' + playerHealth;
	if (playerHealth <= 2)
		{
			healthislow.loop = true;
			healthislow.play();
	}
	if (playerHealth <= 0)
	{
		soundstate = soundstate + 1;
		player.kill();
		this.game.state.start('Gameoverscreen');
	}

	if (soundstate >= 2)
	{
		healthislow.loop = false;
	}

	}

}

function playerSwitch(player, switchblock, spike2){
	if(energy >= 1){
	    switchblock.kill();
			switchsound.play();
	    switches = switches + 1;
	if(switches == 1)
	{
		  spikesDown();
	}
	    var switchblockdown = switchesblockdown.create(50, 370, 'switchdown');
	    switchblockdown.body.immovable = true;
	 //undefined erg
  }
}

function killSpike2(player, spike2){
	if (switches >= 1){
	    spike2.kill();
  }else{
	    playerHealth = playerHealth - 1;
	    healthText.text = 'Health:' + playerHealth;
	if (playerHealth <= 0){
		  player.kill();
	  	this.game.state.start('Gameoverscreen');
	}
}
}

function ohNo(player, pit){
	if (playerHealth <= 5){
		playerHealth = playerHealth - 1;
		healthText.text = 'Health:' + playerHealth;
	if (playerHealth <= 0){
		player.kill();
		this.game.state.start('Gameoverscreen');
	}
	}
}
function level1Complete(player, dungeondoor1){
	if (keyNum == 1){
		keyNum = keyNum - 1;
		this.game.state.start('Level2');

	}
}

}
};

function spikesDown(sprite){
	spikes2.destroy();
}
