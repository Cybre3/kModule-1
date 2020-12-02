function main(listNums) {
    let num = listNums.shift();
    let max = -Infinity;
    let min = Infinity;

    while (num !== 'END') {
        if (num > max) {
            max = num;
        } 
        if (num < min) {
            min = num;
        }
        num = listNums.shift();
    }
    console.log(`Min number: ${min}`);
    console.log(`Max number: ${max}`);
}

main([10, 20, 304, 0, 50, 'END']);