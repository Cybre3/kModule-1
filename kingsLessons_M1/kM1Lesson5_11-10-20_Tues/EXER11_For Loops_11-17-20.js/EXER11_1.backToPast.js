function main(legacyMoney, year) {
    let age = 18;
    let money = legacyMoney;

    for(let i = 1800; i <= year; i++) {

        if (i % 2 === 0) {
            money = money - 12000;
            age++;
        } else {
            money = money - (12000 + 50 * age);
            age++;
        }
    }
    let moneyLeft = money;
    let moneyNeeded = Math.abs(money);

    if (money > 0) {
        console.log(`Yes! He will live a carefree life and will have ${moneyLeft.toFixed(2)} dollars left.`);
    } else {
        console.log(`He will need ${moneyNeeded.toFixed(2)} dollars to survive.`);
    }   
}

main(50000, 1802);
main(400000, 1841);