function main(n) {
  let result = '';

  for (let i = 1; i <= n; i += 3) {
    if (i !== 1) {
      result += ', ';
    }
    result += i;
  }
  console.log(result);
}

main(10);
main(7);
main(14);
