function main(num) {
    let isSpecial = true;
    let digitChecker = num;

    while(digitChecker !== 0) {
        let digitValue = digitChecker % 10; // $10 to get out our digits

        if(digitValue !== 0 && num % digitValue !== 0) {
            // our number % its digit if thats even then were good if not, not special
            isSpecial = false;
        }
        digitChecker = Math.floor(digitChecker / 10);
    }
    if(isSpecial) {
        console.log(`${num} is special`);
    } else {
        console.log(`${num} is not special`);
    }   
}

main(23);
main(204);