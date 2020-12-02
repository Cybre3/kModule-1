function main(list) {

    let currentNumber = list.shift();
    let sum = 0;

    for ( ; currentNumber !== 0; ) {
        sum += currentNumber;
        currentNumber = list.shift();

        console.log(`Sum = ${sum}`);
    }

    console.log('Good bye');
}

main([5, 3, 2, 0]);