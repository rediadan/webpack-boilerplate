import Phaser, { Tweens } from 'phaser';

export default class Monster extends Phaser.Physics.Arcade.Image{
    constructor(scene,x,y)
    {//생성자
        super(scene,x,y);

        this.scene=scene;

        this.setTexture('test');
        this.setPosition(x,y);
        this.setDepth(5);
        this.setScale(0.1);
        this.setInteractive();
        this.on('pointerdown',() =>
        {
            this.y -= -5;
            
        })

        scene.add.existing(this);
        // scene.physics.add.existing(this);
        // this.setCollideWorldBounds(true);
        
        
    
    }

    preUpdate()
    {//갱신
        
    }

}