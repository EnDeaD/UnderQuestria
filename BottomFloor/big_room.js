var Big = {
    preload: function () {
        game.load.image('trigger', 'triggers/trigger.png');
        game.load.image('bg', 'assets/big_room.png');
        game.load.image('dialoge', 'assets/dialoge1.png');
    },
    door: null,
    background: null,
    name: null,
    create: function () {
        game.stage.backgroundColor = "#000";
        this.background = game.add.sprite(100, 15, 'bg');
        this.background.scale.setTo(2.5)
        this.door = game.add.sprite(270, 550, 'trigger');
        this.door.width = 100
        this.door.height = 50
        this.door.inputEnabled = true;
        this.door.events.onInputDown.add(this.backRoom);
    },
    update: function () {

    },
    backRoom:function(){
        game.state.start('hall');
    }
}
