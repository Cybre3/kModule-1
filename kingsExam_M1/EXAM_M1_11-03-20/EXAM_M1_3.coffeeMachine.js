/*
calculate the price a customer has to pay for drinks.

            Without sugar   Normal  Extra sugar
Espresso        $0.90        $1         $1.20
Cappuccino      $1.00       $1.20       $1.60
Tea             $0.50       $0.60       $0.70

discounts:
    • drink without sugar,
        35% discount.
    • "Espresso" selected, 
        if number of drinks > 5, 
            25% discount.
    • if final price exceeds $15, 
        20% discount from final price.
        
The discounts are applied in the order of their description.

Input
    3 arguments:
        • First-drink-string: 
            "Espresso","Cappuccino" or "Tea"
        •Second-sugar-string:
            "Without", "Normal" or "Extra"
        •Third - count drinks - a whole number in the range [1... 50]
        
Output
    One string:
        "You bought {count drinks} cups of {drink} for {total price} dollars."
        
price formatted to second digit after decimal point.
*/

function main(drink, amountSugar, numDrinks) {

    let drinkUP = drink.toUpperCase();
    let amountSugarUP = amountSugar.toUpperCase();
    let drinkPrice = 0;

    switch(drinkUP) {
        case 'ESPRESSO':
            switch(amountSugarUP) {                
                case 'WITHOUT':
                    drinkPrice = 0.90;
                    break;
                case 'NORMAL':
                    drinkPrice = 1.00;
                    break;
                case 'EXTRA':
                    drinkPrice = 1.20;
                    break;                
            }
        break;

        case 'CAPPUCCINO':
            switch(amountSugarUP) {                
                case 'WITHOUT':
                    drinkPrice = 1.00;
                    break;
                case 'NORMAL':
                    drinkPrice = 1.20;
                    break;
                case 'EXTRA':
                    drinkPrice = 1.60;
                    break;                
            }
        break;

        case 'TEA':
            switch(amountSugarUP) {                
                case 'WITHOUT':
                    drinkPrice = 0.50;
                    break;
                case 'NORMAL':
                    drinkPrice = 0.60;
                    break;
                case 'EXTRA':
                    drinkPrice = 0.70;
                    break;                
            }
        break;
    }
    
    if (amountSugarUP === 'WITHOUT') {
        drinkPrice -= drinkPrice * 0.35; // from drink
    }
    if (drinkUP === 'ESPRESSO' && numDrinks > 5) {
        drinkPrice -= drinkPrice * 0.25; // from drink
    }
    
    let finalPrice = drinkPrice * numDrinks;
    
    if (finalPrice > 15) {
        finalPrice -= finalPrice * 0.20; // from final price
    }

    console.log(`You bought ${numDrinks} cups of ${drink} for ${finalPrice.toFixed(2)} dollars.`);
}

main('Espresso', 'Without', 10);
// You bought 10 cups of Espresso for 4.39 dollars.

// Selected are 10 cups of espresso without sugar 0.90 each -> $9
// 35% discount for a sugar free drink of $9 -> 3.15 -> 9 –3.15 = 5.85
// 25% discount on the purchase of at least 5 cups of espresso. 
// 25% of 5.85 -> 1.4625 
// 5.85 –1.4625 -> 4.3875

main('Cappuccino', 'Normal', 13);
// You bought 13 cups of Cappuccino for 12.48 dollars.

// Selected are 13 cups of cappuccino with normal sugar $1.20 each -> $15.60
// 15.60 >= 15.00 -> 20% discount of 15.60 is 3.12
// 15.60 –3.12 = $12.48

main('Tea', 'Extra', 3);
// You bought 3 cups of Tea for 2.10 dollars.

// Selected are 3 cups of tea with extra sugar $0.70 each -> $2.10
// There are no discounts, the total price is $2.10

main('Espresso', 'Normal', 20);
// You bought 20 cups of Espresso for 15.00 dollars.