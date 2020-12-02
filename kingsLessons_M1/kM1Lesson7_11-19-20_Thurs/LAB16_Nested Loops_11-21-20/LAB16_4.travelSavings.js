function main(input) {
    let dest = input.shift();
    
    while (dest !== 'End' && dest !== undefined) {
        let needMoney = Number(input.shift());
        let sum = 0;
        while(sum < needMoney) {
            sum += Number(input.shift());
            console.log(`Collected: ${sum}`);
        }
        console.log(`Going to ${dest}`);
        dest = input.shift();
    }
}

main(['Bali', 3500, 800, 1800, 1000, 'Brazil', 4600, 5000, 'End']);