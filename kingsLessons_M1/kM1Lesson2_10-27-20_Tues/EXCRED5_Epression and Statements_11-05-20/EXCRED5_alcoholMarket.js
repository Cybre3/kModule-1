/*
The price of the
whiskey in USD per liter as well as the amount of beer, wine, rakia and whiskey he will buy will be read from the
console. Write a program, which calculates the amount of money Peter needs to buy everything.

The price of the rakia is half the price of the whiskey;
The price of the wine is 40% less than the price of the rakia;
The price of the beer is 80% less than the price of the rakia;

1. The price of the whiskey in USD – a real number in the range [0.00 … 10000.00]
2. The amount of beer in liters – a real number in the range [0.00 … 10000.00]
3. The amount of wine in liters – a real number in the range [0.00 … 10000.00]
4. The amount of rakia in liters – a real number in the range [0.00 … 10000.00]
5. The amount of whiskey in liters – a real number in the range [0.00 … 10000.00]

The amount of money, which Peter will need, formatted to two decimal places.
*/

function main(whiskeyPriceUsd, litersOfBeer, litersOfWine, litersOfRakia, litersOfWhiskey) {

    let rakiaPrice = whiskeyPriceUsd / 2;
    let winePrice = rakiaPrice * 0.60;
    let beerPrice = rakiaPrice * 0.20;
    let moneyForWhiskey = litersOfWhiskey * whiskeyPriceUsd;
    let moneyForRakia = rakiaPrice * litersOfRakia;
    let moneyForWine = winePrice * litersOfWine;
    let moneyForBeer = beerPrice * litersOfBeer;

    console.log((moneyForWhiskey + moneyForRakia + moneyForWine + moneyForBeer).toFixed(2));
}

main(50, 10, 3.5, 6.5, 1);
main(63.44, 3.57, 6.35, 8.15, 2.5);