import '@/styles/index.css';
import Phaser from 'phaser';
import Round from '@/js/Round';
import Loading from '@/js/Loading';

// WORLD SETTING (Like Gravity)

const width = 1600 //window.innerWidth;
const height = 1200 //window.innerHeight;
const config =  
{
    type:Phaser.AUTO,
    width:width,
    height:height,
    physics:{
        default:'arcade',
        arcade:{
            debug:true,
            gravity: { y: 600 }
        }
    },
    scale:{
        mode:Phaser.Scale.FIT,
        autoCenter:Phaser.Scale.CENTER_BOTH,
        width:width,
        height:height,
    },
    scene:[Round]
}


const game = new Phaser.Game(config);