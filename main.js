/*
* Michael Josten
* Computational World 
* Assignment 2 - Emergence/Interaction
* Game of Life
*/

const DIMENSION = 40;

const STATE1= [
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
[0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];               

function randomInt(n) {
    return Math.floor(Math.random() * n);
}

function rgb(r, g, b) {
    return "rgb(" + r + "," + g + "," + b + ")";
}
//Cells that are just born should not be checked as a neighbor.
//create next generation state of the board then checks the current state of each cell
//then transfers the state over, rather than sequentially updating every cell
//each cell should be simultaneously updated to next state rather than sequentially.
class Cell {
    constructor(game, board, row, col, alive) {
        this.game = game;
        this.row = row;
        this.col = col;
        this.removeFromWorld = false;
        this.alive = alive;
        this.board = board;
        //default color to white
        this.color = rgb(255, 255, 255);
        //if alive then set to black.
        if (this.alive) 
            this.color = rgb(0, 0, 0);

        
    }
    getState() {
        var data = {row: this.row, col: this.col, alive: this.alive};
        return data;
    }
    setState(alive) {
        this.alive = alive;
        if (this.alive) {
            this.color = rgb(0, 0, 0);
        }
        else {
            this.color = rgb(255, 255, 255);
        }
    }
    update(nextBoard) {
        //console.log(`row=${this.row}, col=${this.col}, alive=${this.alive}`);
        var aliveCount = this.aliveNeighbors();

        var nextState = new Cell(this.game, this.board, this.row, this.col, this.alive);
        
        //any cell with fewer than 2 neighbors dies
        //any cell with more than 3 neighbors dies 
        if (this.alive && (aliveCount < 2 || aliveCount > 3)) {
            nextState.alive = 0;
        }
        //any cell with exactly 3 neighbors becomes alive
        else if ((!(this.alive)) && (aliveCount === 3)) {
            nextState.alive = 1;
        } 
        //any cell with 2-3 neighbors stays alive
        else if (aliveCount >= 2 && aliveCount <= 3) {
        }
        //set color
        if (!nextState.alive)
            nextState.color = rgb(255, 255, 255);
        else 
            nextState.color = rgb(0, 0, 0);
        
        nextBoard[nextState.row][nextState.col] = nextState;
        //nextBoard[nextState.row][nextState.col].push(nextState);
        
    }
    draw() {
    }
    
    aliveNeighbors() {
        var count = 0;
        var board = this.board.board;
        var minI = -1;
        var minJ = -1;
        var maxI = 1;
        var maxJ = 1;
        //count neighbor alive status

        // Top Left Cell
        if (this.col - 1 < 0 && this.row - 1 < 0) {
            minJ = 0;
            minI = 0;
        }
        // Top right Cell
        else if (this.col + 1 >= this.board.dimension && this.row -1 < 0) {
            maxJ = 0;
            minI = 0;
        }
        // Bottom Left Cell
        else if (this.col -1 < 0 && this.row + 1 >= this.board.dimension) {
            minJ = 0;
            maxI = 0;
        }
        // Bottom Right Cell
        else if (this.col + 1 >= this.board.dimension && this.row + 1 >= this.board.dimension) {
            maxJ = 0;
            maxI = 0;
        }

        // Cell in left column
        else if (this.col - 1 < 0) {
            minJ = 0;
        }
        // Cell in right column
        else if (this.col + 1 >= this.board.dimension) {
            maxJ = 0;
        }
        //cell in top row
        else if (this.row - 1 < 0) {
            minI = 0;

        }
        // Cell in the bottom row
        else if (this.row + 1 >= this.board.dimension) {
            maxI = 0;
        }
        
        //count the neighbors
        for (var i = minI; i <= maxI; i++) {
            for (var j = minJ; j <= maxJ; j++) {
                //console.log(`i=${i}, j=${j}, maxI=${maxI}, maxJ=${maxJ}`);
                count += board[this.row + i][this.col + j].alive;
                //console.log(`count = ${count}; board[${this.row + i}][${this.col + j}] = 
                //${board[this.row + i][this.col + j].alive}`);
            }
        }
        
        //subtract itself 
        count -= board[this.row][this.col].alive;
        return count;
    }
    
}

class GameBoard extends Entity {
    constructor(game) {
        super(game, 0, 0);
        console.log("make gameboard");
        this.dimension = DIMENSION;
        //cells are either alive(1) or dead (0)

        //create board
        this.board = [];
        this.init();
        //this.initCells();
    
    }
    init() {
        for (var row = 0; row < this.dimension; row++) {
            this.board.push([]);
            for (var col = 0; col < this.dimension; col++) {
                this.board[row].push(new Cell(this.game, this, row, col, STATE1[col][row]));
            }
        }
        
    }
    save(socket) {
        //socket.emit("save", { studentname: "Chris Marriott", statename: "aState", data: "Goodbye World" });
        console.log("save");
        var gameData = this.getData();
        socket.emit("save", {studentname: "Michael Josten", statename: "gameOfLifeSavedState", data: gameData});
        
    }

    load(stateData) {
        this.clearBoard();
        var data = stateData.data;
        for (var i = 0; i < data.length; i++) {
            var col = data[i].col;
            var row = data[i].row;
            var alive = data[i].alive;
            this.setCell(row, col, alive);
        }
    }
    
    getData() {
        var board = this.board;
        var dimension = this.dimension;
        var data = [];
        for (var i = 0; i < dimension; i++) {
            for (var j = 0; j < dimension; j++) {
                data.push(board[i][j].getState());
            }
        }
        
        //data.push(board[10][10].getState());
        return data;

    }
    
    clearBoard() {
        for (var i = 0; i < this.dimension; i++) {
            for (var j = 0; j < this.dimension; j++) {
                this.board[i][j].setState(false);
            }
        }
    }

    initCells() {
        // for (var row = 0; row < STATE1.length; row++) {
        //     for (var col = 0; col < STATE1[row].length; col++) {
        //         this.setCell(row, col, STATE1[row][col]);
        //         //this.board[row][col].dead = STATE1[row][col];
        //     }
        // }
        //this.createGlider(5, 5);


    }
    setCell(row, col, alive) {
        this.board[row][col].setState(alive);
    }

    update() {
        super.update();
        var nextBoard = [];

        if (this.game.click) {
            var x = this.game.click.x;
            var y = this.game.click.y;
            this.board[x][y].setState(!this.board[x][y].alive);
        }

    
        if (this.game.s || this.game.a) {
            for (var row = 0; row < this.board.length; row++) {
                nextBoard.push([]);
                for (var col = 0; col < this.board[row].length; col++) {
                    this.board[row][col].update(nextBoard);
                }
            }
            this.board = nextBoard;
            
        }
        
    }

    createGlider(row, col) {
        this.setCell(row, col, 0);
        this.setCell(row+1, col+1, 0);
        this.setCell(row+1, col+2, 0);
        this.setCell(row, col+2, 0);
        this.setCell(row-1, col+2, 0);
    }

    draw(ctx) {
        super.draw();
        //size of cell is surfaceWidth / dimension by surfaceHeight / dimension
        //draw the board as a grid
        var cellWidth = this.game.surfaceWidth / this.dimension;
        var cellHeight = this.game.surfaceHeight / this.dimension;
        var lineWidth = 1
        
        ctx.lineWidth = lineWidth;
        //draw vertical grid lines
        for (var i = 0; i <= this.dimension + 1; i++) {
            //ctx.save();
            ctx.beginPath();
            ctx.moveTo(i * cellWidth, 0);
            ctx.lineTo(i * cellWidth, cellHeight * this.dimension);
            ctx.stroke();
            ctx.closePath();
            //ctx.restore();
        }
        //draw horizontal grid lines
        for (var i = 0; i <= this.dimension + 1; i++) {
            ctx.beginPath();
            ctx.moveTo(0, i * cellHeight);
            ctx.lineTo(cellWidth * this.dimension, i * cellHeight);
            ctx.stroke();
            ctx.closePath();
        }

        //paint the cells
        for (var row = 0; row < this.board.length; row++) {
            for (var col = 0; col < this.board[row].length; col++) {
                ctx.beginPath();
                ctx.fillStyle = this.board[col][row].color;
                ctx.fillRect(col * cellWidth + lineWidth, 
                    row * cellHeight + lineWidth, 
                    cellWidth - lineWidth * 2, 
                    cellHeight - lineWidth * 2);
                ctx.fill();
                ctx.closePath();
            }
        }

    }
}


window.onload = function() {
    var socket = io.connect("http://24.16.255.56:8888");
    

    var saveButton = document.getElementById("save");
    var loadButton = document.getElementById("load");

    console.log("in main");
    
    var canvas = document.getElementById('GameOfLife');
    var ctx = canvas.getContext('2d');
    var gameEngine = new GameEngine();
    var gameBoard = new GameBoard(gameEngine);
    //gameBoard.init();
    gameEngine.addEntity(gameBoard);
    gameEngine.board = gameBoard;
    gameEngine.init(ctx);

    saveButton.onclick = function() {
        gameEngine.board.save(socket);
    }

    loadButton.onclick = function() {
        console.log("load");
        socket.emit("load", {studentname: "Michael Josten", statename: "gameOfLifeSavedState"});
    }

    socket.on("load", function (data) {
        gameBoard.load(data);
    });


    gameEngine.start();

}