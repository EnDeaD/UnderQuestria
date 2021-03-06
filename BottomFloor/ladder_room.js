var Ladder = {
    preload: function () {
        game.load.image('trigger', 'triggers/trigger.png');
        game.load.image('bg', 'assets/main_room.png');
        game.load.image('dialoge', 'assets/dialoge1.png');
    },
    door: null,
    background: null,
    dialoge: null,
    superdelete: null,
    text1: null,
    text2: null,
    text3: null,
    text4: null,
    create: function () {
        game.stage.backgroundColor = "#000";
        if(free == true){
            game.time.events.add(Phaser.Timer.SECOND * 0.1, this.ended, this);
            free = false;
        }
        this.background = game.add.sprite(0, 0, 'bg');
        this.background.scale.setTo(2.5);

        this.door = game.add.sprite(700, 370, 'trigger');
        this.door.width = 100;
        this.door.height = 140;
        this.door.inputEnabled = true;
        this.door.events.onInputDown.add(this.nextRoom);

        this.backdoor = game.add.sprite(0, game.world.centerY+60, 'trigger');
        this.backdoor.width = 100;
        this.backdoor.height = 150;
        this.backdoor.inputEnabled = true;
        this.backdoor.events.onInputDown.add(this.backRoom);

        this.secondDoor = game.add.sprite(game.world.centerX-50, game.world.height-75, 'trigger');
        this.secondDoor.width = 100;
        this.secondDoor.height = 75;
        this.secondDoor.inputEnabled = true;
        if(Continue == false){
            this.secondDoor.events.onInputDown.add(this.secondRoom);
        } else {
            this.secondDoor.events.onInputDown.add(this.locked);
        }
        this.secondFloor = game.add.sprite(game.world.centerX-200, 0, 'trigger');
        this.secondFloor.width = 330;
        this.secondFloor.height = 320;
        this.secondFloor.inputEnabled = true;
        this.secondFloor.events.onInputDown.add(this.changeFloor);
    },
    update: function () {

    },
    nextRoom:function(){
        game.state.start('hall');
    },
    backRoom:function(){
        game.state.start('living');
    },
    secondRoom:function(){
        Ladder.dialoge = game.add.sprite(0, 0, 'dialoge');
        Ladder.dialoge.scale.setTo(1)
        Ladder.text1 = game.add.text(75, 40, '* Похоже, что за этой дверью просто выход... Погодите,', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Ladder.text2 = game.add.text(75, 80, 'это же то, что вам нужно: Найти выход! Значит ли, что...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Ladder.text3 = game.add.text(75, 140, '*** Конец игры ***', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Ladder.dialoge.inputEnabled = true;
        Ladder.dialoge.events.onInputDown.add(Ladder.clicked);
        Ladder.dialoge.events.onInputDown.add(Ladder.locked);
    },
    clicked:function(){
        Ladder.dialoge.kill();
        Ladder.text1.kill();
        Ladder.text2.kill();
        Ladder.text3.kill();
    },
    locked:function(){
        Ladder.dialoge.kill();
        Ladder.text1.kill();
        game.state.start('exit');
    },
    changeFloor:function(){
        Ladder.dialoge = game.add.sprite(0, 0, 'dialoge');
        Ladder.dialoge.scale.setTo(1)
        Ladder.text1 = game.add.text(75, 40, '* Вам незачем возвращаться туда...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Ladder.dialoge.inputEnabled = true;
        Ladder.dialoge.events.onInputDown.add(Ladder.delete);
    },
    ended: function() {
        Ladder.dialoge = game.add.sprite(0, 0, 'dialoge');
        Ladder.dialoge.scale.setTo(1)
        Ladder.text1 = game.add.text(75, 30, '* Вот и все, это выход... (к югу от лестницы)', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Ladder.text2 = game.add.text(75, 70, '* Похоже, что Ваше приключение окончено...', { fontSize: '20px', fill: '#BBB', font: 'bold 64pt sans' });
        Ladder.text3 = game.add.text(75, 110, '* Но захотите ли Вы узнать историю этого дома?...', { fontSize: '20px', fill: '#888', font: 'bold 64pt sans' });
        Ladder.text4 = game.add.text(75, 150, '* Это решать уже вам...', { fontSize: '20px', fill: '#444', font: 'bold 64pt sans' });
        Ladder.dialoge.inputEnabled = true;
        Ladder.dialoge.events.onInputDown.add(Ladder.superdelete);
    },
    superdelete:function(){
        Ladder.dialoge.kill();
        Ladder.text1.kill();
        Ladder.text2.kill();
        Ladder.text3.kill();
        Ladder.text4.kill();
    },
    delete:function(){
        Ladder.dialoge.kill();
        Ladder.text1.kill();
    },
}
