// const arr = [1,2,3,4,5,6,7,8,9,10]
// function printNumbers(array) {
//     for (let i = 0; i<array.length; i++) {
//         console.log(array[i]);
//     }
// }
// printNumbers(arr);

// function printNumbers2(array) {
//     let i = 0;
//     while (i<array.length) {
//         console.log(array[i])
//         i++
//     }   
// }
// printNumbers2(arr);

// var size = 5;
// let i;
// function printSquare(x) {
//     var size = x;
//     let i;
//     for (i=0; i < size; i++) {
//         console.log("*");
//         }
// }

// printSquare("5");

// function printSquare(x,y) {
//     var numOfColumns = x;
//     var numOfRows = y;
//     for(let i = 1; i<=numOfColumns; i++) {
//         console.log("*");
//     } for(let j=1; j<=numOfRows; j++) {
//         console.log("*");
//     }
// }
// printSquare(5,5);
// }
// for (let i = 1; i<=2; i++) {
//     for (let j = 1; j <=2; j++) {
//         console.log("*")
//     }
// }

var size = 5;
let i;
function printSquare() {
    for (i=0; i < size; i++) {
        console.log("* * * * *");
        }
}
printSquare();

function printSquare(size) {
    let grid = ''
    for(let i = 0; i < size; i++){
        for(let j=0; j < size; j++){
          grid += '*'
        }
        grid += '\n'
    }
    console.log(grid)
}
printSquare(5);

