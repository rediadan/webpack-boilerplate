import '@/styles/index.css';
import Phaser from 'phaser';
import Round from '@/js/Round';
import Loading from '@/js/Loading';


const width = window.innerWidth;
const height = window.innerHeight;
const config =  
{
    type:Phaser.AUTO,
    width:width,
    height:height,
    physics:{
        default:'arcade',
        arcade:{
            debug:true,
        }
    },
    scale:{
        mode:Phaser.Scale.FIT,
        autoCenter:Phaser.Scale.CENTER_BOTH,
        width:width,
        height:height,
    },
    scene:[Round,Loading]
}


const game = new Phaser.Game(config);