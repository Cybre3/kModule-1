function main(studentName, listGrades) {
    let grade = listGrades.shift();
    let status = '';
    let gpaSum = 0;
    let numGrades = 0;
    

    while(grade !== undefined) {
        gpaSum += grade;
        numGrades += 1;
        grade = listGrades.shift();
    }

    let avgGpa = gpaSum / numGrades;
    if(avgGpa >= 4) {
        status = 'pass';
    }

    if(status === 'pass') {
        console.log(`${studentName} graduated. Average grade: ${avgGpa.toFixed(2)}`);
    } else {
        console.log(`repeat class. Your GPA: ${avgGpa.toFixed(2)}`);
    }
}

main('John', [4, 5.5, 6, 5.43, 4.5, 6, 5.55, 5, 6, 6, 5.43, 5]);
main('Pia', [5.31, 1.45, 2.87, 1.59, 3.23, 4.15, 1.17, 5.59, 1.6, 6.39, 3.68, 6.76]);