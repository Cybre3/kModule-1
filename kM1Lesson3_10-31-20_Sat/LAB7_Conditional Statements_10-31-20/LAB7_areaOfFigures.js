function main(shape, size) {
    let sArea = size * size;
    let cArea = 3.14159 * size * size;

    if (shape === 'square') {
        console.log(sArea.toFixed(2));
    } else if (shape === 'circle') {
        console.log(cArea.toFixed(2));
    }
}

main('square', 5);
main('circle', 3);