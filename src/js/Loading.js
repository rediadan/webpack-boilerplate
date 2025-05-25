// Loading Scene.

import Phaser from 'phaser';
import BackGround from '@/images/back.png';
import storyLine from '@/images/opening_shortcuts.png';
import Logo from '@/images/Logo.png';

export default class Loading extends Phaser.Scene {
    constructor()
    {
        super('loading');
    }
    
    preload(){
        this.load.image('BackGround', BackGround);
        this.load.spritesheet('storyLine',storyLine,{frameWidth:700,frameHeight:500})
        this.load.image('Logo',Logo);
    }
    create(){
        const {x,y,width,height} = this.cameras.main;
        const center = {
            x : x + width/2,
            y : y + height/2
        }
        let dummy = 3;
        this.backGround = this.add.image(center.x,center.y,'BackGround');
        const infoText = this.add.text(center.x * 1/6,height * 5/6,'Touch to Begin',{fontSize:'64px',fill:'#088'})
        const story = this.add.sprite(center.x,center.y,'storyLine');
        story.setTexture('storyLine',dummy);
        story.setInteractive();
        // this.anims.create({
        //     key:'anim_story',
        //     frames:this.anims.generateFrameNumbers('storyLine',{start:3,end:0}),
        //     frameRate:0.3,
        //     repeat:-1
        // });
        // story.anims.play('anim_story',true);
        this.input.on('pointerdown',()=>{

            if(dummy > 0)
            {
                dummy-=1;
                story.setTexture('storyLine',dummy);
            }
            else if(dummy > -1)
            {
                dummy -= 1;
                story.setTexture('Logo').setScale(0.7);
            }
            else
            {
                this.scene.transition({target:'round',duration:500});
            }
            
        });
    }
    update(){}
}