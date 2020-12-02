// every third load washes pots
// plates need 5ml
// pots need 15ml

function main(numDetergentBtl, listDishes) {
    let detergent = numDetergentBtl * 750;
    let dish = listDishes.shift();
    let plates = 0;
    let pots = 0;
    let load = 1;

        while (dish !== 'End') {
            if (load % 3 === 0) {
                pots += dish;
                detergent -= dish * 15;
            } else {
                plates += dish;
                detergent -= dish * 5;
            }
            dish = listDishes.shift();
            load++;
        }

        if (detergent >= 0) {
            console.log(`Detergent was enough!`);
            console.log(`${plates} dishes and ${pots} pots were washed.`);
            console.log(`Leftover detergent ${detergent} ml`);
        } else {
            console.log(`Not enough detergent, ${Math.abs(detergent)} ml more necessary`);
        }
}

main(2, [53, 65, 55, 'End']);