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

        
        this.btn = game.add.sprite(150, 230, 'trigger');
        this.btn.width = 85
        this.btn.height = 35
        this.btn.inputEnabled = true;
        this.btn.events.onInputDown.add(this.freezer);
        
        this.btn = game.add.sprite(150, 270, 'trigger');
        this.btn.width = 85
        this.btn.height = 85
        this.btn.inputEnabled = true;
        this.btn.events.onInputDown.add(this.fridge);
        
        this.btn = game.add.sprite(255, 255, 'trigger');
        this.btn.width = 80
        this.btn.height = 100
        this.btn.inputEnabled = true;
        this.btn.events.onInputDown.add(this.sink);
        
        this.btn = game.add.sprite(300, 165, 'trigger');
        this.btn.width = 140
        this.btn.height = 65
        this.btn.inputEnabled = true;
        this.btn.events.onInputDown.add(this.pans);
        
        this.btn = game.add.sprite(345, 255, 'trigger');
        this.btn.width = 160
        this.btn.height = 100
        this.btn.inputEnabled = true;
        this.btn.events.onInputDown.add(this.shkaf);
        
        this.btn = game.add.sprite(465, 150, 'trigger');
        this.btn.width = 75
        this.btn.height = 75
        this.btn.inputEnabled = true;
        this.btn.events.onInputDown.add(this.vent);
        
        this.btn = game.add.sprite(510, 240, 'trigger');
        this.btn.width = 95
        this.btn.height = 110
        this.btn.inputEnabled = true;
        this.btn.events.onInputDown.add(this.cooker);
        
        this.btn = game.add.sprite(250, 360, 'trigger');
        this.btn.width = 90
        this.btn.height = 40
        this.btn.inputEnabled = true;
        this.btn.events.onInputDown.add(this.something);
    },
    update: function () {

    },
    backRoom:function(){
        game.state.start('room3');
    },
    nothing1: function () {
        Room4.dialoge = game.add.sprite(0, 0, 'dialoge');
        Room4.dialoge.scale.setTo(1)
        Room4.text1 = game.add.text(75, 40, '* Похоже, что здесь нечего скрывать...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room4.dialoge.inputEnabled = true;
        Room4.dialoge.events.onInputDown.add(Room4.delete);
    },
    nothing2: function () {
        Room4.dialoge = game.add.sprite(0, 0, 'dialoge');
        Room4.dialoge.scale.setTo(1)
        Room4.text1 = game.add.text(75, 40, '* Это не выход...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room4.dialoge.inputEnabled = true;
        Room4.dialoge.events.onInputDown.add(Room4.delete);
    },
    nothing3: function () {
        Room4.dialoge = game.add.sprite(0, 0, 'dialoge');
        Room4.dialoge.scale.setTo(1)
        Room4.text1 = game.add.text(75, 40, '* Это не помогло...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room4.dialoge.inputEnabled = true;
        Room4.dialoge.events.onInputDown.add(Room4.delete);
    },
    freezer: function () {
        Room4.dialoge = game.add.sprite(0, 0, 'dialoge');
        Room4.dialoge.scale.setTo(1)
        Room4.text1 = game.add.text(75, 40, '* Вы открыли дверь морозильника...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room4.dialoge.inputEnabled = true;
        Room4.dialoge.events.onInputDown.add(Room4.delete);
        Room4.dialoge.events.onInputDown.add(Room4.freeze);
    },
    freeze: function () {
        Room4.dialoge = game.add.sprite(0, 0, 'dialoge');
        Room4.dialoge.scale.setTo(1)
        Room4.text1 = game.add.text(75, 40, '* Брр, холодно...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room4.dialoge.inputEnabled = true;
        Room4.dialoge.events.onInputDown.add(Room4.delete);
        Room4.dialoge.events.onInputDown.add(Room4.nothing3);
    },
    fridge: function () {
        Room4.dialoge = game.add.sprite(0, 0, 'dialoge');
        Room4.dialoge.scale.setTo(1)
        Room4.text1 = game.add.text(75, 40, '* Вы открыли дверь холодильника...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room4.dialoge.inputEnabled = true;
        Room4.dialoge.events.onInputDown.add(Room4.delete);
        Room4.dialoge.events.onInputDown.add(Room4.frost);
    },
    frost: function () {
        Room4.dialoge = game.add.sprite(0, 0, 'dialoge');
        Room4.dialoge.scale.setTo(1)
        Room4.text1 = game.add.text(75, 40, '* Хм, прохладно...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room4.dialoge.inputEnabled = true;
        Room4.dialoge.events.onInputDown.add(Room4.delete);
        Room4.dialoge.events.onInputDown.add(Room4.nothing1);
    },
    sink: function () {
        Room4.dialoge = game.add.sprite(0, 0, 'dialoge');
        Room4.dialoge.scale.setTo(1)
        Room4.text1 = game.add.text(75, 40, '* Вы повернули оба крана до упора...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room4.dialoge.inputEnabled = true;
        Room4.dialoge.events.onInputDown.add(Room4.delete);
        Room4.dialoge.events.onInputDown.add(Room4.water);
    },
    water: function () {
        Room4.dialoge = game.add.sprite(0, 0, 'dialoge');
        Room4.dialoge.scale.setTo(1)
        Room4.text1 = game.add.text(75, 40, '* Вода начала стремительно заполнять раковинку до самых краёв.', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room4.text2 = game.add.text(75, 80, 'Кажется, что она вот вот перельётся через край и затопит комнату...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room4.text3 = game.add.text(75, 120, '', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room4.dialoge.inputEnabled = true;
        Room4.dialoge.events.onInputDown.add(Room4.delete2);
        Room4.dialoge.events.onInputDown.add(Room4.fuse);
    },
    fuse: function () {
        Room4.dialoge = game.add.sprite(0, 0, 'dialoge');
        Room4.dialoge.scale.setTo(1)
        Room4.text1 = game.add.text(75, 40, '* Внезапно вода остановилась у самого края, благодаря системе слива...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room4.text2 = game.add.text(75, 80, '', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room4.dialoge.inputEnabled = true;
        Room4.dialoge.events.onInputDown.add(Room4.delete1);
        Room4.dialoge.events.onInputDown.add(Room4.nothing2);
    },
    pans: function () {
        Room4.dialoge = game.add.sprite(0, 0, 'dialoge');
        Room4.dialoge.scale.setTo(1);
        Room4.text1 = game.add.text(75, 40, '*Эти две сковородки и две левые прихватики показались Вам весьма', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room4.text2 = game.add.text(75, 80, 'подозрительно висящими на стене кухни...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room4.dialoge.inputEnabled = true;
        Room4.dialoge.events.onInputDown.add(Room4.delete1);
        Room4.dialoge.events.onInputDown.add(Room4.try);
    },
    try: function () {
        Room4.dialoge = game.add.sprite(0, 0, 'dialoge');
        Room4.dialoge.scale.setTo(1);
        Room4.text1 = game.add.text(75, 40, '*Вы попытались дотянуться до них, но через мгновение осознали, что', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room4.text2 = game.add.text(75, 80, 'Вы недостаточно высоки для этого...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room4.dialoge.inputEnabled = true;
        Room4.dialoge.events.onInputDown.add(Room4.delete1);
        Room4.dialoge.events.onInputDown.add(Room4.nothing3);
    },
    shkaf: function () {
        Room4.dialoge = game.add.sprite(0, 0, 'dialoge');
        Room4.dialoge.scale.setTo(1);
        Room4.text1 = game.add.text(75, 40, '*Похоже на то, что этот шкаф может иметь в себе кучу секретов...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room4.text2 = game.add.text(75, 80, '', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room4.dialoge.inputEnabled = true;
        Room4.dialoge.events.onInputDown.add(Room4.delete1);
        Room4.dialoge.events.onInputDown.add(Room4.polki);
    },
    polki: function () {
        Room4.dialoge = game.add.sprite(0, 0, 'dialoge');
        Room4.dialoge.scale.setTo(1);
        Room4.text1 = game.add.text(75, 40, '*Вы открыли дверцы шкафа в поисках секретных выключателей...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room4.text2 = game.add.text(75, 80, '*Вы выдвинули полки шкафа в поисках секретных приборов...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room4.text3 = game.add.text(75, 120, '*Вы проверили каждую пылинку на столешнице...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room4.text4 = game.add.text(75, 160, '*Ничего из этого не содержит секретов.....', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room4.dialoge.inputEnabled = true;
        Room4.dialoge.events.onInputDown.add(Room4.delete3);
        Room4.dialoge.events.onInputDown.add(Room4.nothing);
    },
    nothing: function () {
        Room4.dialoge = game.add.sprite(0, 0, 'dialoge');
        Room4.dialoge.scale.setTo(1);
        Room4.text1 = game.add.text(75, 40, '*Вы уж было собирались отойти от шкафа...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room4.text2 = game.add.text(75, 80, '(*Внезапно, раздался какой-то скрежет*)', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room4.text3 = game.add.text(75, 120, '*Похоже, что вы голодны...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room4.dialoge.inputEnabled = true;
        Room4.dialoge.events.onInputDown.add(Room4.delete2);
        Room4.dialoge.events.onInputDown.add(Room4.break);
    },
    break: function () {
        Room4.dialoge = game.add.sprite(0, 0, 'dialoge');
        Room4.dialoge.scale.setTo(1);
        Room4.text1 = game.add.text(75, 40, '*Вы решли поискать немного пищи для мозга...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room4.text2 = game.add.text(75, 80, '(*Найдены кусочки шоколада*)', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room4.dialoge.inputEnabled = true;
        Room4.dialoge.events.onInputDown.add(Room4.delete1);
        Room4.dialoge.events.onInputDown.add(Room4.thing);
    },
    thing: function () {
        Room4.dialoge = game.add.sprite(0, 0, 'dialoge');
        Room4.dialoge.scale.setTo(1);
        Room4.text1 = game.add.text(75, 40, '*Вы перекусили и чувствуете, что вам стало полегче...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room4.text2 = game.add.text(75, 80, '(*Похоже, что это немного помогло...*)', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room4.dialoge.inputEnabled = true;
        Room4.dialoge.events.onInputDown.add(Room4.delete1);
    },
    vent: function () {
        Room4.dialoge = game.add.sprite(0, 0, 'dialoge');
        Room4.dialoge.scale.setTo(1);
        Room4.text1 = game.add.text(75, 40, '*Под потолком висит вытяжка, которая засасывает запахи.', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room4.text2 = game.add.text(75, 80, 'Вы решили попробовать пролезть через неё', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room4.dialoge.inputEnabled = true;
        Room4.dialoge.events.onInputDown.add(Room4.delete1);
        Room4.dialoge.events.onInputDown.add(Room4.smell);
    },
    smell: function () {
        Room4.dialoge = game.add.sprite(0, 0, 'dialoge');
        Room4.dialoge.scale.setTo(1);
        Room4.text1 = game.add.text(75, 40, '*Но Вы не запах...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room4.text2 = game.add.text(75, 80, '', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room4.dialoge.inputEnabled = true;
        Room4.dialoge.events.onInputDown.add(Room4.delete1);
        Room4.dialoge.events.onInputDown.add(Room4.nothing2);
    },
    cooker: function () {
        Room4.dialoge = game.add.sprite(0, 0, 'dialoge');
        Room4.dialoge.scale.setTo(1);
        Room4.text1 = game.add.text(75, 40, '*Эта плита каким-то магическим образом не подключена к', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room4.text2 = game.add.text(75, 80, 'газопроводу, который отсутсвует в доме, но на ней всё же', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room4.text3 = game.add.text(75, 80, 'есть следы огня. Возможно, используется огненной магией...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room4.dialoge.inputEnabled = true;
        Room4.dialoge.events.onInputDown.add(Room4.delete2);
        Room4.dialoge.events.onInputDown.add(Room4.nothing1);
    },
    something: function () {
        Room4.dialoge = game.add.sprite(0, 0, 'dialoge');
        Room4.dialoge.scale.setTo(1)
        Room4.text1 = game.add.text(75, 40, '* Похоже, что под этим ковриком был какой-то механизм...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
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
    delete1:function(){
        Room4.dialoge.kill();
        Room4.text1.kill();
        Room4.text2.kill();
        Room4.dialoge.kill();
        Room4.text1.kill();
        Room4.text2.kill();
    },
    delete2:function(){
        Room4.dialoge.kill();
        Room4.text1.kill();
        Room4.text2.kill();
        Room4.text3.kill();
        Room4.dialoge.kill();
        Room4.text1.kill();
        Room4.text2.kill();
        Room4.text3.kill();
    },
    delete3:function(){
        Room4.dialoge.kill();
        Room4.text1.kill();
        Room4.text2.kill();
        Room4.text3.kill();
        Room4.text4.kill();
        Room4.dialoge.kill();
        Room4.text1.kill();
        Room4.text2.kill();
        Room4.text3.kill();
        Room4.text4.kill();
    },
}
