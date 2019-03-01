var Words = {
    preload: function() {
        game.load.image('dialoge', 'assets/dialoge.png');
    },
    text1: null,
    text2: null,
    text3: null,
    text4: null,
    text5: null,
    dialoge: null,
    create: function() {
        this.dialoge = game.add.sprite(0, -900, 'dialoge');
        this.dialoge.scale.setTo(1.7, 5)
        this.text0 = game.add.text(75, 75, 'Заметка от автора:', { fontSize: '30px', fill: '#FFF', font: 'bold 20pt sans' });
        this.text2 = game.add.text(75, 125, 'Эта фан игра/пародия (п. 3, ст. 1274 ГК РФ), на оригинальную игру Undertale.', { fontSize: '24px', fill: '#FFF', font: 'regular 64pt sans' });
        this.text3 = game.add.text(75, 175, 'Я приношу свои извинения:', { fontSize: '24px', fill: '#FFF', font: 'regular 64pt sans' });
        this.text4 = game.add.text(75, 225, '*За использование спрайтов оригинальной игры;', { fontSize: '24px', fill: '#FFF', font: 'regular 64pt sans' });
        this.text5 = game.add.text(75, 275, '*За изменение механики и концепта игры;', { fontSize: '24px', fill: '#FFF', font: 'regular 64pt sans' });
        this.text6 = game.add.text(75, 325, '*За оскорбление чьих-либо чувств.', { fontSize: '24px', fill: '#FFF', font: 'regular 64pt sans' });
        this.text6 = game.add.text(75, 375, '*За грамматические и пунктационные ошибки.', { fontSize: '24px', fill: '#FFF', font: 'regular 64pt sans' });
        this.text = game.add.text(game.world.width-150, game.world.height-100, '-Автор', { fontSize: '24px', fill: '#FFF', font: 'regular 64pt sans' });
        game.input.onDown.add(this.clicked, this);
    },
    update: function() {

    },
    clicked: function() {
        game.state.start('menu');
    }
}
