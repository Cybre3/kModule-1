function main(flowerType, numFlowers, budget) {
   
    let pricePerPiece = 0;
    let discount = 0;
    let totalCost = 0;
    
    switch (flowerType) {
        
        case 'Roses':
            pricePerPiece = 5;            
            if (numFlowers >= 80) {
                discount = 0.1;
            } 
            break;
        case 'Dahlias':
            pricePerPiece = 3.80;
            if (numFlowers >= 90) {
                discount = 0.15;
            }
            break;
        case 'Tulips':
            pricePerPiece = 2.80;
            if (numFlowers >= 80) {
                discount = 0.15;
            }
            break;
        case 'Narcissus':
            pricePerPiece = 3;
            if (numFlowers <= 120) {
               pricePerPiece += (pricePerPiece * 0.15);
            }
            break;
        case 'Gladiolus':
            pricePerPiece = 2.50;
            if (numFlowers >= 120) {
                pricePerPiece += (pricePerPiece * 0.2);
            }
            break;
    }

    totalCost = pricePerPiece * numFlowers;
    discount = totalCost * discount;
    totalCost -= discount; 
    moneyLeftOver = Math.abs(budget - totalCost);
        
    if (totalCost > budget) {
        console.log(`Not enough money, you need ${moneyLeftOver.toFixed(2)} leva more.`);
    } else {
        console.log(`Hey, you have a great garden with ${numFlowers} ${flowerType} and ${moneyLeftOver.toFixed(2)} leva left.`);
    }   
}

main('Roses', 55, 250);
main('Tulips', 88, 260);
main('Narcissus', 119, 360);