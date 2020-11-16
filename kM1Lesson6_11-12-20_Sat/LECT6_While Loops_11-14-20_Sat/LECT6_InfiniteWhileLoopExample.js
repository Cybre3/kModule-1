// function infiniteLoop(n, commands) {
//     let command = commands.shift();
//     while (command !== 'End') {
//         console.log('Executing : ' + command);
//         command = commands.shift(); // <-- This is need or will cause infinite loop (Executing : Inc)
//     }
//  }

function infiniteLoop1(n, commands) {
  let command = commands.shift();
  while (true) {
    if (command === 'End') {
      break;
    }
    console.log('Executing : ' + command);
    command = commands.shift();
  }
}

infiniteLoop1(5, ['Inc', 'Dec', 'End']);
