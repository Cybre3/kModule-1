function main(num1, num2, num3) {
    let sum = num1 + num2 + num3;

    let min = parseInt(sum / 60);
    let sec = sum % 60;
//  let sec = sum - (min * 60);

    if (sec < 10) {
        console.log(`${min}:0${sec}`);
    } else {
        console.log(`${min}:${sec}`);
    }
}

main(35, 45, 44);
main(22, 7, 34);
main(50, 50, 49);
main(14, 12, 10);