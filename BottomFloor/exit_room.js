var Exit = {
    preload: function() {
        game.load.image('dialoge', 'assets/dialoge1.jpg');
        game.load.image('bg', 'assets/bg_full.png');
    },
    text1: null,
    text2: null,
    text3: null,
    text4: null,
    dialoge: null,
    create: function() {
        game.stage.backgroundColor = "#000";
        this.background = game.add.sprite(0, 0, 'bg');
        this.background.scale.setTo(1)
        this.dialoge = game.add.sprite(0, 0, 'dialoge');
        this.dialoge.scale.setTo(1)
        this.text1 = game.add.text(75, 40, '* Вы выбрались...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        game.input.onDown.add(this.clicked, this);
    },
    update: function() {

    },
    clicked: function() {
        game.state.start('theend');
    }
}
