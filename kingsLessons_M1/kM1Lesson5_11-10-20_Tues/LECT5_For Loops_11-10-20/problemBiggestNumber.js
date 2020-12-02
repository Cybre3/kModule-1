// function main(n, numbers) {

//     let currentNumber = numbers.shift();

//     console.log(Math.max(numbers.shift()));

    
// }

// main(3, [40, 90, 50]);
// main(3, [-20, 60, 30]);

function main2(n, numbers){
    let biggestNumber = -Infinity;
    
    for (let i = 0; i < n; i++) {
        let currentNumber = numbers.shift();
        if(currentNumber > biggestNumber){
            biggestNumber = currentNumber;
        }
    }

    console.log(biggestNumber);

}

main2(3, [40,50,90]);