/*
calculates the ​average rating and possible sales for a certain number of computers​. 
Then, one number is entered consecutively for each computer:
● The ​last​​ digit​ of this number represents the rating. It will be in the range ​[2...6]​.
● The ​remaining ​​figures​ represent ​possible ​​sales​.

The computer sale is scaled based on a rating:
● Rating 2​ takes ​0%​ of possible sales.
● Rating 3​ takes ​50%​ of possible sales.
● Rating 4​ takes ​70%​ of possible sales.
● Rating 5​ takes ​85%​ of possible sales.
● Rating 6​ takes ​100%​ of possible sales.

Input
first line:
● n​ - Number of computers - integer in the range [1...10]
next (n) lines​:
● The number representing sales and rating - an integer in the range [32...306]

Output
​2 lines​:
● The number of ​sales​ made
● The ​average​​arithmetic​​rating​ for all computers 

Sales​ and ​rating​ must be formatted to ​second​​digit​ after the decimal point.
*/

function main(numPCs, pcSalesRatings) {
  let totalRatings = 0;
  let totalSales = 0;
  let numRatings = 0;
  let ratingsAverage = 0;

  // need variable calc total ratings
  // let total ratings = 0;
  // need variable for sales
  // let total sales = 0;
  // need variable for number of ratings
  // let number of ratings = 0;
  // need variable for average ratings
  // let average ratings = rating / number of ratings;

  // for loop (star from 1 --> initaial value; stope when (i) reach all computers (numPCs); step inc 1)
  for (let i = 1; i <= numPCs; i++) {
    let CSR = pcSalesRatings.shift();
    let rating = CSR % 10;
    totalRatings += rating;
    numRatings++;
    let computerSale = Math.floor(CSR / 10);
    if (rating === 6) {
      totalSales += computerSale * 1;
    } else if (rating === 5) {
      totalSales += computerSale * 0.85;
    } else if (rating === 4) {
      totalSales += computerSale * 0.7;
    } else if (rating === 3) {
      totalSales += computerSale * 0.5;
    } else if (rating === 2) {
      totalSales += computerSale * 0;
    }
  }

  console.log(totalSales.toFixed(2));
  ratingsAverage = totalRatings / numRatings;
  console.log(ratingsAverage.toFixed(2));
  // inside the for loop code block

  // need to go through each computer
  // let salesRatings = pcSalesRatings.shift();    e.g. 103 --> 103/10 = 10.3
  // rating += salesRatings % 10;
  // totalRating =+ rating;
  // need to keep track of count of pc/ratings
  // need variable to isolate sales
  // let pcSales = Math.trunc(salesRatings/10)
  // totalSales += rating

  // if(rating === 2)
  // totalSales += pcSales * 0;
  // else if(rating === 3)
  // totalSales += pcSales * 50%;
  // else if(rating === 4)
  // totalSales += pcSales * 70%;
  // else if(rating === 5)
  // totalSales += pcSales * 85%;
  // else if(rating === 6)
  // totalSales += pcSales * 100%;

  // outside of loop - calc avg and print
  // print totalSales.toFixed(2)
  // calc average rating
  // rating average = ratings / number of ratings
  //
}

main(3, [103, 103, 103]);
// 15.00
// 3.00

// We have a ​total​ of ​3 computers​.
// For ​each​ of them the student has received accordingly:​
// 103 - last digit 3 ​​ rating 3​​
// 103 without the last digit ​​ possible sales 10.
// But because the ​rating​ is ​3, 50%​ of the sales are made
// ​​3 rating * (50% out of 10 possible sales) = 15 sales​.
// The ​average​​rating​ of the computers is ​3.00​

main(5, [122, 156, 202, 214, 185]);
// 45.00
// 3.80
