import 'phaser';

export default class MainScene extends Phaser.Scene
{
    constructor() {
		super({key:'MainScene'});
	}

    preload ()
    {
        this.load.image('logo', 'assets/EnterTheKrakenLogo.png');
    }

    create ()
    {
        const logo = this.add.image(600, 100, 'logo');        
        this.tweens.add({
            targets: logo,
            y: 350,
            duration: 1500,
            ease: 'Sine.inOut',
            yoyo: true,
            repeat: -1
        });
   
    }
}