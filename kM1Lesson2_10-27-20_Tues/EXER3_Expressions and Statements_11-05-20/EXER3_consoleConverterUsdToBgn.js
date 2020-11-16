function main(usdToBgn){
    let bgn = usdToBgn * 1.79549;

    console.log(bgn.toFixed(2) + ' BGN');
}

main(20);
main(100);
main(12.5);