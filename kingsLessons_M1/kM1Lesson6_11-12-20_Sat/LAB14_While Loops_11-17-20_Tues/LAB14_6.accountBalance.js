function main(incmExpns) {
  let balance = 0;
  let transaction = incmExpns.shift();

  while (transaction !== 'End' && transaction !== undefined) {
    balance += transaction;
    if (transaction >= 0) {
      console.log(`Increase: ${transaction.toFixed(2)}`);
    } else {
      console.log(`Decrease: ${Math.abs(transaction).toFixed(2)}`);
    }
    transaction = incmExpns.shift();
  }
  console.log(`Balance: ${balance.toFixed(2)}`);
}

main([500, 15.5, -80.35, 'End']);
