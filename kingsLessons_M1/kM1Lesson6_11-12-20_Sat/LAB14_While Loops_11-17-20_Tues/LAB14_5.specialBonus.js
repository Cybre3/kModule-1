function main(stopNum, listNums) {
    let previousNum = listNums.shift();
    let result = 0;

    while (previousNum !== stopNum) {
        let currentNum = listNums.shift();
        
        if(currentNum === stopNum) {
            result = previousNum + previousNum * 0.20;
            break;
        }
        previousNum = currentNum;
        
    }
    console.log(result);

}

main(25, [20, 30, 25]);