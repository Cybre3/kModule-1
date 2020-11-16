function main(hourExamStart, minExamStart, hourArrived, minArrived) {
  let totalExamStartTimeMin = hourExamStart * 60 + minExamStart;
  let totalArrivedTimeMin = hourArrived * 60 + minArrived;
  let timeDifference = Math.abs(totalExamStartTimeMin - totalArrivedTimeMin);
  let hour = Math.floor(timeDifference / 60);
  let clockMin = timeDifference - hour * 60;

  if (totalArrivedTimeMin > totalExamStartTimeMin + 30) {
    console.log('Late');
    if (timeDifference <= 59) {
      console.log(`${timeDifference} minutes after the start`);
    } else if (timeDifference < 10) {
      console.log(`0${timeDifference} minutes after the start`);
    } else {
        if (clockMin < 10) {
        console.log(`${hour}:0${clockMin} hours after the start`);
        } else {
        console.log(`${hour}:${clockMin} hours after the start`);
        }
    }
  } else if (totalArrivedTimeMin < totalExamStartTimeMin - 30) {
    console.log('Early');
    if (timeDifference <= 59) {
      console.log(`${timeDifference} minutes before the start`);
    } else if (timeDifference < 10) {
      console.log(`0${timeDifference} minutes before the start`);
    } else {
        if (clockMin < 10) {
        console.log(`${hour}:0${clockMin} hours before the start`);
        } else {
        console.log(`${hour}:${clockMin} hours before the start`);
        }
    }
  } else {
    console.log('On time');
    if (totalArrivedTimeMin < totalExamStartTimeMin) {
      if (timeDifference < 10) {
        console.log(`0${timeDifference} minutes before the start`);
      } else {
        console.log(`${timeDifference} minutes before the start`);
      }
    } else if (totalArrivedTimeMin > totalExamStartTimeMin) {
      if (timeDifference < 10) {
        console.log(`0${timeDifference} minutes after the start`);
      } else {
        console.log(`${timeDifference} minutes after the start`);
      }
    }
  }
}

main(18, 14, 4, 54);
main(19, 49, 16, 57);
main(14, 31, 11, 33);
