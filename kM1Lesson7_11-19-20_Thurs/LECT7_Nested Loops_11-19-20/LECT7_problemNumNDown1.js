function main(n) {
  let outputString = '';

  for (let i = n; i > 0; i--) {
    if (i !== n) {
      outputString += ', ';
    }
    outputString += i;
  }
  console.log(outputString);
}

main(100);
main(10);
