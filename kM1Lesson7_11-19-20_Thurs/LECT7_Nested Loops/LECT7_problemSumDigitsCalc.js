function main(nums) {
    let num = nums.shift();

    while(num !== 'End' && num !== undefined) {
        let sum = 0;
        for(let i = num; i > 0; i = Math.trunc(i / 10)) {
            sum += i % 10;
        }
        console.log(`sum of digits = ${sum}`);
        num = nums.shift();
    }
    console.log('Goodbye');
    
}

main([157, 99, 5, 438, 'End']);