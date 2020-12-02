function main(distance, litPer100km, gasPpLiter, moneyWon){

 let litersNeeded= distance * litPer100km / 100;
 let totalCost = litersNeeded * gasPpLiter;

 if(moneyWon >= totalCost) {
     let leftOver = moneyWon - totalCost;
     console.log(`You can go home. ${leftOver.toFixed(2)} money left`);
 } else {
    let split = moneyWon / 5;
    console.log(`Sorry, you cannot go home. Each will receive ${split.toFixed(2)} money.`);
 }
}

main(100, 5, 1.2, 6);

main(120, 5, 1.2, 4);