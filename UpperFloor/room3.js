var Room3 = {
    preload: function () {
        game.load.image('trigger', 'triggers/shine.png');
        game.load.image('bg', 'assets/monochrome_main_room.png');
        game.load.image('dialoge', 'assets/dialoge1.png');
    },
    door: null,
    background: null,
    name: null,
    create: function () {
        game.stage.backgroundColor = "#4a4a4a";
        this.background = game.add.sprite(0, 0, 'bg');
        this.background.scale.setTo(2.5)

        this.door = game.add.sprite(700, 370, 'trigger');
        this.door.width = 100
        this.door.height = 140
        this.door.inputEnabled = true;
        this.door.events.onInputDown.add(this.nextRoom);

        this.backdoor = game.add.sprite(0, game.world.centerY+60, 'trigger');
        this.backdoor.width = 100
        this.backdoor.height = 150
        this.backdoor.inputEnabled = true;
        this.backdoor.events.onInputDown.add(this.backRoom);

        this.secondDoor = game.add.sprite(game.world.centerX-50, game.world.height-75, 'trigger');
        this.secondDoor.width = 100
        this.secondDoor.height = 75
        this.secondDoor.inputEnabled = true;
        this.secondDoor.events.onInputDown.add(this.secondRoom);

        this.secondFloor = game.add.sprite(game.world.centerX-200, 150, 'trigger');
        this.secondFloor.width = 330
        this.secondFloor.height = 230
        this.secondFloor.inputEnabled = true;
        this.secondFloor.events.onInputDown.add(this.changeFloor);

            if(floor1un == false){
                this.floorLock = game.add.sprite(game.world.centerX-200, 150, 'trigger');
                this.floorLock.width = 330
                this.floorLock.height = 230
                this.floorLock.inputEnabled = true;
                this.floorLock.events.onInputDown.add(this.massage);
            }
    },
    update: function () {

    },
    massage:function(){
        Room3.dialoge = game.add.sprite(0, 0, 'dialoge');
        dialog = false;
        Room3.dialoge.scale.setTo(1);
        Room3.text = game.add.text(75, 40, '* Похоже, что Вы еще не все осмотрели на этом этаже...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room3.dialoge.inputEnabled = true;
        Room3.dialoge.events.onInputDown.add(Room3.clicked);
    },
    nextRoom:function(){
        game.state.start('room4');
    },
    backRoom:function(){
        Room3.dialoge = game.add.sprite(0, 0, 'dialoge');
        Room3.dialoge.scale.setTo(1)
        Room3.text1 = game.add.text(75, 40, '* Вам незачем возвращаться туда...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room3.dialoge.inputEnabled = true;
        Room3.dialoge.events.onInputDown.add(Room3.delete);
    },
    secondRoom:function(){
        Room3.dialoge1 = game.add.sprite(0, 0, 'dialoge');
        Room3.dialoge1.scale.setTo(1);
        Room3.text1 = game.add.text(75, 40, '* Похоже, что за этой дверью просто стена...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room3.dialoge1.inputEnabled = true;
        Room3.dialoge1.events.onInputDown.add(Room3.clicked1);
        dialog = false;
    },
    clicked:function(){
        Room3.dialoge.kill();
        Room3.text.kill();
        Room3.dialoge.kill();
        Room3.text.kill();
    },
    clicked1:function(){
        Room3.dialoge1.kill();
        Room3.text1.kill();
        Room3.dialoge1.kill();
        Room3.text1.kill();
    },
    changeFloor:function(){
        game.state.start('ladder');
    },
    delete:function(){
        Room3.dialoge.kill();
        Room3.text1.kill();
        Room3.dialoge.kill();
        Room3.text1.kill();
    },
}
