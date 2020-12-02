function main(product, day) {

    if(product === 'Banana') {
        if(day === 'Weekday') {
            console.log('$2.50');
        } else {
            console.log('$2.70');
        }
    } else if (product === 'Apple') {
        if(day === 'Weekday') {
            console.log('$1.30');
        } else {
            console.log('$1.60');
        }
    } else if (product === 'Kiwi') {
        if(day === 'Weekday') {
            console.log('$2.20');
        } else {
            console.log('$3.00');
        }
    }
}

main('Apple', 'Weekday');
main('Kiwi', 'Weekend');