var Room4 = {
    preload: function () {
        game.load.image('trigger', 'triggers/shine.png');
        game.load.image('ttrigger', 'triggers/test_trigger.png');
        game.load.image('htrigger', 'triggers/trigger.png');
        game.load.image('exitd', 'triggers/ardo.png');
        game.load.image('lock', 'triggers/lock.png');
        game.load.image('bg', 'assets/monochrome_kitchen_room.png');
        game.load.image('dialoge', 'assets/dialoge1.png');

    },
    door: null,
    background: null,
    name: null,
    create: function () {
        game.stage.backgroundColor = "#4a4a4a";
        this.background = game.add.sprite(75, 111, 'bg');
        this.background.scale.setTo(3, 3);

        this.arrow = game.add.sprite(245, game.world.height-65, 'exitd');
        this.arrow.scale.setTo(0.5);
        this.backdoor = game.add.sprite(200, game.world.height-75, 'htrigger');
        this.backdoor.width = 150
        this.backdoor.height = 75
        this.backdoor.inputEnabled = true;
        this.backdoor.events.onInputDown.add(this.backRoom);

        this.btn = game.add.sprite(135, 200, 'ttrigger');
        this.btn.width = 100
        this.btn.height = 50
        this.btn.inputEnabled = true;
        this.btn.events.onInputDown.add(this.nothing);
        
        this.btn = game.add.sprite(135, 205, 'ttrigger');
        this.btn.width = 100
        this.btn.height = 150
        this.btn.inputEnabled = true;
        this.btn.events.onInputDown.add(this.nothing);
        
        this.btn = game.add.sprite(115, 125, 'ttrigger');
        this.btn.width = 500
        this.btn.height = 400
        this.btn.inputEnabled = true;
        this.btn.events.onInputDown.add(this.nothing);
    },
    update: function () {

    },
    backRoom:function(){
        game.state.start('room3');
    },
    nothing: function () {
        Room4.dialoge = game.add.sprite(0, 0, 'dialoge');
        Room4.dialoge.scale.setTo(1)
        Room4.text1 = game.add.text(75, 40, '* Похоже, что здесь ничего интересного...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room4.dialoge.inputEnabled = true;
        Room4.dialoge.events.onInputDown.add(Room4.delete);
        floor1un = true
    },
    delete:function(){
        Room4.dialoge.kill();
        Room4.text1.kill();
        Room4.dialoge.kill();
        Room4.text1.kill();
    },
}
