var DIRECTION = {
    IDLE: 0,
    UP: 1,
    DOWN: 2,
    LEFT: 3,
    RIGHT: 4
};

var rounds = [5, 5, 3, 3, 2];
var colors = [ , , , , ,]; 

// The ball - object that used as primary tool for the game. Will incremently pick up speed as game counter increases

var Ball = {
    new: function (incrementedSpeed) {
        return {
            width: 18, 
            height: 18, 
            x: (this.canvas.width /2) - 9,
            y: (this.canvas.width /2) - 9,
            moveX: DIRECTION.IDLE,
            moveY: DIRECTION.IDLE,
            speed: incrementedSpeed || 7

        };
    }
};

//The paw - the counter that move up and down to count how many time sthe ball has hit

var Ai = {
    new: function (side){
        return{
            width: 18, 
            height: 180, 
            x: side === 'left' ? 150 : this.canvas.width - 150,
            y: (this.canvas.height /2) - 35,
            socre: 0,
            move: DIRECTION.IDLE,
            speed: 8

        };
    }
};


// The Game board; Mapping out the face of the game board
var Game = {
    initialize: function () {
        this.canvas = document.querySelector('canvas');
        this.context = this.canvas.getContext('2d');

        this.canvas.width = 1400;
        this.canvas.height = 1000;

        this.canvas.style.width = (this.canvas.width / 2) + 'px';
        this.canvas.style.height = (this.canvas.height / 2) + 'px';

        this.player = Ai.new.call(this, 'left');
        this.ai =  Ai.new.call(this, 'right');
        this.ball = Ball.new.call(this);

        this.ai.speed = 5; 
        this.running = this.over = false;
        this.turn = this.ai;
        this.timer = this.round = 0;
        this.color = #ff526f;

        Pong.menu();
        Pong.listen();

    },

    endGameMenu: function (text) {
        //Changes the gameboard font size and colour
        Pong.context.font = '45px Courier New' ; 
        Pong.context.fillStyle = this.color;

        //Rectangle behind 'Press any key to begin' text.
        Pong.context.fillRect(
            Pong.canvas.width / 2 - 350,
            Pong.canvas.height / 2 - 48,
            700,
            100
        );
        
        //Change the gameboard colour
        Pong.context.fillStyle = '#ffffff';

        //End game menu - 'Game over' or 'Winner'
        Pong.context.fillText(text,
            Pong.canvas.width / 2,
            Pong.canvas.height / 2 + 15
            );

        setTimeout( function () {
            Pong = Object.assign({}, Game);
            Pong.initialize();
        }, 3000);
    
    }, 

    menu: function() {
        //draw all the Pong objects in current state
        Pong.draw();

        //Change canvas font and size colour 
        this.context.font = '50px Courier New';
        this.context.fillStyle = this.color;

        // Rectangle behind 'Press any key to begin' text (drawn)
        this.context.fillRect(
            this.canvas.width / 2 - 350,
            this.canvas.height / 2 - 48,
            700,
            100
        );

        //Gameboard colour change
        this.context.fillText('Press any key to begin',
            this.canvas.width / 2, 
            this.canvas.height / 2 + 15
        );
    }, 

    // Update objects: move the player, ball, ai, increment score

    

    }