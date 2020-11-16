function main(side1, side2, side3) {

   /* if (side1 < (side2 + side3) && side2 < (side1 + side3) && side3 < (side1 + side2)) {
        console.log('Valid Triangle');
    } else {
        console.log('Invalid Triangle');
    } */

    let validTriangle = true;

    if (side1 >= side2 + side3) {
        validTriangle = false;
    } else if (side2 >= side1 + side3) {
        validTriangle = false;
    } else if (side3 >= side2 + side1) {
        validTriangle = false;
    }

    if (validTriangle) {
        console.log('Valid Triangle');
    } else {
        console.log('Invalid Triangle');
    }
}

main(3, 4, 5);
main(8, 4, 3);
main(5, 12, 6);