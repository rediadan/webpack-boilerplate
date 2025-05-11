// Round Scene.

import Phaser, { Actions } from 'phaser';


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
    }
    create(){
        const {x,y,width,height} = this.cameras.main;
        const center = 
        {
            x: x+width/2,
            y: y+height/2
        };

        this.player = new Player(this, center.x, height * 1/4);
        
        this.input.on(Phaser.Input.Events.POINTER_UP,this.handlePointerUp,this);
    }

    handlePointerUp()
    {
        this.tweens.add({
                targets:this.player,
                angle:this.player.angle+50,
                duration:500
            });
    }

    update(){
        this.player.angle++;
    }
}