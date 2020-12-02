// x1, y1, x2, y2, x, y

function main(x1, y1, x2, y2, x, y) {
  if ((x === x1 || x === x2 || y === y1 || y === y2) && !(x < x1 || x > x2 || y < y1 || y > y2)) {
        console.log("Border");
  } else {
    console.log("Inside / Outside");
  }
}

// console.log('Border');
// console.log('Inside / Outside');

main(2, -3, 12, 3, 8, -1);
main(2, -3, 12, 3, 12, -1);
main(6, -1, 20, -5, 2, -5);
