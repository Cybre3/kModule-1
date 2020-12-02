function main(hourStart, minStart, secStart) {
  let hour = '';
  let min = '';
  let sec = '';

  for (let i = hourStart; i <= 23; i++) {
    if (i <= 9) {
      hour = `0${i} : `;
    } else {
      hour = `${i} : `;
    }
    if (i === hourStart) {
      for (let i = minStart; i <= 59; i++) {
        if (i <= 9) {
          min = `0${i} : `;
        } else {
          min = `${i} : `;
        }
        if (i === minStart) {
          for (let i = secStart; i <= 59; i++) {
            if (i <= 9) {
              sec = `0${i}`;
            } else {
              sec = i;
            }
            console.log(`${hour}${min}${sec}`);
          }
        } else {
          for (let i = 0; i <= 59; i++) {
            if (i <= 9) {
              sec = `0${i}`;
            } else {
              sec = i;
            }
            console.log(`${hour}${min}${sec}`);
          }
        }
      }
    } else {
      for (let i = 0; i <= 59; i++) {
        if (i <= 9) {
          min = `0${i} : `;
        } else {
          min = `${i} : `;
        }
        for (let i = 0; i <= 59; i++) {
          if (i <= 9) {
            sec = `0${i}`;
          } else {
            sec = i;
          }
          console.log(`${hour}${min}${sec}`);
        }
      }
    }
  }
}

main(21, 59, 58);
