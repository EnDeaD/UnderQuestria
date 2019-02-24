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
    text: null,
    background: null,
    name: null,
    create: function () {
        game.stage.backgroundColor = "#000";
        this.background = game.add.sprite(0, 0, 'bg');
        this.background.scale.setTo(1.25, 1.25);
        this.name = game.add.sprite(125, 30, 'name');
        this.name.scale.setTo(0.5);
        
        this.ebtn = game.add.sprite(273, 300, 'july');
        this.ebtn.inputEnabled = true;
        this.ebtn.scale.setTo(0.5, 0.5);
        this.ebtn.events.onInputDown.add(this.easterEgg);

        this.btn = game.add.sprite(350, 275, 'btn');
        this.text = game.add.text(350, 275, 'Start', { fontSize: '30px', fill: '#FF0', font: 'bold 30pt Pixel' });
        this.btn.inputEnabled = true;
        this.btn.scale.setTo(0.333, 0.1);
        this.btn.events.onInputDown.add(this.startGame);
        
        this.text = game.add.text(200, 575, 'UNDERQUESTRIA V0.2 (C) DISCORDINGAMES 2019', { fontSize: '15px', fill: '#888', font: 'bold 15pt Pixel', fontStyle: 'comic cans' });
        this.text.inputEnabled = true;
        this.text = game.add.text(200, 200, 'Home - Somewhere', { fontSize: '30px', fill: '#FFF', font: 'bold 30pt Pixel' });
        this.text.inputEnabled = true;
        this.text = game.add.text(200, 150, 'July', { fontSize: '30px', fill: '#FFF', font: 'bold 30pt Pixel' });
        this.text.inputEnabled = true;
        this.text = game.add.text(375, 150, 'LV 0', { fontSize: '30px', fill: '#FFF', font: 'bold 30pt Pixel' });
        this.text.inputEnabled = true;
        this.text = game.add.text(480, 150, '0:00', { fontSize: '30px', fill: '#FFF', font: 'bold 30pt Pixel' });
        this.text.inputEnabled = true;
        
        this.word = game.add.sprite(10, 530, 'twil');
        this.word.inputEnabled = true;
        this.word.scale.setTo(0.09, 0.07);
        this.word.events.onInputDown.add(this.words);

        this.inf = game.add.sprite(710, 540, 'cade');
        this.inf.inputEnabled = true;
        this.inf.scale.setTo(0.09);
        this.inf.events.onInputDown.add(this.info);

        this.mor = game.add.sprite(700, 110, 'luna');
        this.mor.inputEnabled = true;
        this.mor.scale.setTo(0.09);
        this.mor.events.onInputDown.add(this.more);

        this.and = game.add.sprite(10, 110, 'cele');
        this.and.inputEnabled = true;
        this.and.scale.setTo(0.05);
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
        this.ebtn.scale.setTo(0.5, 0.5);
    },
}
