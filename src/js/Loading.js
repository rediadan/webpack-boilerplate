// Loading Scene.

import Phaser from 'phaser';
import BackGround from '@/images/back.png';

export default class Loading extends Phaser.Scene {
    constructor()
    {
        super('loading');
    }

    preload(){
        this.load.image('BackGround', BackGround);
    }
    create(){
        const {x,y,width,height} = this.cameras.main;
        const center = {
            x : x + width/2,
            y : y + height/2
        }

        this.backGround = this.add.image(center.x,center.y,'BackGround');



        this.input.once('pointerdown',()=>{
            this.scene.transition({target:'round',duration:500});
        })
    }
    update(){}
}