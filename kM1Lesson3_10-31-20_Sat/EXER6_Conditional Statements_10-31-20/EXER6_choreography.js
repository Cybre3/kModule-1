function main(steps, dancers, days) {

    // percent of steps per day
    let psd = (steps / days) / steps;
    // percent of steps per dancer
    let roundPsd = Math.ceil(psd * 100);
    let psdn = roundPsd / dancers;
    
    if (psd >= 0.13) {
        console.log(`No, they will not succeed in that goal! Required ${(psdn.toFixed(2))}% steps to be learned per day.`);
    } else {
        console.log(`Yes, they will succeed in that goal! ${(psdn.toFixed(2))}%.`);
    }
}

main(10464, 20, 20);
main(55555, 30, 7);
main(10000, 60, 15);

//  else {
//      console.log('Yes, they will succees in that goal! percent # of steps')
//  }
// if ( > 13) {
//   console.log('No, they will not sucees in that goal! Required (percent of steps per dancer) steps to be learned per day.')