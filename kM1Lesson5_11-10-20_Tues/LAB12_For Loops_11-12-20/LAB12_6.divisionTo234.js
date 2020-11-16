function main(nums, list) {
    let div2 = 0;
    let div3 = 0;
    let div4 = 0;
    
    for (i = 1; i <= nums; i++) {
        number = list.shift();
        if (number % 2 === 0) {
            div2++;
        }

        if (number % 3 === 0) {
            div3++;
        }

        if (number % 4 === 0) {
            div4++;
        }
    }

    console.log(`${((div2 / 3) * 100).toFixed(2)}%`);
    console.log(`${((div3 / 3) * 100).toFixed(2)}%`);
    console.log(`${((div4 / 3) * 100).toFixed(2)}%`);
            
}

main(3, [3, 6, 9]);
main(3, [4, 6, 3]);