/* 
Cake - $45
Waffle - $5.80
Pancake – $3.20

Initially we will read from the console the number of days of the campaign and the number of bakers, which will
take part. Afterwards, on separate lines we will read the amount of cakes, waffles and pancakes, made by one
baker per day

1/8 of the final amount of money will be used to cover the costs of the products used during the campaign.
Write a program, which calculates the total amount raised for charity.

1. Number of days of the campaign – an integer in the range [0 … 365]
2. Number of bakers – an integer in the range [0 … 1000]
3. Number of cakes – an integer in the range [0… 2000]
4. Number of waffles – an integer in the range [0 … 2000]
5. Number of pancakes – an integer in the range [0 … 2000]
*/

function main(days, bakers, numCakes, numWaffles, numPancakes) {

    let cakePrice = 45;
    let wafflePrice = 5.80;
    let pacakePrice = 3.20;
    let cMoneyForDay = cakePrice * numCakes;
    let wMoneyForDay = wafflePrice * numWaffles;
    let pMoneyForDay = pacakePrice * numPancakes;
    let allMoneyRaised = bakers * (cMoneyForDay + wMoneyForDay + pMoneyForDay) * days;
    let moneyToProducts = allMoneyRaised / 8;
    let moneyToCharity = allMoneyRaised - moneyToProducts;

    console.log(moneyToCharity.toFixed(2));
}

main(20, 8, 14, 30, 16);
main(131, 5, 9, 33, 46);