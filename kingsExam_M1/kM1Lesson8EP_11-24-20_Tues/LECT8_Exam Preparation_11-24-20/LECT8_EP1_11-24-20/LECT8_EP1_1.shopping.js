/*
​He wants to spend 5 minutes to get a white frappe​, 
​3 times by 2 minutes​ to buy ​computer hardware​ -- 6 min total for PC parts
2 times by 2 minutes​ to buy ​software -- 4 min for software

Calculates How Much time He Spent During His Break 
and How Much Time He Had to Relax after Shopping Online 
and Buying a White Frappe.

Input
•   First line ​rest time​ 
        - an ​integer​ in the range ​[20 ... 40]
•   Second line ​order price per hardware part​ 
        - ​real number​ in the interval ​[2.00 ... 69.00]
•   On a third line ​order price per software​ 
        - ​real​​number​ in the range ​[3.00 ... 100.00]
•   Fourth line ​price for white frappe​ 
        - ​real number​ in the range ​[0.50 ... 7.00]

Output
•   Total spent money during the break 
        - formatted to the second decimal
•   ​The remaining time for relaxation
*/

function main(restTime, ppHardWare, ppSoftware, frapPrice) {
    // need a final time variable 
    // or use restTime variable to track time left
    // let finalTime = restTime; || restTime

    // subtract time spent with Hardware (6min) - restTime -= 6
    // subtract time spent with software (4min) - restTime -= 4
    // subtract time for frappe (5min)          - restTime -= 5

    // give us the remaining time for his break

    // declare variables for final price of harware 
        // let finalHardPrice = 0;
            // Calculate the fianl price for Hardware
            // finalHardPrice = 3 * ppHardWare;
    // declare variables for final price of software
         // let finalSoftPrice = 0;
            // Calculate the fianl price for Software
            // finalSoftPrice = 3 * ppSoftware;

    // Calculate total - let total = finalHardPrice + finalSoftPrice + frapPrice;

    // print the final price .toFixed(2) - console.log(total.toFixed(2));
    // print the remaining time for the break - console.log(restTime);
}

main(20, 2, 4, 3);

// 17.00
// 5

// Peter has a ​20 minute break​ in which he spends ​5​​minutes​ buying awhite frappe: ​20 - 5 = 15​​min​.
// The rest of the time spends ​3 times 2 minutes​ to buy hardware: 3 * 2 = 6 min​.
// And ​2 times by 2 minutes​ to buy programs: ​2 * 2 = 4 min​.
// Relaxation time: ​15 - (6 + 4) = 5​​min​.
// Spent money for hardware: ​3 * 2 = 6
// Spent money for software: ​2 * 4 = 8
// otal​​money​​spent​: ​8 + 6 + 3 = 17.00

