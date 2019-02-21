var Menu = {
    preload: function () {
        game.load.image('btn0', 'assets/love.png');
        game.load.image('btn1', 'assets/night.png');
        game.load.image('btn2', 'assets/sun.png');
        game.load.image('btn3', 'assets/twi.png');
        game.load.image('btn', 'triggers/btn.png');
        game.load.image('bg', 'assets/menu.png');
        game.load.image('name', 'assets/game_name.png');
    },
    btn: null,
    background: null,
    name: null,
    create: function () {
        game.stage.backgroundColor = "#000";
        this.background = game.add.sprite(0, 0, 'bg');
        this.background.scale.setTo(1.25, 1.25)
        this.name = game.add.sprite(140, 30, 'name');
        this.name.scale.setTo(0.6)
        
        this.btn = game.add.sprite(340, 275, 'btn');
        this.btn.inputEnabled = true;
        this.btn.scale.setTo(0.355, 0.125)
        this.btn.events.onInputDown.add(this.startGame);
        
        this.word = game.add.sprite(10, 530, 'btn1');
        this.word.inputEnabled = true;
        this.word.scale.setTo(00.1)
        this.word.events.onInputDown.add(this.words);

        this.inf = game.add.sprite(730, 530, 'btn2');
        this.inf.inputEnabled = true;
        this.inf.scale.setTo(0.01)
        this.inf.events.onInputDown.add(this.info);

        this.mor = game.add.sprite(730, 10, 'btn3');
        this.mor.inputEnabled = true;
        this.mor.scale.setTo(0.01)
        this.mor.events.onInputDown.add(this.more);

        this.and = game.add.sprite(10, 10, 'btn0');
        this.and.inputEnabled = true;
        this.and.scale.setTo(0.01)
        this.and.events.onInputDown.add(this.about);
    },
    update: function () {

    },
    startGame:function(){
        game.state.start('start');
    },
    words:function(){
        game.state.start('words');
    },
    info:function(){
        game.state.start('info');
    },
    more:function(){
        game.state.start('more');
    },
    about:function(){
        game.state.start('about');
    },
}
