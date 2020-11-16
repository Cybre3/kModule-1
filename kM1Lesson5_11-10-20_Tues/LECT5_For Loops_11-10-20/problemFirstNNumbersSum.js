function main(num) {
    let sum = 1;
    let outputString = '1';

    //add all the numbers from 1 until n

    for (let i = 2; i <= num; i++) {
        sum += i;
        outputString += '+' + i;
    }

    // let sum = 0;
    // let outputString = '';

    // for (let i = 1; i <= num; i++) {
    //     sum += i;
    //     if (i == 1) {
    //         outputString += i;
    //     } else {
    //         outputString += '+' + i;
    //     }
    // }

    console.log(outputString + '=' + sum);
}

main(5);