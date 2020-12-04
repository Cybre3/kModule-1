/*
calculate amount to be paid for event. 
entrance fee for every person. 
umbrella for two people. 
75% of team wants sunbeds.
In the calculation of the number of umbrellas and sunbeds, 
their number should be rounded up to the nearest integer number.

Input
    4 numbers:
        1. number of people. Integer in the interval [1... 100]
        2. entrance fee. Real number in the interval [0.00... 50.00]
        3. price for sunbed. Real number in the interval [0.00... 50.00]
        4. price for umbrella. Real number in the interval [0.00... 50.00]
        
Output
    String - "{total price} dollars."
    
format to second digit after decimal point
*/


function main(numPpl, enterFee, sunbedPrice, umbrellaPrice) {

    let totalEntFee = 0;
    let totalSunPrice = 0;
    let totalUmbrelPrice = 0;

    totalEntFee = numPpl * enterFee;
    totalSunPrice = Math.ceil(numPpl * 0.75) * sunbedPrice;
    totalUmbrelPrice = Math.ceil(numPpl * 0.50) * umbrellaPrice;

    let finalPrice = 0;

    finalPrice = totalEntFee + totalSunPrice + totalUmbrelPrice;

    console.log(`${finalPrice.toFixed(2)} dollars.`);

}

main(21, 5.50, 4.40, 6.20);
// 254.10 dollars.

// 21 people at $5.50 total entrance fee is $115.50
// 75% of 21 people are 16 and therefore need 16 sunbeds, 
// which are priced at $4.40 -> 16 * 4.40 = $70. 40
// 50% of 21 people are 11 and therefore need 11 umbrellas, 
// which are priced at $6.20 -> 11 * 6.20 = $68.20
// The final price is: 115.50 + 70.40 + 68.20 = $254.10

main(50, 6, 8, 4);
// 704.00 dollars

main(100, 8, 6, 4);
// 1450.00 dollars