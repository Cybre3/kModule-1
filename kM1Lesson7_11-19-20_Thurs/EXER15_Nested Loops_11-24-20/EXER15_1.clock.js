/*



*/

function main(hourStart, minStart) {
  let hour = '';
  let min = '';

  for (let i = hourStart; i <= 23; i++) {
    if (i <= 9) {
      hour = `0${i} : `;
    } else {
      hour = `${i} : `;
    }
    if (i === hourStart) {
      for (let i = minStart; i <= 59; i++) {
        if (i <= 9) {
          min = `0${i}`;
        } else {
          min = i;
        }
        console.log(`${hour}${min}`);
      }
    } else {
      for (let i = 0; i <= 59; i++) {
        if (i <= 9) {
          min = `0${i}`;
        } else {
          min = i;
        }
        console.log(`${hour}${min}`);
      }
    }
  }
}

main(8, 5);