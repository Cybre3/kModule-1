function main(startLetter, endLetter, xLetter) {
    let counter = 0;
    let startL = startLetter.charCodeAt(0);
    let endL = endLetter.charCodeAt(0);
    let x = xLetter.charCodeAt(0);
    for (let l1 = startL; l1 <=  endL; l1++) {
        for (let l2 = startL; l2 <= endL; l2++) {
            for (l3 = startL; l3 <= endL; l3++) {
                if (l1 !== x && l2 !== x && l3 !== x) {
                    let output = 
                        String.fromCharCode(l1) + 
                        String.fromCharCode(l2) + 
                        String.fromCharCode(l3);
                    console.log(output);
                    counter++;
                }                    
            }
        }
    }
    console.log(counter);
}

main('a', 'c', 'b');