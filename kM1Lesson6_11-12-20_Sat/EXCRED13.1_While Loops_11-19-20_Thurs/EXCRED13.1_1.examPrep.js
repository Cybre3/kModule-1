function main(poorGradesLimit, nameProbText) {
    let totalScore = 0;
    let poorGrade = 0;
    let probName = nameProbText.shift();
    let probScore = nameProbText.shift();
    let probCounter = 0;
    let lastProbName = '';

    while(probName !== 'Enough' && probName !== undefined) {
        probCounter++;
        if (probScore <= 4) {
            poorGrade++;
        }
        totalScore += probScore;
        lastProbName = probName;
        probName = nameProbText.shift();
        probScore = nameProbText.shift();
    }
    let avgGrade = 0;

    avgGrade = totalScore / probCounter;

    if (poorGrade >= poorGradesLimit) {
        console.log(`You need a break, ${poorGrade} poor grades.`);
    } else {
        console.log(`Average score: ${avgGrade.toFixed(2)}`);
        console.log(`Number of problems: ${probCounter}`);
        console.log(`Last problem: ${lastProbName}`);
    }
}


main(3, ['Money', 6, 'Story', 4, 'Spring Time', 5, 'Bus', 6, 'Enough']);
main(2, ['Income', 3, 'Game Info', 6, 'Best Player', 4]);