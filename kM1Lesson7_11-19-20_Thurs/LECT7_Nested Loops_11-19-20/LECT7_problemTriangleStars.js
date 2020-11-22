function main(size){
    

    for (let r = 1; r <= size; r++) {
        let result = '';
        for (let c = 1; c <= r; c++) {
            result += '*';
        }
        console.log(result);
    }
}

main(5);
main(7);