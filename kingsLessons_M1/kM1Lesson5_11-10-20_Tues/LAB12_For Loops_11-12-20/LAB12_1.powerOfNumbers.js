function main(num, exponent) {

    let answer = 1;

    for (let i = 1; i <= exponent; i++) {
        answer *= num;
    }
    console.log(answer);
}

main(2, 5);
main(3, 4);
main(2.5, 3);