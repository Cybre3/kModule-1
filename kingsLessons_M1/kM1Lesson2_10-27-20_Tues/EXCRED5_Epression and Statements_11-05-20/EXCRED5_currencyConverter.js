function main(num, input, outout) {
    let BGN = 1;
    let USD = 1.79549;
    let EUR = 1.95583;
    let GBP = 2.53405;

    if (input == 'BGN') {
      if (outout == 'USD') {
          console.log(`${(num / BGN * USD).toFixed(2)} USD`);
      } else if (outout == 'EUR') {
            console.log(`${(num / BGN * EUR).toFixed(2)} EUR`);
      } else if (outout == 'GBP') {
            console.log(`${(num / BGN * GBP).toFixed(2)} GBP`);
      } 
    } else if (input == 'USD') {
        if (outout == 'BGN') {
          console.log(`${(num / USD * BGN).toFixed(2)} BGN`);
      } else if (outout == 'EUR') {
            console.log(`${(num / USD * EUR).toFixed(2)} EUR`);
      } else if (outout == 'GBP') {
            console.log(`${(num / USD * GBP).toFixed(2)} GBP`);
      } 
    } else if (input == 'EUR') {
        if (outout == 'BGN') {
          console.log(`${(num / EUR * BGN).toFixed(2)} BGN`);
      } else if (outout == 'EUR') {
            console.log(`${(num / EUR * USD).toFixed(2)} USD`);
      } else if (outout == 'GBP') {
            console.log(`${(num / EUR * GBP).toFixed(2)} GBP`);
      } 
    } else if (input == 'GBP') {
        if (outout == 'BGN') {
          console.log(`${(num / GBP * BGN).toFixed(2)} BGN`);
      } else if (outout == 'EUR') {
            console.log(`${(num / GBP * USD).toFixed(2)} USD`);
      } else if (outout == 'GBP') {
            console.log(`${(num / GBP * EUR).toFixed(2)} EUR`);
      }
    }
}

main(20, 'USD', 'BGN');
main(100, 'BGN', 'EUR');
main(12.35, 'EUR', 'GBP');
main(150.35, 'USD', 'EUR');