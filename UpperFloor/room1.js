var Room1 = {
    preload: function () {
        game.load.image('trigger', 'triggers/shine.png');
        game.load.image('htrigger', 'triggers/trigger.png');
        game.load.image('exit', 'triggers/ardo.png');
        game.load.image('lock', 'triggers/lock.png');
        game.load.image('bg', 'assets/monochrome_small_room.png');
        game.load.image('dialoge', 'assets/dialoge1.png');
    },
    door: null,
    background: null,
    name: null,
    dialoge: null,
    looked: null,
    create: function () {
        game.stage.backgroundColor = "#4a4a4a";
        this.background = game.add.sprite(75, 10, 'bg');
        this.background.scale.setTo(3, 3)
        
        this.arrow = game.add.sprite(550, game.world.height-60, 'exit');
        this.arrow.scale.setTo(0.5);
        this.door = game.add.sprite(510, 525, 'htrigger');
        this.door.width = 140
        this.door.height = 100
        this.door.inputEnabled = true;
        this.door.events.onInputDown.add(this.nextRoom);
        
        if(room1un == false){
            game.time.events.add(Phaser.Timer.SECOND * 0.1, this.started, this);
            
            this.locker = game.add.sprite(555, 525, 'lock');
            this.locker.scale.setTo(0.25)
            this.lock = game.add.sprite(510, 525, 'htrigger');
            this.lock.width = 140
            this.lock.height = 100
            this.lock.inputEnabled = true;
            this.lock.events.onInputDown.add(this.locked);

            this.unlock = game.add.sprite(200, 425, 'htrigger');
            this.unlock.width = 75
            this.unlock.height = 75
            this.unlock.inputEnabled = true;
            this.unlock.events.onInputDown.add(this.kluch);

            this.btn = game.add.sprite(635, 90, 'trigger');
            this.btn.width = 50
            this.btn.height = 100
            this.btn.inputEnabled = true;
            this.btn.events.onInputDown.add(this.lamp);

            this.btn = game.add.sprite(425, 100, 'trigger');
            this.btn.width = 90
            this.btn.height = 150
            this.btn.inputEnabled = true;
            this.btn.events.onInputDown.add(this.shkaf);

            this.btn = game.add.sprite(325, 115, 'trigger');
            this.btn.width = 50
            this.btn.height = 50
            this.btn.inputEnabled = true;
            this.btn.events.onInputDown.add(this.picture);

            this.btn = game.add.sprite(235, 85, 'trigger');
            this.btn.width = 55
            this.btn.height = 70
            this.btn.inputEnabled = true;
            this.btn.events.onInputDown.add(this.poster);

            this.btn = game.add.sprite(590, 360, 'trigger');
            this.btn.width = 75
            this.btn.height = 50
            this.btn.inputEnabled = true;
            this.btn.events.onInputDown.add(this.box);

            this.btn = game.add.sprite(635, 200, 'trigger');
            this.btn.width = 50
            this.btn.height = 125
            this.btn.inputEnabled = true;
            this.btn.events.onInputDown.add(this.toys);

            this.btn = game.add.sprite(125, 200, 'trigger');
            this.btn.width = 100
            this.btn.height = 150
            this.btn.inputEnabled = true;
            this.btn.events.onInputDown.add(this.bedone);
            
            this.btn = game.add.sprite(525, 200, 'trigger');
            this.btn.width = 100
            this.btn.height = 150
            this.btn.inputEnabled = true;
            this.btn.events.onInputDown.add(this.bedtwo);
            
            this.btn = game.add.sprite(295, 175, 'trigger');
            this.btn.width = 110
            this.btn.height = 50
            this.btn.inputEnabled = true;
            this.btn.events.onInputDown.add(this.shoes);
        }
    },
    update: function () {

    },
    started: function() {
        Room1.dialoge = game.add.sprite(0, 0, 'dialoge');
        Room1.dialoge.scale.setTo(1)
        Room1.text1 = game.add.text(75, 40, '(Для передвижения кликайте на стрелки и лестничные проёмы.', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room1.text2 = game.add.text(75, 80, 'Для действия кликайте на обьекты, но знайте, что не все', { fontSize: '20px', fill: '#FFF', font: 'bold 64pt sans' });
        Room1.text3 = game.add.text(75, 120, 'объекты взаимодействуют, иные будут отмечены сиянием.', { fontSize: '20px', fill: '#FFF', font: 'bold 64pt sans' });
        Room1.text4 = game.add.text(75, 160, 'Заблокированные и предметы с подвохом тоже будут отмечены.)', { fontSize: '20px', fill: '#090909', font: 'bold 64pt sans' });
        Room1.dialoge.inputEnabled = true;
        Room1.dialoge.events.onInputDown.add(Room1.superdelete);
    },
    superdelete:function(){
        Room1.dialoge.kill();
        Room1.text1.kill();
        Room1.text2.kill();
        Room1.text3.kill();
        Room1.text4.kill();    
    },
    locked: function () {
        Room1.dialoge = game.add.sprite(0, 0, 'dialoge');
        Room1.dialoge.scale.setTo(1)
        Room1.text1 = game.add.text(75, 40, '* Дверь закрыта. Найдите что-нибудь, что может ее', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room1.text2 = game.add.text(75, 80, 'открыть, например ключ или рычаг...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room1.dialoge.inputEnabled = true;
        Room1.dialoge.events.onInputDown.add(Room1.delete1);
    },
    kluch: function () {
        Room1.dialoge = game.add.sprite(0, 0, 'dialoge');
        Room1.dialoge.scale.setTo(1)
        Room1.text1 = game.add.text(75, 40, '* Похоже, что под ковриком лежал ключ...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room1.dialoge.inputEnabled = true;
        Room1.dialoge.events.onInputDown.add(Room1.delete);
        Room1.dialoge.events.onInputDown.add(Room1.unlocked);
    },
    unlocked: function () {
        Room1.dialoge = game.add.sprite(0, 0, 'dialoge');
        Room1.dialoge.scale.setTo(1)
        Room1.text1 = game.add.text(75, 40, '* Теперь Вы можете открыть дверь...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room1.dialoge.inputEnabled = true;
        Room1.dialoge.events.onInputDown.add(Room1.delete);
        room1un = true;
        Room1.lock.kill();
        Room1.locker.kill();
    },
    nextRoom:function(){
        game.state.start('room2');
    },
    delete:function(){
        Room1.dialoge.kill();
        Room1.text1.kill();
        Room1.dialoge.kill();
        Room1.text1.kill();
    },
    delete1:function(){
        Room1.dialoge.kill();
        Room1.text1.kill();
        Room1.text2.kill();
        Room1.dialoge.kill();
        Room1.text1.kill();
        Room1.text2.kill();
    },
    delete2:function(){
        Room1.dialoge.kill();
        Room1.text1.kill();
        Room1.text2.kill();
        Room1.text3.kill();
        Room1.dialoge.kill();
        Room1.text1.kill();
        Room1.text2.kill();
        Room1.text3.kill();
    },
    nothing: function () {
        Room1.dialoge = game.add.sprite(0, 0, 'dialoge');
        Room1.dialoge.scale.setTo(1)
        Room1.text1 = game.add.text(75, 40, '* Ничего не произошло...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room1.dialoge.inputEnabled = true;
        Room1.dialoge.events.onInputDown.add(Room1.delete);
        Room1.looked = true;
    },
    nothing1: function () {
        Room1.dialoge = game.add.sprite(0, 0, 'dialoge');
        Room1.dialoge.scale.setTo(1)
        Room1.text1 = game.add.text(75, 40, '* Похоже, что здесь нечего скрывать...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room1.dialoge.inputEnabled = true;
        Room1.dialoge.events.onInputDown.add(Room1.delete);
    },
    nothing2: function () {
        Room1.dialoge = game.add.sprite(0, 0, 'dialoge');
        Room1.dialoge.scale.setTo(1)
        Room1.text1 = game.add.text(75, 40, '* Это не выход...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room1.dialoge.inputEnabled = true;
        Room1.dialoge.events.onInputDown.add(Room1.delete);
    },
    nothing3: function () {
        Room1.dialoge = game.add.sprite(0, 0, 'dialoge');
        Room1.dialoge.scale.setTo(1)
        Room1.text1 = game.add.text(75, 40, '* Это не помогло...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room1.dialoge.inputEnabled = true;
        Room1.dialoge.events.onInputDown.add(Room1.delete);
    },
    lamp: function () {
        Room1.dialoge = game.add.sprite(0, 0, 'dialoge');
        Room1.dialoge.scale.setTo(1)
        Room1.text1 = game.add.text(75, 40, '* Вы дернули за переключатель торшера...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room1.dialoge.inputEnabled = true;
        Room1.dialoge.events.onInputDown.add(Room1.delete);
        Room1.dialoge.events.onInputDown.add(Room1.nothing);
    },
    picture: function () {
        Room1.dialoge = game.add.sprite(0, 0, 'dialoge');
        Room1.dialoge.scale.setTo(1)
        Room1.text1 = game.add.text(75, 40, '* Вы опустили фотографию, в надежде активировать', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room1.text2 = game.add.text(75, 80, 'какой-либо механизм...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });

        Room1.dialoge.inputEnabled = true;
        Room1.dialoge.events.onInputDown.add(Room1.delete1);
        Room1.dialoge.events.onInputDown.add(Room1.nothing);
    },
    shoes: function () {
        Room1.dialoge = game.add.sprite(0, 0, 'dialoge');
        Room1.dialoge.scale.setTo(1)
        Room1.text1 = game.add.text(75, 40, '* Это полка, полная маленькой обуви, идеально', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room1.text2 = game.add.text(75, 80, 'подходящая для Ваc по размеру...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room1.dialoge.inputEnabled = true;
        Room1.dialoge.events.onInputDown.add(Room1.delete1);
        Room1.dialoge.events.onInputDown.add(Room1.nothing1);
    },
    shkaf: function () {
        Room1.dialoge = game.add.sprite(0, 0, 'dialoge');
        Room1.dialoge.scale.setTo(1)
        Room1.text1 = game.add.text(75, 40, '* Вы открыли дверь шкафа, в надежде найти выход...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room1.dialoge.inputEnabled = true;
        Room1.dialoge.events.onInputDown.add(Room1.delete);
        Room1.dialoge.events.onInputDown.add(Room1.nothing2);
    },
    bedone: function () {
        Room1.dialoge = game.add.sprite(0, 0, 'dialoge');
        Room1.dialoge.scale.setTo(1)
        Room1.text1 = game.add.text(75, 40, '* Это кровать, на которой вы проснулись...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room1.dialoge.inputEnabled = true;
        Room1.dialoge.events.onInputDown.add(Room1.delete);
        Room1.dialoge.events.onInputDown.add(Room1.search);   
    },
    search: function () {
        Room1.dialoge = game.add.sprite(0, 0, 'dialoge');
        Room1.dialoge.scale.setTo(1)
        Room1.text1 = game.add.text(75, 40, '* Кровать немного напирает на ковер, с очень', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room1.text2 = game.add.text(75, 80, 'подозрительным краем, но в целом, в этой кровати', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room1.text3 = game.add.text(75, 120, 'ничего подозрительного нет... -_-', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room1.dialoge.inputEnabled = true;
        Room1.dialoge.events.onInputDown.add(Room1.delete2);
        Room1.dialoge.events.onInputDown.add(Room1.sleep);
    },
    sleep: function () {
        Room1.dialoge = game.add.sprite(0, 0, 'dialoge');
        Room1.dialoge.scale.setTo(1)
        Room1.text1 = game.add.text(75, 40, '* Вы решили вздремнуть...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room1.dialoge.inputEnabled = true;
        Room1.dialoge.events.onInputDown.add(Room1.delete);
        Room1.dialoge.events.onInputDown.add(Room1.nothing3);
    },
    poster: function () {
        Room1.dialoge = game.add.sprite(0, 0, 'dialoge');
        Room1.dialoge.scale.setTo(1)
        Room1.text1 = game.add.text(75, 40, '* Это идеальная картинка для потайного прохода,', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room1.text2 = game.add.text(75, 80, 'но, как Вы могли сперва подумать,...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room1.dialoge.inputEnabled = true;
        Room1.dialoge.events.onInputDown.add(Room1.delete1);
        Room1.dialoge.events.onInputDown.add(Room1.nothing2);
    },
    box: function () {
        Room1.dialoge = game.add.sprite(0, 0, 'dialoge');
        Room1.dialoge.scale.setTo(1)
        Room1.text1 = game.add.text(75, 40, '* Вы проверили эту коробку, полную игрушек, на', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room1.text2 = game.add.text(75, 80, 'предмет наличия рычагов, и...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room1.dialoge.inputEnabled = true;
        Room1.dialoge.events.onInputDown.add(Room1.delete1);
        Room1.dialoge.events.onInputDown.add(Room1.nothing1);
    },
    toys: function () {
        Room1.dialoge = game.add.sprite(0, 0, 'dialoge');
        Room1.dialoge.scale.setTo(1)
        Room1.text1 = game.add.text(75, 40, '* В этих пыльных игрушках нет никаких ключей. Но,', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room1.text2 = game.add.text(75, 80, 'когда вы до них дотронулись... ', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room1.dialoge.inputEnabled = true;
        Room1.dialoge.events.onInputDown.add(Room1.delete1);
        Room1.dialoge.events.onInputDown.add(Room1.nothing);
    },
    bedtwo: function () {
        Room1.dialoge = game.add.sprite(0, 0, 'dialoge');
        Room1.dialoge.scale.setTo(1)
        Room1.text1 = game.add.text(75, 40, '* Эта кровать менее удобная, чем та, на которой вы', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room1.text2 = game.add.text(75, 80, 'проснулись, и она даже не напирает на этот весьма', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room1.text3 = game.add.text(75, 120, 'подозрительный ковер, но вы, все же, присели на нее...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room1.dialoge.inputEnabled = true;
        Room1.dialoge.events.onInputDown.add(Room1.delete2);
        Room1.dialoge.events.onInputDown.add(Room1.nothing3);
    },
}
