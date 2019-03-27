var Hall = {
    preload: function () {
        game.load.image('trigger', 'triggers/trigger.png');
        game.load.image('bg', 'assets/hall_room.png');
    },
    door: null,
    background: null,
    name: null,
    create: function () {
        game.stage.backgroundColor = "#000";
        this.background = game.add.sprite(0, game.world.centerY-75, 'bg');
        this.background.scale.setTo(1.08);

        this.backdoor = game.add.sprite(0, game.world.centerY, 'trigger');
        this.backdoor.width = 50
        this.backdoor.height = 75
        this.backdoor.inputEnabled = true;
        this.backdoor.events.onInputDown.add(this.backRoom);

        this.firstdoor = game.add.sprite(game.world.centerX-235, game.world.centerY-47.5, 'trigger');
        this.firstdoor.width = 40
        this.firstdoor.height = 55
        this.firstdoor.inputEnabled = true;
        this.firstdoor.events.onInputDown.add(this.firstRoom);

        this.seconddoor = game.add.sprite(game.world.centerX-10, game.world.centerY-47.5, 'trigger');
        this.seconddoor.width = 40
        this.seconddoor.height = 55
        this.seconddoor.inputEnabled = true;
        this.seconddoor.events.onInputDown.add(this.secondRoom);

        this.thirddoor = game.add.sprite(game.world.centerX+215, game.world.centerY-47.5, 'trigger');
        this.thirddoor.width = 40
        this.thirddoor.height = 55
        this.thirddoor.inputEnabled = true;
        this.thirddoor.events.onInputDown.add(this.thirdRoom);
    },
    update: function () {

    },
    backRoom:function(){
        game.state.start('ladder');
    },
    firstRoom:function(){
        game.state.start('small');
    },
    secondRoom:function(){
        game.state.start('big');
    },
    thirdRoom:function(){
        Hall.dialoge = game.add.sprite(0, 0, 'dialoge');
        Hall.dialoge.scale.setTo(1)
        Hall.text1 = game.add.text(75, 40, '* Это секретная комната... Ну, теперь уже не совсем', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Hall.text2 = game.add.text(75, 80, 'секретная, но, так или иначе, вам нужен ключ от неё...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Hall.dialoge.inputEnabled = true;
        Hall.dialoge.events.onInputDown.add(Hall.clicked);
    },
    clicked:function(){
        Hall.dialoge.kill();
        Hall.text1.kill();
        Hall.text2.kill()
    },
}
