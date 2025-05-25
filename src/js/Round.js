// Round Scene.

import Phaser, { Actions, Scene } from 'phaser';
import BackGround from '@/images/back.png';

import Player from '@/js/Player';

import stoaBody from '@/images/stoa_main_body.png';
import stoaFace_1 from '@/images/stoa_main_face_1.png';
import Hazel from '@/images/hazel_stand_samps.png';
import Goal from '@/images/testGoal.png';
import smallFace from '@/images/cute_legal_face.png';
import building from '@/images/cafe_1.png';
import Refrigerator from '@/images/Refrig.png';

let timer = 6000;
var debugText;

export default class Round extends Phaser.Scene {
    
    
    constructor()
    {
        super('round');
        var faceImage;
        
    }
    


    preload(){
        //this.load.image('별칭','경로');
        this.load.image('background',BackGround);
        this.load.image('stoaBody',stoaBody);
        this.load.image('stoaFace_1',stoaFace_1);
        this.load.image('Hazel',Hazel);
        this.load.image('Goal',building);
        this.load.image("B_refrigerator",Refrigerator);
        this.load.spritesheet('cuteFace',smallFace,{frameWidth:355,frameHeight:310});
    }
    create(){
        const {x,y,width,height} = this.cameras.main;
        const center = 
        {
            x: x+width/2,
            y: y+height/2
        };
        const bg = this.add.image(center.x,center.y,'background').setDepth(0);
        this.stoaBody = this.add.image(width * 1.6/5,height * 3/7,'stoaBody').setDepth(1).setScale(0.6);
        this.stoaFace = this.add.image(width * 1.6/5,height * 3/7,'stoaFace_1').setDepth(2).setScale(0.6);
        this.goal = this.add.image(60, height - 60, 'Goal').setScale(0.5);
        this.faceImage = this.add.sprite(width-60,height-60,'cuteFace');
        this.faceImage.setTexture('cuteFace',1).setScale(0.4);
        this.refrig = this.add.image(width - 100,height*1/7,'B_refrigerator');
        this.refrig.setInteractive({ useHandCursor: true });

        debugText = this.add.text(16,16,'debugText',{fontSize:'16px',fill:'#000'});
        
        //this.gameOver();
        //legacy
        /*
        this.player = new Player(this, center.x, height * 1/4).setDepth(6);

        let staticObj = this.physics.add.staticGroup();

        staticObj.create(center.x,height * 2/3,'test').setScale(0.3).refreshBody().setDepth(5);

        this.physics.add.collider(staticObj, this.player);

        */
    }

    //60에 1초
    update(){
        
        const {x,y,width,height} = this.cameras.main;
        const center = 
        {
            x: x+width/2,
            y: y+height/2
        };
        const baseTime = 6000;
        debugText.setText(timer%20);
        timer -= 1;
        if(timer == 0)
        {
            this.gameOver();
        }

        if((timer % 120) == 0)
        {
            this.faceImage.setRotation(-0.523);
        }
        else if((timer % 60) == 0)
        {
            this.faceImage.setRotation(0.523);
        }

        
        if(this.faceImage.x > 50)
            this.faceImage.x -= (width-100) / baseTime;
    }

    gameOver()
    {
        const {x,y,width,height} = this.cameras.main;
        const center = 
        {
            x: x+width/2,
            y: y+height/2
        };
        const hazel = this.add.image(width*5/7,height*2.7/7,'Hazel').setScale(1.05);
    }

    buttonPressed()
    {

    }
}