function main(numOfBillStatement, listEBillAmt) {
    let electric = 0;
    let water = 20;
    let internet = 15;  

    for (let i = 1; i <= numOfBillStatement; i++) {
        let eBillAmt = listEBillAmt.shift();
        electric += eBillAmt;    
    }
        water *= numOfBillStatement;
        internet *= numOfBillStatement;    
        let all = electric + water + internet;
        let other = all + (all * 0.20);        
    let average = (electric + water + internet + other) / numOfBillStatement;

    console.log(`Electricity: ${electric.toFixed(2)} $`);
    console.log(`Water: ${water.toFixed(2)} $`);
    console.log(`Internet: ${internet.toFixed(2)} $`);
    console.log(`Other: ${other.toFixed(2)} $`);
    console.log(`Average: ${average.toFixed(2)} $`);
}

main(6, [230.05,185.77,967.98,940.73,691.05,295.73]);