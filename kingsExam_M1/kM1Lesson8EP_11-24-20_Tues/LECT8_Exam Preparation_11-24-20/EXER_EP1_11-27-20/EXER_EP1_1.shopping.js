function main(restTime, ppHardWare, ppSoftware, frapPrice){
    let finalTime = restTime;
    let frapTime = 5;

    finalTime -= 6;
    finalTime -= 4;
    finalTime -= 5;
    
    let finalHardPrice = 0;
    finalHardPrice = 3 * ppHardWare;
    let finalSoftPrice = 0;
    finalSoftPrice = 2 * ppSoftware;

    let total = finalSoftPrice + finalHardPrice + frapPrice;
    console.log(total.toFixed(2));
    console.log(finalTime);
}

main(20, 2, 4, 3);