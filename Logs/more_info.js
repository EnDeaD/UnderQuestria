var More = {
    preload: function() {
        game.load.image('dialoge', 'assets/dialoge1.png');
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
        this.text0 = game.add.text(75, 50, 'Обучение:', { fontSize: '30px', fill: '#FFF', font: 'bold 20pt sans' });
        this.text1 = game.add.text(75, 125, 'ОСОБОЕ ВНИМАНИЕ!', { fontSize: '24px', fill: '#FFF', font: 'bold 20pt sans' });
        this.text4 = game.add.text(75, 225, 'Если на экране возникнет данное диалоговое окно, то', { fontSize: '24px', fill: '#FFF', font: 'regular 64pt sans' });
        this.text5 = game.add.text(75, 275, 'действия с другими предметами будут ограничены, прочитав', { fontSize: '24px', fill: '#FFF', font: 'regular 64pt sans' });
        this.text6 = game.add.text(75, 325, 'содержимое диалогового окна, просто кликните по нему и', { fontSize: '24px', fill: '#FFF', font: 'regular 64pt sans' });
        this.text6 = game.add.text(75, 375, 'оно само удалится с экрана, или откроет следующее сообщение.', { fontSize: '24px', fill: '#FFF', font: 'regular 64pt sans' });
        this.text7 = game.add.text(75, 425, 'Игра не сохраняет Ваш прогресс, если вы застряли или вызвали', { fontSize: '24px', fill: '#FFF', font: 'regular 64pt sans' });
        this.text8 = game.add.text(75, 475, 'критическую ошибку, то Вам придется начинать всё с самого начала.', { fontSize: '24px', fill: '#FFF', font: 'regular 64pt sans' });
        this.dialoge.inputEnabled = true;
        this.dialoge.events.onInputDown.add(this.clicked);
    },
    update: function() {

    },
    clicked: function() {
        game.state.start('menu');
    }
}
