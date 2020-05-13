import 'phaser';
import TitleScene from './titleScene.js';
import MainScene from './mainScene.js';

var height = window.innerHeight;
var width = window.innerWidth;

const config = {
    title: 'Enter the Kraken',
    type: Phaser.AUTO,
    backgroundColor: '#125555',
    scale: {
        width: width,
        height: height,
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
      }
};

const game = new Phaser.Game(config);
game.scene.add('TitleScene', TitleScene);
game.scene.add('MainScene', MainScene);
game.scene.start('TitleScene');

window.addEventListener('resize', function() {
   game.scale.refresh(); 
});
