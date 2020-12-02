function main(num1, num2, operator) {
  let result = 0;
  let type = '';

  if (operator !== '%' && operator !== '/') {
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      default:
        break;
    }
    if (result % 2 === 0) {
      type = 'even';
    } else {
      type = 'odd';
    }
    console.log(`${num1} ${operator} ${num2} = ${result} - ${type}`);
  } else {
    if (num2 === 0) {
      console.log(`Cannot divide ${num1} by zero`);
    } else {
      switch (operator) {
        case '%':
          result = num1 % num2;
          console.log(`${num1} ${operator} ${num2} = ${result}`);
          break;
        case '/':
          result = num1 / num2;
          if (result !== parseInt()) {
            console.log(`${num1} ${operator} ${num2} = ${result.toFixed(2)}`);
          } else {
            console.log(`${num1} ${operator} ${num2} = ${result}`);
          }          
          break;
        default:
          break;
      }      
    }
  }
}

main(10, 12, '+');
main(10, 1, '-');
main(7, 3, '*');
main(123, 13, '/');
main(10, 3, '%');
main(112, 0, '/');
main(10, 0, '%');
