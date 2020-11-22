function main(poorGradesLimit, nameProbText) {
    let totalScore = 0;
let probName = nameProbText.shift();
let probScore = nameProbText.shift();
let counter = 1;

    while(true) {
        probName = nameProbText.shift();
        if(probName === 'Enough') {
            break;
        }

        
        totalScore += probScore.shift();
        counter++;
    }
    console.log(totalScore / counter);
}

main();