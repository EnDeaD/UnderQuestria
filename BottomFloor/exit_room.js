var Exit = {
    preload: function() {
        game.load.image('dialoge', 'assets/dialoge1.png');
        game.load.image('bg', 'assets/bg_full.png');
    },
    text1: null,
    text2: null,
    text3: null,
    text4: null,
    dialoge: null,
    create: function() {
        if(secret1 == true || secret2 == true || secret3 == true || secret4 == true || secret5 == true || secret6 == true || secret7 == true){
            Exit.dialoge = game.add.sprite(0, 0, 'dialoge');
            Exit.dialoge.scale.setTo(1);
            if(secret1 == true)
            {Exit.text1 = game.add.text(75, 30, '*Вы открыли дверцы шкафа в поисках секретных выключателей...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });}else{Exit.text1 = game.add.text(75, 30, '*Но ничего не открылось...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });}
            if(secret2 == true)
            {Exit.text2 = game.add.text(75, 70, '*Вы выдвинули полки шкафа в поисках секретных приборов...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });}else{Exit.text1 = game.add.text(75, 30, '*Но секрет был не найден...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });}
            if(secret3 == true)
            {Exit.text3 = game.add.text(75, 110, '*Вы проверили каждую пылинку на столешнице...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });}else{Exit.text1 = game.add.text(75, 30, '*Но ничего не произошло...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });}
            if(secret4 == true)
            {Exit.text4 = game.add.text(75, 150, '*Ничего из этого не содержит секретов.....', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });}else{Exit.text1 = game.add.text(75, 30, '*Но секрет не познался...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });}
            Exit.dialoge.inputEnabled = true;
            Exit.dialoge.events.onInputDown.add(Exit.delete3);
            Exit.dialoge.events.onInputDown.add(Exit.nothing);
        }
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
