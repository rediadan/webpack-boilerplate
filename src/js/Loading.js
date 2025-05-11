// Loading Scene.

import Phaser from 'phaser';

export default class Loading extends Phaser.Scene {
    constructor()
    {
        super('loading');
    }

    preload(){}
    create(){
        const {x,y,width,height} = this.cameras.main;
        const center = {
            x : x + width/2,
            y : y + height/2
        }
        this.title = this.add.text(center.x, center.y, 'TestTitle')
                    .setFill("#fff")
                    .setFontSize(50)
                    .setOrigin(0.5)
                    .setDepth(10)
                    .setAlign(center);

        this.input.once('pointerdown',()=>{
            this.scene.transition({target:'round',duration:500});
        })
    }
    update(){}
}