var About = {
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
        this.text0 = game.add.text(75, 75, 'Титры:', { fontSize: '30px', fill: '#FFF', font: 'bold 20pt sans' });
        this.text1 = game.add.text(75, 125, 'Автор игры: Discording Myself', { fontSize: '24px', fill: '#FFF', font: 'bold 20pt Sans' });
        this.text2 = game.add.text(75, 175, 'Вебсайт: всё ещё в разработке', { fontSize: '24px', fill: '#FFF', font: 'regular 64pt Arial' });
        this.text3 = game.add.text(75, 225, '', { fontSize: '24px', fill: '#FFF', font: 'regular 64pt Arial' });
        this.text4 = game.add.text(75, 275, 'Вдохновлено: July Allshine (Пони с Главного Меню)', { fontSize: '24px', fill: '#FFF', font: 'regular 64pt Arial' });
        this.text5 = game.add.text(75, 325, '', { fontSize: '24px', fill: '#FFF', font: 'regular 64pt sans' });
        this.text6 = game.add.text(75, 375, '', { fontSize: '24px', fill: '#FFF', font: 'regular 64pt sans' });
        this.text7 = game.add.text(75, 425, '', { fontSize: '24px', fill: '#FFF', font: 'regular 64pt sans' });
        game.input.onDown.add(this.clicked, this);
    },
    update: function() {

    },
    clicked: function() {
        game.state.start('menu');
    }
}
