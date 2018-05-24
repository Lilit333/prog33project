var Kendani = require("./classkendani");
module.exports = class Grass extends Kendani {

    mul() {
        this.multiply++;
        var datarkVandakner = this.chooseCell(0);
        var tiv = datarkVandakner.length;
        var patahakanIndex = Math.floor(Math.random()*tiv);
        var newCell = datarkVandakner[patahakanIndex];
        
        



        var n = 2;
        if (weather != "spring") {
            n = 7;
        }

        if (newCell && this.multiply >= n) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 1;

            var newGrass = new Grass(newX, newY, this.index);
            grassArr.push(newGrass);
            this.multiply = 0;
        }
    }

}