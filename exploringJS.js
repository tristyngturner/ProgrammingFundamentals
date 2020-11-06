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

var size = 5;
let i;
function printSquare() {
    for (i=0; i < size; i++) {
        console.log("* * * * *");
        }
}
printSquare();
//above is the wrong way, more manual way, below is actual formal for printing

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

function printBox(x,y) {
    let box = ''
    for (let i = 1; i <= x; i++) {
        for (let j = 1; j <= y; j++) {
            if (i === 1 || i === x || j === 1 || j === y) {
                box += "*"
            }else{
                box += " "
            }
        }
        box += "\n" 
    }
    console.log(box)
}
printBox(6,10)
