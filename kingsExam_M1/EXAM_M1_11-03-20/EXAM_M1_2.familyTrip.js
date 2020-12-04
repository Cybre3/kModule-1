/*
the price per night 
percent of the budget provided for additional costs.
If number of nights booked > 7, 
    price per night is reduced by 5%.

is budget enough for trip. 

Input
    4 arguments:
        • The budget they have –a real number in the range [1.00 ... 10000.00]
        • Count of nights –whole number in the range [0 ... 1000]
        • Price per night –real number in the range [1.00 ... 500.00]
        • Additional cost percentage –integer in the range [0 ... 100]
        
Output
    One string depends on result:
        •If budget is enough:
            print "The Smiths willbe left with {money left after the trip} dollars after vacation."
        • If budget is NOT enough:
            print "{money needed} dollars needed."
            
sum formatted to second digit after decimal point.

*/

function main(budget, numNights, pricePerNight, addCostPct) {
    let discount = 0;
    let tripCost = 0;
    let addCostBudget = budget * (addCostPct / 100);

    if (numNights > 7) {
        discount = pricePerNight * 0.05;
    }

    tripCost = (pricePerNight - discount) * numNights + addCostBudget;
    let moneyLeft = budget - tripCost;

    if (tripCost > budget) {
        console.log(`${Math.abs(moneyLeft).toFixed(2)} dollars needed.`);
    } else {
        console.log(`The Smiths will be left with ${moneyLeft.toFixed(2)} dollars after vacation.`);
    }
}

main(800.50, 8, 100, 2);
// The Smiths will be left with 24.49 dollars after vacation.

// 8 Nights > 7, therefore there is a 5% discount on the price per night, 
// which is $100 5% from 100 is 5. -> 100 –5-> $95 per night after the discount, 
// 8 overnights $95 -> $760
// 2% of the budget is provided for additional costs. 
// 2% from 800.50 is $16.01
// 760 + 16.01 = 776.01 < = 800.50, therefore the budget is enough 
// and after the trip they will return with 800.50 –776.01 = $24.49

main(500, 7, 66, 15);
// 37.00 dollars needed.

// 7 nights, no discount
// 7 nights on 66 -> $462
// 15% of the budget is earmarked for additional costs. 
// 15% from 500 is $75
// 462 + 75 = 537 > 500, therefore the budget is not enough.
// They need 537 –500 = $37 more.