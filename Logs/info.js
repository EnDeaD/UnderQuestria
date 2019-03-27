var Info = {
    preload: function() {
        game.load.image('dialoge', 'assets/dialog.png');
    },
    text1: null,
    text2: null,
    text3: null,
    text4: null,
    text5: null,
    dialoge: null,
    create: function() {
        this.dialoge = game.add.sprite(0, 0, 'dialoge');
        this.dialoge.scale.setTo(1)
        this.text0 = game.add.text(75, 75, 'Обучение:', { fontSize: '30px', fill: '#FFF', font: 'bold 20pt sans' });
        this.text1 = game.add.text(75, 125, 'Внимание!', { fontSize: '24px', fill: '#FFF', font: 'bold 20pt sans' });
        this.text2 = game.add.text(75, 175, 'Эта игра в жанре "Point And Click Quest" (НЕ RPG Quest)', { fontSize: '24px', fill: '#FFF', font: 'regular 64pt sans' });
        this.text3 = game.add.text(75, 225, 'Ваши задачи:', { fontSize: '24px', fill: '#FFF', font: 'regular 64pt sans' });
        this.text4 = game.add.text(75, 275, '*Решать головоломки, пробираясь сквозь комнаты к выходу.', { fontSize: '24px', fill: '#FFF', font: 'regular 64pt sans' });
        this.text5 = game.add.text(75, 325, '*Разгадывать сюжет и находить секреты.', { fontSize: '24px', fill: '#FFF', font: 'regular 64pt sans' });
        this.text6 = game.add.text(75, 375, '*Получать удовольствие.', { fontSize: '24px', fill: '#FFF', font: 'regular 64pt sans' });
        this.text6 = game.add.text(75, 425, 'Желаю вам приятной игры!', { fontSize: '24px', fill: '#FFF', font: 'regular 64pt sans' });
        game.input.onDown.add(this.clicked, this);
    },
    update: function() {

    },
    clicked: function() {
        game.state.start('menu');
    }
}
