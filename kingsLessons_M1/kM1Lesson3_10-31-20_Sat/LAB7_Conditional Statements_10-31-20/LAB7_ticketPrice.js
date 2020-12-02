function main(ticketType) {

    let total = 0;
    let sPrice = 1.60;
    let rPrice = 1.00;

    if (ticketType === 'student') {
        console.log(`$${sPrice.toFixed(2)}`);
    } else if (ticketType === 'regular') {
        console.log(`$${rPrice.toFixed(2)}`);
    } else {
        console.log('Invalid ticket type!');
    }
}

main('student');
main('regular');
main('special');