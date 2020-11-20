let n = 3; // number of col and rows

// Outer Loop
for (let row = 1; row <= n; row++) {
    let result = '';

    // inner loop
    for (let col = 1; col <= n; col++) {
        result += ' *';
    }
    console.log(result);
}