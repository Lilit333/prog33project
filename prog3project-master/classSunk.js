var Kendani = require("./classkendani");
module.exports = class Sunk extends Kendani {


    chooseCell1(ch, ch1) {
        this.getNewCordiantes();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == ch || matrix[y][x] == ch1) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    mul() {
        this.multiply++;
        var datarkVandakner = this.chooseCell(0);
        var tiv = datarkVandakner.length;
        var patahakanIndex = Math.floor(Math.random()*tiv);
        var newCell = datarkVandakner[patahakanIndex];

var n = 3;
        if (weather != "autumn") {
            n = 9;
        }
        if (newCell && this.multiply >= n) {
            var newX = newCell[0];
            var newY = newCell[1];
            if (matrix[newY][newX] == 1) {
                for (var i in grassArr) {
                    if (grassArr[i].x == newX && grassArr[i].y == newY) {
                        grassArr.splice(i, 1);
                        break;
                    }
                }
            }
            matrix[newY][newX] = 4;

            var newSunk = new Sunk(newX, newY, this.index);
            TunArr.push(newSunk);
            this.multiply = 0;
        }
    }
}








