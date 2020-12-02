function main(nums) {
    let sum = 0;
    while(true) {
        let nextNum = nums.shift();
        if (nextNum == undefined) {
            break;
        }
        sum += nextNum;
        console.log('sum:', sum);
    }

}

main([10, 20, 30]);