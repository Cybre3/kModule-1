function main(n) {
 let result = '';
 let num = 1;

    for (let i = 0; i <= n; i += 2) {
        if (i !== 0) {
            result += ', ';
        }
        result += num;
        num *= 2 * 2;        
    }
    console.log(result);
}

main(10);
main(7);