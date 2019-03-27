var Small = {
    preload: function () {
        game.load.image('trigger', 'triggers/trigger.png');
        game.load.image('bg', 'assets/small_room.png');
        game.load.image('dialoge', 'assets/dialoge.png');
    },
    door: null,
    background: null,
    name: null,
    create: function () {
        game.stage.backgroundColor = "#000";
        this.background = game.add.sprite(75, 10, 'bg');
        this.background.scale.setTo(3, 3)
        this.door = game.add.sprite(510, 525, 'trigger');
        this.door.width = 140
        this.door.height = 100
        this.door.inputEnabled = true;
        this.door.events.onInputDown.add(this.backRoom);
    },
    update: function () {

    },
    backRoom:function(){
        game.state.start('hall');
    }
}
