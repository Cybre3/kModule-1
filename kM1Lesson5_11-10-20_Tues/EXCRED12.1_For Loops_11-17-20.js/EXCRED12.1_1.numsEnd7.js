function main() {
  let outputString = '';

  for (let i = 7; i <= 1000; i += 10) {
    outputString += i + ' ';
  }
  console.log(outputString);
}

main();

// console.log([...new Array(1000).keys()].filter((elem) => elem % 10 === 7).join(' ')); 
// This works too...