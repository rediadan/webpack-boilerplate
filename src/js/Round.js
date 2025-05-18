// Round Scene.

import Phaser, { Actions } from 'phaser';
import BackGround from '@/images/back.png';

import Player from '@/js/Player';

import testImage from '@/images/favicon.png';
import stoaBody from '@/images/stoa_main_body.png';
import stoaFace_1 from '@/images/stoa_main_face_1.png';

export default class Round extends Phaser.Scene {
    constructor()
    {
        super('round');
    }

    


    preload(){
        //this.load.image('별칭','경로');
        this.load.image('test',testImage);
        this.load.image('background',BackGround);
        this.load.image('stoaBody',stoaBody);
        this.load.image('stoaFace_1',stoaFace_1);
    }
    create(){
        const {x,y,width,height} = this.cameras.main;
        const center = 
        {
            x: x+width/2,
            y: y+height/2
        };
        this.bg = this.add.image(center.x,center.y,'background').setDepth(0);
        this.stoaBody = this.add.image(center.x,center.y,'stoaBody').setDepth(1).setScale(0.5);
        this.stoaFace = this.add.image(center.x,center.y,'stoaFace_1').setDepth(2).setScale(0.5);

        this.player = new Player(this, center.x, height * 1/4).setDepth(6);

        let staticObj = this.physics.add.staticGroup();

        staticObj.create(center.x,height * 2/3,'test').setScale(0.3).refreshBody().setDepth(5);

        this.physics.add.collider(staticObj, this.player);


    }


    update(){

    }
}