function main(height) {

    let row = 1;
    while(row <= height) {
        let result = '';

        let col = 1;
        while (col <= row) {
            result += '*';
            col++;
        }
        console.log(result);
        row++;
    }
}

main(5);
main(7);