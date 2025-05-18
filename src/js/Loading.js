// Loading Scene.

import Phaser from 'phaser';
import BackGround from '@/images/back.png';
import storyLine from '@/images/opening_shortcuts.png';

export default class Loading extends Phaser.Scene {
    constructor()
    {
        super('loading');
        let dummy = 0;
    }
    
    preload(){
        this.load.image('BackGround', BackGround);
        this.load.spritesheet('storyLine',storyLine,{frameWidth:700,frameHeight:500})
    }
    create(){
        const {x,y,width,height} = this.cameras.main;
        const center = {
            x : x + width/2,
            y : y + height/2
        }

        this.backGround = this.add.image(center.x,center.y,'BackGround');
        const infoText = this.add.text(center.x,center.y,'Touch To Cook',{fontSize:'32px',fill:'#088'})
        const story = this.add.sprite(center.x,center.y,'storyLine');
        this.anims.create({
            key:'anim_story',
            frames:this.anims.generateFrameNumbers('storyLine',{start:3,end:0}),
            frameRate:0.3,
            repeat:-1
        });
        story.anims.play('anim_story',true);

        this.input.once('pointerdown',()=>{
            this.scene.transition({target:'round',duration:500});
            
            
        })
    }
    update(){}
}