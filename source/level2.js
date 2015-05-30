Player.Level2 = function(game) {

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
	energyspawn = 0
	soundstate = 1
};
Player.Level2.prototype = {
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
	pitfall2 = this.game.add.group();
	pitfall2.enableBody = true;
	spikesdown = this.game.add.group();
	spikesdown.enableBody = true;
	spikesdown2 = this.game.add.group();
	spikesdown2.enableBody = true;
  //game.add.sprite(0, 0, 'floor');

	walls = this.add.group();
	walls.enableBody = true;
	walls2 = this.game.add.group();
	walls2.enableBody = true;
	shortwall = this.game.add.group();
	shortwall.enableBody = true;

	var ground = walls.create(0, this.world.height - 14, 'platform');
	ground.scale.setTo(2, 2);
	ground.body.immovable = true;
	//draw
	var shortwalls = shortwall.create(250, -30, 'shortwall');
	shortwalls.body.immovable = true;
	var shortwalls = shortwall.create(320, 90, 'shortwall');
	shortwalls.body.immovable = true;
	var shortwalls = shortwall.create(320, 220, 'shortwall');
	shortwalls.body.immovable = true;

	var upwall = walls2.create(400, 100, 'walls2');
	upwall.body.immovable = true;

	var ledge = walls.create(400, 300, 'platform');
	ledge.body.immovable = true;
	var ledge = walls.create(650, 400, 'platform');
	ledge.body.immovable = true;
	var ledge = walls.create(650, 385, 'platform');
	ledge.body.immovable = true;
	var ledge = walls.create(650, 430, 'platform');
	ledge.body.immovable = true;

	ledge = walls.create(-50, 250, 'platform');
	ledge.body.immovable = true;
	ledge = walls.create(-50, 120, 'platform');
	ledge.body.immovable = true;
	ledge = walls.create(-50, 415, 'platform');
	ledge.body.immovable = true;
	ledge = walls.create(650, 415, 'platform');
	ledge.body.immovable = true;

  dlevel1 = this.game.add.group();
	dlevel1.enableBody = true;

	dlevel2 = this.game.add.group();
	dlevel2.enableBody = true;

  pitfall = this.game.add.group();
	pitfall.enableBody = true;

	switchesblock = this.game.add.group();
	switchesblock.enableBody = true;

	switchesblock2 = this.game.add.group();
	switchesblock2.enableBody = true;

	switchesblock3 = this.game.add.group();
	switchesblock3.enableBody = true;

	switchesblock4 = this.game.add.group();
	switchesblock4.enableBody = true;

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

  var dungeondoor2 = dlevel2.create(700, 0, 'level1door')
  dungeondoor2.body.immovable = true;

	var pit = pitfall.create(362, 160, 'pit')
	pit.body.immovable = true;

	var pit2 = pitfall2.create(500, 250, 'pit')
	pit2.body.immovable = true;

	var pit2 = pitfall2.create(535, 205, 'pit')
	pit2.body.immovable = true;

	var spikesdown = spikesdown.create(240, 85, 'spikedown');

	var spikesdown2 = spikesdown2.create(362, 160, 'spikedown');

	var spike = spikes.create(500, 500, 'spike');
	spike.body.immovable = true;

	var spike = spikes.create(500, 525, 'spike');
	spike.body.immovable = true;

	var spike = spikes.create(500, 550, 'spike');
	spike.body.immovable = true;

	var spike = spikes.create(200, 475, 'spike');
	spike.body.immovable = true;

	var spike = spikes.create(200, 495, 'spike');
	spike.body.immovable = true;

	var spiked = spikes2.create(240, 85, 'spike');
	spiked.body.immovable = true;

	var switchblock = switchesblock.create(50, 470, 'switchblock');
	switchblock.body.immovable = true;

	var switchblock2 = switchesblock2.create(90, 470, 'switchblock');
	switchblock2.body.immovable = true;

	var switchblock3 = switchesblock3.create(10, 470, 'switchblock');
	switchblock2.body.immovable = true;

	var switchblock4 = switchesblock4.create(50, 370, 'switchblock');
	switchblock4.body.immovable = true;
	//for (var i = 0; i < 12; i++)
	//{
	var energyball = energyballs.create(70, 70, 'energy');
	var energyball = energyballs.create(450, 500, 'energy');
  //}

	var key = keys.create(500, 200, 'key');
  key.body.immovable = true;

	this.player = this.add.sprite(700, this.world.height - 140, 'dude');
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

	healthText = this.game.add.text(280, 16, 'Health: 5', {fontSize: '32px', fill: '#000'});
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
	this.physics.arcade.collide(this.player, switchesblock2, playerSwitch2, null, this);
	this.physics.arcade.collide(this.player, switchesblock3, playerSwitch3, null, this);
	this.physics.arcade.collide(this.player, switchesblock4, playerSwitch4, null, this);
	this.physics.arcade.overlap(this.player, pitfall, ohNo, null, this);
	this.physics.arcade.overlap(this.player, pitfall2, ohNo2, null, this);
	this.physics.arcade.collide(this.player, dlevel1, level1Complete, null, this);
	this.physics.arcade.collide(this.player, dlevel2, level2Complete, null, this);


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
  if (energy == 3){
	energy = energy - 3;
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

function playerSwitch(player, switchblock, energyball){
	if(energy >= 1){
		  switchblock.kill();
			switchsound.play();
			energyspawn = energyspawn + 1;

	if(energyspawn == 1)
	{
		  spawnenergyball();
	}
	    var switchblockdown = switchesblockdown.create(50, 470, 'switchdown');
	    switchblockdown.body.immovable = true;
  }
}

function playerSwitch2(player, switchblock2){
	if(energy >= 1){
      switchblock2.kill()
			switchsound.play();
	    switches = switches + 1;
	if(switches >= 1)
	{
		  pitclosed();
		  //spikesDown();
	}
	    var switchblockdown2 = switchesblockdown.create(90, 470, 'switchdown');
	    switchblockdown2.body.immovable = true;
	 //undefined erg
  }
}

function playerSwitch3(player, switchblock3){
	if(energy >= 1){
      switchblock3.kill()
			switchsound.play();
	    switches = switches + 1;
	if(switches >= 1)
	{
		  pitopen();
		  //spikesDown();
	}
	    var switchblockdown3 = switchesblockdown.create(10, 470, 'switchdown');
	    switchblockdown3.body.immovable = true;
	 //undefined erg
  }
}

function playerSwitch4(player, switchblock4, spike2){
	if(energy >= 1){
	    switchblock4.kill();
			switchsound.play();
	    switches = switches + 1;
	if(switches >= 1)
	switches = switches - 1;
	{
		  spikesDown();
  }
	    var switchblockdown4 = switchesblockdown.create(50, 370, 'switchdown');
      switchblockdown4.body.immovable = true;
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

function ohNo2(player, pit2){
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
	//if (keyNum == 1){
		//youwinlvl1Text.text = 'You beat level 2!: Stay tuned for more levels!'
		//this.game.state.start('level2');
	//}
}

function level2Complete(player, dungeondoor2){
	if (keyNum == 1){
		this.game.state.start('YouWin');
		//youwinlvl1Text.text = 'You beat level 2!: Stay tuned for more levels!'
		//this.game.state.start('level2');
	}
}

}
};

function pitopen(sprite){
	pitfall2.create(10, 500, 'pit');
}

function pitclosed(sprite){
	pitfall.destroy();
}

function spawnenergyball(sprite){
	energyballs.create(250, 500, 'energy');
}

function spikesDown(sprite){
	spikes2.destroy();
}
