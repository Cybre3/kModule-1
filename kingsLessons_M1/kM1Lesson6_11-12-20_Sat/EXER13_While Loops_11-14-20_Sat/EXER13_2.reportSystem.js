function main(moneyToCollect, listPriceItems) {
  let itemPrice = listPriceItems.shift();
  let item = 1;
  let paymentType = '';
  let status = '';
  let total = 0;
  let priceMet = false;
  let cashPay = 0;
  let creditPay = 0;
  let cashTotal = 0;
  let creditTotal = 0;

  while (itemPrice !== 'End' && itemPrice !== undefined) {
    if (item % 2 === 1) {
      paymentType = 'cash';      
    } else {
      paymentType = 'credit';      
    }

    if (paymentType === 'cash' && itemPrice > 100) {
      status = 'Error in transaction!';
    } else if (paymentType === 'credit' && itemPrice < 10) {
      status = 'Error in transaction!';
    } else {
      status = 'Product sold!';
      total += itemPrice;
      if (item % 2 === 1) {
        cashPay += 1;
        cashTotal += itemPrice;
      } else {
        creditPay += 1;
        creditTotal += itemPrice;
      }
    }

    console.log(`${status}`);

    if (total >= moneyToCollect) {
      priceMet = true;
    }

    itemPrice = listPriceItems.shift();
    item++;
  }

  let avgPayCash = cashTotal / cashPay; 
  let avgCPayPerPerson = creditTotal / creditPay;

  if (priceMet === true) {
    console.log(`Average CS: ${avgPayCash.toFixed(2)}`);
    console.log(`Average CC: ${avgCPayPerPerson.toFixed(2)}`);
  } else {
    console.log(`Failed to collect required money for charity.`);
  }
}

main(7430,[45,413,111,88,455,452]);
