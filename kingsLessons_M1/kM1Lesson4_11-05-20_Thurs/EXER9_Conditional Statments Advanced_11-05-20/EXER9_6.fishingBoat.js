function main(groupBudget, season, numFisherman) {

    let rent = 0;

    switch (season) {

        case 'Spring':
            rent = 3000;
            break;
        case 'Summer':
            rent = 4200;
            break;
        case 'Autumn':
            rent = 4200;
            break;
        case 'Winter':
            rent = 2600;
            break;            
    }

    let discount = 0;
    
    if (numFisherman <= 6) {
        discount = 0.10;
    } else if (numFisherman >= 7 && numFisherman <= 11) {
        discount = 0.15;
    } else if (numFisherman >= 12) {
        discount = 0.25;
    }

    let plusAdditional = 0;

    if (numFisherman % 2 === 0 && season !== 'Autumn') {
        plusAdditional = 0.05;
    }      

    let newDiscountPrice = rent - (rent * discount);
    let addiationalDiscountPrice = newDiscountPrice - (newDiscountPrice * plusAdditional);
    let moneyLeft = Math.abs(groupBudget - addiationalDiscountPrice);
        
    if (newDiscountPrice > groupBudget) {
        console.log(`Not enough money! You need ${moneyLeft.toFixed(2)} leva.`);
    } else {
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
    }   
}


main(7881, 'Winter', 6);
