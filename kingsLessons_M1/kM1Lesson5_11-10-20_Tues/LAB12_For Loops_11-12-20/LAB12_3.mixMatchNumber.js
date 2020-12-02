function main(num, list) {

    let biggestNumber = -Infinity;
    let smallestNumber = Infinity;

    for (let i = 1; i <= num; i++) {
        let currentNumber = list.shift();
        if (currentNumber > biggestNumber) {
            biggestNumber = currentNumber;
        } 

        if (currentNumber < smallestNumber) {
            smallestNumber = currentNumber;            
        } 
    }

    console.log(`Min number: ${smallestNumber}`);
    console.log(`Max number: ${biggestNumber}`);
       
}

main(3, [10, 350, 50]);