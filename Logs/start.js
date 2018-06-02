var Start = {
    preload: function() {
        game.load.image('dialoge', 'assets/dialoge.jpg');
    },
    text1: null,
    text2: null,
    text3: null,
    text4: null,
    dialoge: null,
    create: function() {
        this.dialoge = game.add.sprite(0, -300, 'dialoge');
        this.dialoge.scale.setTo(1.7)
        this.text1 = game.add.text(75, 40, '* Вы - маленькое дитя, просыпаетесь в незнакомом вам ', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        this.text2 = game.add.text(75, 80, 'месте. Ваша задача: выбраться из этого дома и, ', { fontSize: '20px', fill: '#FFF', font: 'bold 64pt sans' });
        this.text3 = game.add.text(75, 120, 'по возможности, узнать все его тайны...', { fontSize: '20px', fill: '#FFF', font: 'bold 64pt sans' });
        this.text4 = game.add.text(75, 155, '(Я особо не фанат, так что много не ждите ;)', { fontSize: '20px', fill: '#090909', font: 'bold 64pt sans' });
        this.dialoge.inputEnabled = true;
        this.dialoge.events.onInputDown.add(this.clicked1);
    },
    update: function() {

    },
    clicked1: function() {
        game.state.start('room1');
    }
}