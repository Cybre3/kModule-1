function main(num1, num2, num3) {

    if (num1 > num2) {
        if (num1 > num3) {
            console.log(num1);
        } else {
            console.log(num3);
        }
    } else {
        if (num2 > num3) {
            console.log(num2);
        } else {
            console.log(num3);
        }
    }
}

main(1, 2, 3);
main(-1, -5, -9);
main(0.5, 1.5, -3);