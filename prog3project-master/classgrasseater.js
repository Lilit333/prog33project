var Kendani = require("./classkendani");
module.exports = class GrassEater extends Kendani {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 8;
    }

    chooseCell(character) {
        this.getNewCordiantes();
        return super.chooseCell(character); {

        }

    }

    mul() {
        var datarkVandakner = this.chooseCell(0);
        var tiv = datarkVandakner.length;
        var patahakanIndex = Math.floor(Math.random() * tiv);
        var newCell = datarkVandakner[patahakanIndex];

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            xotakerbazmanal++;
            matrix[newY][newX] = 2;

            var newGrassEat = new GrassEater(newX, newY, this.index);
            grassEatArr.push(newGrassEat);

        }
    }



    eat() {
        var datarkVandakner = this.chooseCell(0);
        var tiv = datarkVandakner.length;
        var patahakanIndex = Math.floor(Math.random() * tiv);
        var newCell = datarkVandakner[patahakanIndex];
        if (newCell) {
            var x = newCell[0];
            var y = newCell[1];
            xotakerutel++;
            matrix[y][x] = 2;
            this.energy++;
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;

            for (var i in grassArr) {
                if (x == grassArr[i].x && y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                }
            }

            if (this.energy >= 12) {
                this.mul();
                this.energy = 6;
            }
        }

        else if (weather != "winter") {
            this.move();
            this.energy--;
            if (this.energy <= 0) {
                this.die();
            }
        }
    }

    move() {

        var datarkVandakner = this.chooseCell(0);
        var tiv = datarkVandakner.length;
        var patahakanIndex = Math.floor(Math.random() * tiv);
        var newCell = datarkVandakner[patahakanIndex];


        if (newCell) {
            matrix[this.y][this.x] = 0;
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 2;
            this.x = newX;
            this.y = newY;

        }

    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in grassEatArr) {
            if (this.x == grassEatArr[i].x && this.y == grassEatArr[i].y) {
                grassEatArr.splice(i, 1);
                break;
            }
        }
    }
}
