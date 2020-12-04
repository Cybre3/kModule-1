/*
generates three-digit PIN codes, 
For a PIN to be valid, it must satisfy the following conditions:
● The ​first​ and ​third​ digits must be ​even​.
● The ​second​ digit must be a ​prime​ number in the range ​[2...7]​.

Input
You must read ​3 lines​ from the console:
● first number ​-​​an​ integer ​in​​the​​range​ [1...9]
● second​​ number​ - an ​integer​ in the range ​[1...9]
● third ​​number​ - an ​integer​ in the range ​[1...9]

Output
​all valid three-digit PIN​ codes on the console ​with digits in the appropriate intervals​.
*/

function main(upNum1, upNum2, upNum3) {

    // 1st loop --> for(1st digit) bourdaries (2 - upNum1) step +2
    for(let i = 2; i <= upNum1; i += 2) {
        // 2nd loop for(2nd digit) boundaries (2 - upNum2) step +1
        for(let j = 2; j <= upNum2; j++) {
            if (j === 2 || j === 3 || j === 5 || j === 7) {
                // 3rd loop for(3rd digit) boundaries (2 - upNum3) +2
                for(let k = 2; k <= upNum3; k += 2) {
                    // print d1, d2, d3
                    console.log(`${i} ${j} ${k}`);
                // console.log(""+ i + j + k); --> easy way to convert to string;
                }
            }
        }
    }
}

main(3, 5, 5);

// The first number is ​3​, corresponding to the maximum value of the ​first digit​.
// The second number is ​5​, corresponding to the maximum value of the ​second digit​.
// The third number is ​5​, corresponding to the maximum value of the ​third digit​.
// In all three-digit PIN codes we received our ​first digit​ is ​2​ because this is ​the only possible even number.
// Another ​rule​ applies to the ​second digit​. 
// We have to select ​all the possible prime numbers​ inthe range from ​2 to 7​. 
// In our case, these numbers are as follows​ 2​, ​2​, ​3​, ​3​, ​5​, ​5​.
// The ​even number rule​ applies to the ​third digit ​as well , 
// and if we have a look at that digit, 
// we will get that the possible numbers are: ​2​, ​4​, ​2​, ​4​, ​2​, ​4.

main(8, 2, 8);