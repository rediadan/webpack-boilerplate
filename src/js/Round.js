// Round Scene.

import Phaser, { Actions } from 'phaser';
import BackGround from '@/images/back.png';

import Player from '@/js/Player';

import testImage from '@/images/favicon.png';

export default class Round extends Phaser.Scene {
    constructor()
    {
        super('round');
    }

    


    preload(){
        //this.load.image('별칭','경로');
        this.load.image('test',testImage);
        this.load.image('background',BackGround);
    }
    create(){
        const {x,y,width,height} = this.cameras.main;
        const center = 
        {
            x: x+width/2,
            y: y+height/2
        };
        this.bg = this.add.image(center.x,center.y,'background').setDepth(0);

        // this.player = new Player(this, center.x, height * 1/4);

        // const box = this.physics.add.image(center.x, height * 1/2, 'test');
        // box.setScale(0.3);
        // box.body.allowGravity = false;
        // box.body.moves = false;
        // box.body.immovable = true;

        // this.physics.add.collider(box, this.player);


    }


    update(){

    }
}