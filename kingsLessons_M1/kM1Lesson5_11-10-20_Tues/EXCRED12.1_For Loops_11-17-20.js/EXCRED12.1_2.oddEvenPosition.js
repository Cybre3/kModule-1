function main(nums, listNums) {
  let maxOdd = -Infinity;
  let maxEven = -Infinity;
  let minOdd = Infinity;
  let minEven = Infinity;
  let evenSum = 0;
  let oddSum = 0;
  let number = 0;

  for (let i = 1; i <= nums; i++) {
    number = listNums.shift();
    if (number < minEven && i % 2 === 0) {
      if (number < minEven) {
        minEven = number;
      }
    } else {
      if (number < minOdd) {
        minOdd = number;
      }
    }
    if (number > maxEven && i % 2 === 0) {
      if (number > minEven) {
        maxEven = number;
      }
    } else {
      if (number > maxOdd) {
        maxOdd = number;
      }
    }
    if (i % 2 === 0) {
        evenSum += number;
    } else {
        oddSum += number;
    }
  }

  if (nums === 0) {
    maxOdd = 'No';
    maxEven = 'No';
    minOdd = 'No';
    minEven = 'No';
    oddSum = 0;
    evenSum = 0;
  }

  if ((maxOdd && maxEven && minOdd && maxOdd) !== 'No') {
    maxOdd = maxOdd.toFixed(2);
    maxEven = maxEven.toFixed(2);
    minOdd = minOdd.toFixed(2);
    minEven = minEven.toFixed(2);
    oddSum = oddSum.toFixed(2);
    evenSum = evenSum.toFixed(2);
  } else {
    if (oddSum === 0 || evenSum === 0) {
      oddSum = oddSum.toFixed(2);
      evenSum = evenSum.toFixed(2);
    }
  }
  console.log(`OddSum=${oddSum}`);
  console.log(`OddMin=${minOdd}`);
  console.log(`OddMax=${maxOdd}`);
  console.log(`EvenSum=${evenSum}`);
  console.log(`EvenMin=${minEven}`);
  console.log(`EvenMax=${maxEven}`);
}

main(5, [3, -2, 8, 11, -3]);
main(0);
