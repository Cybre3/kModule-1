function main(listNums) {
    let num = listNums.shift();

    while (num % 2 === 0) {
        num = listNums.shift();
    }
    console.log(num);

}

main([2, 4, 8, 3]);
main([5]);