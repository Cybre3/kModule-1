function main(monthString, numNights) {
    let studio = 0;
    let apt = 0;
    let studioDiscount = 0;
    let aptDiscount = 0;

    switch (monthString) {
        case 'May':
        case 'October':
            studio = 50 * numNights;
            apt = 65 * numNights;                
            break;
        case 'June':
        case 'September':
            studio = 75.20 * numNights;
            apt = 68.70 * numNights;                
            break;
        case 'July':
        case 'August':
            studio = 76 * numNights;
            apt = 77 * numNights;
            break;
        default:
            break;
    }

    if (numNights > 14) {
        aptDiscount = 0.10;
        if (monthString === 'May' || monthString === 'October') {
            studioDiscount = 0.30;
        } else if (monthString === 'June' || monthString === 'September') {
            studioDiscount = 0.20;
        }
    } else if (numNights > 7) {
        if (monthString === 'May' || monthString === 'October') {
            studioDiscount = 0.05;
        }
    } 

    let aPriceOfStay = apt - (apt * aptDiscount);
    let sPriceOfStay = studio - (studio * studioDiscount);

    console.log(`Apartment: ${aPriceOfStay.toFixed(2)} lv.`);
    console.log(`Studio: ${sPriceOfStay.toFixed(2)} lv.`);
}

main('May', 15);
main('June', 14);
main('August', 20);