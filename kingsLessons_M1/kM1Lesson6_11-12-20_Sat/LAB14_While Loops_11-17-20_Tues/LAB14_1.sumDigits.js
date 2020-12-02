function main(num) {
    let sum = 0;
    num = Math.abs(num);

    while (num !== 0) {
        sum += num % 10;
        
        num = Math.floor(num / 10);
    }
    console.log(sum);
}

main(5634); 
main(150); 
main(-532);

/*
    5634 % 10 => 4
    5634 / 10 => Math.floor(563.4) => 563
    563 % 10 => 3
    563 / 10 => 56
    56 % 10 => 6
    56 / 10 => 5
    5 % 10 => 0
    5 / 10 => 0
*/