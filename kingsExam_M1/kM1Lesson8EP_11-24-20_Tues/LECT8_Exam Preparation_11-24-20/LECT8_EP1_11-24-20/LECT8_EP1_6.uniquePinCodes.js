/*
generates three-digit PIN codes, 
For a PIN to be valid, it must satisfy the following conditions:
● The ​first​ and ​third​ digits must be ​even​.
● The ​second​ digit must be a ​prime​ number in the range ​[2...7]​.

Input
You must read ​3 lines​ from the console:
● The​ upper limit ​of​​the​ first number ​-​​an​ integer ​in​​the​​range​ [1...9]
● The ​upper ​​limit​ of the ​second​​ number​ - an ​integer​ in the range ​[1...9]
● The ​upper​ ​limit​ of the ​third ​​number​ - an ​integer​ in the range ​[1...9]

Output
​all valid three-digit PIN​ codes on the console ​with digits in the appropriate intervals​.
*/

function main(upNum1, upNum2, upNum3) {

    // 1st loop --> for(1st digit) bourdaries (2 - upNum1) step +2
        // 2nd loop for(2nd digit) boundaries (2 - upNum2) step +1
            // if (d2 === 2 || d2 === 3 || d2 === 5 || d2 === 7)
                // 3rd loop for(3rd digit) boundaries (2 - upNum3) +2
                    // print d1, d2, d3
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