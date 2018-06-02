var Exit = {
    preload: function() {
        game.load.image('dialoge', 'assets/dialoge.jpg');
        game.load.image('bg', 'assets/bg_full.png');
    },
    text1: null,
    text2: null,
    text3: null,
    text4: null,
    dialoge: null,
    create: function() {
        game.stage.backgroundColor = "#000";
        this.dialoge = game.add.sprite(0, -300, 'dialoge');
        this.dialoge.scale.setTo(1.7)
        this.text1 = game.add.text(75, 40, '* Вы выбрались...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        game.input.onDown.add(this.clicked, this);
        this.background = game.add.sprite(-1, 225, 'bg');
        this.background.scale.setTo(1.35)
    },
    update: function() {

    },
    clicked: function() {
        game.state.start('theend');
    }
}