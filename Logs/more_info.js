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
        this.dialoge = game.add.sprite(0, -500, 'dialoge');
        this.dialoge.scale.setTo(1.7)
        this.text0 = game.add.text(75, 50, 'Обучение:', { fontSize: '30px', fill: '#FFF', font: 'bold 20pt sans' });
        this.text1 = game.add.text(75, 125, 'ОСОБОЕ ВНИМАНИЕ!', { fontSize: '24px', fill: '#FFF', font: 'bold 20pt sans' });
        this.text2 = game.add.text(75, 175, '', { fontSize: '24px', fill: '#FFF', font: 'regular 64pt sans' });
        this.text3 = game.add.text(594, 217, '▲', { fontSize: '14px', fill: '#FFF', font: 'regular 64pt sans' });
        this.text4 = game.add.text(75, 225, 'Если на экране возникнет данное диалоговое окно |, то', { fontSize: '24px', fill: '#FFF', font: 'regular 64pt sans' });
        this.text5 = game.add.text(75, 275, 'прошу Вас, строго нажимайте, только непосредственно на него,', { fontSize: '24px', fill: '#FFF', font: 'regular 64pt sans' });
        this.text6 = game.add.text(75, 325, 'иначе, я не гарантирую Вам стабильную игру без БАГов,', { fontSize: '24px', fill: '#FFF', font: 'regular 64pt sans' });
        this.text6 = game.add.text(75, 375, 'потерянного прогресса (игра не сохраняет ваши данные),', { fontSize: '24px', fill: '#FFF', font: 'regular 64pt sans' });
        this.text7 = game.add.text(75, 425, 'критических ошибок и прочего...', { fontSize: '24px', fill: '#FFF', font: 'regular 64pt sans' });
        this.text8 = game.add.text(75, 475, '(А так же никуда не спешите, и не нажимайте на действ. дважды)', { fontSize: '24px', fill: '#FFF', font: 'regular 64pt sans' });
        this.text = game.add.text(game.world.width-150, game.world.height-75, '-Автор', { fontSize: '24px', fill: '#FFF', font: 'regular 64pt sans' });
        this.dialoge.inputEnabled = true;
        this.dialoge.events.onInputDown.add(this.clicked);
    },
    update: function() {

    },
    clicked: function() {
        game.state.start('menu');
    }
}
