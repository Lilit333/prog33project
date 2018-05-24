var xqanak = [];
var yqanak = [];
var side = 10;

function setup() {
    createCanvas(xqanak.length * side, yqanak.length * side);
    background('acacac');
    socket = io.connect('http://localhost:3000');
}

socket.on("matrix", gcel);


function gcel(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("orange");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("red");
                rect(x * side, y * side, side, side);
            }

        }
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

}













