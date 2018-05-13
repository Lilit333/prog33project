var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/", function (req, res) {
    res.redirect("public/index.html");
});

app.listen(3000, function () {
    console.log("Example is running on port 3000");
});

var grass = require("./class.grass");
var grasseater = require("./class.grass");
var Gishatich = require("./class.grass");
var Kendani = require("./class.grass");
var Pilasos = require("./class.grass");
var Sunk = require("./class.grass");



var matrix = [];
var y = 40;
var x = 40;
var z = 10;



for (var i = 0; i < y; i++) {
    matrix[i] = [];
    for (var j = 0; j < x; j++) {
        matrix[i][j] = Math.round(Math.random() * 3);
    }
}
matrix[0][0] = 5;

var side = 20;
var grassArr = [];
var grassEatArr = [];
var gazanArr = [];
var PilaArr = [];
var TunArr = [];

for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] == 1) {
            var gr = new Grass(x, y, 1);
            grassArr.push(gr);
        }
        else if (matrix[y][x] == 2) {
            var gr = new GrassEater(x, y, 2);
            grassEatArr.push(gr);
        }

        else if (matrix[y][x] == 3) {
            var gr = new Gishatich(x, y, 3);
            gazanArr.push(gr);
        }
        else if (matrix[y][x] == 5) {
            var gr = new Pilasos(x, y, 5);
            PilaArr.push(gr);
        }
        else if (matrix[y][x] == 4) {
            var gr = new Sunk(x, y, 4);
            TunArr.push(gr);
        }
    }
}
console.log(grassArr);



for (var i in grassArr) {
    grassArr[i].mul();
}


for (var i in grassEatArr) {
    grassEatArr[i].eat();

}
for (var i in gazanArr) {
    gazanArr[i].eat();
}
for (var i in PilaArr) {
    PilaArr[i].move();
}
for (var i in TunArr) {
    TunArr[i].mul();
}

function setup() {
    while (z >= 0) {
        var x1 = Math.floor(random(20));
        var y1 = Math.floor(random(20));
        if (matrix[y1][x1] == 0) {
            matrix[y1][x1] = 4;
            z--;
        }
    }
}
