var Menu = {
    preload: function () {
        game.load.image('cade', 'assets/love.png');
        game.load.image('luna', 'assets/night.png');
        game.load.image('cele', 'assets/sun.png');
        game.load.image('twil', 'assets/twi.png');
        game.load.image('july', 'assets/menu_pony.png');
        game.load.image('boop', 'assets/booped.png');
        game.load.image('btn', 'triggers/trigger.png');
        game.load.image('bg', 'assets/menu.png');
        game.load.image('name', 'assets/game_name.png');
    },
    btn: null,
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
        this.ebtn.events.onInputDown.add(this.boop);

        this.text = game.add.text(375, 275, 'Start', { fontSize: '30px', fill: '#FF0', font: 'bold 30pt Pixel' });
        this.btn = game.add.sprite(375, 275, 'btn');
        this.btn.inputEnabled = true;
        this.btn.scale.setTo(0.25, 0.1);
        this.btn.events.onInputDown.add(this.startGame);
        
        this.text = game.add.text(210, 580, 'UNDERQUESTRIA V0.30 (C) DISCORDINGAMES 2019', { fontSize: '15px', fill: '#888', font: 'bold 15pt Pixel' });
        this.text = game.add.text(175, 560, '"UNDERTALE" & "MY LITTLE PONY" Сrossover (FAN-MADE)', { fontSize: '15px', fill: '#111', font: 'bold 15pt Pixel' });
        this.text = game.add.text(200, 200, 'Home - Somewhere', { fontSize: '30px', fill: '#FFF', font: 'bold 30pt Pixel' });
        this.text = game.add.text(200, 150, 'July', { fontSize: '30px', fill: '#FFF', font: 'bold 30pt Pixel' });
        this.text = game.add.text(375, 150, 'LV 0', { fontSize: '30px', fill: '#FFF', font: 'bold 30pt Pixel' });
        this.text = game.add.text(480, 150, '0:00', { fontSize: '30px', fill: '#FFF', font: 'bold 30pt Pixel' });
        
        this.word = game.add.sprite(10, 540, 'cade');
        this.word.inputEnabled = true;
        this.word.scale.setTo(0.09);
        this.word.events.onInputDown.add(this.words);

        this.inf = game.add.sprite(710, 530, 'twil');
        this.inf.inputEnabled = true;
        this.inf.scale.setTo(0.09, 0.07);
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
    boop:function(){
        Menu.ebtn.kill();
        Menu.bbtn = game.add.sprite(273, 300, 'boop');
        Menu.bbtn.inputEnabled = true;
        Menu.bbtn.scale.setTo(0.5, 0.5);
        Menu.bbtn.events.onInputDown.add(Menu.booped);
    },
    booped:function(){
        Menu.bbtn.kill();
        Menu.ebtn = game.add.sprite(273, 300, 'july');
        Menu.ebtn.inputEnabled = true;
        Menu.ebtn.scale.setTo(0.5, 0.5);
        Menu.ebtn.events.onInputDown.add(Menu.boop);
    },
}
