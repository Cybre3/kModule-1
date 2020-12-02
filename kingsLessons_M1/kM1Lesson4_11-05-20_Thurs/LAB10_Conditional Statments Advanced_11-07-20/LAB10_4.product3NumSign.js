/* 
Calculate the sign of the product of 3 numbers:
• Function should receive 3 floating-point numbers
• Print the sign of the product of the entered 3 numbers: positive, negative or zero
• Try to do this without multiplying the 3 numbers

n1, n2, n3

check if any is zero => console.log zero
n1 is -ve   counter = 1
*/

function main(num1, num2, num3) {
    let negativeNumsCount = 0;

    if (num1 === 0 || num2 === 0 || num3 === 0) {
        console.log('Zero');
    } else {
        if (num1 < 0) {
            negativeNumsCount++;
        }
        if (num2 < 0){
            negativeNumsCount++;
        }
        if (num3 < 0) {
            negativeNumsCount++;
        }
    } 

    if (negativeNumsCount % 2 === 0) {
        console.log('Positive');
    } else {
        console.log('Negative');
    }
}

main(2, 3, -1);
main(-3, -4, 5);
main(-1, 5, -6);
main(2, -6, -5);
main(-7, 3, 5);
main(6, -7, 1);