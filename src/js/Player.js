import Phaser, { Tweens } from 'phaser';

export default class Monster extends Phaser.Physics.Arcade.Image{
    constructor(scene,x,y)
    {//생성자
        super(scene,x,y);

        this.scene=scene;
        this.speed = 200;
        this.setTexture('test');
        this.setPosition(x,y);
        this.setDepth(5);
        this.setScale(0.1);
        this.setInteractive();

        this.key = {
            up:scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE),
            down:scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
            left:scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
            right:scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
        };

        this.on('pointerdown',() =>
        {
            this.setVelocityY(-300);
            
        })
        

        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setCollideWorldBounds(true);
        
        
    
    }

    preUpdate()
    {//갱신
        if(this.key.up.isDown && this.body.touching.down){
            this.setVelocityY(-300); // -방향이 상단인듯. Gravity가 +, 양수.
        }

        if(this.key.left.isDown){
            this.setVelocityX(-this.speed);
        }
        else if(this.key.right.isDown){
            this.setVelocityX(this.speed);
        }
        else{
            this.setVelocityX(0);
        }
    }

}