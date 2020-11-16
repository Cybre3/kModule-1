// type, rows, seats per row

//

function main(type, rows, seats) {

    let total;
    switch (type) {

        case 'Premiere': 
            total = 12.00 * rows * seats;
            break;
        case 'Normal': 
            total = 7.50 * rows * seats;
            break;
        case 'Discount':
            total = 5.00 * rows * seats;
            break;
    }
    console.log(total.toFixed(2));
}

main('Normal', 12, 9);