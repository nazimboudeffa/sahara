var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 450,
    backgroundColor: '#000',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.audio('loop' , 'assets/snd/caravan-ii-baghdad-hamid-baroudi.mp3');

    this.load.path = 'assets/img/resized/';

    this.load.image('camel1' , 'camel0001.png');
    this.load.image('camel2' , 'camel0002.png');
    this.load.image('camel3' , 'camel0003.png');
    this.load.image('camel4' , 'camel0004.png');
    this.load.image('camel5' , 'camel0005.png');
    this.load.image('camel6' , 'camel0006.png');
    this.load.image('camel7' , 'camel0007.png');
    this.load.image('camel8' , 'camel0008.png');
    this.load.image('camel9' , 'camel0009.png');
    this.load.image('camel10', 'camel0010.png');
    this.load.image('camel11', 'camel0011.png');
    this.load.image('camel12', 'camel0012.png');
    this.load.image('camel13', 'camel0013.png');
    this.load.image('camel14', 'camel0014.png');
    this.load.image('camel15', 'camel0015.png');
    this.load.image('camel16', 'camel0016.png');
    this.load.image('camel17', 'camel0017.png');
    this.load.image('camel18', 'camel0018.png');
    this.load.image('camel19', 'camel0019.png');
    this.load.image('camel20', 'camel0020.png');
    this.load.image('camel21', 'camel0021.png');
    this.load.image('camel22', 'camel0022.png');
    this.load.image('camel23', 'camel0023.png');
    this.load.image('camel24', 'camel0024.png');
    this.load.image('camel25', 'camel0025.png');
    this.load.image('camel26', 'camel0026.png');
    this.load.image('camel27', 'camel0027.png');
    this.load.image('camel28', 'camel0028.png');
    this.load.image('camel29', 'camel0029.png');
    this.load.image('camel30', 'camel0030.png');
    this.load.image('camel31', 'camel0031.png');
    this.load.image('camel32', 'camel0032.png');
    this.load.image('camel33', 'camel0033.png');
    this.load.image('camel34', 'camel0034.png');
    this.load.image('camel35', 'camel0035.png');
    this.load.image('camel36', 'camel0036.png');
    this.load.image('camel37', 'camel0037.png');
    this.load.image('camel38', 'camel0038.png');
    this.load.image('camel39', 'camel0039.png');
    this.load.image('camel40', 'camel0040.png');
    this.load.image('camel41', 'camel0041.png');
    this.load.image('camel42', 'camel0042.png');
    this.load.image('camel43', 'camel0043.png');
    this.load.image('camel44', 'camel0044.png');
    this.load.image('camel45', 'camel0045.png');
    this.load.image('camel46', 'camel0046.png');
    this.load.image('camel47', 'camel0047.png');
    this.load.image('camel48', 'camel0048.png');
    this.load.image('camel49', 'camel0049.png');
    this.load.image('camel50', 'camel0050.png');
    this.load.image('camel51', 'camel0051.png');
    this.load.image('camel52', 'camel0052.png');
    this.load.image('camel53', 'camel0053.png');
    this.load.image('camel54', 'camel0054.png');
    this.load.image('camel55', 'camel0055.png');
    this.load.image('camel56', 'camel0056.png');
    this.load.image('camel57', 'camel0057.png');
    this.load.image('camel58', 'camel0058.png');
    this.load.image('camel59', 'camel0059.png');
    this.load.image('camel60', 'camel0060.png');
    this.load.image('camel61', 'camel0061.png');
    this.load.image('camel62', 'camel0062.png');
    this.load.image('camel63', 'camel0063.png');
    this.load.image('camel64', 'camel0064.png');
    this.load.image('camel65', 'camel0065.png');
    this.load.image('camel66', 'camel0066.png');
    this.load.image('camel67', 'camel0067.png');
    this.load.image('camel68', 'camel0068.png');
    this.load.image('camel69', 'camel0069.png');


}

function create ()
{
    this.anims.create({
        key: 'snooze',
        frames: [
            { key: 'camel1', frame: null },
            { key: 'camel2', frame: null },
            { key: 'camel3', frame: null },
            { key: 'camel4', frame: null },
            { key: 'camel5', frame: null },
            { key: 'camel6', frame: null },
            { key: 'camel7', frame: null },
            { key: 'camel8', frame: null },
            { key: 'camel9', frame: null },
            { key: 'camel10', frame: null },
            { key: 'camel11', frame: null },
            { key: 'camel12', frame: null },
            { key: 'camel13', frame: null },
            { key: 'camel14', frame: null },
            { key: 'camel15', frame: null },
            { key: 'camel16', frame: null },
            { key: 'camel17', frame: null },
            { key: 'camel18', frame: null },
            { key: 'camel19', frame: null },
            { key: 'camel20', frame: null },
            { key: 'camel21', frame: null },
            { key: 'camel22', frame: null },
            { key: 'camel23', frame: null },
            { key: 'camel24', frame: null },
            { key: 'camel25', frame: null },
            { key: 'camel26', frame: null },
            { key: 'camel27', frame: null },
            { key: 'camel28', frame: null },
            { key: 'camel29', frame: null },
            { key: 'camel30', frame: null },
            { key: 'camel31', frame: null },
            { key: 'camel32', frame: null },
            { key: 'camel33', frame: null },
            { key: 'camel34', frame: null },
            { key: 'camel35', frame: null },
            { key: 'camel36', frame: null },
            { key: 'camel37', frame: null },
            { key: 'camel38', frame: null },
            { key: 'camel39', frame: null },
            { key: 'camel40', frame: null },
            { key: 'camel41', frame: null },
            { key: 'camel42', frame: null },
            { key: 'camel43', frame: null },
            { key: 'camel44', frame: null },
            { key: 'camel45', frame: null },
            { key: 'camel46', frame: null },
            { key: 'camel47', frame: null },
            { key: 'camel48', frame: null },
            { key: 'camel49', frame: null },
            { key: 'camel50', frame: null },
            { key: 'camel51', frame: null },
            { key: 'camel52', frame: null },
            { key: 'camel53', frame: null },
            { key: 'camel54', frame: null },
            { key: 'camel55', frame: null },
            { key: 'camel56', frame: null },
            { key: 'camel57', frame: null },
            { key: 'camel58', frame: null },
            { key: 'camel59', frame: null },
            { key: 'camel60', frame: null },
            { key: 'camel61', frame: null },
            { key: 'camel62', frame: null },
            { key: 'camel63', frame: null },
            { key: 'camel64', frame: null },
            { key: 'camel65', frame: null },
            { key: 'camel66', frame: null },
            { key: 'camel67', frame: null },
            { key: 'camel68', frame: null },
            { key: 'camel69', frame: null }
        ],
        frameRate: 24,
        repeat: -1
    });

    var sndConfig = {
        mute: false,
        volume: 1,
        rate: 1,
        detune: 0,
        seek: 0,
        loop: true,
        delay: 0
    };
    this.sound.play('loop', sndConfig);
    this.add.sprite(0, 0, 'camel1').setOrigin(0, 0).play('snooze');
}﻿
