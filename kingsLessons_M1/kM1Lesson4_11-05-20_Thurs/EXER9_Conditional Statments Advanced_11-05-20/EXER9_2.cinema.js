function main(type, rows, columns) {

    let total;
    switch (type) {

        case 'Premiere': 
            total = 12.00 * rows * columns;
            break;
        case 'Normal': 
            total = 7.50 * rows * columns;
            break;
        case 'Discount':
            total = 5.00 * rows * columns;
            break;
    }
    console.log(`${total.toFixed(2)} leva`);
}

main('Premiere', 10, 12);
main('Normal', 21, 13);
main('Discount', 12, 30);