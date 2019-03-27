var Living = {
    preload: function () {
        game.load.image('trigger', 'triggers/trigger.png');
        game.load.image('bg', 'assets/living_room.png');
        game.load.image('dialoge', 'assets/dialoge1.png');
    },
    door: null,
    backdoor: null,
    background: null,
    name: null,
    create: function () {
        game.stage.backgroundColor = "#000";
        this.background = game.add.sprite(0, 0, 'bg');
        this.background.scale.setTo(2.5)
        this.door = game.add.sprite(700, 350, 'trigger');
        this.door.width = 100
        this.door.height = 170
        this.door.inputEnabled = true;
        this.door.events.onInputDown.add(this.nextRoom);

        this.backdoor = game.add.sprite(100, 0, 'trigger');
        this.backdoor.width = 140
        this.backdoor.height = 150
        this.backdoor.inputEnabled = true;
        this.backdoor.events.onInputDown.add(this.backRoom);
    },
    update: function () {

    },
    nextRoom:function(){
        game.state.start('ladder');
    },
    backRoom:function(){
        game.state.start('kitchen');
    },
}
