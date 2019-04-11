var Room2 = {
    preload: function () {
        game.load.image('bg', 'assets/monochrome_living_room.png');        
        game.load.image('trigger', 'triggers/shine.png');
        game.load.image('htrigger', 'triggers/trigger.png');
        game.load.image('exitr', 'triggers/arri.png');
        game.load.image('exitu', 'triggers/arup.png');
        game.load.image('lock', 'triggers/lock.png');
        game.load.image('dialoge', 'assets/dialoge1.png');
    },
    door: null,
    backdoor: null,
    background: null,
    name: null,
    create: function () {
        game.stage.backgroundColor = "#4a4a4a";
        this.background = game.add.sprite(0, 0, 'bg');
        this.background.scale.setTo(2.5);

        this.arrow = game.add.sprite(750, 360, 'exitr');
        this.arrow.scale.setTo(0.5);
        this.door = game.add.sprite(750, 360, 'htrigger');
        this.door.width = 100
        this.door.height = 160
        this.door.inputEnabled = true;
        this.door.events.onInputDown.add(this.nextRoom);

        this.backdoor = game.add.sprite(110, 0, 'exitu');
        this.backdoor.width = 110
        this.backdoor.height = 150
        this.backdoor.inputEnabled = true;
        this.backdoor.events.onInputDown.add(this.backRoom);

        if(room2un == false && room2lo == false && room2ck == false && room2ed == false){
            this.btn = game.add.sprite(330, 0, 'trigger');
            this.btn.width = 180
            this.btn.height = 200
            this.btn.inputEnabled = true;
            this.btn.events.onInputDown.add(this.fireplace);
            
            this.locker = game.add.sprite(750, 410, 'lock');
            this.locker.scale.setTo(0.25)
            
            this.lock1 = game.add.sprite(750, 350, 'htrigger');
            this.lock1.width = 100
            this.lock1.height = 170
            this.lock1.inputEnabled = true;
            this.lock1.events.onInputDown.add(this.locked);

            this.lock2 = game.add.sprite(750, 350, 'htrigger');
            this.lock2.width = 100
            this.lock2.height = 170
            this.lock2.inputEnabled = true;
            this.lock2.events.onInputDown.add(this.locked);

            this.lock3 = game.add.sprite(750, 350, 'htrigger');
            this.lock3.width = 100
            this.lock3.height = 170
            this.lock3.inputEnabled = true;
            this.lock3.events.onInputDown.add(this.locked);

            this.lock4 = game.add.sprite(750, 350, 'htrigger');
            this.lock4.width = 100
            this.lock4.height = 170
            this.lock4.inputEnabled = true;
            this.lock4.events.onInputDown.add(this.locked);

            this.unlock1 = game.add.sprite(385, 135, 'htrigger');
            this.unlock1.width = 70
            this.unlock1.height = 50
            this.unlock1.inputEnabled = true;
            this.unlock1.events.onInputDown.add(this.lever);

            this.btn = game.add.sprite(695, 70, 'trigger');
            this.btn.width = 50
            this.btn.height = 110
            this.btn.inputEnabled = true;
            this.btn.events.onInputDown.add(this.gardenTools);

            this.btn = game.add.sprite(530, 25, 'trigger');
            this.btn.width = 150
            this.btn.height = 150
            this.btn.inputEnabled = true;
            this.btn.events.onInputDown.add(this.bookcase);

            this.unlock2 = game.add.sprite(630, 60, 'htrigger');
            this.unlock2.width = 40
            this.unlock2.height = 40
            this.unlock2.inputEnabled = true;
            this.unlock2.events.onInputDown.add(this.book);

            this.btn = game.add.sprite(50, 350, 'trigger');
            this.btn.width = 400
            this.btn.height = 200
            this.btn.inputEnabled = true;
            this.btn.events.onInputDown.add(this.floor);

            this.unlock3 = game.add.sprite(200, 425, 'htrigger');
            this.unlock3.width = 75
            this.unlock3.height = 75
            this.unlock3.inputEnabled = true;
            this.unlock3.events.onInputDown.add(this.plank);

            this.unlock4 = game.add.sprite(100, 0, 'htrigger');
            this.unlock4.width = 140
            this.unlock4.height = 150
            this.unlock4.inputEnabled = true;
            this.unlock4.events.onInputDown.add(this.backRoomKey);
        }
    },
    update: function () {
        
    },
    nextRoom:function(){
        game.state.start('room3');
    },
    backRoom:function(){
        Room2.dialoge = game.add.sprite(0, 0, 'dialoge');
        Room2.dialoge.scale.setTo(1)
        Room2.text1 = game.add.text(75, 40, '* Вам незачем возвращаться туда...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room2.dialoge.inputEnabled = true;
        Room2.dialoge.events.onInputDown.add(Room2.delete);
    },
    locked: function () {
        Room2.dialoge = game.add.sprite(0, 0, 'dialoge');
        Room2.dialoge.scale.setTo(1)
        Room2.text1 = game.add.text(75, 40, '* Дверь закрыта. Найдите что-нибудь, что может ее', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room2.text2 = game.add.text(75, 80, 'открыть, например ключ или рычаг...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room2.dialoge.inputEnabled = true;
        Room2.dialoge.events.onInputDown.add(Room2.delete1);
    },
    lever: function () {
        Room2.dialoge = game.add.sprite(0, 0, 'dialoge');
        Room2.dialoge.scale.setTo(1)
        Room2.text1 = game.add.text(75, 40, '* Похоже, что в камине был рычаг...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room2.dialoge.inputEnabled = true;
        Room2.dialoge.events.onInputDown.add(Room2.delete);
        Room2.dialoge.events.onInputDown.add(Room2.unlocked1);
    },
    backRoomKey: function () {
        Room2.dialoge = game.add.sprite(0, 0, 'dialoge');
        Room2.dialoge.scale.setTo(1)
        Room2.text1 = game.add.text(75, 40, '* Возвращаясь назад, Вы споткнулись об рычаг...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room2.text2 = game.add.text(75, 80, '(Слишком сложно для Вас?...)', { fontSize: '20px', fill: '#111', font: 'bold 20pt sans' });
        Room2.dialoge.inputEnabled = true;
        Room2.dialoge.events.onInputDown.add(Room2.delete1);
        Room2.dialoge.events.onInputDown.add(Room2.unlocked4);
    },
    unlocked: function () {
        Room2.dialoge = game.add.sprite(0, 0, 'dialoge');
        Room2.dialoge.scale.setTo(1)
        Room2.text1 = game.add.text(75, 40, '* Похоже, что дверь теперь открыта...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room2.dialoge.inputEnabled = true;
        Room2.dialoge.events.onInputDown.add(Room2.delete);
        Room2.locker.kill();
    },
    unlocked1: function () {
        Room2.dialoge = game.add.sprite(0, 0, 'dialoge');
        Room2.dialoge.scale.setTo(1)
        Room2.text1 = game.add.text(75, 40, '* Дверь щелкнула...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room2.dialoge.inputEnabled = true;
        Room2.dialoge.events.onInputDown.add(Room2.delete);
        room2un = true;
        Room2.lock1.kill();
        if(room2un == true && room2lo == true && room2ck == true && room2ed == true){
            Room2.dialoge.events.onInputDown.add(Room2.unlocked);
        }
    },
    unlocked2: function () {
        Room2.dialoge = game.add.sprite(0, 0, 'dialoge');
        Room2.dialoge.scale.setTo(1)
        Room2.text1 = game.add.text(75, 40, '* Дверь щелкнула...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room2.dialoge.inputEnabled = true;
        Room2.dialoge.events.onInputDown.add(Room2.delete);
        room2lo = true;
        Room2.lock2.kill();
        if(room2un == true && room2lo == true && room2ck == true && room2ed == true){
            Room2.dialoge.events.onInputDown.add(Room2.unlocked);
        }
    },
    unlocked3: function () {
        Room2.dialoge = game.add.sprite(0, 0, 'dialoge');
        Room2.dialoge.scale.setTo(1)
        Room2.text1 = game.add.text(75, 40, '* Дверь щелкнула...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room2.dialoge.inputEnabled = true;
        Room2.dialoge.events.onInputDown.add(Room2.delete);
        room2ck = true;
        Room2.lock3.kill();
        if(room2un == true && room2lo == true && room2ck == true && room2ed == true){
            Room2.dialoge.events.onInputDown.add(Room2.unlocked);
        }
    },
    unlocked4: function () {
        Room2.dialoge = game.add.sprite(0, 0, 'dialoge');
        Room2.dialoge.scale.setTo(1)
        Room2.text1 = game.add.text(75, 40, '* Дверь щелкнула...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room2.dialoge.inputEnabled = true;
        Room2.dialoge.events.onInputDown.add(Room2.delete);
        room2ed = true;
        Room2.lock4.kill();
        Room2.unlock4.kill();
        if(room2un == true && room2lo == true && room2ck == true && room2ed == true){
            Room2.dialoge.events.onInputDown.add(Room2.unlocked);
        }
    },
    delete:function(){
        Room2.dialoge.kill();
        Room2.text1.kill();
        Room2.dialoge.kill();
        Room2.text1.kill();
    },
    delete1:function(){
        Room2.dialoge.kill();
        Room2.text1.kill();
        Room2.text2.kill();
        Room2.dialoge.kill();
        Room2.text1.kill();
        Room2.text2.kill();
    },
    gardenTools: function () {
        Room2.dialoge = game.add.sprite(0, 0, 'dialoge');
        Room2.dialoge.scale.setTo(1)
        Room2.text1 = game.add.text(75, 40, '* Вы тронули старые садовые инструменты...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room2.dialoge.inputEnabled = true;
        Room2.dialoge.events.onInputDown.add(Room2.delete);
        Room2.dialoge.events.onInputDown.add(Room2.nothing);
    },
    bookcase: function () {
        Room2.dialoge = game.add.sprite(0, 0, 'dialoge');
        Room2.dialoge.scale.setTo(1)
        Room2.text1 = game.add.text(75, 40, '* Вы осмотрели каждую пыльную книжку...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room2.dialoge.inputEnabled = true;
        Room2.dialoge.events.onInputDown.add(Room2.delete);
        Room2.dialoge.events.onInputDown.add(Room2.nothing);
    },
    book: function () {
        Room2.dialoge = game.add.sprite(0, 0, 'dialoge');
        Room2.dialoge.scale.setTo(1)
        Room2.text1 = game.add.text(75, 40, '* Вы нашли правильную книгу...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room2.dialoge.inputEnabled = true;
        Room2.dialoge.events.onInputDown.add(Room2.delete);
        Room2.dialoge.events.onInputDown.add(Room2.unlocked2);
    },
    plank: function () {
        Room2.dialoge = game.add.sprite(0, 0, 'dialoge');
        Room2.dialoge.scale.setTo(1)
        Room2.text1 = game.add.text(75, 40, '* Неужели!? Под одной из досок был рычаг...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room2.dialoge.inputEnabled = true;
        Room2.dialoge.events.onInputDown.add(Room2.delete);
        Room2.dialoge.events.onInputDown.add(Room2.unlocked3);
    },
    fireplace: function () {
        Room2.dialoge = game.add.sprite(0, 0, 'dialoge');
        Room2.dialoge.scale.setTo(1)
        Room2.text1 = game.add.text(75, 40, '* Вы взгялнули на этот непримечательный камин...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room2.dialoge.inputEnabled = true;
        Room2.dialoge.events.onInputDown.add(Room2.delete);
        Room2.dialoge.events.onInputDown.add(Room2.nothing1);
    },
    floor: function () {
        Room2.dialoge = game.add.sprite(0, 0, 'dialoge');
        Room2.dialoge.scale.setTo(1)
        Room2.text1 = game.add.text(75, 40, '* Это очень огромное пустое пространство...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room2.dialoge.inputEnabled = true;
        Room2.dialoge.events.onInputDown.add(Room2.delete);
        Room2.dialoge.events.onInputDown.add(Room2.nothing1);
    },
    nothing: function () {
        Room2.dialoge = game.add.sprite(0, 0, 'dialoge');
        Room2.dialoge.scale.setTo(1)
        Room2.text1 = game.add.text(75, 40, '* Ничего не произошло...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room2.dialoge.inputEnabled = true;
        Room2.dialoge.events.onInputDown.add(Room2.delete);
    },
    nothing1: function () {
        Room2.dialoge = game.add.sprite(0, 0, 'dialoge');
        Room2.dialoge.scale.setTo(1)
        Room2.text1 = game.add.text(75, 40, '* Похоже, что здесь нечего скрывать...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room2.dialoge.inputEnabled = true;
        Room2.dialoge.events.onInputDown.add(Room2.delete);
    },
    nothing2: function () {
        Room2.dialoge = game.add.sprite(0, 0, 'dialoge');
        Room2.dialoge.scale.setTo(1)
        Room2.text1 = game.add.text(75, 40, '* Это не выход...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room2.dialoge.inputEnabled = true;
        Room2.dialoge.events.onInputDown.add(Room2.delete);
    },
    nothing3: function () {
        Room2.dialoge = game.add.sprite(0, 0, 'dialoge');
        Room2.dialoge.scale.setTo(1)
        Room2.text1 = game.add.text(75, 40, '* Это не помогло...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room2.dialoge.inputEnabled = true;
        Room2.dialoge.events.onInputDown.add(Room2.delete);
    },
}
