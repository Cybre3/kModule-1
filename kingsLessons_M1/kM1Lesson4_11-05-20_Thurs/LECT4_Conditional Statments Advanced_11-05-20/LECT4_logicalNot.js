function main(num) {

let valid =  (num >= 100 && num <= 200) || num == 0;

    if (!valid) {
        console.log('Invalid number');
    } else {
        console.log('Valid number');
    }
}

main(5);
main(150);