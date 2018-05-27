var fs = require('fs');
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("public"));

app.get("/", function (req, res) {
    res.redirect("public/index.html");
});

server.listen(3000, function () {
    console.log("Example is running on port 3000");
});

Grass = require("./classgrass");
GrassEater = require("./classgrasseater");
Gishatich = require("./classGishatich");
Kendani = require("./classKendani");
Pilasos = require("./classPilasos");
Sunk = require("./classSunk");




matrix = [];
y = 50;
x = 50;
z = 10;
exanak = 0;
weather = "winter"




for (var i = 0; i < y; i++) {
    matrix[i] = [];
    for (var j = 0; j < x; j++) {
        matrix[i][j] = Math.round(Math.random() * 3);
    }
}
matrix[0][0] = 5;

side = 20;
grassArr = [];
grassEatArr = [];
gazanArr = [];
PilaArr = [];
TunArr = [];

xotbazmanal = 0;
xotakerbazmanal = 0;
xotakerutel = 0;
gishatbazmanal = 0;
gishatutel = 0;
gishatsharjvel = 0;



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

takt = 0;
var obj = {
    'grassbazmanal': [],
    'grasseaterbazmanal': [],
    'grasseaterutel': [],
    'gishatichbazmanal': [],
    'gishatichutel': [],
    'gishatichsharjvel': [],

};
setInterval(func, 2000);
function func() {


    exanak++;
    if (exanak % 80 == 0) {
        weather = "winter"
    }
    else if (exanak % 80 == 20) {
        weather = "spring"
    }
    else if (exanak % 80 == 40) {
        weather = "summer"
    }
    else if (exanak % 80 == 60) {
        weather = "autumn"
    }
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


    io.sockets.emit('matrix', matrix);


    takt++;
    var myJSON = JSON.stringify(obj, null, ' ');
    if (takt % 10 == 0) {
        obj.grassbazmanal.push(xotbazmanal);
        obj.grasseaterbazmanal.push(xotakerbazmanal);
        obj.grasseaterutel.push(xotakerutel);
        obj.gishatichbazmanal.push(gishatbazmanal);
        obj.gishatichutel.push(gishatutel);
        obj.gishatichsharjvel.push(gishatsharjvel);
        fs.writeFile("finish.json", myJSON);
    }
}

io.on('connection', function (data) {

});





