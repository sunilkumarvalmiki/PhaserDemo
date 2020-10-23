var game = new Phaser.Game(600, 400, Phaser.AUTO); // width, height, engine
game.state.add('state1', demo.state1);
game.state.start('state1');