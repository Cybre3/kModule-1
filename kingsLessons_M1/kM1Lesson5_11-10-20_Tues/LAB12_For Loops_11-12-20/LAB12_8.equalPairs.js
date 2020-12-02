function main(numPairs, pairsList) {

    let sum1 = 0;
    let sum2 = 0;


    for (let i = 1; i <= numPairs * 2; i++) {
        if (i <= numPairs) {
            let n1 = pairsList.shift();
            sum1 += n1;
        } else {
            let n2 = pairsList.shift();
            sum2 += n2;
        }
    }

    if (sum1 === sum2) {
        console.log(`Yes, value =${sum1}`);
    } else {
        console.log(`No, maxdiff =${Math.abs(sum1 - sum2)}`);
    }
}

main(2, [-1, 0, 0, -1]);