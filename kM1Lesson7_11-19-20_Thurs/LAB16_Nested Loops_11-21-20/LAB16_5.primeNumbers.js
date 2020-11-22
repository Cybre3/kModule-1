function main(startNum, endNum) {


    for (let num = startNum; num <= endNum; num++) {
        let prime = true;
        for(let i = 2; i <= num; i++) {
            if (num % i === 0 && num !== i) {
                prime = false;
                break;
            }
        }

        if (prime) {
            console.log(num);
        }
    }
}

main(5, 50);