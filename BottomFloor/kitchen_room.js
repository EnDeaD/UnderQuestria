var Kitchen = {
    preload: function () {
        game.load.image('trigger', 'triggers/trigger.png');
        game.load.image('bg', 'assets/kitchen_room.png');
        game.load.image('name', 'assets/game_name.png');
    },
    door: null,
    background: null,
    name: null,
    create: function () {
        game.stage.backgroundColor = "#000";
        this.background = game.add.sprite(75, 111, 'bg');
        this.background.scale.setTo(3, 3);

        this.backdoor = game.add.sprite(200, game.world.height-75, 'trigger');
        this.backdoor.width = 150
        this.backdoor.height = 75
        this.backdoor.inputEnabled = true;
        this.backdoor.events.onInputDown.add(this.backRoom);
    },
    update: function () {

    },
    backRoom:function(){
        game.state.start('living');
    }
}