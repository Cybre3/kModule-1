function main(numStudents, listGrades) {
  let topStudentPct = 0;
  let tier2Pct = 0;
  let tier3Pct = 0;
  let failPct = 0;
  let classAverage = 0;
  let grade = 0;

  for (let i = 1; i <= numStudents; i++) {
    grade = listGrades.shift();

    if (grade >= 5) {
      topStudentPct += (1 / numStudents) * 100;
    } else if (grade >= 4 && grade < 5) {
      tier2Pct += (1 / numStudents) * 100;
    } else if (grade >= 3 && grade < 4) {
      tier3Pct += (1 / numStudents) * 100;
    } else if (grade < 3) {
      failPct += (1 / numStudents) * 100;
    }
    if (i <= 10) {
      classAverage += grade / numStudents;
    }
  }

  console.log(`Top Students: ${topStudentPct.toFixed(2)}%`);
  console.log(`Between 4.00 and 4.99: ${tier2Pct.toFixed(2)}%`);
  console.log(`Between 3.00 and 3.99: ${tier3Pct.toFixed(2)}%`);
  console.log(`Fail: ${failPct.toFixed(2)}%`);
  console.log(`Average: ${classAverage.toFixed(2)}`);
}

main(10, [3.0, 2.99, 5.68, 3.01, 4, 4, 6.0, 4.5, 2.44, 5]);
