function main(stepsWhileOut) {
  let steps = stepsWhileOut.shift();
  let totalSteps = 0;

  while (steps !== undefined) {
    if (steps === 'Going home') {
      steps = stepsWhileOut.shift();
      totalSteps += steps;
    } else {
      totalSteps += steps;
    }
    steps = stepsWhileOut.shift();
  }

  let goal = 10000;
  let stepsDifference = goal - totalSteps;

  if (totalSteps >= goal) {
    console.log(`Goal reached! Good job!`);
  } else {
    console.log(`${stepsDifference} more steps to reach goal.`);
  }
}

main([1000, 1500, 2000, 6500]);
main([1500, 300, 2500, 3000, 'Going home', 200]);
