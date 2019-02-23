var Menu = {
    preload: function () {
        game.load.image('cade', 'assets/love.png');
        game.load.image('luna', 'assets/night.png');
        game.load.image('cele', 'assets/sun.png');
        game.load.image('twil', 'assets/twi.png');
        game.load.image('july', 'assets/menu_pony.png');
        game.load.image('boop', 'assets/booped.png');
        game.load.image('btn', 'triggers/test_trigger.png');
        game.load.image('bg', 'assets/menu.png');
        game.load.image('name', 'assets/game_name.png');
    },
    btn: null,
    ebtn: null,
    background: null,
    name: null,
    create: function () {
        game.stage.backgroundColor = "#000";
        this.background = game.add.sprite(0, 0, 'bg');
        this.background.scale.setTo(1.25, 1.25)
        this.name = game.add.sprite(75, 30, 'name');
        this.name.scale.setTo(0.6)
        
        this.ebtn = game.add.sprite(273, 300, 'july');
        this.ebtn.inputEnabled = true;
        this.ebtn.scale.setTo(0.5, 0.5)
        this.ebtn.events.onInputDown.add(this.easterEgg);

        this.btn = game.add.sprite(340, 275, 'btn');
        this.btn.inputEnabled = true;
        this.btn.scale.setTo(0.355, 0.125)
        this.btn.events.onInputDown.add(this.startGame);
        
        this.btn = game.add.sprite(140, 175, 'btn');
        this.btn.inputEnabled = true;
        this.btn.scale.setTo(0.5, 0.1)
        this.btn.events.onInputDown.add(this.startGame);
        this.btn = game.add.sprite(350, 150, 'btn');
        this.btn.inputEnabled = true;
        this.btn.scale.setTo(0.25, 0.1)
        this.btn.events.onInputDown.add(this.startGame);
        
        this.word = game.add.sprite(10, 530, 'twil');
        this.word.inputEnabled = true;
        this.word.scale.setTo(0.09, 0.07)
        this.word.events.onInputDown.add(this.words);

        this.inf = game.add.sprite(710, 540, 'cade');
        this.inf.inputEnabled = true;
        this.inf.scale.setTo(0.09)
        this.inf.events.onInputDown.add(this.info);

        this.mor = game.add.sprite(700, 110, 'luna');
        this.mor.inputEnabled = true;
        this.mor.scale.setTo(0.09)
        this.mor.events.onInputDown.add(this.more);

        this.and = game.add.sprite(10, 110, 'cele');
        this.and.inputEnabled = true;
        this.and.scale.setTo(0.05)
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
    easterEgg:function(){
        Menu.ebtn.kill();
        this.ebtn = game.add.sprite(273, 300, 'boop');
        this.ebtn.inputEnabled = true;
        this.ebtn.scale.setTo(0.5, 0.5)
    }
}
