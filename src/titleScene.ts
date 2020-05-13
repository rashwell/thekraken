import 'phaser';

export default class TitleScene extends Phaser.Scene
{
    constructor() {
		super({key:'TitleScene'});
	}

	preload() {
	}

	create() {		 
           var text = this.add.text(100,100, 'Welcome to Enter the Kraken!');
           var startbutton = this.add.text(200,200,"Start");
           startbutton.setInteractive({useHandCursor: true})
           startbutton.on('pointerdown', () => this.clickButton());
    }
    
    clickButton() {
        this.scene.switch('MainScene');
    }
}