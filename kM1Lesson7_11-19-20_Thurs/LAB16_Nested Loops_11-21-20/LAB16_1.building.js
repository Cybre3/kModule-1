function main(numFloors, estatesPerFloor) {
  for (let floor = numFloors; floor >= 1; floor--) {
    let result = '';
    let type = '';
    for (let estate = 0; estate < estatesPerFloor; estate++) {
      if (floor === numFloors) {
        type = 'L';
      } else if (floor % 2 === 1) {
        type = 'A';
      } else if (floor % 2 === 0) {
        type = 'O';
      }
      result += `${type}${floor}${estate} `;
    }
    console.log(result);
  }
}

main(6, 4);
main(5, 3);

// function main(floors, apts) {
//   for (let f = floors; f >= 1; f--) {
//     let result = '';

//     for (let a = 0; a < apts; a++) {
//       if (f % 2 === 0 && f !== floors) {
//         result += `O${f}${a}`;
//       } else if (f === floors) {
//         result = +`L${f}${a}`;
//       } else {
//         result += `A${f}${a}`;
//       }
//     }
//   }
// }
